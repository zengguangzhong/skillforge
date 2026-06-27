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
- **前端框架**：Next.js 14+（App Router，SEO友好）
- **AI SDK**：Vercel AI SDK（支持流式输出）
- **模型**：DeepSeek API（低成本）或 Claude（高质量），后续可切换
- **样式**：Tailwind CSS
- **部署**：Vercel（免费起步，全球CDN）
- **语言**：TypeScript

### 数据来源
- Skills配置（system prompts）硬编码在代码中
- 每个Skill一个配置文件（id、名称、描述、图标、system prompt、欢迎语）

### 项目结构
```
skillforge/
├── app/
│   ├── page.tsx              # 首页（Skills卡片列表）
│   ├── skill/[id]/
│   │   └── page.tsx          # 各Skill对话页
│   └── api/
│       └── chat/
│           └── route.ts      # AI对话API（流式）
├── lib/
│   └── skills/
│       ├── index.ts          # Skills注册表
│       ├── salary.ts         # 谈薪模拟器配置
│       ├── interview.ts      # 面试模拟配置
│       └── ...
├── components/
│   ├── SkillCard.tsx         # 技能卡片
│   ├── ChatInterface.tsx     # 对话界面
│   └── CategorySection.tsx   # 分类区块
├── SPEC.md
├── package.json
└── README.md
```

### 线上地址
- 待定（Vercel部署后获取）

## L3 开发层（踩过什么坑）
- 暂无，项目初始阶段

## 开发计划

### Phase 1：MVP（本周）
1. 初始化Next.js项目
2. 搭建首页Skills卡片布局
3. 实现AI对话API（流式）
4. 实现对话界面
5. 配置2-3个初始Skills（谈薪模拟、面试模拟、情绪陪伴）

### Phase 2：验证（第二周）
1. 部署到Vercel
2. 小红书/抖音引流测试
3. 根据用户反馈调整

### Phase 3：扩展（第三周起）
1. 根据数据决定优先扩哪些Skills
2. 加入更多场景
3. 考虑用户系统/付费功能

### 前提验证
- ✅ 需求验证：小红书/Reddit已有高互动内容证明需求
- ⏳ 技术验证：DeepSeek API成本可控（需测试）
- ⏳ 流量验证：需要实际投放后才知道CTR和留存
