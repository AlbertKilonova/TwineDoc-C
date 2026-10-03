---
title: Array.deleteAll_全部删除
description: 移除给定成员的所有实例并返回被移除成员
---

<div v-pre>

# Array.deleteAll_全部删除

从数组中移除给定成员的所有实例，并返回一个包含被移除成员的新数组。（`deleteAll()` 是「大扫除」——把指定的成员统统清走。）

### 语法

```SugarCube
<Array>.deleteAll(needles…)
```

### 参数

* **`needles`**：（`any`… | `Array<any>`）要移除的成员。可以是成员列表或数组。

### 返回值

一个包含被移除成员的新 `Array`。

### 示例

```SugarCube
/* 给定： */
<<set $fruits to ['Apples', 'Oranges', 'Plums', 'Oranges']>>

<<set $result to $fruits.deleteAll('Oranges')>>
/* 返回 ['Oranges', 'Oranges'];$fruits 变为 ['Apples', 'Plums'] */
```

</div>
