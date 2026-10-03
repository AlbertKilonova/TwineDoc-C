---
title: Timed_定时
description: 延迟后执行内容,可用 `<<next>>` 串联更多
---

<div v-pre>

# Timed_定时

在给定延迟后执行其内容，把输出插入段落中它的位置。可通过 `<<next>>` 串联更多定时执行。（`<<timed>>` 是「定时炸弹」——设好倒计时，时间一到就「爆炸」出内容。）

### 语法

```SugarCube
<<timed delay [transition|t8n]>> …
	[<<next [delay]>> …]
<</timed>>
```

### 参数

#### `<<timed>>`

* **`delay`**：延迟时间，有效 CSS 时间值。最小延迟 `40ms`。
* **`transition`**：（可选）应用 CSS 过渡。
* **`t8n`**：（可选）`transition` 的别名。

#### `<<next>>`

* **`delay`**：（可选）延迟时间。若省略，使用上一次指定的延迟。

### 示例

```SugarCube
/* 5 秒后插入文字（带过渡） */
I want to go to…<<timed 5s t8n>> WONDERLAND!<</timed>>

/* 10 秒后替换文字 */
I like green eggs and ham!\
<<timed 10s>><<replace "#eggs">>pancakes<</replace>><</timed>>

/* 10 秒后跳转 */
<<timed 10s>><<goto "To the Moon, Alice">><</timed>>

/* 每 2 秒插入一次，共三次（2s、4s、6s） */
<<timed 2s>>Hi! Ho!
`<<next>>`Hi! Ho!
`<<next>>`It's off to work we go!
<</timed>>
```

> **注意**：段落导航会终止所有待执行的定时任务。

</div>
