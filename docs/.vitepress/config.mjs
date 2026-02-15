import { defineConfig } from 'vitepress'
import { generateSidebar } from 'vitepress-sidebar'
// https://vitepress.dev/reference/site-config
export default defineConfig({
  lang: 'zh-cn',
  title: 'Twine Doc-C',
  titleTemplate: ':title | Twine Doc',
  description: 'Twine documentation from the Chinese community',
  cleanUrls: true,
  rewrites: {
    // 这行正则的意思是：匹配 开头是数字和横杠 的路径，并把数字横杠删掉
    ':p(\\d+-):name(.+)': ':name'
  },
  markdown: {
    lineNumbers: true
  },
  themeConfig: {
    nav: [
      { text: '首页', link: '/' },
      { text: 'Harlowe', link: '/Harlowe' },
      { text: 'SugarCube', link: '/SugarCube' },
      { text: 'Snowman', link: '/Snowman' },
      { text: 'Chapbook', link: '/Chapbook' }
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
      { icon: 'github', link: 'https://github.com/AlbertKilonova/TwineDoc-C' }
    ]
  }
})
