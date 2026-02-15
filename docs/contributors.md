---
title: 贡献者名单
description: 感谢所有为 Twine Doc-C 做出贡献的开发者们
aside: false
lastUpdated: false
---

<script setup>
import { ref, onMounted } from 'vue'
import { VPTeamMembers } from 'vitepress/theme'

const members = ref([])
const loading = ref(true)

onMounted(async () => {
  try {
    const response = await fetch('https://api.github.com/repos/AlbertKilonova/TwineDoc-C/contributors')
    const data = await response.json()
    
    members.value = data.map(user => ({
      avatar: user.avatar_url,
      name: user.login,
      title: 'Twine Doc-C Contributor',
      links: [
        { icon: 'github', link: user.html_url }
      ]
    }))
  } catch (e) {
    console.error('获取名单失败了 qwq', e)
  } finally {
    loading.value = false
  }
})
</script>

<div class="contributors-container">
  <div class="header-section">
    <h1 class="main-title">贡献者名单</h1>
    <p class="subtitle">感谢所有为中文社区添砖加瓦的朋友们，每一份努力都闪闪发光！</p>
  </div>

  <div v-if="loading" class="loading-box">
    <div class="loader"></div>
    <p>正在努力加载名单中，请稍等片刻哦...</p>
  </div>

  <div v-else class="members-wrapper">
    <VPTeamMembers :members="members" />
  </div>

  <div class="footer-note">
    <p>想出现在这里吗？欢迎前往 GitHub 提交 Pull Request！</p>
  </div>
</div>

<style scoped>
.contributors-container {
  padding: 60px 20px;
  text-align: center;
  max-width: 1100px;
  margin: 0 auto;
}

.main-title {
  font-size: 2.8rem;
  font-weight: 800;
  margin-bottom: 12px;
  /* 换成阿波喜欢的 MD 蓝绿渐变 */
  background: linear-gradient(135deg, var(--vp-c-brand-1) 0%, var(--vp-c-tip-1) 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  border: none;
}

.subtitle {
  font-size: 1.2rem;
  color: var(--vp-c-text-2);
  margin-bottom: 50px;
  letter-spacing: 0.5px;
}

.loading-box {
  padding: 80px;
  color: var(--vp-c-brand-1);
}

.loader {
  border: 4px solid var(--vp-c-bg-soft);
  border-top: 4px solid var(--vp-c-brand-1);
  border-radius: 50%;
  width: 45px;
  height: 45px;
  animation: spin 0.8s cubic-bezier(0.4, 0, 0.2, 1) infinite;
  margin: 0 auto 24px;
}

@keyframes spin {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}

.members-wrapper {
  /* 配合 MD 风格，背景稍微淡一点，更有层次感 */
  background: var(--vp-c-bg-alt);
  border-radius: 24px;
  padding: 40px;
  /* 加一点点非常轻微的投影，模拟 MD 的海拔感 */
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.04);
}

/* 让 TeamMembers 的头像也带一点 MD 圆角感 */
:deep(.VPTeamMembersItem .avatar) {
  border-radius: 20px !important;
  transition: transform 0.3s ease;
}

:deep(.VPTeamMembersItem:hover .avatar) {
  transform: scale(1.05) translateY(-5px);
}

.footer-note {
  margin-top: 60px;
  font-size: 0.95rem;
  color: var(--vp-c-text-3);
  font-style: italic;
  opacity: 0.8;
}
</style>
