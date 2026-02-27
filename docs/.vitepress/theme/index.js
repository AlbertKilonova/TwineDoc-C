import DefaultTheme from 'vitepress/theme'
import './custom.css'
import './vars.css'
import { h } from 'vue'
import Giscus from './components/Giscus.vue'

export default {
  extends: DefaultTheme,
  Layout() {
    return h(DefaultTheme.Layout, null, {
      'doc-after': () => h(Giscus)
    })
  }
}