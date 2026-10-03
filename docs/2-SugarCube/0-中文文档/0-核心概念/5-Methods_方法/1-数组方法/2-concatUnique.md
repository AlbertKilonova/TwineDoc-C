---
title: Array.concatUnique_拼接去重
description: 把不重复成员拼接到数组末尾并返回新数组
---

<div v-pre>

# Array.concatUnique_拼接去重

把一个或多个**不重复**成员拼接到基数组末尾，并作为新数组返回结果。不修改原数组。（`concatUnique()` 是「带洁癖的胶水」——拼接时顺手把重复的剔掉。）

### 语法

```SugarCube
<Array>.concatUnique(members…)
```

### 参数

* **`members`**：（`any`…）要拼接的成员。数组成员会被合并。

### 返回值

一个由所有**不重复**数组成员按顺序拼接而成的新 `Array`。

### 示例

```SugarCube
<<set $fruits1 to ['Apples', 'Oranges']>>
<<set $fruits2 to ['Pears', 'Plums']>>

<<set $result to $fruits1.concatUnique($fruits2)>>
/* 返回 ['Apples', 'Oranges', 'Pears', 'Plums'] */

<<set $result to $fruits1.concatUnique('Pears', 'Pears')>>
/* 返回 ['Apples', 'Oranges', 'Pears'] */
```

</div>
