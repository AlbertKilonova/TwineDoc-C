import { defineConfig } from 'vitepress'
import { generateSidebar } from 'vitepress-sidebar'
// https://vitepress.dev/reference/site-config
export default defineConfig({
  lang: 'zh-cn',
  title: 'Twine Doc-C',
  titleTemplate: ':title | Twine Doc',
  description: 'Twine documentation from the Chinese community',
  cleanUrls: true,
  markdown: {
    lineNumbers: true
  },
  themeConfig: {
    nav: [
      { text: '首页', link: '/' },
      { text: 'Harlowe', link: '/1-Harlowe' },
      { text: 'SugarCube', link: '/2-SugarCube' },
      { text: 'Snowman', link: '/3-Snowman' },
      { text: 'Chapbook', link: '/4-Chapbook' }
    ],

    sidebar: generateSidebar({
      documentRootPath: '/docs', // 扫描你的文档目录
      collapsed: true, // 默认折叠
      sortMenusOrderNumericallyFromTitle: true,
      prefixSeparator: '-',
      capitalizeFirst: true,
      removePrefixAfterOrdering: true,
      useFolderLinkFromIndexFile: true,
      // useTitleFromFrontmatter: true
    }),

    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    ]
  }
})
