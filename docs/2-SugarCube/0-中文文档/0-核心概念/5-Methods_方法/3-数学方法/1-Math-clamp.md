---
title: Math.clamp_钳制
description: 把数字限制在指定边界内
---

<div v-pre>

# Math.clamp_钳制

返回被钳制到指定边界的给定数字。不修改原值。（`Math.clamp()` 是「限位器」——数值超出范围就把它摁回来。）

### 语法

```SugarCube
Math.clamp(num , min , max)
```

### 参数

* **`num`**：（`number`）要钳制的数字。可以是实际数字或数值字符串。
* **`min`**：（`number`）数字下限。
* **`max`**：（`number`）数字上限。

### 返回值

一个新的 `number`。

### 示例

```SugarCube
/* 返回钳制到 0–200 边界的副本 */
<<set $result to Math.clamp($stat, 0, 200)>>

/* 返回钳制到 1–6.6 边界的副本 */
<<set $result to Math.clamp($stat, 1, 6.6)>>
```

</div>
