---
title: Array.push_追加
description: 把成员追加到数组末尾并返回新长度
---

<div v-pre>

# Array.push_追加

把一个或多个成员追加到基数组末尾，并返回其新长度。（`push()` 是「排队入场」——从队尾加人。）

### 语法

```SugarCube
<Array>.push(members…)
```

### 参数

* **`members`**：（`any`…）要追加的成员。

### 返回值

一个*整数* `number`，值为数组的新长度。

### 示例

```SugarCube
<<set $fruits to ['Apples', 'Oranges']>>

<<set $result to $fruits.push('Apples')>>
/* 返回 3;$fruits 变为 ['Apples', 'Oranges', 'Apples'] */
```

</div>
