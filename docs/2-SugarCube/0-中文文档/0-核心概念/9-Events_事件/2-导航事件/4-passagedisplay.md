---
title: :passagedisplay_段落显示后
description: 显示(输出)传入段落之后触发
---

<div v-pre>

# :passagedisplay_段落显示后

在显示（输出）传入段落之后触发。（`:passagedisplay` 是「谢幕」——段落亮相完毕就触发。）

### 历史

* `v2.20.0`：引入。
* `v2.31.0`：新增 `content` 属性。
* `v2.37.0`：把自定义属性移入事件的 `detail` 对象。

### 事件 `detail` 对象属性

* **`content`**：（`HTMLElement`）承载传入段落完全渲染内容的元素。
* **`passage`**：（`Passage`）传入的段落对象。

### 示例

```javascript
$(document).on(':passagedisplay', (ev) => {
	console.log('passage name:', ev.detail.passage.name);
});
```

</div>
