import { motion } from 'framer-motion';
import { GraduationCap, BookOpen, CheckCircle2 } from 'lucide-react';
import SectionHeading from '../ui/SectionHeading';
import { EDUCATION } from '../../constants/data';
import { staggerContainer, itemVariants } from '../../animations/variants';

export default function Education() {
  return (
    <section id="education" className="section-pad">
      <div className="section-container">
        <SectionHeading
          eyebrow="Education"
          title={<>Academic background</>}
          subtitle="A strong foundation in computer science and ongoing learning in information technology."
        />

        <div className="mx-auto mt-14 max-w-3xl space-y-6">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-80px' }}
            className="space-y-6"
          >
            {EDUCATION.map((edu) => (
              <motion.div
                key={edu.id}
                variants={itemVariants}
                className="group relative overflow-hidden rounded-2xl glass-card p-6 transition-transform hover:-translate-y-1 sm:p-8"
              >
                <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
                  <div className="flex items-start gap-4">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-royal-500/15 to-cyan-400/15 text-royal-500">
                      <GraduationCap className="h-6 w-6" />
                    </div>
                    <div>
                      <h3 className="font-display text-lg font-semibold sm:text-xl">{edu.degree}</h3>
                      <p className="mt-1 text-sm font-medium text-royal-600 dark:text-royal-300">{edu.institution}</p>
                      <p className="mt-3 text-sm leading-relaxed text-[rgb(var(--text-soft))]">{edu.description}</p>
                    </div>
                  </div>
                  <div className="flex flex-col items-start gap-2 sm:items-end">
                    <span className="chip">{edu.period}</span>
                    <span
                      className={`inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-xs font-semibold ${
                        edu.status === 'pursuing'
                          ? 'bg-cyan-500/10 text-cyan-600 dark:text-cyan-300'
                          : 'bg-green-500/10 text-green-600 dark:text-green-300'
                      }`}
                    >
                      {edu.status === 'pursuing' ? (
                        <>
                          <BookOpen className="h-3 w-3" /> Pursuing
                        </>
                      ) : (
                        <>
                          <CheckCircle2 className="h-3 w-3" /> Completed
                        </>
                      )}
                    </span>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
