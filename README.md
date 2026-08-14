# 无限进步 · 刘克勤的个人独立站

> 把认知变成行动，把行动变成你。

基于 Astro 5.x + Tailwind CSS v4 构建的像素风静态站点，部署于腾讯云 CloudBase。

## 技术栈

- **框架**: Astro 5.x (静态生成)
- **样式**: Tailwind CSS v4 (`@tailwindcss/vite`)
- **字体**: Press Start 2P + VT323 (像素风) + Inter / Noto Sans SC (中文回退)
- **部署**: 腾讯云 CloudBase 静态托管
- **域名**: [kismet.gold](https://kismet.gold)

## 本地开发

```bash
npm install
npm run dev      # 本地预览 http://localhost:4321
npm run build    # 构建到 dist/
```

## 项目结构

```
src/
├── components/     # 组件 (Header, Footer, PostCard, SocialLinks 等)
├── content/blog/   # Markdown 博客文章
├── layouts/        # 布局 (BaseLayout, PageLayout, PostLayout)
├── pages/          # 页面路由 (index, about, contact, blog, 404)
├── styles/         # 全局样式 (global.css)
├── config.ts       # 站点配置 (站名、作者、导航、社交链接)
└── content.config.ts
```

## 部署

```bash
npm run build
# 使用 CloudBase CLI 部署
tcb hosting deploy ./dist -e personalgeo01-d9gihrqk88ec1270c
```

## License

MIT
