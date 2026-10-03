---
title: Array.includesAny_任一包含
description: 返回数组中是否找到任一给定成员
---

<div v-pre>

# Array.includesAny_任一包含

返回数组中是否找到任一给定成员。（`includesAny()` 是「有一个就行」——找到任意一个就算数。）

### 语法

```SugarCube
<Array>.includesAny(needles…)
```

### 参数

* **`needles`**：（`any`… | `Array<any>`）要找的成员。可以是成员列表或数组。

### 返回值

一个 `boolean`，表示是否找到任一给定成员。

### 示例

```SugarCube
<<set $pies to ['Blueberry', 'Cherry', 'Cream', 'Pecan', 'Pumpkin']>>

<<set $result to $pies.includesAny('Cherry', 'Coconut')>>
/* 返回 true */

<<set $result to $pies.includesAny('Coconut')>>
/* 返回 false */
```

</div>
