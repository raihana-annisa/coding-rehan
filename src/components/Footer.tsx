import { motion } from 'framer-motion';
import { Github, Youtube, Heart } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      icon: Github,
      href: 'https://github.com/raihana-annisa/coding-rehan.git',
      label: 'GitHub',
    },
    {
      icon: Youtube,
      href: 'https://www.youtube.com/',
      label: 'YouTube',
    },
  ];

  return (
    <footer
      className="
        relative overflow-hidden
        py-10 md:py-14
        bg-sky-50 dark:bg-[#050b1a]
        border-t border-sky-200/40 dark:border-white/10
        text-sky-900 dark:text-sky-100
      "
    >
      {/* 🌊 background glow */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute w-[500px] h-[500px] bg-sky-300/20 blur-[140px] -top-40 -left-40" />
        <div className="absolute w-[400px] h-[400px] bg-cyan-300/10 blur-[140px] bottom-[-150px] right-[-120px]" />
      </div>

      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">

          {/* LEFT TEXT */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="
              flex items-center gap-2 text-sm md:text-base
              text-sky-700 dark:text-sky-200
            "
          >
            <span>© {currentYear}</span>

            <span className="flex items-center gap-1">
              dibuat dengan
              <Heart className="h-4 w-4 text-pink-500 fill-pink-500 animate-pulse" />
              oleh
            </span>

            <span className="font-semibold text-sky-500">
              Raihana Annisa 💙
            </span>
          </motion.div>

          {/* SOCIAL */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex items-center gap-3"
          >
            {socialLinks.map((social, index) => (
              <motion.a
                key={social.label}
                href={social.href}
                target="_blank"
                aria-label={social.label}
                whileHover={{ scale: 1.15, rotate: 5 }}
                transition={{ type: 'spring', stiffness: 300 }}
                className="
                  relative p-3 rounded-full
                  bg-white/70 dark:bg-white/5
                  backdrop-blur-md
                  border border-sky-200/40 dark:border-white/10
                  text-sky-600 dark:text-sky-200
                  hover:text-sky-500
                  transition
                "
              >
                <social.icon className="h-5 w-5" />

                {/* glow hover kecil */}
                <div className="absolute inset-0 rounded-full opacity-0 hover:opacity-100 bg-sky-400/10 blur-md transition" />
              </motion.a>
            ))}
          </motion.div>
        </div>

        {/* bottom line text */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="
            text-center mt-8 text-xs md:text-sm
            text-sky-600/70 dark:text-sky-300/60
          "
        >
          “pelan-pelan jadi lebih baik setiap hari ✨”
        </motion.p>
      </div>
    </footer>
  );
}