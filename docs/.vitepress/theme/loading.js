import { ref } from 'vue'

// 全局加载状态(路由切换时使用)
export const isLoading = ref(false)

export function startLoading() {
  isLoading.value = true
}

export function stopLoading() {
  isLoading.value = false
}
