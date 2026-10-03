---
title: Array.pluckMany_随机取出多个
description: 从数组中随机移除指定数量成员并返回
---

<div v-pre>

# Array.pluckMany_随机取出多个

从基数组中随机移除指定数量的成员，并把被移除成员作为新数组返回。（`pluckMany()` 是「批量盲抽」——随机摸走一批。）

### 语法

```SugarCube
<Array>.pluckMany(want)
```

### 参数

* **`want`**：（*整数* `number`）要取出的成员数量。不能超过基数组所含成员数。

### 返回值

一个包含被随机移除成员的新 `Array`。

### 示例

```SugarCube
<<set $pies to ['Blueberry', 'Cherry', 'Cream', 'Pecan', 'Pumpkin']>>

/* 随机移除三个馅饼并作为新数组返回 */
<<set $result to $pies.pluckMany(3)>>
```

</div>
