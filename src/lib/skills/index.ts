import { salaryNegotiation } from "./salary";
import { mockInterview } from "./interview";
import { emotionalSupport } from "./emotional";

export interface SkillConfig {
  id: string;
  name: string;
  description: string;
  category: string;
  icon: string;
  systemPrompt: string;
  welcomeMessage: string;
  suggestedQuestions: string[];
}

export const skills: SkillConfig[] = [
  salaryNegotiation,
  mockInterview,
  emotionalSupport,
];

export const categories = [
  { id: "career", name: "职业发展", icon: "💼" },
  { id: "emotional", name: "情绪心理", icon: "💜" },
  { id: "life", name: "生活决策", icon: "🏠" },
  { id: "learning", name: "学习成长", icon: "📚" },
];

export function getSkillById(id: string): SkillConfig | undefined {
  return skills.find((s) => s.id === id);
}

export function getSkillsByCategory(categoryId: string): SkillConfig[] {
  return skills.filter((s) => s.category === categoryId);
}