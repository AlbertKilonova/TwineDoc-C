---
title: Array.toUnique_去重
description: 返回去除所有重复成员后的新副本,不修改原数组
---

<div v-pre>

# Array.toUnique_去重

返回去除所有重复成员后的新副本。不修改原数组。（`toUnique()` 是「去重」——重复的只留一个。）

### 语法

```SugarCube
<Array>.toUnique()
```

### 参数

*无*

### 返回值

一个由原数组去除所有重复项而成的新 `Array`。

### 示例

```SugarCube
<<set $fruits to ['Apples', 'Oranges', 'Plums', 'Plums', 'Apples']>>

<<set $result to $fruits.toUnique()>>
/* 返回 ['Apples', 'Oranges', 'Plums'] */
```

</div>
