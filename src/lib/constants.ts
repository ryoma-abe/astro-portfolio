import type { Site, Page } from './types'

export const loaderAnimation = [
  '.loader',
  { opacity: [1, 0], pointerEvents: 'none' },
  { easing: 'ease-out' },
]

export const LINKS = {
  github: 'https://github.com/ryoma-abe',
  mail: 'mailto:webchaleur@gmail.com',
  instagram: 'https://www.instagram.com/ryo___book/',
  x: 'https://x.com/ryoo_black',
  blog: 'https://www.ryoma.online/',
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
    link: 'https://www.daily-trial.com/shopify',
    date: '2022年2月',
  },
  {
    title: 'フロントエンドエンジニア',
    institution: 'デイトラ Shopifyアドバンスコース',
    link: 'https://www.daily-trial.com/shopify_advanced',
    date: '2022年4月',
  },
]

export const WORKS = [
  {
    project: 'SNORE512 様',
    position: 'Shopifyエンジニア',
    start: '2024/11',
    end: '2024/12',
    link: 'https://snore512.dog/',
    description: [
      'フレンチブルドッグのコテツくんをモチーフにしたアパレルブランド「SNORE512」のECサイトを構築。オーガニックコットンを使用したアパレル製品やグッズを展開するブランドサイトとして実装しました。Printfulとの連携機能を使用し、商品の在庫管理と配送を実装しています。',
    ],
  },
  {
    project: 'SNORE512 様',
    position: 'Shopifyエンジニア',
    start: '2024/11',
    end: '2024/12',
    link: 'https://snore512.dog/',
    description: [
      'フレンチブルドッグのコテツくんをモチーフにしたアパレルブランド「SNORE512」のECサイトを構築。オーガニックコットンを使用したアパレル製品やグッズを展開するブランドサイトとして実装しました。Printfulとの連携機能を使用し、商品の在庫管理と配送を実装しています。',
    ],
  },
]
