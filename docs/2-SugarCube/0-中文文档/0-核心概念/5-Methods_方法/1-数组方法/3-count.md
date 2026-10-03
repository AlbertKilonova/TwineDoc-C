---
title: Array.count_计数
description: 返回给定成员在数组中出现的次数
---

<div v-pre>

# Array.count_计数

返回给定成员在数组中出现的次数，从 `position` 开始搜索。（`count()` 是「点人头」——数数数组里某个元素出现了几次。）

### 语法

```SugarCube
<Array>.count(needle [, position])
```

### 参数

* **`needle`**：（`any`）要计数的成员。
* **`position`**：（可选，*整数* `number`）开始搜索 `needle` 的零基索引。省略则默认 `0`。

### 返回值

一个*整数* `number`，值为给定成员在数组中出现的次数。

### 示例

```SugarCube
/* 给定： */
<<set $fruits to ['Apples', 'Oranges', 'Plums', 'Oranges']>>

<<set $result to $fruits.count('Oranges')>>
/* 返回 2 */

<<set $result to $fruits.count('Oranges', 2)>>
/* 返回 1 */
```

</div>
