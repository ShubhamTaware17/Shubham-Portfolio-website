import { motion } from 'framer-motion';

export default function AnimatedBackground() {
  return (
    <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      <div className="absolute inset-0 bg-[rgb(var(--bg))]" />
      <div className="absolute inset-0 bg-grid-pattern opacity-60" />

      {/* Ambient Luxury Gold Gradient Mesh Orbs */}
      <motion.div
        className="absolute -left-20 top-0 h-[36rem] w-[36rem] rounded-full bg-gradient-to-br from-gold-400/15 via-gold-600/8 to-transparent blur-[140px]"
        animate={{ x: [0, 80, 0], y: [0, 60, 0], scale: [1, 1.15, 1] }}
        transition={{ duration: 16, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div
        className="absolute right-0 top-1/4 h-[32rem] w-[32rem] rounded-full bg-gradient-to-bl from-gold-300/14 via-gold-500/10 to-transparent blur-[140px]"
        animate={{ x: [0, -60, 0], y: [0, 80, 0], scale: [1, 0.9, 1] }}
        transition={{ duration: 20, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div
        className="absolute bottom-10 left-1/3 h-[30rem] w-[30rem] rounded-full bg-gradient-to-tr from-gold-600/12 via-gold-400/8 to-transparent blur-[150px]"
        animate={{ x: [0, 50, 0], y: [0, -40, 0], scale: [1, 1.1, 1] }}
        transition={{ duration: 18, repeat: Infinity, ease: 'easeInOut' }}
      />
    </div>
  );
}
