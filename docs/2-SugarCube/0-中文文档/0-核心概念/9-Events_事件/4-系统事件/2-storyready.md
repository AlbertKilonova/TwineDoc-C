---
title: :storyready_故事就绪
description: 启动时加载屏消失前触发一次的全局事件
---

<div v-pre>

# :storyready_故事就绪

启动时加载屏消失前触发一次的全局事件。（`:storyready` 是「开场」——故事就绪，好戏开演。）

### 历史

* `v2.31.0`：引入。

### 事件对象属性

*无*

### 示例

```javascript
$(document).one(':storyready', (ev) => {
	/* JavaScript 代码 */
});
```

</div>
