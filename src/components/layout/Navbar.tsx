import { useEffect, useState } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { NAV_LINKS, PERSON } from '../../constants/data';
import { useScrolled } from '../../hooks/useScroll';
import ThemeToggle from './ThemeToggle';

export default function Navbar() {
  const scrolled = useScrolled(20);
  const [open, setOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setOpen(false);
  }, [location.pathname]);

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
      className="fixed inset-x-0 top-0 z-[80]"
    >
      <nav
        className={`mx-auto flex max-w-7xl items-center justify-between px-5 transition-all duration-300 sm:px-8 lg:px-12 ${
          scrolled ? 'py-3' : 'py-5'
        }`}
      >
        <div
          className={`flex w-full items-center justify-between rounded-2xl px-4 py-2.5 transition-all duration-300 ${
            scrolled ? 'glass shadow-soft' : 'bg-transparent'
          }`}
        >
          <Link to="/" className="group flex items-center gap-2.5">
            <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-[#E5C9A6] via-[#DFBE8D] to-[#C69F67] font-display text-sm font-extrabold text-[#0A0908] shadow-glow-gold transition-transform duration-300 group-hover:scale-105">
              ST
            </span>
            <span className="font-display text-base font-bold tracking-tight">
              Shubham<span className="text-gold-400">.</span>dev
            </span>
          </Link>

          <div className="hidden items-center gap-1 lg:flex">
            {NAV_LINKS.map((link) => (
              <NavLink
                key={link.path}
                to={link.path}
                className={({ isActive }) =>
                  `relative rounded-lg px-3.5 py-2 text-sm font-medium transition-colors ${
                    isActive
                      ? 'text-gold-400 dark:text-gold-300 font-semibold'
                      : 'text-[rgb(var(--text-soft))] hover:text-[rgb(var(--text))]'
                  }`
                }
              >
                {({ isActive }) => (
                  <>
                    {link.label}
                    {isActive && (
                      <motion.span
                        layoutId="nav-active"
                        className="absolute inset-x-2 -bottom-px h-0.5 rounded-full bg-gradient-to-r from-gold-300 via-gold-400 to-gold-600"
                      />
                    )}
                  </>
                )}
              </NavLink>
            ))}
          </div>

          <div className="flex items-center gap-2.5">
            <ThemeToggle />
            <a
              href={PERSON.resumeUrl}
              className="hidden rounded-xl bg-gradient-to-r from-[#E5C9A6] via-[#DFBE8D] to-[#C69F67] px-5 py-2.5 text-sm font-bold text-[#0A0908] shadow-glow-gold transition-all hover:shadow-glow-gold hover:-translate-y-0.5 sm:inline-flex"
            >
              Resume
            </a>
            <button
              onClick={() => setOpen((o) => !o)}
              className="flex h-10 w-10 items-center justify-center rounded-xl border border-[rgb(var(--border))] bg-[rgb(var(--bg-soft))] text-[rgb(var(--text))] lg:hidden"
              aria-label="Toggle menu"
            >
              {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="mx-5 mt-1 overflow-hidden rounded-2xl glass shadow-soft-lg lg:hidden"
          >
            <div className="flex flex-col gap-1 p-3">
              {NAV_LINKS.map((link) => (
                <NavLink
                  key={link.path}
                  to={link.path}
                  className={({ isActive }) =>
                    `rounded-xl px-4 py-3 text-sm font-medium transition-colors ${
                      isActive
                        ? 'bg-royal-500/10 text-royal-600 dark:text-royal-300'
                        : 'text-[rgb(var(--text-soft))] hover:bg-[rgb(var(--bg-soft))]'
                    }`
                  }
                >
                  {link.label}
                </NavLink>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
