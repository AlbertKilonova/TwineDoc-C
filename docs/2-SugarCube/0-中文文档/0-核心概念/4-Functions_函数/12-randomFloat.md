---
title: RandomFloat_随机小数
description: 返回给定范围内的伪随机小数(含下限,不含上限)
---

<div v-pre>

# RandomFloat_随机小数

返回给定边界范围（最小含、最大不含）内的伪随机小数——即 [min, max)。（`randomFloat()` 是「细粒度骰子」——连小数点后的数都能掷出来。）

### 语法

```SugarCube
randomFloat([min ,] max)
```

### 参数

* **`min`**：（可选，*小数* `number`）随机数下限（含）。省略则默认 `0.0`。
* **`max`**：（*小数* `number`）随机数上限（不含）。

### 返回值

一个随机浮点数（*小数* `number`）。

### 异常

一个 `Error` 或 `TypeError` 实例。

### 示例

```SugarCube
/* 返回 0.0–4.9999999… 之间的数 */
<<set $randNum to randomFloat(5.0)>>

/* 返回 1.0–5.9999999… 之间的数 */
<<set _randNum to randomFloat(1.0, 6.0)>>
```

</div>
