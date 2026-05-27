import { motion, AnimatePresence } from 'framer-motion';
import { Code2, Heart, Cake, GraduationCap } from 'lucide-react';
import { useState } from 'react';

export default function AboutSection() {
  const [open, setOpen] = useState(0);

  const bioAccordion = [
    {
      title: '👩‍💻 Siapa Aku Sebenarnya',
      content:
        'Halo! Aku Raihana Annisa Sabil, pelajar dari MAN 1 Banda Aceh. Aku lagi suka banget belajar dunia web development 💻✨ dan selalu penasaran sama hal-hal baru di dunia teknologi.',
    },
    {
      title: '🍰 Hal yang Aku Suka',
      content:
        'Aku suka baking 🍪🍰 sejak kecil. Buat aku, bikin kue itu bukan cuma hobi tapi juga cara buat healing dan bikin hati lebih tenang 😄',
    },
    {
      title: '🎯 Impian Aku',
      content:
        'Aku bercita-cita menjadi seorang AKPOL 👮‍♀️ yang bisa membantu banyak orang, berguna untuk masyarakat, dan memberikan dampak positif 💙',
    },
  ];

  const biographyCards = [
    { icon: Code2, text: 'Ngoding & Belajar 💻' },
    { icon: Heart, text: 'Suka Hal Baru ✨' },
    { icon: Cake, text: 'Baking & Kreatif 🍰' },
    { icon: GraduationCap, text: 'Pelajar MAN 1 🎓' },
  ];

  return (
    <section
      id="about"
      className="py-16 md:py-24 bg-sky-50 dark:bg-[#050b1a] text-sky-900 dark:text-sky-100 transition-colors duration-500"
    >
      <div className="container mx-auto px-4 max-w-5xl">

        {/* HEADER */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <span className="text-sky-500 dark:text-sky-300 text-sm">
            About Me 🌊
          </span>

          <h2 className="text-2xl md:text-4xl font-bold mt-2 text-sky-700 dark:text-sky-200">
            Know Me Better ✨
          </h2>

          <div className="w-16 h-1 bg-sky-400 dark:bg-sky-500 mx-auto mt-3 rounded-full" />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-10 items-center">

          {/* FOTO */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className="flex justify-center">
              <div className="relative group">

                {/* glow */}
                <div className="absolute inset-0 rounded-2xl blur-xl bg-sky-400/15 dark:bg-sky-500/10 group-hover:blur-2xl transition" />

                {/* FOTO SIZE FIX */}
                <div className="w-[260px] md:w-[320px] lg:w-[360px] aspect-square rounded-2xl overflow-hidden border border-sky-200 dark:border-sky-800 shadow-lg relative">
                  <img
                    src="/fotoenaw3.jpg"
                    alt="profile"
                    className="w-full h-full object-cover hover:scale-105 transition duration-500"
                  />
                </div>

              </div>
            </div>
          </motion.div>

          {/* CONTENT */}
          <div className="space-y-5">

            <h3 className="text-lg md:text-xl font-semibold text-sky-700 dark:text-sky-200">
              ✨ Cerita Singkat Tentang Aku
            </h3>

            {/* ACCORDION */}
            <div className="space-y-2">
              {bioAccordion.map((item, index) => (
                <div
                  key={index}
                  className="rounded-lg border border-sky-100 dark:border-sky-800 bg-white dark:bg-[#0b1224] overflow-hidden"
                >
                  <button
                    onClick={() => setOpen(open === index ? -1 : index)}
                    className="w-full flex justify-between items-center px-4 py-3 text-sm font-medium text-sky-700 dark:text-sky-200 hover:bg-sky-50 dark:hover:bg-[#101a33] transition"
                  >
                    {item.title}
                    <span className="text-sky-500">
                      {open === index ? '−' : '+'}
                    </span>
                  </button>

                  <AnimatePresence initial={false}>
                    {open === index && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="px-4 pb-3 text-xs md:text-sm text-sky-600 dark:text-sky-300 leading-relaxed"
                      >
                        {item.content}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}
            </div>

            {/* BIO CARDS */}
            <div className="grid grid-cols-2 gap-3 pt-4">
              {biographyCards.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="p-3 rounded-lg text-center bg-sky-100 dark:bg-[#0b1224] border border-sky-200 dark:border-sky-800 hover:scale-[1.03] transition"
                >
                  <item.icon className="h-5 w-5 mx-auto mb-1 text-sky-500 dark:text-sky-300" />
                  <p className="text-xs md:text-sm text-sky-700 dark:text-sky-200">
                    {item.text}
                  </p>
                </motion.div>
              ))}
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}