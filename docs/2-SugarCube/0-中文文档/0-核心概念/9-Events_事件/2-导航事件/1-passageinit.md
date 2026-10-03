---
title: :passageinit_段落初始化
description: 修改状态历史之前触发
---

<div v-pre>

# :passageinit_段落初始化

在修改状态历史之前触发。（`:passageinit` 是「起跑线」——段落导航的第一步。）

### 历史

* `v2.20.0`：引入。
* `v2.37.0`：把自定义属性移入事件的 `detail` 对象。

### 事件 `detail` 对象属性

* **`passage`**：（`Passage`）传入的段落对象。参见 `Passage` API。

### 示例

```javascript
$(document).on(':passageinit', (ev) => {
	console.log('passage name:', ev.detail.passage.name);
	console.log('passage tags:', ev.detail.passage.tags);
});
```

</div>
