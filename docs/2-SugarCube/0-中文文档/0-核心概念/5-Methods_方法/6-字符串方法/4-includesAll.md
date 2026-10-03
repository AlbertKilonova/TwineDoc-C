---
title: String.includesAll_全包含
description: 返回字符串中是否找到所有给定子串
---

<div v-pre>

# String.includesAll_全包含

返回字符串中是否找到所有给定子串。子串搜索区分大小写。（`includesAll()` 是「全都要」——一个都不能少。）

### 语法

```SugarCube
<String>.includesAll(needles…)
```

### 参数

* **`needles`**：（`string`… | `Array<string>`）要找的子串。可以是列表或子串数组。

### 返回值

一个 `boolean`，表示是否找到所有子串。

### 示例

```SugarCube
<<set $text to 'How now, brown cow.'>>

<<set $result to $text.includesAll('cow', 'row', 'now')>>
/* 返回 true */
```

</div>
