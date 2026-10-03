import { defineConfig } from 'vitepress'
import { generateSidebar } from 'vitepress-sidebar'
import sugarCubeLanguage from './sugarcube-lang.mjs'

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

// 首屏加载屏:直接把 HTML 注入页面(而非 JS 延迟注入);默认透明,超过 250ms 仍未挂载才淡入,避免快速加载时闪屏
const loadingScreenPlugin = {
  name: 'vp-loading-screen',
  transformIndexHtml(html) {
    return html.replace('</body>', `
<div id="vp-loading" aria-hidden="true">
  <div class="spinner"></div>
  <p>波正在努力加载喵<span class="dots"><i>.</i><i>.</i><i>.</i></span></p>
</div>
<script>
(function () {
  // 同步注入加载屏样式(内联 <style> 会被 Vite 剥离,这里用脚本创建保证首屏即可用)
  var css = '#vp-loading{position:fixed;inset:0;z-index:99999;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:14px;background:#000;opacity:0;transition:opacity .3s ease}#vp-loading.vp-show{opacity:1}#vp-loading .spinner{width:40px;height:40px;border:4px solid #2e3238;border-top-color:#90caf9;border-radius:50%;animation:vp-spin .8s linear infinite}@keyframes vp-spin{to{transform:rotate(360deg)}}#vp-loading p{margin:0;font:500 0.9rem/1.5 system-ui,-apple-system,sans-serif;color:#9ca3af;letter-spacing:1px}#vp-loading .dots{display:inline-block;margin-left:2px}#vp-loading .dots i{display:inline-block;font-style:normal;animation:vp-bounce 1.4s infinite both}#vp-loading .dots i:nth-child(2){animation-delay:.2s}#vp-loading .dots i:nth-child(3){animation-delay:.4s}@keyframes vp-bounce{0%,80%,100%{transform:translateY(0);opacity:.2}40%{transform:translateY(-4px);opacity:1}}';
  var st = document.createElement('style');
  st.textContent = css;
  document.head.appendChild(st);

  var el = document.getElementById('vp-loading');
  if (!el) return;
  var shown = false;
  var showTimer = setTimeout(function () { el.classList.add('vp-show'); shown = true; }, 250);
  function done() {
    clearTimeout(showTimer);
    if (!shown) { el.remove(); return; }
    el.classList.remove('vp-show');
    setTimeout(function () { el.remove(); }, 350);
  }
  var mo = new MutationObserver(function () {
    var app = document.getElementById('app');
    if (app && app.childElementCount > 0) { done(); mo.disconnect(); }
  });
  mo.observe(document.body, { childList: true, subtree: true });
})();
</script>
</body>`)
  }
}

export default defineConfig({
  lang: 'zh-cn',
  title: 'Twine Doc-C',
  cleanUrls: true,
  
  markdown: {
    languages: [sugarCubeLanguage]
  },

  vite: {
    plugins: [loadingScreenPlugin],
    server: {
      allowedHosts: true,
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Private-Network': 'true'
      }
    }
  },
  
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