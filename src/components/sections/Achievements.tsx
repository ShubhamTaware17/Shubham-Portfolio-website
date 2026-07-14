import SectionHeading from '../ui/SectionHeading';
import StatCard from '../ui/StatCard';
import { ACHIEVEMENTS } from '../../constants/data';

export default function Achievements() {
  return (
    <section id="achievements" className="section-pad">
      <div className="section-container">
        <SectionHeading
          eyebrow="Achievements"
          title={<>Numbers that speak</>}
          subtitle="A snapshot of my journey through code, projects and continuous learning."
        />

        <div className="mt-14 grid grid-cols-2 gap-4 sm:gap-6 lg:grid-cols-4">
          {ACHIEVEMENTS.map((a, i) => (
            <StatCard key={a.id} label={a.label} value={a.value} suffix={a.suffix} icon={a.icon} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
