import { defineConfig } from 'vitepress'

export default defineConfig({
  lang: 'zh-CN',
  title: 'CISO 智能体 · 安全最佳实践知识库',
  description: '为信息安全负责人提供权威安全知识体系，支持人工查阅与 AI 智能体决策。',
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
      { text: '安全治理', link: '/governance/overview' },
      { text: '安全运营', link: '/operations/overview' },
      { text: '漏洞管理', link: '/vulnerability/overview' },
      { text: '账号权限', link: '/identity/overview' },
      { text: '合规检查', link: '/compliance/overview' },
      { text: '应急响应', link: '/incident/overview' },
      { text: '汇报模板', link: '/templates/overview' },
      { text: '智能体规则', link: '/agent-rules/overview' },
      { text: '搜索', link: '/search/index' }
    ],
    sidebar: {
      '/governance/': [
        {
          text: '安全治理体系',
          items: [
            { text: '总览', link: '/governance/overview' },
            { text: 'CISO 工作框架与职责', link: '/governance/overview#ciso-工作框架与职责' },
            { text: '安全组织架构设计', link: '/governance/overview#安全组织架构设计' },
            { text: '安全制度与策略模板', link: '/governance/overview#安全制度与策略模板' },
            { text: '安全规划与年度计划', link: '/governance/overview#安全规划与年度计划' },
            { text: '安全指标体系（KPI / KR）', link: '/governance/overview#安全指标体系kpi--kr' },
            { text: '风险评估方法论', link: '/governance/overview#风险评估方法论' },
            { text: '安全预算与投入模型', link: '/governance/overview#安全预算与投入模型' }
          ]
        }
      ],
      '/operations/': [
        {
          text: '安全运营体系',
          items: [
            { text: '总览', link: '/operations/overview' },
            { text: '7×24 安全运营流程', link: '/operations/overview#7×24-安全运营流程' },
            { text: '告警降噪与研判规则', link: '/operations/overview#告警降噪与研判规则' },
            { text: '安全运营日报/周报机制', link: '/operations/overview#安全运营日报周报机制' },
            { text: '安全运营 SOP 标准', link: '/operations/overview#安全运营-sop-标准' },
            { text: '工具运维最佳实践', link: '/operations/overview#工具运维最佳实践' },
            { text: '日志集中管理规范', link: '/operations/overview#日志集中管理规范' }
          ]
        }
      ],
      '/vulnerability/': [
        {
          text: '漏洞管理体系',
          items: [
            { text: '总览', link: '/vulnerability/overview' },
            { text: '漏洞扫描规范', link: '/vulnerability/overview#漏洞扫描规范' },
            { text: '漏洞定级标准（高/中/低）', link: '/vulnerability/overview#漏洞定级标准高中低' },
            { text: '漏洞 SLA 与整改时限', link: '/vulnerability/overview#漏洞-sla-与整改时限' },
            { text: '漏洞闭环流程', link: '/vulnerability/overview#漏洞闭环流程' },
            { text: '漏洞通报模板', link: '/vulnerability/overview#漏洞通报模板' },
            { text: '漏洞复盘机制', link: '/vulnerability/overview#漏洞复盘机制' }
          ]
        }
      ],
      '/identity/': [
        {
          text: '账号权限体系',
          items: [
            { text: '总览', link: '/identity/overview' },
            { text: '账号生命周期管理', link: '/identity/overview#账号生命周期管理' },
            { text: '最小权限原则实践', link: '/identity/overview#最小权限原则实践' },
            { text: '特权账号管理规范', link: '/identity/overview#特权账号管理规范' },
            { text: '弱口令治理标准', link: '/identity/overview#弱口令治理标准' },
            { text: '权限审计检查项', link: '/identity/overview#权限审计检查项' },
            { text: '离职账号清理流程', link: '/identity/overview#离职账号清理流程' }
          ]
        }
      ],
      '/compliance/': [
        {
          text: '合规与等保体系',
          items: [
            { text: '总览', link: '/compliance/overview' },
            { text: '等保 2.0 三级检查项', link: '/compliance/overview#等保-20-三级检查项' },
            { text: '零信任建设指南', link: '/compliance/overview#零信任建设指南' },
            { text: '数据分类分级规范', link: '/compliance/overview#数据分类分级规范' },
            { text: '个人信息保护要求', link: '/compliance/overview#个人信息保护要求' },
            { text: '供应链安全管理', link: '/compliance/overview#供应链安全管理' },
            { text: '合规差距分析模板', link: '/compliance/overview#合规差距分析模板' }
          ]
        }
      ],
      '/incident/': [
        {
          text: '应急响应体系',
          items: [
            { text: '总览', link: '/incident/overview' },
            { text: '安全事件分级标准', link: '/incident/overview#安全事件分级标准' },
            { text: '应急响应流程', link: '/incident/overview#应急响应流程' },
            { text: '勒索病毒处置指南', link: '/incident/overview#勒索病毒处置指南' },
            { text: '数据泄露处置流程', link: '/incident/overview#数据泄露处置流程' },
            { text: '应急演练模板', link: '/incident/overview#应急演练模板' },
            { text: '事件报告模板', link: '/incident/overview#事件报告模板' }
          ]
        }
      ],
      '/templates/': [
        {
          text: '安全汇报模板库',
          items: [
            { text: '总览', link: '/templates/overview' },
            { text: 'CISO 周报模板', link: '/templates/overview#ciso-周报模板' },
            { text: '月度安全汇报', link: '/templates/overview#月度安全汇报' },
            { text: '季度风险报告', link: '/templates/overview#季度风险报告' },
            { text: '年度安全工作总结', link: '/templates/overview#年度安全工作总结' },
            { text: '向领导汇报口径', link: '/templates/overview#向领导汇报口径' },
            { text: '等保检查汇报材料', link: '/templates/overview#等保检查汇报材料' }
          ]
        }
      ],
      '/agent-rules/': [
        {
          text: 'CISO 智能体决策规则库',
          items: [
            { text: '总览', link: '/agent-rules/overview' },
            { text: '安全态势评分规则', link: '/agent-rules/overview#安全态势评分规则' },
            { text: '漏洞优先级排序模型', link: '/agent-rules/overview#漏洞优先级排序模型' },
            { text: '告警自动研判规则', link: '/agent-rules/overview#告警自动研判规则' },
            { text: '整改派单与提醒策略', link: '/agent-rules/overview#整改派单与提醒策略' },
            { text: '超期任务升级规则', link: '/agent-rules/overview#超期任务升级规则' },
            { text: '汇报内容生成逻辑', link: '/agent-rules/overview#汇报内容生成逻辑' },
            { text: 'RAG 检索提示词规则', link: '/agent-rules/overview#rag-检索提示词规则' }
          ]
        }
      ],
      '/search/': [
        {
          text: '搜索中心（RAG）',
          items: [
            { text: '总览', link: '/search/index' }
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
