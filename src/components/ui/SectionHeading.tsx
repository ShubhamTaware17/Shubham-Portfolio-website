import { motion } from 'framer-motion';
import type { ReactNode } from 'react';
import { fadeInUp, staggerContainer } from '../../animations/variants';

interface SectionHeadingProps {
  eyebrow?: string;
  title: ReactNode;
  subtitle?: string;
  center?: boolean;
}

export default function SectionHeading({ eyebrow, title, subtitle, center = true }: SectionHeadingProps) {
  return (
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-80px' }}
      className={center ? 'mx-auto max-w-2xl text-center' : 'max-w-2xl'}
    >
      {eyebrow && (
        <motion.span
          variants={fadeInUp}
          className="inline-flex items-center gap-2 rounded-full border border-gold-400/30 bg-gold-500/10 px-4 py-1.5 text-xs font-bold uppercase tracking-[0.2em] text-gold-400 dark:text-gold-300 backdrop-blur-md shadow-glow-gold"
        >
          <span className="text-gold-400">✦</span>
          {eyebrow}
        </motion.span>
      )}
      <motion.h2
        variants={fadeInUp}
        className="mt-4 font-display text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl"
      >
        {title}
      </motion.h2>
      {subtitle && (
        <motion.p
          variants={fadeInUp}
          className="mt-4 text-base leading-relaxed text-[rgb(var(--text-soft))] sm:text-lg"
        >
          {subtitle}
        </motion.p>
      )}
    </motion.div>
  );
}
