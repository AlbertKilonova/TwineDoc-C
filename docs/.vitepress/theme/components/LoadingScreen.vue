<script setup>
import { animate } from 'motion'
import { isLoading } from '../loading'

function onEnter(el, done) {
  animate(el, { opacity: [0, 1], y: [-8, 0] }, { duration: 0.2, ease: 'easeOut' })
    .finished.then(() => done())
}

function onLeave(el, done) {
  animate(el, { opacity: [1, 0], y: [0, 8] }, { duration: 0.25, ease: 'easeIn' })
    .finished.then(() => done())
}
</script>

<template>
  <Transition :css="false" @enter="onEnter" @leave="onLeave">
    <div v-if="isLoading" class="vp-loading" role="status">
      <div class="vp-loading-card">
        <div class="vp-loading-spinner"></div>
        <p>波正在努力加载喵<span class="dots"><i>.</i><i>.</i><i>.</i></span></p>
      </div>
    </div>
  </Transition>
</template>

<style scoped>
/* 透明背景,只占据内容区(非全屏),卡片让加载动画在亮色/暗色下都可见 */
.vp-loading {
  position: fixed;
  inset: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  padding-left: var(--vp-sidebar-width, 0px);
  background: transparent;
  pointer-events: none;
  z-index: 30;
}
.vp-loading-card {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 14px;
  padding: 22px 30px;
  border-radius: 12px;
  background: var(--vp-c-bg-soft);
  border: 1px solid var(--vp-c-divider);
  box-shadow: var(--vp-shadow-2);
}
.vp-loading-spinner {
  width: 40px;
  height: 40px;
  border: 4px solid var(--vp-c-divider);
  border-top-color: var(--vp-c-brand-1);
  border-radius: 50%;
  animation: vp-spin 0.8s linear infinite;
}
@keyframes vp-spin {
  to { transform: rotate(360deg); }
}
.vp-loading p {
  margin: 0;
  font-size: 0.9rem;
  color: var(--vp-c-text-2);
  letter-spacing: 1px;
}
.dots {
  display: inline-block;
  margin-left: 2px;
}
.dots i {
  display: inline-block;
  font-style: normal;
  animation: vp-bounce 1.4s infinite both;
}
.dots i:nth-child(2) { animation-delay: 0.2s; }
.dots i:nth-child(3) { animation-delay: 0.4s; }
@keyframes vp-bounce {
  0%, 80%, 100% { transform: translateY(0); opacity: 0.2; }
  40% { transform: translateY(-4px); opacity: 1; }
}
</style>
