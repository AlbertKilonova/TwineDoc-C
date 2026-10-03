---
title: Array.concat_数组拼接
description: 把成员拼接到数组末尾并返回新数组
---

<div v-pre>

# Array.concat_数组拼接

把一个或多个成员拼接到基数组末尾，并作为新数组返回结果。不修改原数组。（`concat()` 是「数组胶水」——把数组粘在一起，原数组毫发无损。）

### 语法

```SugarCube
<Array>.concat(members…)
```

### 参数

* **`members`**：（`any`…）要拼接的成员。数组成员会被合并——即拼接其成员，而非数组本身。

### 返回值

一个由所有数组成员按顺序拼接而成的新 `Array`。

### 示例

```SugarCube
/* 给定： */
<<set $fruits1 to ['Apples', 'Oranges']>>
<<set $fruits2 to ['Pears', 'Plums']>>

<<set $result to $fruits1.concat($fruits2)>>
/* 返回 ['Apples', 'Oranges', 'Pears', 'Plums'] */

<<set $result to $fruits1.concat('Pears')>>
/* 返回 ['Apples', 'Oranges', 'Pears'] */
```

</div>
