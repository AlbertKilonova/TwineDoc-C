---
title: Array.shift_弹出首位
description: 移除并返回数组第一个成员
---

<div v-pre>

# Array.shift_弹出首位

移除并返回数组的第一个成员，若数组为空则返回 `undefined`。（`shift()` 是「弹出队首」——第一个出列。）

### 语法

```SugarCube
<Array>.shift()
```

### 参数

*无*

### 返回值

第一个成员的值（`any`）或 `undefined`（数组为空时）。

### 示例

```SugarCube
<<set $fruits to ['Apples', 'Oranges', 'Pears']>>

<<set $result to $fruits.shift()>>
/* 返回 'Apples';$fruits 变为 ['Oranges', 'Pears'] */
```

</div>
