---
title: :faded_淡出完成
description: 淡出正常完成时触发的轨道事件
---

<div v-pre>

# :faded_淡出完成

淡出正常完成时触发的轨道事件。（`:faded` 是「淡出结束」——音量淡到目标就触发。）

### 历史

* `v2.29.0`：引入。

### 事件对象属性

*无*

### 示例

```javascript
/* 单个轨道(<AudioTrack>) */
aTrack.on(':faded', (ev) => {
	/* JavaScript 代码 */
});

/* 多个轨道(<AudioRunner>) */
someTracks.on(':faded', (ev) => {
	/* JavaScript 代码 */
});
```

</div>
