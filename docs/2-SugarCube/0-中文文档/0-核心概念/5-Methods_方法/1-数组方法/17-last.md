---
title: Array.last_末个成员
description: 返回数组的最后一个成员,不修改原数组
---

<div v-pre>

# Array.last_末个成员

返回数组的最后一个成员。不修改原数组。（`last()` 是「拿最后一个」——队尾是谁，一目了然。）

### 语法

```SugarCube
<Array>.last()
```

### 参数

*无*

### 返回值

最后一个成员的值（`any`）。

### 示例

```SugarCube
<<set $pies to ['Blueberry', 'Cherry', 'Cream', 'Pecan', 'Pumpkin']>>

<<set $result to $pies.last()>>
/* 返回 'Pumpkin' */
```

</div>
