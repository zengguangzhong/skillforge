import { skills, categories } from "@/lib/skills";
import { CategorySection } from "@/components/CategorySection";

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      {/* Hero */}
      <section className="border-b border-gray-100">
        <div className="max-w-5xl mx-auto px-6 py-20 text-center">
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-gray-900">
            SkillForge
          </h1>
          <p className="mt-4 text-lg text-gray-500">
            你的AI生活技能导师 — 谈薪、面试、情绪陪伴，点击即用
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            {categories.map((cat) => (
              <a
                key={cat.id}
                href={`#${cat.id}`}
                className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-gray-50 text-sm text-gray-600 hover:bg-gray-100 transition-colors"
              >
                <span>{cat.icon}</span>
                {cat.name}
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Grid */}
      <div className="max-w-5xl mx-auto px-6 py-16">
        {categories.map((cat) => (
          <CategorySection
            key={cat.id}
            id={cat.id}
            name={cat.name}
            icon={cat.icon}
            skills={skills.filter((s) => s.category === cat.id)}
          />
        ))}
      </div>

      {/* Footer */}
      <footer className="border-t border-gray-100">
        <div className="max-w-5xl mx-auto px-6 py-8 text-center text-sm text-gray-400">
          SkillForge — 免费·免登录·AI生活技能平台
        </div>
      </footer>
    </main>
  );
}