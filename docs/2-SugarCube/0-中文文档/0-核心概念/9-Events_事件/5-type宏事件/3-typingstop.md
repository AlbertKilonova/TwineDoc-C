---
title: :typingstop_打字停止
description: 打字段落停止时触发的局部事件
---

<div v-pre>

# :typingstop_打字停止

打字段落停止时在打字容器上触发的局部事件。（`:typingstop` 是「暂停键」——打字机一停就触发。）

### 历史

* `v2.32.0`：引入。
* `v2.33.0`：改为沿 DOM 树冒泡的局部事件。

### 事件对象属性

*无*

### 示例

```javascript
$(document).on(':typingstop', (ev) => {
	/* JavaScript 代码 */
});
```

</div>
