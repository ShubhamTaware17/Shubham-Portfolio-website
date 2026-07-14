import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Download, FolderGit2, ArrowRight, ChevronDown, Code2, Braces, Atom } from 'lucide-react';
import { useTypingEffect } from '../../hooks/useTypingEffect';
import { PERSON } from '../../constants/data';

const FLOATING_ICONS = [
  { Icon: Code2, className: 'left-[8%] top-[25%]', delay: 0 },
  { Icon: Braces, className: 'right-[10%] top-[20%]', delay: 1.5 },
  { Icon: Atom, className: 'left-[15%] bottom-[20%]', delay: 0.8 },
  { Icon: Code2, className: 'right-[14%] bottom-[25%]', delay: 2 },
];

export default function Hero() {
  const typed = useTypingEffect();

  return (
    <section className="relative flex min-h-[calc(100vh-5rem)] items-center justify-center overflow-hidden pt-10">
      {/* Floating coding icons */}
      {FLOATING_ICONS.map(({ Icon, className, delay }, i) => (
        <motion.div
          key={i}
          className={`absolute hidden text-royal-500/15 lg:block ${className}`}
          animate={{ y: [0, -16, 0], opacity: [0.3, 0.6, 0.3] }}
          transition={{ duration: 5, repeat: Infinity, delay, ease: 'easeInOut' }}
        >
          <Icon className="h-12 w-12" strokeWidth={1.5} />
        </motion.div>
      ))}

      <div className="section-container relative z-10 text-center">
        <motion.span
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 rounded-full border border-royal-500/20 bg-royal-500/5 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-royal-600 dark:text-royal-300"
        >
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-400 opacity-75" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-green-500" />
          </span>
          Available for opportunities
        </motion.span>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="mt-6 font-display text-lg font-medium text-[rgb(var(--text-soft))] sm:text-xl"
        >
          Hi, I'm
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="mt-2 font-display text-5xl font-bold tracking-tight sm:text-6xl lg:text-7xl"
        >
          <span className="gradient-text">Shubham Taware</span>
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.25 }}
          className="mt-4 h-9 overflow-hidden"
        >
          <p className="font-display text-xl font-semibold text-[rgb(var(--text))] sm:text-2xl lg:text-3xl">
            <span className="text-royal-600 dark:text-royal-400">{typed}</span>
            <span className="ml-0.5 inline-block h-6 w-0.5 animate-pulse bg-cyan-400 align-middle" />
          </p>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.35 }}
          className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-[rgb(var(--text-soft))] sm:text-lg"
        >
          {PERSON.tagline}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.45 }}
          className="mt-9 flex flex-wrap items-center justify-center gap-3"
        >
          <a
            href={PERSON.resumeUrl}
            className="btn-primary"
          >
            <Download className="h-4 w-4" /> Download Resume
          </a>
          <Link to="/projects" className="btn-ghost">
            <FolderGit2 className="h-4 w-4" /> View Projects
          </Link>
          <Link to="/contact" className="btn-outline">
            Hire Me <ArrowRight className="h-4 w-4" />
          </Link>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut' }}
          className="flex h-9 w-5 items-start justify-center rounded-full border-2 border-[rgb(var(--text-soft))]/40 p-1"
        >
          <span className="h-2 w-1 rounded-full bg-[rgb(var(--text-soft))]/60" />
        </motion.div>
        <ChevronDown className="mx-auto mt-1 h-4 w-4 text-[rgb(var(--text-soft))]/40" />
      </motion.div>
    </section>
  );
}
