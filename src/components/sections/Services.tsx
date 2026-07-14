import { motion } from 'framer-motion';
import SectionHeading from '../ui/SectionHeading';
import { SERVICES } from '../../constants/data';
import { getIcon } from '../../utils/icons';
import { staggerContainer, itemVariants } from '../../animations/variants';

export default function Services() {
  return (
    <section id="services" className="section-pad">
      <div className="section-container">
        <SectionHeading
          eyebrow="Services"
          title={<>What I can do for you</>}
          subtitle="From concept to deployment — comprehensive web development services tailored to your needs."
        />

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
          className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
        >
          {SERVICES.map((service) => {
            const Icon = getIcon(service.icon);
            return (
              <motion.div
                key={service.id}
                variants={itemVariants}
                className="group relative overflow-hidden rounded-2xl glass-card p-6 transition-transform hover:-translate-y-1"
              >
                <div className="absolute -right-8 -top-8 h-24 w-24 rounded-full bg-gradient-to-br from-royal-500/10 to-cyan-400/10 blur-2xl transition-opacity group-hover:opacity-100" />
                <div className="relative">
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-royal-500/15 to-cyan-400/15 text-royal-500 transition-transform group-hover:scale-110">
                    <Icon className="h-6 w-6" />
                  </div>
                  <h3 className="font-display text-lg font-semibold">{service.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-[rgb(var(--text-soft))]">{service.description}</p>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
