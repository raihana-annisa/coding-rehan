import { motion } from 'framer-motion';
import { Award, ExternalLink, Calendar } from 'lucide-react';
import { Button } from '@/components/ui/button';

const certificates = [
  {
    title: 'AWS Certified Solutions Architect',
    issuer: 'Amazon Web Services',
    date: '2024',
    credentialId: 'AWS-SAA-123456',
    image: '🏆',
  },
  {
    title: 'Google Cloud Developer',
    issuer: 'Google Cloud',
    date: '2023',
    credentialId: 'GCP-PCD-789012',
    image: '☁️',
  },
  {
    title: 'Meta Front-End Developer',
    issuer: 'Meta',
    date: '2023',
    credentialId: 'META-FE-345678',
    image: '⚛️',
  },
  {
    title: 'MongoDB Developer',
    issuer: 'MongoDB University',
    date: '2023',
    credentialId: 'MDB-DEV-901234',
    image: '🍃',
  },
  {
    title: 'Kubernetes Admin',
    issuer: 'CNCF',
    date: '2022',
    credentialId: 'CKA-567890',
    image: '⚙️',
  },
  {
    title: 'Scrum Master I',
    issuer: 'Scrum.org',
    date: '2022',
    credentialId: 'PSM-I-234567',
    image: '📋',
  },
];

export default function CertificatesSection() {
  return (
    <section
      className="
        relative py-24 md:py-32 overflow-hidden
        bg-sky-50 dark:bg-[#050b1a]
        text-sky-900 dark:text-sky-100
      "
    >

      {/* 🌊 BACKGROUND (SAMA VIBE CONTACT) */}
      <div className="absolute inset-0 -z-10">

        {/* soft sky glow */}
        <div className="absolute w-[700px] h-[700px] bg-sky-300/20 blur-[160px] top-[-200px] left-[-200px]" />

        {/* cyan glow */}
        <div className="absolute w-[600px] h-[600px] bg-cyan-300/20 blur-[160px] bottom-[-250px] right-[-200px]" />

        {/* center soft light */}
        <div className="absolute w-[500px] h-[500px] bg-blue-300/10 blur-[140px] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />

      </div>

      <div className="container mx-auto px-4">

        {/* HEADER */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <span className="text-sky-500 dark:text-sky-300 tracking-widest">
            ✦ CERTIFICATES ✦
          </span>

          <h2 className="text-3xl md:text-5xl font-bold mt-2">
            Sertifikat & Pencapaian 🎓
          </h2>

          <p className="text-sky-600/70 dark:text-sky-200/70 mt-2 text-sm">
            sertifikat yang aku dapatkan 🚀
          </p>

          <div className="w-24 h-1 mx-auto mt-4 bg-gradient-to-r from-sky-400 to-cyan-400 rounded-full" />
        </motion.div>

        {/* GRID */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">

          {certificates.map((cert, index) => (
            <motion.div
              key={cert.title}
              initial={{ opacity: 0, y: 30, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              className="group relative"
            >

              {/* glow */}
              <div className="absolute inset-0 rounded-2xl bg-sky-400/10 blur-2xl opacity-0 group-hover:opacity-70 transition" />

              {/* CARD */}
              <div
                className="
                  relative p-6 rounded-2xl
                  bg-white/80 dark:bg-white/5
                  backdrop-blur-xl
                  border border-sky-200/40 dark:border-white/10
                  hover:-translate-y-2 transition duration-500
                "
              >

                {/* ICON */}
                <div className="text-3xl mb-3">
                  {cert.image}
                </div>

                {/* TITLE */}
                <div className="flex items-center gap-2">
                  <Award className="h-5 w-5 text-sky-500" />
                  <h3 className="font-bold">
                    {cert.title}
                  </h3>
                </div>

                {/* ISSUER */}
                <p className="text-sm text-sky-600/70 dark:text-sky-200/70 mt-2">
                  {cert.issuer}
                </p>

                {/* DATE */}
                <div className="flex items-center gap-2 mt-2 text-sm text-sky-500/70">
                  <Calendar className="h-4 w-4 text-sky-400" />
                  {cert.date}
                </div>

                {/* ID */}
                <p className="text-xs mt-3 font-mono text-sky-500/50">
                  ID: {cert.credentialId}
                </p>

                {/* BUTTON */}
                <Button
                  size="sm"
                  className="
                    mt-4 rounded-full
                    bg-sky-500 hover:bg-sky-600
                    text-white
                  "
                >
                  <ExternalLink className="h-4 w-4 mr-1" />
                  Verifikasi
                </Button>

              </div>
            </motion.div>
          ))}

        </div>
      </div>
    </section>
  );
}