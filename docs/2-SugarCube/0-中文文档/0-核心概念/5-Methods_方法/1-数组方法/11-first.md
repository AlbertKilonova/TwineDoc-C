---
title: Array.first_首个成员
description: 返回数组的第一个成员,不修改原数组
---

<div v-pre>

# Array.first_首个成员

返回数组的第一个成员。不修改原数组。（`first()` 是「拿第一个」——队首是谁，一目了然。）

### 语法

```SugarCube
<Array>.first()
```

### 参数

*无*

### 返回值

第一个成员的值（`any`）。

### 示例

```SugarCube
/* 给定： */
<<set $pies to ['Blueberry', 'Cherry', 'Cream', 'Pecan', 'Pumpkin']>>

<<set $result to $pies.first()>>
/* 返回 'Blueberry' */
```

</div>
