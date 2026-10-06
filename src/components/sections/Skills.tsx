import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import SectionHeading from '../ui/SectionHeading';
import { SKILL_CATEGORIES } from '../../constants/data';
import { getIcon } from '../../utils/icons';
import { staggerContainer, itemVariants } from '../../animations/variants';

export default function Skills() {
  return (
    <section id="skills" className="section-pad">
      <div className="section-container">
        <SectionHeading
          eyebrow="Skills"
          title={<>Technologies I work with</>}
          subtitle="A comprehensive toolkit for building modern, scalable web applications end-to-end."
        />

        <div className="mt-16 grid gap-6 lg:grid-cols-3">
          {SKILL_CATEGORIES.map((category, catIdx) => {
            const CatIcon = getIcon(category.icon);
            return (
              <SkillColumn key={category.title} category={category} catIdx={catIdx} CatIcon={CatIcon} />
            );
          })}
        </div>
      </div>
    </section>
  );
}

function SkillColumn({
  category,
  catIdx,
  CatIcon,
}: {
  category: (typeof SKILL_CATEGORIES)[number];
  catIdx: number;
  CatIcon: React.ComponentType<{ className?: string }>;
}) {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.2 });

  return (
    <motion.div
      ref={ref}
      variants={staggerContainer}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-60px' }}
      className="group rounded-2xl glass-card border border-gold-400/20 p-6 sm:p-7 transition-all duration-300 hover:border-gold-400/50 hover:shadow-soft-lg"
    >
      <motion.div variants={itemVariants} className="mb-6 flex items-center gap-3.5">
        <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-gold-400/20 via-gold-500/10 to-gold-600/20 text-gold-400 border border-gold-400/25 shadow-sm transition-transform duration-300 group-hover:scale-110">
          <CatIcon className="h-6 w-6" />
        </div>
        <div>
          <h3 className="font-display text-xl font-bold tracking-tight text-[rgb(var(--text))] group-hover:text-gold-300 transition-colors">
            {category.title}
          </h3>
          <p className="text-xs text-[rgb(var(--text-soft))]">{category.skills.length} core technologies</p>
        </div>
      </motion.div>

      <div className="space-y-4">
        {category.skills.map((skill, i) => {
          const SkillIcon = getIcon(skill.icon);
          return (
            <motion.div
              key={skill.name}
              variants={itemVariants}
              className="rounded-xl border border-[rgb(var(--border))]/70 bg-[rgb(var(--bg-soft))]/60 p-3 transition-all duration-200 hover:border-gold-400/50 hover:bg-[rgb(var(--bg-soft))]"
            >
              <div className="mb-2 flex items-center justify-between">
                <span className="flex items-center gap-2.5 text-sm font-semibold text-[rgb(var(--text))]">
                  <span className="flex h-6 w-6 items-center justify-center rounded-md bg-gold-400/10 text-gold-400">
                    <SkillIcon className="h-3.5 w-3.5" />
                  </span>
                  {skill.name}
                </span>
                <span className="font-mono text-xs font-bold text-gold-400 dark:text-gold-300">{skill.level}%</span>
              </div>
              <div className="h-2 overflow-hidden rounded-full bg-[#1A1816]/70">
                <motion.div
                  className="h-full rounded-full bg-gradient-to-r from-[#E5C9A6] via-[#DFBE8D] to-[#C69F67] shadow-glow-gold"
                  initial={{ width: 0 }}
                  animate={inView ? { width: `${skill.level}%` } : { width: 0 }}
                  transition={{ duration: 1.1, delay: catIdx * 0.1 + i * 0.07, ease: [0.22, 1, 0.36, 1] }}
                />
              </div>
            </motion.div>
          );
        })}
      </div>
    </motion.div>
  );
}
