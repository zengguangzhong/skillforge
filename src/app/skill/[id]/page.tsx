import { skills } from "@/lib/skills";
import { ChatInterface } from "@/components/ChatInterface";
import { notFound } from "next/navigation";

export async function generateStaticParams() {
  return skills.map((s) => ({ id: s.id }));
}

export default async function SkillPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const skill = skills.find((s) => s.id === id);
  if (!skill) notFound();
  return <ChatInterface skill={skill} />;
}
