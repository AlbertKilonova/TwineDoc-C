---
title: :passagestart_段落开始
description: 渲染传入段落之前触发
---

<div v-pre>

# :passagestart_段落开始

在渲染传入段落之前触发。（`:passagestart` 是「开演前」——段落还没渲染就触发。）

### 历史

* `v2.20.0`：引入。
* `v2.37.0`：把自定义属性移入事件的 `detail` 对象。

### 事件 `detail` 对象属性

* **`content`**：（`HTMLElement`）当前为空的元素，最终将承载传入段落的渲染内容。
* **`passage`**：（`Passage`）传入的段落对象。

### 示例

```javascript
$(document).on(':passagestart', (ev) => {
	console.log('passage name:', ev.detail.passage.name);
});
```

修改内容缓冲区：

```javascript
$(document).on(':passagestart', (ev) => {
	$(ev.detail.content).wiki("In the //beginning//.");
});
```

</div>
