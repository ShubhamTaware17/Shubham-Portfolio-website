import { motion } from 'framer-motion';
import { Briefcase, FolderGit2, Award, GraduationCap, MapPin } from 'lucide-react';
import SectionHeading from '../ui/SectionHeading';
import Reveal from '../ui/Reveal';
import { PERSON, ABOUT_CARDS } from '../../constants/data';
import { staggerContainer, itemVariants } from '../../animations/variants';

const ICONS: Record<string, React.ComponentType<{ className?: string }>> = {
  Briefcase,
  FolderGit2,
  Award,
  GraduationCap,
};

export default function About() {
  return (
    <section id="about" className="section-pad">
      <div className="section-container">
        <SectionHeading
          eyebrow="About Me"
          title={<>Get to know me better</>}
          subtitle="A passionate developer dedicated to crafting exceptional digital experiences."
        />

        <div className="mt-16 grid items-center gap-12 lg:grid-cols-5">
          {/* Photo placeholder / Avatar badge */}
          <Reveal className="lg:col-span-2" y={-20}>
            <div className="group relative mx-auto max-w-sm">
              <div className="absolute -inset-1.5 rounded-3xl bg-gradient-to-br from-gold-400/30 via-gold-500/20 to-gold-600/30 opacity-70 blur-xl transition-opacity group-hover:opacity-100" />
              <div className="relative aspect-[4/5] overflow-hidden rounded-3xl glass-card border border-gold-400/25 shadow-soft-lg">
                <div className="flex h-full flex-col items-center justify-center gap-4 bg-gradient-to-br from-gold-500/10 via-gold-500/5 to-transparent p-6 text-center">
                  <div className="relative flex h-28 w-28 items-center justify-center rounded-2xl bg-gradient-to-br from-[#E5C9A6] via-[#DFBE8D] to-[#C69F67] font-display text-5xl font-extrabold text-[#0A0908] shadow-glow-gold">
                    ST
                    <span className="absolute -bottom-1 -right-1 flex h-5 w-5 items-center justify-center rounded-full bg-emerald-400 border-2 border-[rgb(var(--bg))]">
                      <span className="h-2 w-2 rounded-full bg-white" />
                    </span>
                  </div>
                  <div>
                    <p className="font-display text-xl font-bold text-[rgb(var(--text))]">Shubham Taware</p>
                    <p className="mt-1 text-sm font-semibold text-gold-400 dark:text-gold-300">Frontend & Mobile Engineer</p>
                  </div>
                  <span className="badge-app mt-1">
                    <MapPin className="h-3.5 w-3.5 text-gold-400" /> {PERSON.location}
                  </span>
                </div>
              </div>
            </div>
          </Reveal>

          {/* About text + cards */}
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
                    className="group rounded-2xl glass-card border border-gold-400/20 p-5 text-center transition-all duration-300 hover:border-gold-400/50 hover:shadow-soft hover:-translate-y-1"
                  >
                    <div className="mx-auto mb-3 flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-gold-400/15 to-gold-600/15 text-gold-400 transition-transform group-hover:scale-110">
                      <Icon className="h-5 w-5" />
                    </div>
                    <p className="font-display text-lg font-bold text-[rgb(var(--text))]">{card.value}</p>
                    <p className="mt-0.5 text-xs font-semibold text-[rgb(var(--text-soft))]">{card.label}</p>
                  </motion.div>
                );
              })}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
