import { motion } from 'framer-motion';
import { useCountUp } from '../../hooks/useCountUp';
import { useInView } from 'react-intersection-observer';
import { getIcon } from '../../utils/icons';

interface StatCardProps {
  label: string;
  value: number;
  suffix: string;
  icon: string;
  index: number;
}

export default function StatCard({ label, value, suffix, icon, index }: StatCardProps) {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.4 });
  const count = useCountUp(value, 2000, inView);
  const Icon = getIcon(icon);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 24 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
      className="group relative overflow-hidden rounded-2xl glass-card p-6 text-center transition-transform hover:-translate-y-1"
    >
      <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-royal-500/10 to-royal-700/10 text-royal-500 transition-transform group-hover:scale-110">
        <Icon className="h-6 w-6" />
      </div>
      <div className="font-display text-3xl font-bold sm:text-4xl">
        <span className="gradient-text">{count}</span>
        <span className="gradient-text">{suffix}</span>
      </div>
      <p className="mt-1.5 text-sm font-medium text-[rgb(var(--text-soft))]">{label}</p>
    </motion.div>
  );
}
