---
title: Array.pushUnique_追加去重
description: 把不重复成员追加到数组末尾并返回新长度
---

<div v-pre>

# Array.pushUnique_追加去重

把一个或多个**不重复**成员追加到基数组末尾，并返回其新长度。（`pushUnique()` 是「带洁癖的排队」——重复的不让进。）

### 语法

```SugarCube
<Array>.pushUnique(members…)
```

### 参数

* **`members`**：（`any`…）要追加的成员。

### 返回值

一个*整数* `number`，值为数组的新长度。

### 示例

```SugarCube
<<set $fruits to ['Apples', 'Oranges']>>

<<set $result to $fruits.pushUnique('Apples')>>
/* 返回 2;$fruits 仍为 ['Apples', 'Oranges'] */

<<set $result to $fruits.pushUnique('Plums', 'Plums')>>
/* 返回 3;$fruits 变为 ['Apples', 'Oranges', 'Plums'] */
```

</div>
