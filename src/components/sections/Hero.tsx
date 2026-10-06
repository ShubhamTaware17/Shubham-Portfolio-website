import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Download, FolderGit2, ArrowRight, MapPin, Sparkles, ChevronDown } from 'lucide-react';
import { useTypingEffect } from '../../hooks/useTypingEffect';
import { PERSON } from '../../constants/data';

const TABLE_OF_CONTENTS = [
  { num: '01', title: 'ABOUT ME', href: '#about' },
  { num: '02', title: 'SERVICES', href: '#services' },
  { num: '03', title: 'SKILLS', href: '#skills' },
  { num: '04', title: 'EXPERIENCE', href: '#experience' },
  { num: '05', title: 'SELECTED WORK', href: '#projects' },
  { num: '06', title: 'CONTACT', href: '#contact' },
];

export default function Hero() {
  const typed = useTypingEffect();

  const handleScrollTo = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const elem = document.querySelector(href);
    if (elem) {
      elem.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative flex min-h-[calc(100vh-5rem)] flex-col items-center justify-center overflow-hidden pt-12 pb-16">
      {/* Giant Editorial Backdrop "PORTFOLIO" Typography */}
      <div className="pointer-events-none absolute inset-x-0 top-6 select-none text-center overflow-hidden">
        <span className="font-display text-[14vw] font-black uppercase tracking-[0.18em] text-[#E5C9A6]/[0.06] dark:text-[#DFBE8D]/[0.08] leading-none block">
          PORTFOLIO
        </span>
      </div>

      <div className="section-container relative z-10">
        {/* Top Editorial Row */}
        <div className="flex flex-col items-center justify-between gap-6 md:flex-row md:items-end mb-8 border-b border-gold-400/20 pb-6">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center md:text-left"
          >
            <span className="font-mono text-xs font-bold uppercase tracking-[0.25em] text-gold-400 dark:text-gold-300">
              CREATIVE FRONTEND & MOBILE DEVELOPER
            </span>
            <p className="mt-1 max-w-sm text-xs leading-relaxed text-[rgb(var(--text-soft))]">
              Crafting high-converting, scalable web & mobile platforms that blend artistic precision with solid engineering.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center md:text-right"
          >
            <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-gold-400">
              <span className="h-px w-6 bg-gold-400/60 inline-block" />
              <span>DESIGN THAT INSPIRES. CODE THAT PERFORMS.</span>
            </div>
            <div className="mt-1 flex items-center justify-center md:justify-end gap-1.5 text-xs text-[rgb(var(--text-soft))]">
              <MapPin className="h-3.5 w-3.5 text-gold-400" />
              <span>BASED IN PUNE, INDIA • AVAILABLE WORLDWIDE</span>
            </div>
          </motion.div>
        </div>

        {/* Center Main Stage */}
        <div className="text-center">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2.5 rounded-full border border-gold-400/30 bg-gold-500/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-gold-400 dark:text-gold-300 shadow-glow backdrop-blur-md"
          >
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-gold-400 opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-gold-400" />
            </span>
            Available for Freelance & Full-time Roles
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mt-5 font-display text-5xl font-extrabold tracking-tight sm:text-6xl lg:text-7xl"
          >
            <span className="gradient-text">Shubham Taware</span>
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-3 h-9 overflow-hidden"
          >
            <p className="font-display text-xl font-bold text-[rgb(var(--text))] sm:text-2xl">
              <span className="text-gold-400 dark:text-gold-300">{typed}</span>
              <span className="ml-1 inline-block h-5 w-0.5 animate-pulse bg-gold-400 align-middle" />
            </p>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-[rgb(var(--text-soft))]"
          >
            {PERSON.tagline}
          </motion.p>

          {/* Action Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.35 }}
            className="mt-7 flex flex-wrap items-center justify-center gap-3.5"
          >
            <a href={PERSON.resumeUrl} className="btn-primary">
              <Download className="h-4 w-4" /> Download Resume
            </a>
            <Link to="/projects" className="btn-ghost">
              <FolderGit2 className="h-4 w-4 text-gold-400" /> View Live Projects
            </Link>
            <Link to="/contact" className="btn-outline">
              Hire Me <ArrowRight className="h-4 w-4" />
            </Link>
          </motion.div>
        </div>

        {/* Luxury "TABLE OF CONTENTS" Quick Index Card (From Reference Image) */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.45 }}
          className="mx-auto mt-14 max-w-4xl rounded-2xl border border-gold-400/25 bg-[#121212]/85 dark:bg-[#12100E]/90 p-6 sm:p-8 backdrop-blur-xl shadow-soft-lg"
        >
          <div className="grid gap-8 lg:grid-cols-12 lg:items-center">
            {/* Left Header */}
            <div className="lg:col-span-4 border-b border-gold-400/20 pb-4 lg:border-b-0 lg:border-r lg:pr-6 lg:pb-0">
              <div className="inline-flex items-center gap-2 text-gold-400">
                <Sparkles className="h-4 w-4" />
                <span className="font-mono text-xs font-bold tracking-[0.2em] uppercase">QUICK INDEX</span>
              </div>
              <h2 className="mt-1 font-display text-2xl font-black uppercase tracking-wider text-[#F5E6D3]">
                TABLE OF <br className="hidden sm:inline" />CONTENTS
              </h2>
              <p className="mt-2 text-xs leading-relaxed text-[rgb(var(--text-soft))]">
                Explore my live projects, core skills, services, and creative development process.
              </p>
            </div>

            {/* Right Interactive Index Grid */}
            <div className="lg:col-span-8 grid grid-cols-2 gap-x-6 gap-y-4 sm:gap-x-10">
              {TABLE_OF_CONTENTS.map((item) => (
                <a
                  key={item.num}
                  href={item.href}
                  onClick={(e) => handleScrollTo(e, item.href)}
                  className="group flex items-center justify-between rounded-xl border border-gold-400/10 bg-gold-400/5 px-3.5 py-2.5 transition-all duration-300 hover:border-gold-400/40 hover:bg-gold-400/15 hover:translate-x-1"
                >
                  <div className="flex items-center gap-3">
                    <span className="font-mono text-xs font-bold text-gold-400 group-hover:text-gold-200">
                      {item.num}
                    </span>
                    <span className="font-display text-xs font-bold uppercase tracking-wider text-[rgb(var(--text))] group-hover:text-gold-300">
                      {item.title}
                    </span>
                  </div>
                  <ArrowRight className="h-3 w-3 text-gold-400/40 transition-transform group-hover:translate-x-1 group-hover:text-gold-300" />
                </a>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Infinite Tech Stack Marquee Ribbon */}
        <div className="mt-14 overflow-hidden rounded-xl border border-gold-400/20 bg-[#12100E]/70 py-3.5 backdrop-blur-md">
          <div className="flex w-max animate-[shimmer_25s_linear_infinite] items-center gap-8 whitespace-nowrap">
            {[...Array(3)].flatMap(() => [
              '⚛️ React.js',
              '📱 React Native',
              '🔷 TypeScript',
              '⚡ Redux Toolkit',
              '🎨 Tailwind CSS',
              '🌐 RESTful APIs',
              '🚀 High Performance UI',
              '💻 JavaScript (ES6+)',
              '📦 Axios & State Management',
              '🛠️ Android Play Store Deployments',
            ]).map((tech, idx) => (
              <span key={idx} className="inline-flex items-center gap-3 text-xs font-bold uppercase tracking-wider text-gold-300">
                <span>{tech}</span>
                <span className="text-gold-400/50">✦</span>
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
        className="mt-8"
      >
        <ChevronDown className="h-4 w-4 animate-bounce text-gold-400/60" />
      </motion.div>
    </section>
  );
}
