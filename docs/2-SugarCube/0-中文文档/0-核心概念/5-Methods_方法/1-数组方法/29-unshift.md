---
title: Array.unshift_前置
description: 把成员前置到数组开头并返回新长度
---

<div v-pre>

# Array.unshift_前置

把一个或多个成员前置到基数组开头，并返回其新长度。（`unshift()` 是「插队」——从队首加人。）

### 语法

```SugarCube
<Array>.unshift(members…)
```

### 参数

* **`members`**：（`any`…）要前置的成员。

### 返回值

一个*整数* `number`，值为数组的新长度。

### 示例

```SugarCube
<<set $fruits to ['Oranges', 'Plums']>>

<<set $result to $fruits.unshift('Oranges')>>
/* 返回 3;$fruits 变为 ['Oranges', 'Oranges', 'Plums'] */
```

</div>
