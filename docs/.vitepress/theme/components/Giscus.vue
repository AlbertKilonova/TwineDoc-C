<script setup>
import { onMounted, ref } from 'vue'
import { useData } from 'vitepress'

const { frontmatter } = useData()

// 主题 CSS 跟随当前域名(dev 用 localhost,生产用正式域名)
const themeUrl = ref('')
onMounted(() => {
  themeUrl.value = `${window.location.origin}/giscus.css`
})
</script>

<template>
  <div
    v-if="frontmatter.layout !== 'home' && frontmatter.title !== '贡献者名单' && frontmatter.giscus !== false"
    class="giscus-container"
  >
    <div class="giscus-title">
      <span class="giscus-title-bar"></span>
      评论
    </div>
    <component
      v-if="themeUrl"
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
      :data-theme="themeUrl"
      data-lang="zh-CN"
      data-loading="lazy"
      crossorigin="anonymous"
      async
    />
  </div>
</template>

<style scoped>
.giscus-container {
  margin-top: 40px;
  padding-top: 28px;
  border-top: 1px solid var(--vp-c-divider);
}
.giscus-title {
  display: flex;
  align-items: center;
  gap: 10px;
  margin-bottom: 20px;
  font-size: 1.05rem;
  font-weight: 600;
  color: var(--vp-c-text-1);
  letter-spacing: 0.5px;
}
.giscus-title-bar {
  width: 4px;
  height: 18px;
  border-radius: 2px;
  background: linear-gradient(var(--vp-c-brand-1), var(--vp-c-brand-3));
}
</style>
