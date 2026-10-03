import DefaultTheme from 'vitepress/theme'
import './custom.css'
import './font-icons.css'
import './vars.css'
import { h, nextTick } from 'vue'
import { animate } from 'motion'
import Giscus from './components/Giscus.vue'
import LoadingScreen from './components/LoadingScreen.vue'
import { startLoading, stopLoading } from './loading'

// 把正文按标题分组:每个标题 + 其后内容(直到下一个标题)作为一块
// 递归展开包裹容器(div),直到找到标题,避免「h1 + 一个大 div」只被当成 1 组
function groupBlocks() {
  if (typeof document === 'undefined') return []
  const doc = document.querySelector('.vp-doc')
  if (!doc) return []

  function collect(container) {
    const out = []
    for (const el of Array.from(container.children)) {
      if (/^H[1-6]$/.test(el.tagName)) {
        out.push(el)
      } else if (el.querySelector && el.querySelector('h1,h2,h3,h4,h5,h6')) {
        out.push(...collect(el))
      } else {
        out.push(el)
      }
    }
    return out
  }

  const blocks = collect(doc)
  const groups = []
  let current = null
  for (const el of blocks) {
    if (/^H[1-6]$/.test(el.tagName)) {
      current = [el]
      groups.push(current)
    } else if (current) {
      current.push(el)
    } else {
      current = [el]
      groups.push(current)
    }
  }
  return groups
}

// 把分组摊平成 [{ el, groupIndex }],按组错峰
function collectBlocks() {
  const blocks = []
  groupBlocks().forEach((group, gi) => {
    for (const el of group) blocks.push({ el, gi })
  })
  return blocks
}

function exitContent() {
  const blocks = collectBlocks()
  if (!blocks.length) return Promise.resolve()
  const anims = blocks.map(({ el, gi }) =>
    animate(el, { opacity: [1, 0], x: [0, 160] }, {
      duration: 0.3, delay: gi * 0.08, ease: 'easeIn'
    })
  )
  return Promise.all(anims.map((a) => a.finished))
}

function enterContent() {
  const blocks = collectBlocks()
  blocks.forEach(({ el, gi }) => {
    animate(el, { opacity: [0, 1], x: [160, 0] }, {
      duration: 0.32, delay: gi * 0.08, ease: [0.22, 1, 0.36, 1]
    })
  })
}

export default {
  extends: DefaultTheme,
  enhanceApp({ router }) {
    let spinnerTimer = null
    let spinnerShown = false

    router.onBeforeRouteChange = async () => {
      // 1. 旧内容按块向右滑出
      await exitContent()
      // 2. 低延迟不显示加载动画:100ms 停顿
      spinnerShown = false
      clearTimeout(spinnerTimer)
      spinnerTimer = setTimeout(() => { startLoading(); spinnerShown = true }, 100)
    }

    router.onAfterRouteChange = async () => {
      clearTimeout(spinnerTimer)
      await nextTick()
      // 3. 淡出加载动画(若显示)
      stopLoading()
      // 4. 新内容按块从右滑入
      const delay = spinnerShown ? 220 : 0
      await new Promise((r) => setTimeout(r, delay))
      enterContent()
    }
  },
  Layout() {
    return h('div', { style: 'display: contents' }, [
      h(DefaultTheme.Layout, null, {
        'doc-after': () => h(Giscus)
      }),
      h(LoadingScreen)
    ])
  }
}
