---
title: Type_打字机
description: 逐字输出内容,模拟打字机效果
---

<div v-pre>

# Type_打字机

一次一个字符（严格说是一个码点）地输出其内容，模拟电传打字机/打字机。能打大部分内容：链接、标记、宏等。（`<<type>>` 是老式打字机的灵魂附体——「哒哒哒」逐字蹦字，复古感拉满。）

### 语法

```SugarCube
<<type speed [start delay] [class classes] [element tag] [id ID] [keep|none] [skipkey key]>>
	…
<</type>>
```

### 参数

* **`speed`**：字符打字速率，使用有效的 CSS 时间值——例如 `1s` 和 `40ms`。`20–60ms` 是不错的起点。`0s` 和 `0ms` 会让打字立即完成。
* **`start` *`delay`***：（可选）打字开始前的延迟时间，使用有效的 CSS 时间值——例如 `5s` 和 `500ms`。若省略，默认 `400ms`。
* **`class` *`classes`***：（可选）添加到打字容器上的类列表（空格分隔）。
* **`element` *`tag`***：（可选）用作打字容器的元素——例如 `div` 和 `span`。若省略，默认 `div`。
* **`id` *`ID`***：（可选）分配给打字容器的唯一 ID。
* **`keep`**：（可选）关键字，表示打字完成后保留光标。
* **`none`**：（可选）关键字，表示完全不使用光标。
* **`skipkey`**：（可选）用于让打字立即完成的按键。若省略，默认使用 `Config.macros.typeSkipKey` 的值。

### 示例

```SugarCube
<<type 40ms>>
	每 40 毫秒打一个字符。包括 [[链接]] 和 ''其他标记''！
<</type>>

<<type 40ms start 2s>>
	每 40 毫秒打一个字符，延迟 2 秒后开始。
<</type>>

<<type 40ms class "foo bar">>
	每 40 毫秒打一个字符，给打字容器添加类。
<</type>>

<<type 40ms element "span">>
	每 40 毫秒打一个字符，用  作为打字容器。
<</type>>

<<type 40ms id "type01">>
	每 40 毫秒打一个字符，给打字容器分配 ID。
<</type>>

<<type 40ms keep>>
	每 40 毫秒打一个字符，完成后保留光标。
<</type>>

<<type 40ms skipkey "Control">>
	每 40 毫秒打一个字符，用 Control（CTRL）键作为跳过键。
<</type>>
```

### CSS 样式

打出的文字没有默认样式。想改字体或颜色，需要修改 `macro-type` 类的样式。例如：

```css
.macro-type {
	color: limegreen;
	font-family: monospace, monospace;
}
```

还有一个 `macro-type-done` 类，会加到已打完的文字上，可用它与正在打的文字做区分。

默认光标是块状字符 **右半块（U+2590）**，没有默认字体或颜色。想改字体、颜色或字符，需要修改 `macro-type-cursor` 类 `:after` 伪元素的样式。例如：

```css
.macro-type-cursor:after {
	color: limegreen;
	content: "\269C\FE0F"; /* 鸢尾花 emoji */
	font-family: monospace, monospace;
}
```

> **警告**：与那些「只在外部动作或一段时间后才注入内容」的宏或代码交互（如 `<<linkreplace>>`、`<<timed>>` 等）时，表现可能符合也可能不符合预期。**强烈**建议测试。

</div>
