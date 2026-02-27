<script setup>
import { useData } from 'vitepress'

const { frontmatter } = useData()
</script>

<template>
  <div 
    v-if="frontmatter.layout !== 'home' && frontmatter.title !== '贡献者名单' && frontmatter.giscus !== false" 
    class="giscus-container"
  >
    <component
      :is="'script'"
      src="https://giscus.app/client.js"
      data-repo="AlbertKilonova/TwineDoc-C"
      data-repo-id="R_kgDORQm04g"
      data-category="Announcements"
      data-category-id="DIC_kwDORQm04s4C3Tl0"
      data-mapping="pathname"
      data-strict="0"
      data-reactions-enabled="1"
      data-emit-metadata="0"
      data-input-position="top"
      data-theme="https://twdoc.alkilo.top/giscus.css"
      data-lang="zh-CN"
      data-loading="lazy"
      crossorigin="anonymous"
      async
    />
  </div>
</template>

<style scoped>
.giscus-container {
  margin-top: 24px;
  padding-top: 24px;
  border-top: 1px solid var(--vp-c-divider);
}
</style>
