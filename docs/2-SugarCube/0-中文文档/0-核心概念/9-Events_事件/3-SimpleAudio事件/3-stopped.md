---
title: :stopped_停止播放
description: 调用 stop() 停止播放时触发的轨道事件
---

<div v-pre>

# :stopped_停止播放

调用 `<AudioTrack>.stop()` 或 `<AudioRunner>.stop()` 停止播放时（手动或作为其他流程的一部分）触发的轨道事件。（`:stopped` 是「刹车」——播放一停就触发。）

### 历史

* `v2.29.0`：引入。

### 事件对象属性

*无*

### 示例

```javascript
aTrack.on(':stopped', (ev) => {
	/* JavaScript 代码 */
});
```

> **参见**：原生 `ended` 和 `pause` 事件（有些类似）。

</div>
