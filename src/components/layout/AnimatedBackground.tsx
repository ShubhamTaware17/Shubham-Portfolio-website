import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

export default function AnimatedBackground() {
  const [mousePos, setMousePos] = useState({ x: -500, y: -500 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      <div className="absolute inset-0 bg-[rgb(var(--bg))]" />
      
      {/* Subtle Luxury Pattern */}
      <div className="absolute inset-0 bg-grid-pattern opacity-40" />

      {/* Interactive Cursor Spotlight Glow */}
      <div
        className="pointer-events-none fixed -inset-px transition-opacity duration-300 hidden md:block"
        style={{
          background: `radial-gradient(650px circle at ${mousePos.x}px ${mousePos.y}px, rgba(223, 190, 141, 0.07), transparent 80%)`,
        }}
      />

      {/* Ambient Luxury Gold Gradient Mesh Orbs */}
      <motion.div
        className="absolute -left-20 top-0 h-[38rem] w-[38rem] rounded-full bg-gradient-to-br from-gold-400/20 via-gold-600/10 to-transparent blur-[140px]"
        animate={{ x: [0, 70, 0], y: [0, 50, 0], scale: [1, 1.15, 1] }}
        transition={{ duration: 16, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div
        className="absolute right-0 top-1/4 h-[34rem] w-[34rem] rounded-full bg-gradient-to-bl from-gold-300/18 via-gold-500/10 to-transparent blur-[140px]"
        animate={{ x: [0, -60, 0], y: [0, 70, 0], scale: [1, 0.9, 1] }}
        transition={{ duration: 20, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div
        className="absolute bottom-10 left-1/3 h-[32rem] w-[32rem] rounded-full bg-gradient-to-tr from-gold-600/15 via-gold-400/10 to-transparent blur-[150px]"
        animate={{ x: [0, 50, 0], y: [0, -40, 0], scale: [1, 1.1, 1] }}
        transition={{ duration: 18, repeat: Infinity, ease: 'easeInOut' }}
      />
    </div>
  );
}
