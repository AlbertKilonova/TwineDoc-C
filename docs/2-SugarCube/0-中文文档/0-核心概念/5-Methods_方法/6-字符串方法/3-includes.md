---
title: String.includes_包含
description: 返回字符串中是否找到给定子串
---

<div v-pre>

# String.includes_包含

返回字符串中是否找到给定子串，从 `position` 开始搜索。子串搜索区分大小写。（`includes()` 是「找找看」——字符串里有没有这段。）

### 语法

```SugarCube
<String>.includes(needle [, position])
```

### 参数

* **`needle`**：（`string`）要找的子串。
* **`position`**：（可选，*整数* `number`）开始搜索的零基索引。省略则默认 `0`。

### 返回值

一个 `boolean`，表示是否找到子串。

### 示例

```SugarCube
<<set $text to 'How now, brown cow.'>>

<<set $result to $text.includes('row')>>
/* 返回 true */
```

</div>
