import { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, MapPin, Phone, Send, Loader2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';
import { z } from 'zod';
import { supabase } from '@/integrations/supabase/client';

const contactSchema = z.object({
  name: z.string().min(1),
  email: z.string().email(),
  subject: z.string().min(1),
  message: z.string().min(1),
});

const contactInfo = [
  {
    icon: Mail,
    label: 'Email',
    value: 'raihanaannisasabil045@gmail.com',
    href: 'mailto:raihanaannisasabil045@gmail.com',
  },
  {
    icon: Phone,
    label: 'Phone',
    value: '+62 852-1496-3850',
    href: 'tel:+6285214963850',
  },
  {
    icon: MapPin,
    label: 'Location',
    value: 'Banda Aceh, Indonesia',
    href: 'https://maps.app.goo.gl/cGv9vZUvsbUTFk596',
  },
];

export default function ContactSection() {
  const [form, setForm] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState({});
  const { toast } = useToast();

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrors({});

    const valid = contactSchema.safeParse(form);
    if (!valid.success) return;

    setLoading(true);

    try {
      await supabase.functions.invoke('send-contact-email', {
        body: form,
      });

      toast({
        title: 'Pesan terkirim ✨',
        description: 'Aku akan balas secepatnya ya 💙',
      });

      setForm({ name: '', email: '', subject: '', message: '' });
    } catch (err) {
      toast({
        title: 'Gagal mengirim',
        description: 'Coba lagi nanti ya',
        variant: 'destructive',
      });
    }

    setLoading(false);
  };

  return (
    <section
      id="contact"
      className="relative py-24 md:py-32 overflow-hidden bg-sky-50 dark:bg-[#050b1a]"
    >
      {/* 🌊 BACKGROUND */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute w-[700px] h-[700px] bg-sky-300/20 blur-[200px] top-[-200px] left-[-200px]" />
        <div className="absolute w-[600px] h-[600px] bg-cyan-300/15 blur-[180px] bottom-[-200px] right-[-200px]" />
      </div>

      {/* HEADER */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        className="text-center mb-14"
      >
        <h2 className="text-4xl md:text-5xl font-bold text-sky-900 dark:text-white">
          Let’s Talk 💬
        </h2>
        <p className="text-sky-600 dark:text-sky-300 mt-2">
          kalau ada ide, project, atau sekadar ngobrol ✨
        </p>
      </motion.div>

      <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-2 gap-10">

        {/* LEFT SIDE - CONTACT CARDS */}
        <div className="space-y-4">

          {contactInfo.map((item, i) => (
            <motion.a
              key={i}
              href={item.href}
              target="_blank"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: i * 0.1 }}
              className="
                flex items-center gap-4 p-4 rounded-xl
                bg-white/60 dark:bg-white/5
                backdrop-blur-xl
                border border-sky-200/30 dark:border-white/10
                hover:border-sky-400/40 transition
              "
            >
              <div className="p-3 rounded-lg bg-sky-400/10">
                <item.icon className="h-5 w-5 text-sky-500" />
              </div>

              <div>
                <p className="text-xs text-sky-500">{item.label}</p>
                <p className="font-medium text-sky-900 dark:text-white">
                  {item.value}
                </p>
              </div>
            </motion.a>
          ))}

        </div>

        {/* RIGHT SIDE - FORM */}
        <motion.form
          onSubmit={handleSubmit}
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          className="
            p-6 rounded-2xl
            bg-white/60 dark:bg-white/5
            backdrop-blur-xl
            border border-sky-200/30 dark:border-white/10
            space-y-4
          "
        >

          <Input
            name="name"
            placeholder="Nama kamu"
            value={form.name}
            onChange={handleChange}
          />

          <Input
            name="email"
            placeholder="Email"
            value={form.email}
            onChange={handleChange}
          />

          <Input
            name="subject"
            placeholder="Subjek"
            value={form.subject}
            onChange={handleChange}
          />

          <Textarea
            name="message"
            placeholder="Tulis pesan..."
            value={form.message}
            onChange={handleChange}
            rows={5}
          />

          <Button
            type="submit"
            disabled={loading}
            className="w-full bg-sky-500 hover:bg-sky-600 text-white rounded-full"
          >
            {loading ? (
              <Loader2 className="animate-spin h-4 w-4 mr-2" />
            ) : (
              <Send className="h-4 w-4 mr-2" />
            )}
            Kirim Pesan
          </Button>

        </motion.form>

      </div>
    </section>
  );
}