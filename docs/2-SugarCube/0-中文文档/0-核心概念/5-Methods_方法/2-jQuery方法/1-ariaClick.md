---
title: jQuery.ariaClick_无障碍点击
description: 让元素成为 WAI-ARIA 兼容的可点击元素
---

<div v-pre>

# jQuery.ariaClick_无障碍点击

让目标元素成为 WAI-ARIA 兼容的可点击元素——设置各种无障碍属性，且除鼠标点击外，回车和空格键也能激活它们。返回当前 `jQuery` 实例引用以便链式调用。（`ariaClick()` 是「无障碍改造」——让键盘党也能愉快点击。）

### 语法

```SugarCube
<jQuery>.ariaClick([options ,] handler)
```

### 参数

* **`options`**：（可选，`Object`）创建可点击元素时使用的选项。可选属性：`namespace`（事件命名空间）、`one`（是否一次性）、`selector`（过滤后代的选择器）、`data`（传给处理器的数据）、`tabindex`（默认 `0`）、`controls`、`pressed`、`label`。
* **`handler`**：（`Function`）目标元素被激活时调用的回调。

### 返回值

当前 `jQuery` 实例。

### 示例

```javascript
// 给定元素：<a id="so-clicky">Click me</a>
$('#so-clicky').ariaClick((event) => {
	/* 做点什么 */
});

// 创建带选项的链接并追加到 output 元素
$('<a>Click me</a>')
	.ariaClick({ one : true, label : 'This single-use link does stuff.' }, (event) => {
		/* 做点什么 */
	})
	.appendTo(output);
```

</div>
