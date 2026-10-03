---
title: Array.deleteLast_删除末个
description: 移除给定成员的最后一个实例并返回被移除成员
---

<div v-pre>

# Array.deleteLast_删除末个

从数组中移除给定成员的最后一个实例，并返回一个包含被移除成员的新数组。（`deleteLast()` 是「后到先删」——只删最后一个出现的。）

### 语法

```SugarCube
<Array>.deleteLast(needles…)
```

### 参数

* **`needles`**：（`any`… | `Array<any>`）要移除的成员。可以是成员列表或数组。

### 返回值

一个包含被移除成员的新 `Array`。

### 示例

```SugarCube
<<set $fruits to ['Apples', 'Oranges', 'Plums', 'Oranges']>>

<<set $result to $fruits.deleteLast('Oranges')>>
/* 返回 ['Oranges'];$fruits 变为 ['Apples', 'Oranges', 'Plums'] */
```

</div>
