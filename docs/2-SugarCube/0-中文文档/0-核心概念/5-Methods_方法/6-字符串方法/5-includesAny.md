---
title: String.includesAny_任一包含
description: 返回字符串中是否找到任一给定子串
---

<div v-pre>

# String.includesAny_任一包含

返回字符串中是否找到任一给定子串。子串搜索区分大小写。（`includesAny()` 是「有一个就行」——找到任意一个就算数。）

### 语法

```SugarCube
<String>.includesAny(needles…)
```

### 参数

* **`needles`**：（`string`… | `Array<string>`）要找的子串。可以是列表或子串数组。

### 返回值

一个 `boolean`，表示是否找到任一子串。

### 示例

```SugarCube
<<set $text to 'How now, brown cow.'>>

<<set $result to $text.includesAny('bird', 'row', 'then')>>
/* 返回 true */
```

</div>
