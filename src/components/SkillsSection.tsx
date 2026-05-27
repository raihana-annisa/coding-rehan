import { motion } from 'framer-motion';

const subjects = {
  favorit: [
    { name: 'Informatika 💻✨', level: 93 },
    { name: 'Matematika ➗✨', level: 90 },
    { name: 'Bahasa Inggris ✨', level: 85 },
    { name: 'Seni Budaya 🎨✨', level: 87 },
    { name: 'Agama 📿✨', level: 94 },
  ],

  utama: [
    { name: 'Matematika ➗', level: 90 },
    { name: 'Bahasa Indonesia 📖', level: 95 },
    { name: 'Bahasa Inggris ', level: 85 },
    { name: 'IPA 🔬', level: 88 },
    { name: 'IPS 🌍', level: 82 },
  ],

  tambahan: [
    { name: 'PPKn 🇮🇩', level: 92 },
    { name: 'PJOK 🏃‍♀️', level: 80 },
    { name: 'Prakarya 🧵', level: 84 },
    { name: 'TIK 💻', level: 89 },
    { name: 'Sejarah 📜', level: 86 },
  ],
};

function MapelBar({ name, level }) {
  return (
    <div className="space-y-1">
      <div className="flex justify-between text-sm">
        <span className="text-sky-800 dark:text-sky-200">{name}</span>
        <span className="text-sky-500">{level}% 🌤️</span>
      </div>

      <div className="h-2 rounded-full bg-sky-100 dark:bg-[#0b1224] overflow-hidden">
        <div
          className="h-full bg-gradient-to-r from-sky-400 to-sky-500 rounded-full transition-all"
          style={{ width: `${level}%` }}
        />
      </div>
    </div>
  );
}

function Box({ title, emoji, children }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="p-5 rounded-2xl border border-sky-200 dark:border-sky-800
                 bg-white/70 dark:bg-[#0b1224] shadow-md hover:shadow-lg transition"
    >
      <h3 className="text-lg font-semibold mb-4 text-sky-700 dark:text-sky-200">
        {emoji} {title}
      </h3>

      <div className="space-y-4">{children}</div>
    </motion.div>
  );
}

export default function MapelSection() {
  return (
    <section
      id="skills"
      className="py-16 md:py-24 bg-sky-50 dark:bg-[#050b1a] text-sky-900 dark:text-sky-100 transition-colors"
    >
      <div className="container mx-auto px-4 max-w-6xl">

        {/* HEADER */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <span className="text-sky-500 text-sm">
            📚 My Subjects
          </span>

          <h2 className="text-3xl md:text-4xl font-bold mt-2 text-sky-700 dark:text-sky-200">
            Favourite Subjects ✨
          </h2>

          <div className="w-16 h-1 bg-sky-400 mx-auto mt-3 rounded-full" />
        </motion.div>

        {/* 3 LAYER BOX */}
        <div className="grid md:grid-cols-3 gap-6">

          <Box title="Yang Paling Aku Suka" emoji="🌟">
            {subjects.favorit.map((item) => (
              <MapelBar key={item.name} {...item} />
            ))}
          </Box>

          <Box title="Pelajaran Utama Sekolah" emoji="📘">
            {subjects.utama.map((item) => (
              <MapelBar key={item.name} {...item} />
            ))}
          </Box>

          <Box title="Pelajaran Tambahan" emoji="📙">
            {subjects.tambahan.map((item) => (
              <MapelBar key={item.name} {...item} />
            ))}
          </Box>

        </div>
      </div>
    </section>
  );
}