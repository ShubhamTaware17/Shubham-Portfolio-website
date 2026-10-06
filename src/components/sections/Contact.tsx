import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Send, User, Mail, MessageSquare, CheckCircle2, Loader2 } from 'lucide-react';
import SectionHeading from '../ui/SectionHeading';
import { PERSON } from '../../constants/data';
import { sendContactEmail } from '../../services/emailjs';

type Status = 'idle' | 'loading' | 'success' | 'error';

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' });
  const [status, setStatus] = useState<Status>('idle');
  const [error, setError] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');
    setError('');

    try {
      await sendContactEmail(form);
      setStatus('success');
      setForm({ name: '', email: '', subject: '', message: '' });
      setTimeout(() => setStatus('idle'), 5000);
    } catch (err) {
      setStatus('error');
      setError(err instanceof Error ? err.message : 'Something went wrong. Please try again.');
      setTimeout(() => setStatus('idle'), 5000);
    }
  };

  const fields = [
    { name: 'name', label: 'Name', type: 'text', icon: User, placeholder: 'Your name' },
    { name: 'email', label: 'Email', type: 'email', icon: Mail, placeholder: 'you@example.com' },
    { name: 'subject', label: 'Subject', type: 'text', icon: MessageSquare, placeholder: 'Project inquiry' },
  ] as const;

  return (
    <section id="contact" className="section-pad">
      <div className="section-container">
        <SectionHeading
          eyebrow="Contact"
          title={<>Let's build something great</>}
          subtitle="Have a project in mind or just want to say hi? I'd love to hear from you."
        />

        <div className="mx-auto mt-14 max-w-2xl">
          <form onSubmit={handleSubmit} className="rounded-2xl glass-card p-6 sm:p-8">
            <div className="grid gap-5 sm:grid-cols-2">
              {fields.map((field) => (
                <div key={field.name} className={field.name === 'subject' ? 'sm:col-span-2' : ''}>
                  <label htmlFor={field.name} className="mb-1.5 block text-sm font-medium text-[rgb(var(--text-soft))]">
                    {field.label}
                  </label>
                  <div className="relative">
                    <field.icon className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-[rgb(var(--text-soft))]" />
                    <input
                      id={field.name}
                      name={field.name}
                      type={field.type}
                      required
                      value={form[field.name]}
                      onChange={handleChange}
                      placeholder={field.placeholder}
                      className="w-full rounded-xl border border-[rgb(var(--border))] bg-[rgb(var(--bg-soft))] py-3 pl-10 pr-4 text-sm outline-none transition-colors focus:border-gold-400 focus:ring-2 focus:ring-gold-400/20"
                    />
                  </div>
                </div>
              ))}

              <div className="sm:col-span-2">
                <label htmlFor="message" className="mb-1.5 block text-sm font-medium text-[rgb(var(--text-soft))]">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={5}
                  value={form.message}
                  onChange={handleChange}
                  placeholder="Tell me about your project..."
                  className="w-full resize-none rounded-xl border border-[rgb(var(--border))] bg-[rgb(var(--bg-soft))] px-4 py-3 text-sm outline-none transition-colors focus:border-gold-400 focus:ring-2 focus:ring-gold-400/20"
                />
              </div>
            </div>

            <button
              type="submit"
              disabled={status === 'loading'}
              className="mt-6 flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-[#E5C9A6] via-[#DFBE8D] to-[#C69F67] py-3.5 text-sm font-bold text-[#0A0908] shadow-glow-gold transition-all hover:shadow-glow-gold hover:brightness-105 disabled:opacity-70"
            >
              {status === 'loading' && <Loader2 className="h-4 w-4 animate-spin" />}
              {status === 'success' && <CheckCircle2 className="h-4 w-4" />}
              {status === 'idle' && <Send className="h-4 w-4" />}
              {status === 'loading' ? 'Sending...' : status === 'success' ? 'Sent!' : 'Send Message'}
            </button>

            <AnimatePresence>
              {status === 'success' && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  className="mt-4 flex items-center gap-2 rounded-xl bg-green-500/10 px-4 py-3 text-sm font-medium text-green-600 dark:text-green-300"
                >
                  <CheckCircle2 className="h-4 w-4" />
                  Thank you! Your message has been sent successfully.
                </motion.div>
              )}
              {status === 'error' && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  className="mt-4 rounded-xl bg-red-500/10 px-4 py-3 text-sm font-medium text-red-600 dark:text-red-300"
                >
                  {error}
                </motion.div>
              )}
            </AnimatePresence>

            <p className="mt-4 text-center text-xs text-[rgb(var(--text-soft))]">
              Or reach me directly at{' '}
              <a href={`mailto:${PERSON.email}`} className="font-medium text-royal-500 hover:underline">
                {PERSON.email}
              </a>
            </p>
          </form>
        </div>
      </div>
    </section>
  );
}
