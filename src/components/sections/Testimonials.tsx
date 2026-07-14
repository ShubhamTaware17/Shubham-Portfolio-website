import { motion } from 'framer-motion';
import { Star, Quote } from 'lucide-react';
import SectionHeading from '../ui/SectionHeading';
import { TESTIMONIALS } from '../../constants/data';
import { staggerContainer, itemVariants } from '../../animations/variants';

export default function Testimonials() {
  return (
    <section id="testimonials" className="section-pad">
      <div className="section-container">
        <SectionHeading
          eyebrow="Testimonials"
          title={<>What people say</>}
          subtitle="Kind words from colleagues and clients I've had the pleasure of working with."
        />

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
          className="mt-14 grid gap-6 md:grid-cols-2"
        >
          {TESTIMONIALS.map((t) => (
            <motion.div
              key={t.id}
              variants={itemVariants}
              className="group relative overflow-hidden rounded-2xl glass-card p-6 transition-transform hover:-translate-y-1 sm:p-8"
            >
              <Quote className="absolute right-4 top-4 h-10 w-10 text-royal-500/10" />

              <div className="flex gap-1">
                {Array.from({ length: t.rating }).map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                ))}
              </div>

              <p className="mt-4 text-sm leading-relaxed text-[rgb(var(--text))] sm:text-base">
                "{t.content}"
              </p>

              <div className="mt-6 flex items-center gap-3">
                <img
                  src={t.avatar}
                  alt={t.name}
                  loading="lazy"
                  className="h-11 w-11 rounded-full object-cover ring-2 ring-royal-500/20"
                />
                <div>
                  <p className="font-display text-sm font-semibold">{t.name}</p>
                  <p className="text-xs text-[rgb(var(--text-soft))]">
                    {t.role} · {t.company}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
