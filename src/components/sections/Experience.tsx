import { motion } from 'framer-motion';
import { Briefcase, MapPin, CheckCircle2 } from 'lucide-react';
import SectionHeading from '../ui/SectionHeading';
import { EXPERIENCES } from '../../constants/data';
import { slideInLeft, itemVariants, staggerContainer } from '../../animations/variants';

export default function Experience() {
  return (
    <section id="experience" className="section-pad">
      <div className="section-container">
        <SectionHeading
          eyebrow="Experience"
          title={<>My professional journey</>}
          subtitle="Building real-world products and solving complex problems in a fast-paced environment."
        />

        <div className="relative mt-16">
          {/* Timeline line */}
          <div className="absolute left-4 top-0 h-full w-px bg-gradient-to-b from-gold-400 via-gold-500/50 to-transparent sm:left-1/2 sm:-translate-x-1/2" />

          <div className="space-y-12">
            {EXPERIENCES.map((exp, i) => (
              <motion.div
                key={exp.id}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: '-80px' }}
                variants={slideInLeft}
                className={`relative flex items-start gap-6 pl-14 sm:pl-0 ${
                  i % 2 === 0 ? 'sm:flex-row' : 'sm:flex-row-reverse'
                }`}
              >
                {/* Glowing Dot */}
                <div className="absolute left-4 top-3 z-10 flex h-9 w-9 -translate-x-1/2 items-center justify-center rounded-full border-2 border-gold-400 bg-[rgb(var(--bg))] shadow-glow-gold sm:left-1/2">
                  <Briefcase className="h-4 w-4 text-gold-400" />
                </div>

                {/* Card */}
                <motion.div
                  variants={itemVariants}
                  className={`group rounded-2xl glass-card border border-gold-400/20 p-6 sm:p-7 transition-all duration-300 hover:border-gold-400/50 hover:shadow-soft-lg sm:w-[calc(50%-2.5rem)] ${
                    i % 2 === 0 ? 'sm:mr-auto' : 'sm:ml-auto'
                  }`}
                >
                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <h3 className="font-display text-xl font-bold tracking-tight text-[rgb(var(--text))] group-hover:text-gold-300 transition-colors">{exp.role}</h3>
                    <span className="badge-app font-semibold">{exp.period}</span>
                  </div>
                  <div className="mt-1.5 flex flex-wrap items-center gap-2 text-sm font-semibold text-gold-400 dark:text-gold-300">
                    <span>{exp.company}</span>
                    <span className="text-[rgb(var(--text-soft))]">·</span>
                    <span className="flex items-center gap-1 text-[rgb(var(--text-soft))] font-normal">
                      <MapPin className="h-3.5 w-3.5 text-gold-400" /> {exp.location}
                    </span>
                  </div>
                  <p className="mt-3.5 text-sm leading-relaxed text-[rgb(var(--text-soft))]">{exp.description}</p>

                  <motion.ul
                    variants={staggerContainer}
                    className="mt-4 space-y-2.5"
                  >
                    {exp.responsibilities.map((r, ri) => (
                      <motion.li
                        key={ri}
                        variants={itemVariants}
                        className="flex items-start gap-2.5 text-sm text-[rgb(var(--text-soft))]"
                      >
                        <CheckCircle2 className="mt-1 h-4 w-4 shrink-0 text-emerald-500" />
                        <span className="leading-relaxed">{r}</span>
                      </motion.li>
                    ))}
                  </motion.ul>

                  <div className="mt-6 flex flex-wrap gap-1.5 pt-4 border-t border-[rgb(var(--border))]">
                    {exp.tech.map((t) => (
                      <span key={t} className="chip text-[11px] font-medium">{t}</span>
                    ))}
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
