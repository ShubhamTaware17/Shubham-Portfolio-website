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
          {/* Photo placeholder */}
          <Reveal className="lg:col-span-2" y={-20}>
            <div className="group relative mx-auto max-w-sm">
              <div className="absolute -inset-1 rounded-3xl bg-gradient-to-br from-royal-500/30 to-cyan-400/30 opacity-60 blur-xl transition-opacity group-hover:opacity-90" />
              <div className="relative aspect-[4/5] overflow-hidden rounded-3xl glass-card">
                <div className="flex h-full flex-col items-center justify-center gap-4 bg-gradient-to-br from-royal-500/5 to-cyan-400/5">
                  <div className="flex h-28 w-28 items-center justify-center rounded-full bg-gradient-to-br from-royal-600 to-cyan-500 font-display text-5xl font-bold text-white shadow-glow">
                    ST
                  </div>
                  <p className="font-display text-lg font-semibold">Shubham Taware</p>
                  <p className="text-sm text-[rgb(var(--text-soft))]">Software Engineer</p>
                  <span className="chip">
                    <MapPin className="h-3 w-3" /> {PERSON.location}
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
                    className="group rounded-2xl glass-card p-5 text-center transition-transform hover:-translate-y-1"
                  >
                    <div className="mx-auto mb-3 flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-royal-500/15 to-cyan-400/15 text-royal-500 transition-transform group-hover:scale-110">
                      <Icon className="h-5 w-5" />
                    </div>
                    <p className="font-display text-lg font-bold">{card.value}</p>
                    <p className="mt-0.5 text-xs font-medium text-[rgb(var(--text-soft))]">{card.label}</p>
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
