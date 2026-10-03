---
title: Repeat_重复
description: 延迟后反复执行内容,可被 `<<stop>>` 终止
---

<div v-pre>

# Repeat_重复

在给定延迟后反复执行其内容，把输出插入段落中它的位置。可用 `<<stop>>` 宏终止。（`<<repeat>>` 是「复读机 Pro」——每隔一段时间就重复一次，直到你用 `<<stop>>` 让它闭嘴。）

### 语法

```SugarCube
<<repeat delay [transition|t8n]>> … <</repeat>>
```

### 参数

* **`delay`**：延迟时间，有效 CSS 时间值——例如 `5s` 和 `500ms`。最小延迟 `40ms`。
* **`transition`**：（可选）关键字，表示应用 CSS 过渡。
* **`t8n`**：（可选）关键字，是 `transition` 的别名。

### 示例

倒计时器：

```SugarCube
<<set $seconds to 10>>\
倒计时：还剩 $seconds 秒!\
`<<silent>>`
	<<repeat 1s>>
		<<set $seconds to $seconds - 1>>
		<<if $seconds gt 0>>
			<<replace "#countdown">>还剩 $seconds 秒<</replace>>
		`<<else>>`
			<<replace "#countdown">>时间到<</replace>>
			/* 这里做点有用的事 */
			`<<stop>>`
		<</if>>
	<</repeat>>
<</silent>>
```

> **注意**：段落导航会终止所有待执行的定时任务。

</div>
