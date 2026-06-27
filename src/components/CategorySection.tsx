import { SkillCard } from "./SkillCard";
import type { SkillConfig } from "@/lib/skills";

interface CategorySectionProps {
  id: string;
  name: string;
  icon: string;
  skills: SkillConfig[];
}

export function CategorySection({ id, name, icon, skills }: CategorySectionProps) {
  if (skills.length === 0) return null;

  return (
    <section id={id} className="mb-16">
      <div className="flex items-center gap-3 mb-6">
        <span className="text-2xl">{icon}</span>
        <h2 className="text-xl font-bold text-gray-900">{name}</h2>
        <span className="text-sm text-gray-400">{skills.length} 个技能</span>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {skills.map((skill) => (
          <SkillCard key={skill.id} skill={skill} />
        ))}
      </div>
    </section>
  );
}