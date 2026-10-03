---
title: Fullscreen API_全屏API
description: 访问浏览器的全屏功能
---

<div v-pre>

# Fullscreen API_全屏API

提供对浏览器全屏功能的访问。（`Fullscreen` 是「全屏开关」——一键沉浸，满屏都是你的故事。）

### 全屏背景

如果你希望使用自定义背景（纯色或图片），应将其放在 `body` 元素上。例如：

```css
body {
	background: #111 fixed url("images/background.png") center / contain no-repeat;
}
```

> **警告**：强烈建议不要在 `html` 元素上（除 `body` 之外）放置背景属性，否则可能导致 Internet Explorer 在全屏模式外滚动时背景抖动。
> **警告**：若通过 `background` 简写属性设置背景图，还应同时指定 `background-color` 值（或在其后单独写 `background-color`）。因为 `background` 会重置背景色，若不设置，背景图未覆盖整个视口或含透明部分时，浏览器默认背景色会透出来。

### 全屏限制

`Fullscreen` API 带有一些内置限制：

1. 全屏请求必须由玩家发起（通常通过点击/触摸）——即请求必须是玩家交互的结果。

### 属性

#### Fullscreen.element → `HTMLElement` | `null`

返回当前全屏元素，若全屏模式未激活则返回 `null`。

```plain
Fullscreen.element  → 当前的全屏元素
```

### 方法

#### Fullscreen.isEnabled() → `boolean`

返回全屏是否同时被支持且已启用。

```plain
Fullscreen.isEnabled()  → 全屏模式是否可用
```

#### Fullscreen.isFullscreen() → `boolean`

返回全屏模式当前是否处于活动状态。

```plain
Fullscreen.isFullscreen()  → 全屏模式是否处于活动状态
```

#### Fullscreen.request([options [, requestedEl]]) → `Promise`

请求浏览器进入全屏模式。

* **`options`**：（可选，`Object`）全屏选项对象。
* **`requestedEl`**：（可选，`HTMLElement`）要进入全屏模式的元素。省略则默认整页。

选项对象属性：

* **`navigationUI`**：（`string`）全屏导航 UI 偏好（默认 `"auto"`）。有效值：
  * `"auto"`：无偏好。
  * `"hide"`：请求隐藏浏览器导航 UI，用全屏尺寸显示元素。
  * `"show"`：请求显示浏览器导航 UI，元素可用尺寸会留出 UI 空间。

```javascript
/* 请求进入全屏模式 */
Fullscreen.request();
```

```javascript
/* 显示导航 UI 并以指定元素进入全屏 */
Fullscreen.request({ navigationUI : "show" }, myElement);
```

#### Fullscreen.exit() → `Promise`

请求浏览器退出全屏模式。

```javascript
Fullscreen.exit();
```

#### Fullscreen.toggle([options [, requestedEl]]) → `Promise`

请求浏览器切换全屏模式（按需进入或退出）。

```javascript
Fullscreen.toggle();
```

#### Fullscreen.onChange(handlerFn [, requestedEl])

附加全屏 change 事件处理器。

* **`handlerFn`**：（`Function`）全屏模式改变时要调用的函数。
* **`requestedEl`**：（可选，`HTMLElement`）要附加处理器的元素。

```javascript
Fullscreen.onChange(function (ev) {
	/* 全屏模式改变了,做点什么 */
});
```

#### Fullscreen.offChange([handlerFn [, requestedEl]])

移除全屏 change 事件处理器。

* **`handlerFn`**：（可选，`Function`）要移除的函数。省略则移除所有处理器。

```javascript
Fullscreen.offChange();
```

#### Fullscreen.onError(handlerFn [, requestedEl])

附加全屏 error 事件处理器。

```javascript
Fullscreen.onError(function (ev) {
	/* 全屏出错,做点什么 */
});
```

#### Fullscreen.offError([handlerFn [, requestedEl]])

移除全屏 error 事件处理器。

```javascript
Fullscreen.offError();
```

</div>
