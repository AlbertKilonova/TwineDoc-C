---
title: :dialogclosing_对话框正在关闭
description: 关闭对话框第一步触发的全局事件
---

<div v-pre>

# :dialogclosing_对话框正在关闭

调用 `Dialog.close()` 关闭对话框时的第一步触发的全局事件。（`:dialogclosing` 是「关灯之前」——对话框还没关完就触发。）

### 历史

* `v2.29.0`：引入。

### 事件对象属性

*无*

> **注意**：事件从对话框 body 触发，故 `target` 属性指向 `#ui-dialog-body`。

### 示例

```javascript
$(document).on(':dialogclosing', (ev) => {
	/* JavaScript 代码 */
});
```

</div>
