---
title: Array.random_随机成员
description: 返回数组中的一个随机成员,不修改原数组
---

<div v-pre>

# Array.random_随机成员

返回基数组中的一个随机成员。不修改原数组。（`random()` 是「抽签」——随机点一个。）

### 语法

```SugarCube
<Array>.random()
```

### 参数

*无*

### 返回值

被选中成员的值（`any`）。

### 示例

```SugarCube
<<set $pies to ['Blueberry', 'Cherry', 'Cream', 'Pecan', 'Pumpkin']>>

/* 返回数组中的一个随机馅饼 */
<<set $result to $pies.random()>>
```

</div>
