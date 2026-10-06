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
      className="group relative overflow-hidden rounded-2xl glass-card border border-gold-400/20 p-6 text-center transition-all duration-300 hover:border-gold-400/50 hover:shadow-soft-lg hover:-translate-y-1.5"
    >
      <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-gold-400/15 via-gold-500/10 to-gold-600/15 text-gold-400 border border-gold-400/20 shadow-sm transition-transform duration-300 group-hover:scale-110">
        <Icon className="h-6 w-6" />
      </div>
      <div className="font-display text-3xl font-extrabold sm:text-4xl">
        <span className="gradient-text">{count}</span>
        <span className="gradient-text">{suffix}</span>
      </div>
      <p className="mt-2 text-xs font-semibold uppercase tracking-wider text-[rgb(var(--text-soft))]">{label}</p>
    </motion.div>
  );
}
