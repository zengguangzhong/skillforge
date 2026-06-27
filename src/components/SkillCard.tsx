import Link from "next/link";
import type { SkillConfig } from "@/lib/skills";

export function SkillCard({ skill }: { skill: SkillConfig }) {
  return (
    <Link
      href={`/skill/${skill.id}`}
      className="group block rounded-2xl border border-gray-200 p-6 transition-all hover:border-indigo-300 hover:shadow-lg"
    >
      <div className="flex items-start gap-4">
        <div className="text-3xl">{skill.icon}</div>
        <div className="flex-1">
          <h3 className="font-semibold text-gray-900 group-hover:text-indigo-600 transition-colors">
            {skill.name}
          </h3>
          <p className="mt-1 text-sm text-gray-500 line-clamp-2">
            {skill.description}
          </p>
        </div>
      </div>
    </Link>
  );
}