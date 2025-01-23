import type { Site, Page } from './types'

export const loaderAnimation = [
  '.loader',
  { opacity: [1, 0], pointerEvents: 'none' },
  { easing: 'ease-out' },
]

export const LINKS = {
  github: 'https://github.com/ryoma-abe',
  linkedin: 'https://www.linkedin.com/in/ryoma-abe/',
  mail: 'mailto:webchaleur@gmail.com',
  instagram: 'https://www.instagram.com/caj_ink/',
  x: 'https://x.com/ryoo_black',
  discord: 'https://discordapp.com/users/163300027618295808',
}

export const SITE: Site = {
  TITLE: 'りょうのポートフォリオ',
  DESCRIPTION:
    'フリーランスエンジニア りょうのポートフォリオサイトです。Shopify・WordPress・Web制作の実績をご紹介します。',
  AUTHOR: 'りょう',
}

export const WORK: Page = {
  TITLE: '実績',
  DESCRIPTION: 'これまでの制作実績一覧です。',
}

export const BLOG: Page = {
  TITLE: 'ブログ',
  DESCRIPTION: '技術ブログ・お知らせなど。',
}

export const PROJECTS: Page = {
  TITLE: 'プロジェクト',
  DESCRIPTION: '個人開発や参加プロジェクトをご紹介します。',
}

export const SEARCH: Page = {
  TITLE: '検索',
  DESCRIPTION: '記事やプロジェクトを検索できます。',
}

export const SKILLS = {
  LANGUAGES: ['HTML', 'CSS', 'JavaScript', 'TypeScript', 'PHP'],
  FRAMEWORKS: ['React', 'Next.js', 'Astro', 'WordPress', 'Shopify Liquid'],
  TOOLS: ['Git', 'GitHub', 'VSCode', 'Figma', 'Adobe XD'],
  OTHER: ['SEO', 'Web Performance', 'Accessibility', 'UI/UX Design'],
}

export const STUDIES = [
  {
    title: 'Shopifyエンジニア',
    institution: 'デイトラ Shopifyコース',
    link: 'https://samurai-engineer.com/',
    date: '2022年2月',
  },
  {
    title: 'フロントエンドエンジニア',
    institution: 'デイトラ アドバンスコース',
    link: 'https://samurai-engineer.com/',
    date: '2022年4月',
  },
  {
    title: 'WordPress開発',
    institution: '独学',
    link: '#',
    date: '2022年',
  },
]

export const EXPERIENCE = [
  {
    company: 'フリーランス',
    location: '北海道音更町',
    position: 'EC/Webエンジニア',
    start: '2022年',
    end: '現在',
    link: '#',
    tasks: [
      'Shopifyカスタマイズ案件 30件以上',
      'Shopify新規構築案件 20件以上',
      'EC構築(サブスク、会員制、越境EC)',
      '侍エンジニア講師',
      'WordPress制作・カスタマイズ',
      'Web制作・デザイン',
    ],
  },
  {
    company: '陸上自衛隊',
    location: '北海道',
    position: '格闘指導官',
    start: '2011年',
    end: '2022年',
    link: '#',
    tasks: [
      '11年間勤務',
      'リーダーシップ・チームワークを習得',
      '規律・時間管理の重要性を学ぶ',
    ],
  },
]

export const SERVICES = [
  {
    title: 'Shopify構築・カスタマイズ',
    price: '20万円〜',
    duration: '2週間〜',
    description: '要件定義からデザイン、構築まで一貫して対応します。',
  },
  {
    title: 'WordPress制作',
    price: '15万円〜',
    duration: '2週間〜',
    description: 'オリジナルテーマの作成やカスタマイズを行います。',
  },
  {
    title: 'Web制作・デザイン',
    price: '30万円〜',
    duration: '3週間〜',
    description: 'コーポレートサイトやランディングページの制作を承ります。',
  },
]

export const AVAILABILITY = {
  hours: '7:00 - 21:00',
  days: '土日対応可能',
  response: '連絡は1時間以内に返信',
  location: '北海道音更町 (リモート対応)',
}
