import { motion } from 'framer-motion';
import { ArrowDown, Github, Youtube } from 'lucide-react';
import { Button } from '@/components/ui/button';
import ThreeScene from './ThreeScene';

export default function HeroSection() {
  const scrollToAbout = () => {
    const el = document.querySelector('#about');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden
                 bg-white dark:bg-black transition-colors"
    >
      {/* BACKGROUND */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-white dark:bg-black" />

        <div className="absolute right-[-150px] top-[-80px] w-[400px] h-[400px]
                        bg-sky-400/20 blur-[120px] rounded-full" />

        <div className="absolute left-[-150px] bottom-[-80px] w-[300px] h-[300px]
                        bg-sky-500/10 blur-[100px] rounded-full" />
      </div>

      <ThreeScene />

      <div className="container mx-auto px-6 relative z-10 flex justify-center">
        <div className="flex flex-col md:flex-row items-center justify-center gap-6 md:gap-10 max-w-4xl w-full">

          {/* FOTO */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex justify-center"
          >
            <div className="relative group">

              {/* glow biru */}
              <div className="absolute inset-0 rounded-[2rem] blur-2xl
                              bg-sky-400/30 opacity-30 group-hover:opacity-50 transition" />

              <div className="relative w-[240px] md:w-[280px] lg:w-[340px] aspect-[3/4]">
                <img
                  src="/fotoenaw1.jpg"
                  alt="Raihana"
                  className="w-full h-full object-cover rounded-[2rem]
                             border border-sky-300/30 shadow-xl
                             hover:scale-[1.03] transition duration-500"
                />
              </div>
            </div>
          </motion.div>

          {/* TEXT */}
          <div className="text-center md:text-left max-w-md">

            <motion.span
              className="inline-block px-4 py-2 rounded-full text-sm font-medium
                         bg-sky-500/10 text-sky-500 mb-5"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
            >
              Welcome To My Portfolio 🌊
            </motion.span>

            <motion.h1
              className="text-4xl md:text-6xl font-bold mb-5 leading-tight
                         text-black dark:text-white"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
            >
              Hello, I'M <br />
              <span className="text-black dark:text-white">
                Raihana
              </span>{' '}
              <span className="text-sky-500">Annisa Sabil</span> 😊
            </motion.h1>

            <motion.p
              className="text-lg md:text-xl mb-6
                         text-black/70 dark:text-white/70"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
            >
              Aku pelajar yang baru terjun ke dunia teknologi 💻✨  
              khususnya <span className="text-sky-500">web development</span>.
            </motion.p>

            {/* BUTTON */}
            <motion.div
              className="flex flex-col sm:flex-row gap-3"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
            >
              <Button
                size="lg"
                className="rounded-full px-8 bg-sky-500 hover:bg-sky-600 text-white"
                onClick={() => {
                  const el = document.querySelector('#projects');
                  if (el) el.scrollIntoView({ behavior: 'smooth' });
                }}
              >
                Projects 🚀
              </Button>

              <Button
                variant="outline"
                size="lg"
                className="rounded-full px-8
                           border-sky-300 text-sky-500
                           hover:bg-sky-500/10"
                onClick={() => {
                  const el = document.querySelector('#contact');
                  if (el) el.scrollIntoView({ behavior: 'smooth' });
                }}
              >
                Contact 💌
              </Button>
            </motion.div>

            {/* SOCIAL */}
            <motion.div
              className="flex gap-3 mt-6 justify-center md:justify-start"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
            >
              {[
                { icon: Github, href: 'https://github.com/raihana-annisa/coding-rehan.git' },
                { icon: Youtube, href: 'https://youtube.com/' },
              ].map((social, i) => (
                <motion.a
                  key={i}
                  href={social.href}
                  target="_blank"
                  className="p-2.5 rounded-full border
                             border-black/10 dark:border-white/10
                             hover:border-sky-400 transition"
                  whileHover={{ scale: 1.1 }}
                >
                  <social.icon className="h-4 w-4 text-black/70 dark:text-white/70 hover:text-sky-500" />
                </motion.a>
              ))}
            </motion.div>

          </div>
        </div>
      </div>

      {/* SCROLL */}
      <motion.button
        onClick={scrollToAbout}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 p-3 rounded-full
                   bg-white dark:bg-black border border-black/10 dark:border-white/10
                   hover:border-sky-400"
        whileHover={{ scale: 1.1 }}
      >
        <ArrowDown className="h-5 w-5 text-sky-500" />
      </motion.button>
    </section>
  );
}