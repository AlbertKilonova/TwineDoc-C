<script setup>
import { ref, onMounted } from 'vue'
import { VPTeamMembers } from 'vitepress/theme'

const members = ref([])

onMounted(async () => {
  try {
    // 换成波的仓库名
    const response = await fetch('https://api.github.com/repos/AlbertKilonova/TwineDoc-C/contributors')
    const data = await response.json()
    
    // 把 GitHub 的数据转换成官方组件喜欢的格式
    members.value = data.map(user => ({
      avatar: user.avatar_url,
      name: user.login,
      title: '贡献者',
      links: [
        { icon: 'github', link: user.html_url }
      ]
    }))
  } catch (e) {
    console.error('哎呀，获取名单失败了', e)
  }
})
</script>

## 贡献者名单

<VPTeamMembers :members="members" />