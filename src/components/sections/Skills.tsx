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
      className="rounded-2xl glass-card p-6"
    >
      <motion.div variants={itemVariants} className="mb-6 flex items-center gap-3">
        <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-royal-500/15 to-cyan-400/15 text-royal-500">
          <CatIcon className="h-5 w-5" />
        </div>
        <h3 className="font-display text-xl font-semibold">{category.title}</h3>
      </motion.div>

      <div className="space-y-5">
        {category.skills.map((skill, i) => {
          const SkillIcon = getIcon(skill.icon);
          return (
            <motion.div key={skill.name} variants={itemVariants}>
              <div className="mb-1.5 flex items-center justify-between">
                <span className="flex items-center gap-2 text-sm font-medium">
                  <SkillIcon className="h-4 w-4 text-royal-500/70" />
                  {skill.name}
                </span>
                <span className="text-xs font-semibold text-[rgb(var(--text-soft))]">{skill.level}%</span>
              </div>
              <div className="h-2 overflow-hidden rounded-full bg-[rgb(var(--bg-soft))]">
                <motion.div
                  className="h-full rounded-full bg-gradient-to-r from-royal-600 via-royal-500 to-cyan-400"
                  initial={{ width: 0 }}
                  animate={inView ? { width: `${skill.level}%` } : { width: 0 }}
                  transition={{ duration: 1, delay: catIdx * 0.1 + i * 0.08, ease: [0.22, 1, 0.36, 1] }}
                />
              </div>
            </motion.div>
          );
        })}
      </div>
    </motion.div>
  );
}
