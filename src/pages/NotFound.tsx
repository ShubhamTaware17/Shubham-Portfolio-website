import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Home, ArrowLeft } from 'lucide-react';

export default function NotFound() {
  return (
    <div className="flex min-h-[calc(100vh-5rem)] items-center justify-center px-5">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center"
      >
        <h1 className="font-display text-[8rem] font-bold leading-none sm:text-[12rem]">
          <span className="gradient-text">404</span>
        </h1>
        <p className="mt-4 font-display text-2xl font-semibold">Page not found</p>
        <p className="mx-auto mt-3 max-w-md text-[rgb(var(--text-soft))]">
          The page you're looking for doesn't exist or has been moved. Let's get you back on track.
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <Link to="/" className="btn-primary">
            <Home className="h-4 w-4" /> Back Home
          </Link>
          <button onClick={() => window.history.back()} className="btn-ghost">
            <ArrowLeft className="h-4 w-4" /> Go Back
          </button>
        </div>
      </motion.div>
    </div>
  );
}
