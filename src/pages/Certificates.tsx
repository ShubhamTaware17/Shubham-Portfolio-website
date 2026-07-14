import { motion } from 'framer-motion';
import { Award, BadgeCheck } from 'lucide-react';
import SectionHeading from '../components/ui/SectionHeading';
import { CERTIFICATES } from '../constants/data';
import { staggerContainer, itemVariants } from '../animations/variants';

export default function Certificates() {
  return (
    <div className="section-pad">
      <div className="section-container">
        <SectionHeading
          eyebrow="Certificates"
          title={<>Certifications & achievements</>}
          subtitle="Continuous learning and professional development through industry-recognized certifications."
        />

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
          className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
        >
          {CERTIFICATES.map((cert) => (
            <motion.div
              key={cert.id}
              variants={itemVariants}
              className="group overflow-hidden rounded-2xl glass-card transition-transform hover:-translate-y-1"
            >
              <div className="relative aspect-video overflow-hidden">
                <img
                  src={cert.image}
                  alt={cert.title}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy-950/70 to-transparent" />
                <div className="absolute left-3 top-3 flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-royal-600 to-cyan-500 text-white shadow-glow">
                  <Award className="h-4 w-4" />
                </div>
              </div>
              <div className="p-5">
                <div className="flex items-start justify-between gap-2">
                  <h3 className="font-display text-base font-semibold leading-snug">{cert.title}</h3>
                </div>
                <div className="mt-2 flex items-center justify-between">
                  <span className="flex items-center gap-1.5 text-sm text-[rgb(var(--text-soft))]">
                    <BadgeCheck className="h-4 w-4 text-royal-500" /> {cert.issuer}
                  </span>
                  <span className="chip">{cert.date}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}
