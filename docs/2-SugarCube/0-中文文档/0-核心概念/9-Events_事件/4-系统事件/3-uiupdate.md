---
title: :uiupdate_UI更新
description: 调用 UI.update() 更新内置 UI 时触发的全局事件
---

<div v-pre>

# :uiupdate_UI更新

调用 `UI.update()` 更新内置用户界面时触发的全局事件。（`:uiupdate` 是「刷新界面」——UI 一更新就触发。）

### 历史

* `v2.37.0`：引入。

### 事件对象属性

*无*

### 示例

```javascript
$(document).on(':uiupdate', (ev) => {
	/* JavaScript 代码 */
});
```

</div>
