import { motion } from 'framer-motion';
import { Briefcase, FolderGit2, Award, GraduationCap, MapPin, Download } from 'lucide-react';
import SectionHeading from '../components/ui/SectionHeading';
import Reveal from '../components/ui/Reveal';
import { PERSON, ABOUT_CARDS, EDUCATION } from '../constants/data';
import { staggerContainer, itemVariants } from '../animations/variants';

const ICONS: Record<string, React.ComponentType<{ className?: string }>> = {
  Briefcase,
  FolderGit2,
  Award,
  GraduationCap,
};

export default function About() {
  return (
    <div className="section-pad">
      <div className="section-container">
        <SectionHeading
          eyebrow="About Me"
          title={<>Get to know me better</>}
          subtitle="A passionate developer dedicated to crafting exceptional digital experiences."
        />

        <div className="mt-16 grid items-center gap-12 lg:grid-cols-5">
          {/* Photo placeholder */}
          <Reveal className="lg:col-span-2" y={-20}>
            <div className="group relative mx-auto max-w-sm">
              <div className="absolute -inset-1.5 rounded-3xl bg-gradient-to-br from-royal-500/30 via-purple-500/20 to-indigo-500/30 opacity-70 blur-xl transition-opacity group-hover:opacity-100" />
              <div className="relative aspect-[4/5] overflow-hidden rounded-3xl glass-card border border-[rgb(var(--glass-border))] shadow-soft-lg">
                <div className="flex h-full flex-col items-center justify-center gap-4 bg-gradient-to-br from-royal-500/10 via-purple-500/5 to-transparent p-6 text-center">
                  <div className="relative flex h-28 w-28 items-center justify-center rounded-2xl bg-gradient-to-br from-royal-600 via-purple-600 to-indigo-600 font-display text-5xl font-extrabold text-white shadow-glow">
                    ST
                    <span className="absolute -bottom-1 -right-1 flex h-5 w-5 items-center justify-center rounded-full bg-emerald-500 border-2 border-[rgb(var(--bg))]">
                      <span className="h-2 w-2 rounded-full bg-white" />
                    </span>
                  </div>
                  <div>
                    <p className="font-display text-xl font-bold text-[rgb(var(--text))]">Shubham Taware</p>
                    <p className="mt-1 text-sm font-semibold text-royal-600 dark:text-royal-300">Frontend & Mobile Engineer</p>
                  </div>
                  <span className="badge-app mt-1">
                    <MapPin className="h-3.5 w-3.5 text-royal-500" /> {PERSON.location}
                  </span>
                </div>
              </div>
            </div>
          </Reveal>

          <div className="lg:col-span-3">
            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-80px' }}
              className="space-y-4"
            >
              {PERSON.about.map((para, i) => (
                <motion.p
                  key={i}
                  variants={itemVariants}
                  className="text-base leading-relaxed text-[rgb(var(--text-soft))] sm:text-lg"
                >
                  {para}
                </motion.p>
              ))}
            </motion.div>

            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-60px' }}
              className="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-4"
            >
              {ABOUT_CARDS.map((card) => {
                const Icon = ICONS[card.icon] ?? Briefcase;
                return (
                  <motion.div
                    key={card.label}
                    variants={itemVariants}
                    className="group rounded-2xl glass-card border border-[rgb(var(--glass-border))] p-5 text-center transition-all duration-300 hover:border-royal-500/50 hover:shadow-soft hover:-translate-y-1"
                  >
                    <div className="mx-auto mb-3 flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-royal-500/15 to-purple-500/15 text-royal-600 dark:text-royal-300 transition-transform group-hover:scale-110">
                      <Icon className="h-5 w-5" />
                    </div>
                    <p className="font-display text-lg font-bold text-[rgb(var(--text))]">{card.value}</p>
                    <p className="mt-0.5 text-xs font-semibold text-[rgb(var(--text-soft))]">{card.label}</p>
                  </motion.div>
                );
              })}
            </motion.div>

            <Reveal delay={0.2} className="mt-7">
              <a href={PERSON.resumeUrl} className="btn-primary">
                <Download className="h-4 w-4" /> Download Full Resume
              </a>
            </Reveal>
          </div>
        </div>

        {/* Education section */}
        <div className="mt-20">
          <SectionHeading
            eyebrow="Education"
            title={<>Academic background</>}
            center={false}
          />
          <div className="mx-auto mt-10 max-w-3xl space-y-6">
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
                  className="group relative overflow-hidden rounded-2xl glass-card border border-[rgb(var(--glass-border))] p-6 sm:p-8 transition-all duration-300 hover:border-royal-500/50 hover:shadow-soft-lg hover:-translate-y-1"
                >
                  <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
                    <div className="flex items-start gap-4">
                      <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-royal-500/15 via-purple-500/15 to-indigo-500/15 text-royal-600 dark:text-royal-300 border border-royal-500/20">
                        <GraduationCap className="h-6 w-6" />
                      </div>
                      <div>
                        <h3 className="font-display text-lg font-bold sm:text-xl text-[rgb(var(--text))]">{edu.degree}</h3>
                        <p className="mt-1 text-sm font-semibold text-royal-600 dark:text-royal-300">{edu.institution}</p>
                        <p className="mt-3 text-sm leading-relaxed text-[rgb(var(--text-soft))]">{edu.description}</p>
                      </div>
                    </div>
                    <div className="flex flex-col items-start gap-2 sm:items-end">
                      <span className="chip text-xs font-semibold">{edu.period}</span>
                      <span
                        className={`inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-xs font-bold ${
                          edu.status === 'pursuing'
                            ? 'bg-royal-500/10 text-royal-600 dark:text-royal-300 border border-royal-500/20'
                            : 'bg-emerald-500/10 text-emerald-600 dark:text-emerald-300 border border-emerald-500/20'
                        }`}
                      >
                        {edu.status === 'pursuing' ? '⚡ Pursuing' : '✓ Completed'}
                      </span>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}
