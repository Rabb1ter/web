import { defineConfig } from 'vitepress'

export default defineConfig({
  lang: 'zh-CN',
  title: 'CISO · 安全最佳实践知识库',
  description: '为信息安全负责人提供行业标准、决策依据、SOP、模板、规则库。',
  head: [
    ['link', { rel: 'preconnect', href: 'https://fonts.googleapis.com' }],
    ['link', { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: '' }],
    [
      'link',
      {
        rel: 'stylesheet',
        href: 'https://fonts.googleapis.com/css2?family=Inter:wght@300;400;600;700&family=Orbitron:wght@400;600&display=swap'
      }
    ]
  ],
  themeConfig: {
    nav: [
      { text: '首页', link: '/' },
      { text: '核心模块', link: '/modules/overview' },
      { text: '规则库', link: '/rules/overview' }
    ],
    sidebar: {
      '/modules/': [
        {
          text: '核心模块',
          items: [
            { text: '总览', link: '/modules/overview' },
            { text: '安全治理体系', link: '/modules/overview#安全治理体系' },
            { text: '安全运营体系', link: '/modules/overview#安全运营体系' },
            { text: '漏洞管理体系', link: '/modules/overview#漏洞管理体系' },
            { text: '账号权限体系', link: '/modules/overview#账号权限体系' },
            { text: '合规与等保体系', link: '/modules/overview#合规与等保体系' },
            { text: '应急响应体系', link: '/modules/overview#应急响应体系' },
            { text: '汇报模板库', link: '/modules/overview#汇报模板库' }
          ]
        }
      ],
      '/rules/': [
        {
          text: 'CISO 智能体规则库',
          items: [
            { text: '总览', link: '/rules/overview' }
          ]
        }
      ]
    },
    search: {
      provider: 'local'
    },
    footer: {
      message: '由 OpenClaw 智能体自动采集、更新、维护。',
      copyright: '© 2026 CISO Knowledge'
    }
  }
})
