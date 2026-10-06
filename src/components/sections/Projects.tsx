import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, Smartphone } from 'lucide-react';
import SectionHeading from '../ui/SectionHeading';
import TiltCard from '../ui/TiltCard';
import { PROJECTS, PROJECT_CATEGORIES } from '../../constants/data';
import { staggerContainer, itemVariants } from '../../animations/variants';

export default function Projects() {
  const [filter, setFilter] = useState('All');

  const filtered = filter === 'All' ? PROJECTS : PROJECTS.filter((p) => p.category === filter);

  return (
    <section id="projects" className="section-pad">
      <div className="section-container">
        <SectionHeading
          eyebrow="Projects"
          title={<>Featured work & live builds</>}
          subtitle="A collection of live production web platforms and mobile applications built with React.js and React Native."
        />

        {/* Filter buttons */}
        <div className="mt-10 flex flex-wrap justify-center gap-2.5">
          {PROJECT_CATEGORIES.map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`rounded-xl px-5 py-2.5 text-sm font-semibold transition-all duration-300 ${
                filter === cat
                  ? 'bg-gradient-to-r from-[#E5C9A6] via-[#DFBE8D] to-[#C69F67] text-[#0A0908] font-bold shadow-glow-gold'
                  : 'border border-[rgb(var(--border))] bg-[rgb(var(--bg-soft))] text-[rgb(var(--text-soft))] hover:border-gold-400/60 hover:text-gold-300'
              }`}
            >
              {cat === 'All' ? '⚡ All Projects' : cat === 'Full Stack' ? '🌐 Web & Full Stack' : '📱 Mobile Apps'}
            </button>
          ))}
        </div>

        {/* Project grid */}
        <motion.div
          layout
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
          className="mt-12 grid gap-7 sm:grid-cols-2 lg:grid-cols-3"
        >
          <AnimatePresence mode="popLayout">
            {filtered.map((project, idx) => (
              <motion.div
                key={project.id}
                layout
                variants={itemVariants}
                initial="hidden"
                animate="visible"
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4 }}
                className="group h-full"
              >
                <TiltCard className="h-full">
                  <div className="flex h-full flex-col overflow-hidden rounded-2xl glass-card border border-gold-400/20 transition-all duration-300 hover:border-gold-400/50 hover:shadow-soft-lg">
                    {/* Mockup Frame Header */}
                    <div className="flex items-center justify-between border-b border-[rgb(var(--border))] bg-[rgb(var(--bg-soft))]/90 px-4 py-2 text-xs">
                      <div className="flex items-center gap-2">
                        <span className="font-mono text-xs font-bold text-gold-400">
                          {idx < 9 ? `0${idx + 1}` : idx + 1}
                        </span>
                        <span className="h-3 w-px bg-gold-400/30" />
                        <span className="font-mono text-[10px] text-[rgb(var(--text-soft))]/80 truncate max-w-[140px]">
                          {project.demo ? new URL(project.demo).hostname.replace('www.', '') : 'app.production'}
                        </span>
                      </div>
                      <span className="badge-live text-[10px] py-0.5 px-2">
                        <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" /> Live
                      </span>
                    </div>

                    {/* Image Preview */}
                    <div className="relative aspect-[16/10] overflow-hidden bg-[#0A0908]">
                      <img
                        src={project.image}
                        alt={project.title}
                        loading="lazy"
                        className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#0A0908]/90 via-[#0A0908]/20 to-transparent" />
                      <span className="absolute left-3 bottom-3 rounded-md bg-[#12100E]/85 backdrop-blur-md px-2.5 py-1 text-[11px] font-semibold text-gold-300 border border-gold-400/20">
                        {project.category === 'Mobile' ? '📱 Android App' : '🌐 Web Platform'}
                      </span>
                      {project.featured && (
                        <span className="absolute right-3 top-3 rounded-full bg-gradient-to-r from-[#E5C9A6] via-[#DFBE8D] to-[#C69F67] px-2.5 py-0.5 text-[10px] font-bold text-[#0A0908] shadow-glow-gold">
                          Featured
                        </span>
                      )}
                    </div>

                    {/* Content */}
                    <div className="flex flex-1 flex-col p-5 sm:p-6">
                      <h3 className="font-display text-xl font-bold tracking-tight text-[rgb(var(--text))] group-hover:text-gold-300 transition-colors">
                        {project.title}
                      </h3>
                      <p className="mt-2.5 flex-1 text-sm leading-relaxed text-[rgb(var(--text-soft))] line-clamp-3">
                        {project.description}
                      </p>

                      <div className="mt-4 flex flex-wrap gap-1.5">
                        {project.tech.map((t) => (
                          <span key={t} className="chip text-[11px] font-medium">{t}</span>
                        ))}
                      </div>

                      <div className="mt-6 flex flex-wrap gap-2.5 pt-4 border-t border-[rgb(var(--border))]">
                        <a
                          href={project.demo}
                          target="_blank"
                          rel="noreferrer"
                          className="flex flex-1 min-w-[120px] items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-[#E5C9A6] via-[#DFBE8D] to-[#C69F67] py-2.5 text-sm font-bold text-[#0A0908] shadow-glow-gold transition-all hover:shadow-glow-gold hover:brightness-105"
                        >
                          <ExternalLink className="h-4 w-4" /> {project.category === 'Mobile' ? 'Open in Store' : 'Live Website'}
                        </a>
                        {project.playStore && project.playStore !== project.demo && (
                          <a
                            href={project.playStore}
                            target="_blank"
                            rel="noreferrer"
                            className="flex flex-1 min-w-[120px] items-center justify-center gap-2 rounded-xl border border-gold-400/40 bg-gold-500/5 py-2.5 text-sm font-semibold text-gold-300 transition-all hover:bg-gold-500/15 hover:border-gold-400"
                          >
                            <Smartphone className="h-4 w-4 text-gold-400" /> Play Store
                          </a>
                        )}
                      </div>
                    </div>
                  </div>
                </TiltCard>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
