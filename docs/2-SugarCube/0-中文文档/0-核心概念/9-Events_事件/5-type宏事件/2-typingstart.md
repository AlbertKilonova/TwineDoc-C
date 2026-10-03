---
title: :typingstart_打字开始
description: 打字段落开始时触发的局部事件
---

<div v-pre>

# :typingstart_打字开始

打字段落开始时在打字容器上触发的局部事件。（`:typingstart` 是「开打」——打字机一启动就触发。）

### 历史

* `v2.32.0`：引入。
* `v2.33.0`：改为沿 DOM 树冒泡的局部事件。

### 事件对象属性

*无*

### 示例

```javascript
$(document).on(':typingstart', (ev) => {
	/* JavaScript 代码 */
});
```

</div>
