---
title: :dialogopening_对话框正在打开
description: 打开对话框第一步触发的全局事件
---

<div v-pre>

# :dialogopening_对话框正在打开

调用 `Dialog.open()` 打开对话框时的第一步触发的全局事件。（`:dialogopening` 是「开灯之前」——对话框还没开完就触发。）

### 历史

* `v2.29.0`：引入。

### 事件对象属性

*无*

> **注意**：事件从对话框 body 触发，故 `target` 属性指向 `#ui-dialog-body`。

### 示例

```javascript
$(document).on(':dialogopening', (ev) => {
	/* JavaScript 代码 */
});
```

</div>
