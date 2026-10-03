---
title: Math.trunc_取整
description: 返回给定数字的整数部分(去掉小数)
---

<div v-pre>

# Math.trunc_取整

返回给定数字的整数部分（去掉小数部分，如有）。不修改原值。（`Math.trunc()` 是「砍小数」——只留整数部分，不四舍五入。）

### 语法

```SugarCube
Math.trunc(num)
```

### 参数

* **`num`**：（`number`）要取整的数字。

### 返回值

一个新的*整数* `number`。

### 示例

```SugarCube
<<set $result to Math.trunc(12.7)>>
/* 返回 12 */

<<set $result to Math.trunc(-12.7)>>
/* 返回 -12 */
```

</div>
