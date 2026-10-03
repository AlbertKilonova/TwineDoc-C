---
title: :passageend_段落结束
description: 段落导航结束时触发
---

<div v-pre>

# :passageend_段落结束

在段落导航结束时触发。（`:passageend` 是「散场」——导航流程的最后一步。）

### 历史

* `v2.20.0`：引入。
* `v2.37.0`：把自定义属性移入事件的 `detail` 对象。

### 事件 `detail` 对象属性

* **`passage`**：（`Passage`）传入的段落对象。
* **`content`**：（`HTMLElement`）承载传入段落渲染内容的元素。

### 示例

```javascript
$(document).on(':passageend', (ev) => {
	console.log('passage name:', ev.detail.passage.name);
});
```

</div>
