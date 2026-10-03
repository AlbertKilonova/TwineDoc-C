---
title: :dialogopened_对话框已打开
description: 打开对话框最后一步触发的全局事件
---

<div v-pre>

# :dialogopened_对话框已打开

调用 `Dialog.open()` 打开对话框时的最后一步触发的全局事件。（`:dialogopened` 是「灯亮了之后」——对话框完全打开才触发。）

### 历史

* `v2.29.0`：引入。

### 事件对象属性

*无*

> **注意**：事件从对话框 body 触发，故 `target` 属性指向 `#ui-dialog-body`。

### 示例

```javascript
$(document).on(':dialogopened', (ev) => {
	/* JavaScript 代码 */
});
```

</div>
