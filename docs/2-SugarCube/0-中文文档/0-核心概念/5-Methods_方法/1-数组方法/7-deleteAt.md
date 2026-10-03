---
title: Array.deleteAt_按索引删除
description: 移除给定索引处的成员并返回被移除成员
---

<div v-pre>

# Array.deleteAt_按索引删除

从数组中移除给定索引处的所有成员，并返回一个包含被移除成员的新数组。（`deleteAt()` 是「定点清除」——按位置删，精准打击。）

### 语法

```SugarCube
<Array>.deleteAt(indices…)
```

### 参数

* **`indices`**：（*整数* `number`… | *整数* `Array<number>`）要移除成员的索引。可以是列表或索引数组。

### 返回值

一个包含被移除成员的新 `Array`。

### 示例

```SugarCube
<<set $fruits to ['Apples', 'Oranges', 'Plums', 'Oranges']>>

<<set $result to $fruits.deleteAt(2)>>
/* 返回 ['Plums'];$fruits 变为 ['Apples', 'Oranges', 'Oranges'] */

<<set $result to $fruits.deleteAt(1, 3)>>
/* 返回 ['Oranges', 'Oranges'] */
```

</div>
