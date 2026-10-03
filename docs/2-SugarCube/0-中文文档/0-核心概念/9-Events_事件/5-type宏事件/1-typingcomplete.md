---
title: :typingcomplete_打字完成
description: 段落内所有 `<<type>>` 宏完成时触发的全局事件
---

<div v-pre>

# :typingcomplete_打字完成

段落内所有 `<<type>>` 宏完成时触发的全局事件。（`:typingcomplete` 是「打完收工」——所有打字机都停下才触发。）

### 历史

* `v2.32.0`：引入。

### 事件对象属性

*无*

### 示例

```javascript
$(document).on(':typingcomplete', (ev) => {
	/* JavaScript 代码 */
});
```

> **注意**：在 `:typingcomplete` 触发之后再注入新的 `<<type>>` 宏调用，会再次生成事件（因为创建了新的打字序列）。

</div>
