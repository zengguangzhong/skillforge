# SkillForge — AI生活技能导师平台

## L1 产品层（做什么、不做什么）

### 一句话定位
一个免费的AI生活技能网站，用户点进来就能直接跟AI对话，解决工作和生活中的具体问题——谈薪、面试、情绪陪伴、租房谈判等。

### 用户痛点
- 普通人面对真实生活问题不知道怎么处理（谈薪、租房、面试、情绪管理）
- ChatGPT能帮忙但需要自己写prompt，大部分人不会
- 市场上缺少针对中文具体生活场景的AI指导工具

### 核心功能
1. **Skills卡片首页** — 分类展示所有可用技能，点击即用
2. **AI对话界面** — 每个Skill点进去是一个AI对话页面，AI扮演专业角色
3. **免登录使用** — MVP阶段不需要注册，打开即用

### 明确不做的（MVP阶段）
- 不做用户注册/登录系统
- 不做付费功能
- 不做用户数据存储
- 不做移动端App
- 不做UGC/用户提交Skills

### 界面布局
- 首页：Hero区 + Skills分类卡片网格
- 对话页：全屏对话框 + 左侧场景说明 + 右侧对话区
- 简洁、现代、移动端友好

## L2 方案层（怎么做）

### 技术栈
- **前端框架**：Next.js 16（App Router，Turbopack）
- **AI SDK**：Vercel AI SDK v7（`ai` + `@ai-sdk/react` + `@ai-sdk/openai`）
- **模型**：DeepSeek API（低成本，OpenAI兼容接口），后续可切换
- **样式**：Tailwind CSS v4
- **部署**：Vercel
- **语言**：TypeScript

### 数据来源
- Skills配置（system prompts）硬编码在代码中
- 每个Skill一个配置文件（id、名称、描述、图标、system prompt、欢迎语）

### 项目结构
```
skillforge/
├── src/
│   ├── app/
│   │   ├── page.tsx              # 首页（Skills卡片列表）
│   │   ├── layout.tsx           # 全局布局
│   │   ├── skill/[id]/
│   │   │   └── page.tsx          # 各Skill对话页（SSG）
│   │   └── api/chat/
│   │       └── route.ts          # AI对话API（流式）
│   ├── components/
│   │   ├── SkillCard.tsx         # 技能卡片
│   │   ├── ChatInterface.tsx     # 对话界面（含建议问题、加载动画）
│   │   └── CategorySection.tsx   # 分类区块
│   └── lib/skills/
│       ├── index.ts              # Skills注册表 + 分类定义
│       ├── salary.ts             # 谈薪模拟器
│       ├── interview.ts          # 面试模拟器
│       └── emotional.ts          # 情绪树洞
├── SPEC.md
├── README.md
├── .env.example
└── package.json
```

### 线上地址
- https://skillforge-lake-nine.vercel.app
- GitHub 仓库：https://github.com/zengguangzhong/skillforge

## L3 开发层（踩过什么坑）

### ai v7 SDK 的 Breaking Changes（2026-06-27）
- `ai/react` 不再存在，必须从 `@ai-sdk/react` 导入 `useChat`
- `useChat` API 大改：没有 `input`/`handleInputChange`/`handleSubmit` 了，改用 `sendMessage` + 自己管理 input state
- `UIMessage` 没有 `content` 字段了，用 `parts: [{ type: "text", text: "..." }]` 替代
- `streamText` 的返回值没有 `toDataStreamResponse()`，改为 `toUIMessageStreamResponse()`
- `useChat` 的泛型类型推断会根据初始 messages 缩窄 role 类型，需要显式传 `<UIMessage>` 泛型
- `body`（如 systemPrompt）从顶层移到 `DefaultChatTransport` 配置里

### Next.js 16 的 params 变化
- `params` 现在是 `Promise`，需要 `await params` 解构

## 开发计划

### Phase 1：MVP ✅（2026-06-27 完成）
1. ✅ 初始化Next.js项目（Next.js 16 + Turbopack）
2. ✅ 搭建首页Skills卡片布局（分类导航 + 卡片网格）
3. ✅ 实现AI对话API（流式，DeepSeek/OpenAI兼容）
4. ✅ 实现对话界面（流式输出、建议问题、加载动画）
5. ✅ 配置3个初始Skills（谈薪模拟、面试模拟、情绪树洞）
6. ✅ Build 通过，Git 提交
7. ✅ 推送到 GitHub（zengguangzhong/skillforge）
8. ✅ 部署到 Vercel（skillforge-lake-nine.vercel.app）

### Phase 2：联调验证（待进行）
1. ⏳ 配置 DeepSeek API Key 到 Vercel 环境变量
2. ⏳ 线上对话功能验证
3. ⏳ 小红书/抖音引流测试
4. ⏳ 根据用户反馈调整

### Phase 3：扩展（第三周起）
1. 根据数据决定优先扩哪些Skills
2. 加入更多场景（从26个候选Skills中选择）
3. 考虑用户系统/付费功能
4. SEO优化

### 前提验证
- ✅ 需求验证：小红书/Reddit已有高互动内容证明需求
- ⏳ 技术验证：DeepSeek API成本可控（需配置Key后测试）
- ⏳ 流量验证：需要实际投放后才知道CTR和留存

### 候选Skills库
- 位置：`content-creation-system/workspace/0_ideas/AI生活技能平台-素材库-高质量Skills收集.md`
- 共26个Skills，覆盖8大领域（职业/财务/情绪/人际/决策/学习/生活/懒人包）
