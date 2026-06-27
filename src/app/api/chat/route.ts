import { streamText } from "ai";
import { createOpenAI } from "@ai-sdk/openai";

export async function POST(req: Request) {
  const { messages, systemPrompt } = await req.json();

  const openai = createOpenAI({
    baseURL: process.env.AI_BASE_URL || "https://api.deepseek.com/v1",
    apiKey: process.env.AI_API_KEY || "",
  });

  const result = streamText({
    model: openai("deepseek-chat"),
    system: systemPrompt,
    messages,
  });

  return result.toUIMessageStreamResponse();
}