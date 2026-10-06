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
          title={<>Specialized Services & Capabilities</>}
          subtitle="From concept to high-performance production — scalable frontend & mobile solutions tailored to your product needs."
        />

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
          className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
        >
          {SERVICES.map((service, index) => {
            const Icon = getIcon(service.icon);
            return (
              <motion.div
                key={service.id}
                variants={itemVariants}
                className="group relative overflow-hidden rounded-2xl glass-card p-7 transition-all duration-300 hover:-translate-y-1.5 hover:shadow-soft-lg hover:border-cyan-400/40"
              >
                {/* Background ambient gradient glow */}
                <div className="absolute -right-10 -top-10 h-32 w-32 rounded-full bg-gradient-to-br from-cyan-400/10 via-sky-500/10 to-blue-600/10 blur-2xl transition-opacity duration-300 group-hover:opacity-100 opacity-40" />

                <div className="relative">
                  {/* Top bar with icon and sequence index */}
                  <div className="mb-5 flex items-center justify-between">
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-cyan-500/15 via-sky-500/10 to-blue-600/15 text-cyan-500 transition-all duration-300 group-hover:scale-110 group-hover:bg-cyan-500 group-hover:text-white shadow-sm">
                      <Icon className="h-6 w-6" />
                    </div>
                    <span className="font-mono text-xs font-semibold text-cyan-500/50 group-hover:text-cyan-400 transition-colors">
                      0{index + 1}
                    </span>
                  </div>

                  <h3 className="font-display text-lg font-bold tracking-tight text-[rgb(var(--text))] group-hover:text-cyan-500 dark:group-hover:text-cyan-400 transition-colors">
                    {service.title}
                  </h3>
                  <p className="mt-2.5 text-sm leading-relaxed text-[rgb(var(--text-soft))]">
                    {service.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
