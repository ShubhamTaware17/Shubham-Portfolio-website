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
          {/* Interactive Code Terminal / Avatar Showcase */}
          <Reveal className="lg:col-span-2" y={-20}>
            <div className="group relative mx-auto max-w-sm">
              <div className="absolute -inset-1.5 rounded-3xl bg-gradient-to-br from-gold-400/30 via-gold-500/20 to-gold-600/30 opacity-70 blur-xl transition-opacity group-hover:opacity-100" />
              
              <div className="relative overflow-hidden rounded-3xl glass-card border border-gold-400/25 shadow-soft-lg">
                {/* Terminal Header */}
                <div className="flex items-center justify-between border-b border-gold-400/20 bg-[#12100E]/90 px-4 py-3 text-xs">
                  <div className="flex items-center gap-1.5">
                    <span className="h-2.5 w-2.5 rounded-full bg-red-400/80" />
                    <span className="h-2.5 w-2.5 rounded-full bg-yellow-400/80" />
                    <span className="h-2.5 w-2.5 rounded-full bg-emerald-400/80" />
                  </div>
                  <span className="font-mono text-[11px] text-gold-300/80">shubham.config.ts</span>
                  <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
                </div>

                {/* Developer Profile Terminal Body */}
                <div className="p-5 font-mono text-xs leading-relaxed text-[rgb(var(--text))] bg-[#0A0908]/90">
                  <p className="text-gold-400/70">// Developer Profile</p>
                  <p className="mt-1">
                    <span className="text-gold-400">const</span>{' '}
                    <span className="text-gold-200">developer</span> = &#123;
                  </p>
                  <p className="pl-4 text-[rgb(var(--text-soft))]">
                    name: <span className="text-emerald-400">'Shubham Taware'</span>,
                  </p>
                  <p className="pl-4 text-[rgb(var(--text-soft))]">
                    role: <span className="text-emerald-400">'Frontend & React Native'</span>,
                  </p>
                  <p className="pl-4 text-[rgb(var(--text-soft))]">
                    experience: <span className="text-gold-300">'1.5+ Years'</span>,
                  </p>
                  <p className="pl-4 text-[rgb(var(--text-soft))]">
                    location: <span className="text-emerald-400">'Pune, India'</span>,
                  </p>
                  <p className="pl-4 text-[rgb(var(--text-soft))]">
                    speciality: <span className="text-gold-300">['React.js', 'React Native']</span>,
                  </p>
                  <p className="pl-4 text-[rgb(var(--text-soft))]">
                    status: <span className="text-emerald-400 font-bold">'Available 🟢'</span>,
                  </p>
                  <p>&#125;;</p>

                  <div className="mt-4 pt-3 border-t border-gold-400/15 flex items-center justify-between text-[11px] text-[rgb(var(--text-soft))]">
                    <span className="flex items-center gap-1.5 text-gold-300">
                      <MapPin className="h-3 w-3 text-gold-400" /> {PERSON.location}
                    </span>
                    <span className="font-bold text-gold-400">⚡ 100% On-Time</span>
                  </div>
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

            {/* Academic Highlights Ribbon */}
            <div className="mt-6 flex flex-wrap gap-2.5">
              <span className="inline-flex items-center gap-1.5 rounded-xl border border-gold-400/20 bg-gold-400/5 px-3.5 py-2 text-xs font-semibold text-gold-300">
                <GraduationCap className="h-4 w-4 text-gold-400" /> PGDM — MIT School of Distance Education, Pune
              </span>
              <span className="inline-flex items-center gap-1.5 rounded-xl border border-gold-400/20 bg-gold-400/5 px-3.5 py-2 text-xs font-semibold text-gold-300">
                <Award className="h-4 w-4 text-gold-400" /> B.Sc Computer Science (70%) — Malwanchal University
              </span>
            </div>

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
