---
title: String.count_计数
description: 返回子串在字符串中出现的次数
---

<div v-pre>

# String.count_计数

返回给定子串在字符串中出现的次数，从 `position` 开始搜索。子串搜索区分大小写。（`count()` 是「点人头」——数数子串出现了几次。）

### 语法

```SugarCube
<String>.count(needle [, position])
```

### 参数

* **`needle`**：（`any`）要计数的子串。
* **`position`**：（可选，*整数* `number`）开始搜索的零基索引。省略则默认 `0`。

### 返回值

一个*整数* `number`，表示子串出现的次数。

### 示例

```SugarCube
<<set $text to 'How now, brown cow.'>>

<<set $result to $text.count('ow')>>
/* 返回 4 */
```

</div>
