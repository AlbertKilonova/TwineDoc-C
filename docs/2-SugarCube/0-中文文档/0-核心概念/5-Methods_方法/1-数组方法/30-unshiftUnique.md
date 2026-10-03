---
title: Array.unshiftUnique_前置去重
description: 把不重复成员前置到数组开头并返回新长度
---

<div v-pre>

# Array.unshiftUnique_前置去重

把一个或多个**不重复**成员前置到基数组开头，并返回其新长度。（`unshiftUnique()` 是「带洁癖的插队」——重复的不让插。）

### 语法

```SugarCube
<Array>.unshiftUnique(members…)
```

### 参数

* **`members`**：（`any`…）要前置的成员。

### 返回值

一个*整数* `number`，值为数组的新长度。

### 示例

```SugarCube
<<set $fruits to ['Oranges', 'Plums']>>

<<set $result to $fruits.unshiftUnique('Oranges')>>
/* 返回 2;$fruits 仍为 ['Oranges', 'Plums'] */

<<set $result to $fruits.unshiftUnique('Apples', 'Apples')>>
/* 返回 3;$fruits 变为 ['Apples', 'Oranges', 'Plums'] */
```

</div>
