---
title: Array.includes_包含
description: 返回数组中是否找到给定成员
---

<div v-pre>

# Array.includes_包含

返回数组中是否找到给定成员，从 `position` 开始搜索。（`includes()` 是「找找看」——数组里有没有这个元素。）

### 语法

```SugarCube
<Array>.includes(needle [, position])
```

### 参数

* **`needle`**：（`any`）要找的成员。
* **`position`**：（可选，*整数* `number`）开始搜索的零基索引。省略则默认 `0`。

### 返回值

一个 `boolean`，表示数组中是否找到给定成员。

### 示例

```SugarCube
<<set $pies to ['Blueberry', 'Cherry', 'Cream', 'Pecan', 'Pumpkin']>>

<<set $result to $pies.includes('Cherry')>>
/* 返回 true */
```

</div>
