---
title: Array.pluck_随机取出
description: 从数组中移除并返回一个随机成员
---

<div v-pre>

# Array.pluck_随机取出

从基数组中移除并返回一个随机成员。（`pluck()` 是「盲抽」——随机摸走一个。）

### 语法

```SugarCube
<Array>.pluck()
```

### 参数

*无*

### 返回值

被移除成员的值（`any`）。

### 示例

```SugarCube
<<set $pies to ['Blueberry', 'Cherry', 'Cream', 'Pecan', 'Pumpkin']>>

<<set $result to $pies.pluck()>>
/* 随机移除并返回一个馅饼 */
```

</div>
