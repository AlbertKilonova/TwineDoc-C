---
title: Array.includesAll_全包含
description: 返回数组中是否找到所有给定成员
---

<div v-pre>

# Array.includesAll_全包含

返回数组中是否找到所有给定成员。（`includesAll()` 是「全都要」——一个都不能少。）

### 语法

```SugarCube
<Array>.includesAll(needles…)
```

### 参数

* **`needles`**：（`any`… | `Array<any>`）要找的成员。可以是成员列表或数组。

### 返回值

一个 `boolean`，表示是否找到所有给定成员。

### 示例

```SugarCube
<<set $pies to ['Blueberry', 'Cherry', 'Cream', 'Pecan', 'Pumpkin']>>

<<set $result to $pies.includesAll('Cherry', 'Raspberry')>>
/* 返回 false */

<<set $result to $pies.includesAll('Blueberry', 'Cream')>>
/* 返回 true */
```

</div>
