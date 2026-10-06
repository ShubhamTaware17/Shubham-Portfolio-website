import { motion } from 'framer-motion';
import { Atom } from 'lucide-react';

export default function PageLoader() {
  return (
    <motion.div
      className="fixed inset-0 z-[200] flex flex-col items-center justify-center bg-[rgb(var(--bg))]"
      initial={{ opacity: 1 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0, transition: { duration: 0.5 } }}
    >
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 1.2, repeat: Infinity, ease: 'linear' }}
        className="relative h-16 w-16"
      >
        <div className="absolute inset-0 rounded-full border-2 border-royal-500/20 border-t-royal-500" />
        <div className="absolute inset-2 rounded-full border-2 border-royal-300/20 border-b-royal-300" />
        <Atom className="absolute inset-0 m-auto h-6 w-6 text-royal-500" />
      </motion.div>
      <motion.p
        className="mt-6 font-display text-sm font-medium tracking-widest text-[rgb(var(--text-soft))]"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
      >
        SHUBHAM Taware
      </motion.p>
    </motion.div>
  );
}
