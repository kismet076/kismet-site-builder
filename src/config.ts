/**
 * 站点全局配置（元信息、导航、社交链接）
 * 修改此处即可同步全站文案与链接。
 */
export const SITE = {
  /** 站名 */
  name: '无限进步',
  /** 作者名 */
  author: '刘克勤',
  /** 主张标语（Hero 主标题） */
  tagline: '把认知变成行动，把行动变成你。',
  /** 站点简介（SEO description / Hero 副文案） */
  description:
    '一个关于认知提升、能力成长与思维方法的个人成长博客。记录把知识落到行动里的真实过程。',
  /** Hero 下方简介 */
  bio: '这里没有速成秘籍，只有被反复验证过、可以立刻上手的方法。每个字都为长期主义而写。',
  /** 核心理念（Hero 底部签名句） */
  corePhilosophy: '成长不是懂得更多，而是成为那个能持续行动的人。',
  /** 联系邮箱 */
  email: 'hello@example.com',
  /** 语言 */
  locale: 'zh-CN',
  /** 占位域名（与 astro.config 中 site 一致） */
  url: 'https://kismet.gold',
} as const;

/** 顶部导航项（4 项 — 像素极客风格，匹配参考图） */
export const NAV = [
  { label: '首页', href: '/' },
  { label: '文章', href: '/blog' },
  { label: '工具', href: '/blog#categories' },
  { label: '关于', href: '/about' },
] as const;

/** 页脚次级导航（联系页放这里保留可发现性） */
export const FOOTER_NAV = [
  { label: '联系', href: '/contact' },
  { label: 'RSS', href: '/rss.xml' },
] as const;

/** 文章三大分类 */
export const CATEGORIES = ['认知提升', '能力成长', '思维方法'] as const;
export type Category = (typeof CATEGORIES)[number];

/**
 * 社交链接（中文平台占位 URL）
 * icon 对应 Lucide 图标：抖音→Music2、小红书→BookOpen、微信→MessageCircle、视频号→MonitorPlay
 */
export const SOCIAL = [
  {
    platform: 'douyin',
    label: '抖音',
    href: 'https://www.douyin.com/',
    icon: 'music2',
  },
  {
    platform: 'xiaohongshu',
    label: '小红书',
    href: 'https://www.xiaohongshu.com/',
    icon: 'bookopen',
  },
  {
    platform: 'wechat',
    label: '微信公众号',
    href: 'https://weixin.qq.com/',
    icon: 'messagecircle',
  },
  {
    platform: 'shipinhao',
    label: '视频号',
    href: 'https://weixin.qq.com/',
    icon: 'monitorplay',
  },
] as const;
export type SocialPlatform = (typeof SOCIAL)[number]['platform'];
