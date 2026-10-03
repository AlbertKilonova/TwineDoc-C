---
title: :dialogclosed_对话框已关闭
description: 关闭对话框最后一步触发的全局事件
---

<div v-pre>

# :dialogclosed_对话框已关闭

调用 `Dialog.close()` 关闭对话框时的最后一步触发的全局事件。（`:dialogclosed` 是「关灯之后」——对话框关完才触发。）

### 历史

* `v2.29.0`：引入。

### 事件对象属性

*无*

> **注意**：虽无自定义属性，但事件从对话框 body 触发，故 `target` 属性指向其 body 元素（`#ui-dialog-body`）。
> **警告**：`:dialogclosed` 触发时对话框已关闭并重置，无法从对话框本身获取标题/类等信息。若需要这些信息，请改用 `:dialogclosing` 事件。

### 示例

```javascript
/* 每次事件触发时执行处理函数 */
$(document).on(':dialogclosed', (ev) => {
	/* JavaScript 代码 */
});
```

</div>
