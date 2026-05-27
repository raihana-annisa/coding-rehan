import { useState, useRef, useLayoutEffect, useEffect } from 'react';
import { Moon, Sun } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

interface NavbarProps {
  isDark: boolean;
  toggleTheme: () => void;
}

export default function Navbar({ isDark, toggleTheme }: NavbarProps) {
  const [active, setActive] = useState('#home');
  const [position, setPosition] = useState({ left: 0, width: 0 });

  const itemRefs = useRef<(HTMLButtonElement | null)[]>([]);
  const targetRef = useRef<string | null>(null); // 🔥 target scroll

  const navItems = [
    { label: 'Home', href: '#home' },
    { label: 'About', href: '#about' },
    { label: 'Skills', href: '#skills' },
    { label: 'Projects', href: '#projects' },
    { label: 'Contact', href: '#contact' },
  ];

  const updatePosition = (index: number) => {
    const el = itemRefs.current[index];
    if (!el) return;

    setPosition({
      left: el.offsetLeft,
      width: el.offsetWidth,
    });
  };

  // posisi capsule
  useLayoutEffect(() => {
    const index = navItems.findIndex((i) => i.href === active);
    if (index !== -1) updatePosition(index);
  }, [active]);

  // resize
  useEffect(() => {
    const handleResize = () => {
      const index = navItems.findIndex((i) => i.href === active);
      if (index !== -1) updatePosition(index);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [active]);

  // 🔥 OBSERVER SUPER STABIL
  useEffect(() => {
    const observers: IntersectionObserver[] = [];

    navItems.forEach((item, index) => {
      const section = document.querySelector(item.href);
      if (!section) return;

      const observer = new IntersectionObserver(
        ([entry]) => {
          if (!entry.isIntersecting) return;

          // 🔥 kalau lagi scroll ke target, abaikan selain target
          if (targetRef.current && targetRef.current !== item.href) return;

          setActive(item.href);
          updatePosition(index);

          // kalau sudah sampai target → lepas lock
          if (targetRef.current === item.href) {
            targetRef.current = null;
          }
        },
        {
          rootMargin: '-40% 0px -40% 0px',
        }
      );

      observer.observe(section);
      observers.push(observer);
    });

    return () => observers.forEach((obs) => obs.disconnect());
  }, []);

  // klik navbar
  const scrollToSection = (href: string, index: number) => {
    const el = document.querySelector(href);
    if (!el) return;

    targetRef.current = href; // 🔥 set target

    setActive(href);
    updatePosition(index);

    el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="fixed top-6 left-1/2 -translate-x-1/2 z-50">

      {/* glow */}
      <div className="absolute inset-0 blur-2xl opacity-30 bg-sky-400/20 rounded-full pointer-events-none" />

      <div
        className={`relative flex items-center gap-2 px-3 py-2 rounded-full border backdrop-blur-xl transition ${
          isDark
            ? 'bg-neutral-900/80 border-white/10'
            : 'bg-white/80 border-black/10'
        } shadow-[0_0_25px_rgba(56,189,248,0.15)]`}
      >

        {/* NAV */}
        <div className="relative flex items-center">

          {/* capsule */}
          <motion.div
            className="absolute top-0 bottom-0 rounded-full"
            animate={{
              left: position.left,
              width: position.width,
            }}
            transition={{ type: 'spring', stiffness: 300, damping: 30 }}
          >
            <div
              className={`w-full h-full rounded-full ${
                isDark ? 'bg-sky-500/20' : 'bg-sky-100'
              } shadow-[0_0_20px_rgba(56,189,248,0.4),inset_0_0_10px_rgba(56,189,248,0.3)]`}
            />
          </motion.div>

          {navItems.map((item, index) => (
            <button
              key={item.href}
              ref={(el) => (itemRefs.current[index] = el)}
              onClick={() => scrollToSection(item.href, index)}
              className={`relative px-3 py-1.5 text-sm font-medium transition-all duration-300 ${
                active === item.href
                  ? 'text-sky-400 drop-shadow-[0_0_6px_rgba(56,189,248,0.8)]'
                  : isDark
                  ? 'text-white/70 hover:text-sky-300 hover:drop-shadow-[0_0_6px_rgba(56,189,248,0.6)]'
                  : 'text-black/70 hover:text-sky-500 hover:drop-shadow-[0_0_6px_rgba(56,189,248,0.6)]'
              }`}
            >
              {item.label}
            </button>
          ))}
        </div>

        {/* divider */}
        <div className={`w-px h-4 mx-1 ${
          isDark ? 'bg-white/10' : 'bg-black/10'
        }`} />

        {/* toggle */}
        <button
          onClick={toggleTheme}
          className={`p-1.5 rounded-full transition ${
            isDark ? 'hover:bg-white/10' : 'hover:bg-black/5'
          }`}
        >
          <AnimatePresence mode="wait">
            {isDark ? (
              <motion.div key="sun" initial={{ rotate: -90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: 90, opacity: 0 }}>
                <Sun className="w-4 h-4 text-sky-300" />
              </motion.div>
            ) : (
              <motion.div key="moon" initial={{ rotate: 90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: -90, opacity: 0 }}>
                <Moon className="w-4 h-4 text-sky-500" />
              </motion.div>
            )}
          </AnimatePresence>
        </button>
      </div>
    </div>
  );
}