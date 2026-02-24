import { defineConfig } from 'vitepress'
import { generateSidebar } from 'vitepress-sidebar'

const fixSidebar = (items, prefix) => {
  return items.map(item => {
    const newItem = { ...item }
    if (newItem.link) {
      let cleanPath = newItem.link.replace(/(\d+-)/g, '').replace(/\.md$/, '')
      if (cleanPath.endsWith('/index')) {
        cleanPath = cleanPath.replace(/\/index$/, '/')
      }
      newItem.link = `/${prefix}/${cleanPath}`.replace(/\/+/g, '/')
    }
    if (newItem.items && newItem.items.length > 0) {
      newItem.items = fixSidebar(newItem.items, prefix)
    }
    return newItem
  })
}

const commonConfig = {
  documentRootPath: 'docs',
  collapsed: true,
  sortMenusOrderNumericallyFromTitle: true,
  prefixSeparator: '-',
  removePrefixAfterOrdering: true,
  useFolderLinkFromIndexFile: true, 
}

export default defineConfig({
  lang: 'zh-cn',
  title: 'Twine Doc-C',
  cleanUrls: true,
  
  head: [
    ['link', { rel: 'icon', href: '/logos/logo.svg' }] 
  ],
  
  rewrites: (id) => {
    return id.replace(/(\d+-)/g, '');
  },

  themeConfig: {
    logo: '/logos/logo.svg',
    
    search: {
      provider: 'local',
      options: {
        translations: {
          button: { buttonText: '搜索文档', buttonAriaLabel: '搜索文档' },
          modal: { noResultsText: '波找不到相关内容呢 xwx', footer: { selectText: '选择', navigateText: '切换' } }
        }
      }
    },
    
    lastUpdated: true,
    
    editLink: {
      pattern: 'https://github.com/AlbertKilonova/TwineDoc-C/edit/main/docs/:path',
      text: '在 GitHub 上编辑此页'
    },
  
    docFooter: {
      prev: '上一页',
      next: '下一页'
    },
    
    nav: [
      { text: '首页', link: '/' },
      { text: 'Harlowe', link: '/Harlowe/' },
      { text: 'SugarCube', link: '/SugarCube/' },
      { text: 'Snowman', link: '/Snowman/' },
      { text: 'Chapbook', link: '/Chapbook/' }
    ],

    sidebar: {
      '/Harlowe/': fixSidebar(generateSidebar({ ...commonConfig, scanStartPath: '1-Harlowe' }), 'Harlowe'),
      '/SugarCube/': fixSidebar(generateSidebar({ ...commonConfig, scanStartPath: '2-SugarCube' }), 'SugarCube'),
      '/Snowman/': fixSidebar(generateSidebar({ ...commonConfig, scanStartPath: '3-Snowman' }), 'Snowman'),
      '/Chapbook/': fixSidebar(generateSidebar({ ...commonConfig, scanStartPath: '4-Chapbook' }), 'Chapbook'),
      '/Guide/': fixSidebar(generateSidebar({ ...commonConfig, scanStartPath: '5-Guide' }), 'Guide'),
      '/Community/': fixSidebar(generateSidebar({ ...commonConfig, scanStartPath: '6-Community' }), 'Community'),
    },
    
    notFound: {
      title: '404 - 迷路啦 qwq',
      quote: '可能是页面被大坏蛋叼走啦，或者是躲起来跟波玩捉迷藏捏！',
      linkText: '事已至此，先回家吧!',
      linkLabel: '回到首页'
    },

    socialLinks: [
      { icon: 'github', link: 'https://github.com/AlbertKilonova/TwineDoc-C' }
    ]
  }
})