---
title: Array.randomMany_随机多个
description: 随机选出指定数量的不重复成员,不修改原数组
---

<div v-pre>

# Array.randomMany_随机多个

从基数组中随机选出指定数量的不重复成员，并作为新数组返回。不修改原数组。（`randomMany()` 是「批量抽签」——随机点一批不重复的。）

### 语法

```SugarCube
<Array>.randomMany(want)
```

### 参数

* **`want`**：（*整数* `number`）要选出的成员数量。不能超过基数组所含成员数。

### 返回值

一个包含被随机选中成员的新 `Array`。

### 示例

```SugarCube
<<set $pies to ['Blueberry', 'Cherry', 'Cream', 'Pecan', 'Pumpkin']>>

/* 返回包含三个不重复随机馅饼的新数组 */
<<set $result to $pies.randomMany(3)>>
```

</div>
