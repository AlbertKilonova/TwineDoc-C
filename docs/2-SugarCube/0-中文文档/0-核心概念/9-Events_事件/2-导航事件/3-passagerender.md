---
title: :passagerender_段落渲染后
description: 渲染传入段落之后触发
---

<div v-pre>

# :passagerender_段落渲染后

在渲染传入段落之后触发。（`:passagerender` 是「刚演完」——段落渲染完毕就触发。）

### 历史

* `v2.20.0`：引入。
* `v2.37.0`：把自定义属性移入事件的 `detail` 对象。

### 事件 `detail` 对象属性

* **`content`**：（`HTMLElement`）承载传入段落完全渲染内容的元素。
* **`passage`**：（`Passage`）传入的段落对象。

### 示例

```javascript
$(document).on(':passagerender', (ev) => {
	console.log('passage name:', ev.detail.passage.name);
});
```

修改内容缓冲区：

```javascript
$(document).on(':passagerender', (ev) => {
	$(ev.detail.content).wiki("At the //end// of some renderings.");
});
```

</div>
