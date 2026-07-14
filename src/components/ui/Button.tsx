import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import type { ReactNode } from 'react';

interface ButtonProps {
  children: ReactNode;
  variant?: 'primary' | 'ghost' | 'outline';
  to?: string;
  href?: string;
  onClick?: () => void;
  className?: string;
  icon?: ReactNode;
}

export default function Button({ children, variant = 'primary', to, href, onClick, className = '', icon }: ButtonProps) {
  const base =
    variant === 'primary'
      ? 'btn-primary'
      : variant === 'outline'
        ? 'btn-outline'
        : 'btn-ghost';

  const content = (
    <>
      {children}
      {icon}
    </>
  );

  const motionProps = {
    whileHover: { scale: 1.03 },
    whileTap: { scale: 0.97 },
  };

  if (to) {
    return (
      <motion.div {...motionProps}>
        <Link to={to} className={`${base} ${className}`}>
          {content}
        </Link>
      </motion.div>
    );
  }

  if (href) {
    return (
      <motion.div {...motionProps}>
        <a href={href} target="_blank" rel="noreferrer" className={`${base} ${className}`}>
          {content}
        </a>
      </motion.div>
    );
  }

  return (
    <motion.button onClick={onClick} className={`${base} ${className}`} {...motionProps}>
      {content}
    </motion.button>
  );
}
