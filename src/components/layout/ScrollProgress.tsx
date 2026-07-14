import { motion } from 'framer-motion';
import { useScrollProgress } from '../../hooks/useScroll';

export default function ScrollProgress() {
  const progress = useScrollProgress();
  return (
    <motion.div
      className="fixed left-0 top-0 z-[90] h-1 w-full origin-left bg-gradient-to-r from-royal-600 via-royal-500 to-cyan-400"
      style={{ scaleX: progress / 100 }}
    />
  );
}
