---
title: :enginerestart_引擎重启
description: 页面重载前触发一次的全局事件
---

<div v-pre>

# :enginerestart_引擎重启

调用 `Engine.restart()` 时，页面重载前触发一次的全局事件。（`:enginerestart` 是「重启前」——引擎要重启了，赶紧收尾。）

### 历史

* `v2.23.0`：引入。

### 事件对象属性

*无*

### 示例

```javascript
$(document).one(':enginerestart', (ev) => {
	/* JavaScript 代码 */
});
```

</div>
