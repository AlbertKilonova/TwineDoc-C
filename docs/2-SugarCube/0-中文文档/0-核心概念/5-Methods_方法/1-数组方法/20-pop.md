---
title: Array.pop_弹出末位
description: 移除并返回数组最后一个成员
---

<div v-pre>

# Array.pop_弹出末位

移除并返回数组的最后一个成员，若数组为空则返回 `undefined`。（`pop()` 是「弹出队尾」——最后一个出列。）

### 语法

```SugarCube
<Array>.pop()
```

### 参数

*无*

### 返回值

最后一个成员的值（`any`）。

### 示例

```SugarCube
<<set $fruits to ['Apples', 'Oranges', 'Pears']>>

<<set $result to $fruits.pop()>>
/* 返回 'Pears';$fruits 变为 ['Apples', 'Oranges'] */
```

</div>
