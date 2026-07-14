import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Github, ExternalLink } from 'lucide-react';
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
          title={<>Featured work & builds</>}
          subtitle="A collection of projects showcasing full-stack, frontend, and mobile development skills."
        />

        {/* Filter buttons */}
        <div className="mt-10 flex flex-wrap justify-center gap-2">
          {PROJECT_CATEGORIES.map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`rounded-xl px-4 py-2 text-sm font-medium transition-all ${
                filter === cat
                  ? 'bg-gradient-to-r from-royal-600 to-royal-500 text-white shadow-glow'
                  : 'border border-[rgb(var(--border))] bg-[rgb(var(--bg-soft))] text-[rgb(var(--text-soft))] hover:text-royal-500'
              }`}
            >
              {cat}
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
          className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
        >
          <AnimatePresence mode="popLayout">
            {filtered.map((project) => (
              <motion.div
                key={project.id}
                layout
                variants={itemVariants}
                initial="hidden"
                animate="visible"
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4 }}
                className="group"
              >
                <TiltCard className="h-full">
                  <div className="flex h-full flex-col overflow-hidden rounded-2xl glass-card transition-shadow group-hover:shadow-soft-lg">
                    {/* Image */}
                    <div className="relative aspect-video overflow-hidden">
                      <img
                        src={project.image}
                        alt={project.title}
                        loading="lazy"
                        className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-navy-950/80 via-navy-950/20 to-transparent" />
                      <span className="absolute left-3 top-3 chip bg-white/90 text-navy-900 backdrop-blur-sm">
                        {project.category}
                      </span>
                      {project.featured && (
                        <span className="absolute right-3 top-3 rounded-full bg-gradient-to-r from-royal-600 to-cyan-500 px-3 py-1 text-xs font-semibold text-white shadow-glow">
                          Featured
                        </span>
                      )}
                    </div>

                    {/* Content */}
                    <div className="flex flex-1 flex-col p-5">
                      <h3 className="font-display text-lg font-semibold">{project.title}</h3>
                      <p className="mt-2 flex-1 text-sm leading-relaxed text-[rgb(var(--text-soft))]">
                        {project.description}
                      </p>

                      <div className="mt-4 flex flex-wrap gap-1.5">
                        {project.tech.map((t) => (
                          <span key={t} className="chip text-[11px]">{t}</span>
                        ))}
                      </div>

                      <div className="mt-5 flex gap-2.5">
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noreferrer"
                          className="flex flex-1 items-center justify-center gap-2 rounded-xl border border-[rgb(var(--border))] bg-[rgb(var(--bg-soft))] py-2.5 text-sm font-medium transition-all hover:border-royal-400 hover:text-royal-500"
                        >
                          <Github className="h-4 w-4" /> Code
                        </a>
                        <a
                          href={project.demo}
                          target="_blank"
                          rel="noreferrer"
                          className="flex flex-1 items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-royal-600 to-royal-500 py-2.5 text-sm font-semibold text-white transition-all hover:shadow-glow"
                        >
                          <ExternalLink className="h-4 w-4" /> Demo
                        </a>
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
