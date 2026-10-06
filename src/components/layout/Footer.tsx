import { Link } from 'react-router-dom';
import { ArrowUp, Github, Instagram, Linkedin, Mail, Phone, Heart } from 'lucide-react';
import { NAV_LINKS, PERSON, SERVICES, SOCIAL_LINKS } from '../../constants/data';

const ICONS: Record<string, React.ComponentType<{ className?: string }>> = {
  Github,
  Linkedin,
  Instagram,
  Mail,
  Phone,
};

export default function Footer() {
  return (
    <footer className="relative mt-20 border-t border-[rgb(var(--border))] bg-[rgb(var(--bg-soft))]">
      <div className="section-container py-14">
        <div className="grid gap-10 md:grid-cols-3 lg:grid-cols-4">
          <div className="lg:col-span-1">
            <Link to="/" className="flex items-center gap-2.5">
              <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-[#E5C9A6] via-[#DFBE8D] to-[#C69F67] font-display text-sm font-extrabold text-[#0A0908] shadow-glow-gold">
                ST
              </span>
              <span className="font-display text-base font-semibold">
                Shubham Taware
              </span>
            </Link>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-[rgb(var(--text-soft))]">
              Frontend & React Native Developer building scalable, modern web and mobile applications with exceptional UX.
            </p>
            <div className="mt-5 flex gap-2.5">
              {SOCIAL_LINKS.map((s) => {
                const Icon = ICONS[s.icon] ?? Mail;
                return (
                  <a
                    key={s.label}
                    href={s.href}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={s.label}
                    className="flex h-9 w-9 items-center justify-center rounded-xl border border-[rgb(var(--border))] bg-[rgb(var(--bg))] text-[rgb(var(--text-soft))] transition-all hover:border-gold-400 hover:text-gold-300"
                  >
                    <Icon className="h-4 w-4" />
                  </a>
                );
              })}
            </div>
          </div>

          <div>
            <h3 className="font-display text-sm font-semibold uppercase tracking-wider text-gold-400">
              Quick Links
            </h3>
            <ul className="mt-4 space-y-2.5">
              {NAV_LINKS.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-sm text-[rgb(var(--text-soft))] transition-colors hover:text-gold-300"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-display text-sm font-semibold uppercase tracking-wider text-gold-400">
              Services
            </h3>
            <ul className="mt-4 space-y-2.5">
              {SERVICES.map((s) => (
                <li key={s.id} className="text-sm text-[rgb(var(--text-soft))]">
                  {s.title}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-display text-sm font-semibold uppercase tracking-wider text-gold-400">
              Get in Touch
            </h3>
            <ul className="mt-4 space-y-2.5">
              <li>
                <a href={`mailto:${PERSON.email}`} className="text-sm text-[rgb(var(--text-soft))] transition-colors hover:text-gold-300">
                  {PERSON.email}
                </a>
              </li>
              <li>
                <a href={`tel:${PERSON.phone}`} className="text-sm text-[rgb(var(--text-soft))] transition-colors hover:text-gold-300">
                  {PERSON.phone}
                </a>
              </li>
              <li className="text-sm text-[rgb(var(--text-soft))]">{PERSON.location}</li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-[rgb(var(--border))] pt-6 sm:flex-row">
          <p className="flex items-center gap-1.5 text-sm text-[rgb(var(--text-soft))]">
            © {new Date().getFullYear()} Shubham Taware. Built with
            <Heart className="h-3.5 w-3.5 fill-gold-400 text-gold-400" />
            and React.
          </p>
          <a
            href="#top"
            onClick={(e) => {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            className="flex items-center gap-2 rounded-xl border border-[rgb(var(--border))] bg-[rgb(var(--bg))] px-4 py-2 text-sm font-medium text-[rgb(var(--text-soft))] transition-all hover:border-gold-400 hover:text-gold-300"
          >
            Back to Top <ArrowUp className="h-4 w-4" />
          </a>
        </div>
      </div>
    </footer>
  );
}
