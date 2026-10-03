---
title: Array.toShuffled_洗牌副本
description: 返回数组打乱后的新副本,不修改原数组
---

<div v-pre>

# Array.toShuffled_洗牌副本

返回数组打乱后的新副本。不修改原数组。（`toShuffled()` 是「洗牌不伤原牌」——打乱的是副本。）

### 语法

```SugarCube
<Array>.toShuffled()
```

### 参数

*无*

### 返回值

一个由原数组随机打乱而成的新 `Array`。

### 示例

```SugarCube
<<set $pies to ['Blueberry', 'Cherry', 'Cream', 'Pecan', 'Pumpkin']>>

/* 随机化顺序而不修改原数组 */
<<set $result to $pies.toShuffled()>>
```

</div>
