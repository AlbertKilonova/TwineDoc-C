---
title: 贡献者名单
description: 感谢所有为 Twine Doc-C 做出贡献的开发者们
aside: false
lastUpdated: false
---

<script setup>
// Vue 3组合式API
import { ref, onMounted } from 'vue'
// VitePress主题组件
import { VPTeamMembers } from 'vitepress/theme'

// 响应式数据
const members = ref([])      // 存储贡献者列表
const loading = ref(true)    // 加载状态

// 组件挂载后执行
onMounted(async () => {
  try {
    // 从GitHub API获取贡献者数据
    const response = await fetch('https://api.github.com/repos/AlbertKilonova/TwineDoc-C/contributors')
    const data = await response.json()
    
    // 映射数据格式，适配VPTeamMembers组件
    members.value = data.map(user => ({
      avatar: user.avatar_url,      // GitHub头像
      name: user.login,              // 用户名
      title: 'Twine Doc-C Contributor', // 贡献者标题
      links: [
        { icon: 'github', link: user.html_url } // GitHub链接
      ]
    }))
  } catch (e) {
    console.error('获取名单失败了 qwq', e)
  } finally {
    loading.value = false  // 结束加载状态
  }
})
</script>

<!-- 页面内容开始 -->
<div class="contributors-container">
  <!-- 页头部分 -->
  <div class="header-section">
    <h1 class="main-title">贡献者名单</h1>
    <p class="subtitle">感谢所有为中文社区添砖加瓦的朋友们，每一份努力都闪闪发光！</p>
  </div>

  <!-- 加载状态显示 -->
  <div v-if="loading" class="loading-box">
    <div class="loader"></div>
    <p>正在努力加载名单中，请稍等片刻哦...</p>
  </div>

  <!-- 加载完成显示贡献者 -->
  <div v-else class="members-wrapper">
    <!-- VitePress团队组件，显示贡献者卡片 -->
    <VPTeamMembers :members="members" />
  </div>

  <!-- 页脚提示 -->
  <div class="footer-note">
    <p>想出现在这里吗？欢迎前往 GitHub 提交 Pull Request！</p>
  </div>
</div>

<style scoped>
/* 主容器样式 */
.contributors-container {
  padding: 60px 20px;
  text-align: center;
  max-width: 1100px;
  margin: 0 auto;
}

/* 渐变标题样式 */
.main-title {
  font-size: 2.8rem;
  font-weight: 800;
  margin-bottom: 12px;
  background: linear-gradient(135deg, var(--vp-c-brand-1) 0%, var(--vp-c-tip-1) 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  border: none;
}

/* 副标题样式 */
.subtitle {
  font-size: 1.2rem;
  color: var(--vp-c-text-2);
  margin-bottom: 50px;
  letter-spacing: 0.5px;
}

/* 加载状态样式 */
.loading-box {
  padding: 80px;
  color: var(--vp-c-brand-1);
}

/* 加载动画 */
.loader {
  border: 4px solid var(--vp-c-bg-soft);
  border-top: 4px solid var(--vp-c-brand-1);
  border-radius: 50%;
  width: 45px;
  height: 45px;
  animation: spin 0.8s cubic-bezier(0.4, 0, 0.2, 1) infinite;
  margin: 0 auto 24px;
}

/* 旋转动画关键帧 */
@keyframes spin {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}

/* 贡献者卡片容器 */
.members-wrapper {
  background: var(--vp-c-bg-alt);
  border-radius: 24px;
  padding: 40px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.04);
}

/* 深度选择器修改VitePress组件样式 */
/* 贡献者头像样式 */
:deep(.VPTeamMembersItem .avatar) {
  border-radius: 20px !important;
  transition: transform 0.3s ease;
}

/* 悬停效果 */
:deep(.VPTeamMembersItem:hover .avatar) {
  transform: scale(1.05) translateY(-5px);
}

/* 页脚样式 */
.footer-note {
  margin-top: 60px;
  font-size: 0.95rem;
  color: var(--vp-c-text-3);
  font-style: italic;
  opacity: 0.8;
}
</style>