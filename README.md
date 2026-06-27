# SkillForge — AI生活技能导师平台

一个免费的AI生活技能网站，用户点进来就能直接跟AI对话，解决工作和生活中的具体问题——谈薪、面试、情绪陪伴等。

## 特点
- 免费·免登录·点击即用
- 中文场景，针对国内生活痛点
- AI实时对话，扮演专业角色

## 技术栈
- Next.js 16（App Router）
- TypeScript + Tailwind CSS
- Vercel AI SDK v7
- DeepSeek API（可切换其他 OpenAI 兼容接口）

## 快速开始

```bash
cp .env.example .env.local  # 填入 API Key
npm run dev
```

打开 http://localhost:3000

## 项目结构

```
src/
├── app/
│   ├── page.tsx              # 首页（Skills卡片列表）
│   ├── skill/[id]/page.tsx   # 各Skill对话页
│   └── api/chat/route.ts     # AI对话API（流式）
├── components/
│   ├── SkillCard.tsx         # 技能卡片
│   ├── ChatInterface.tsx     # 对话界面
│   └── CategorySection.tsx   # 分类区块
└── lib/skills/               # Skills配置（system prompts）
```
