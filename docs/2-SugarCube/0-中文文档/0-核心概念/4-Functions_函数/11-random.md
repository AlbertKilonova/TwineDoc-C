---
title: Random_随机整数
description: 返回给定范围内的伪随机整数(含端点)
---

<div v-pre>

# Random_随机整数

返回给定边界范围（含端点）内的伪随机整数——即 [min, max]。（`random()` 是「掷骰子」——摇一下，蹦出个整数。）

### 语法

```SugarCube
random([min ,] max)
```

### 参数

* **`min`**：（可选，*整数* `number`）随机数下限（含）。省略则默认 `0`。
* **`max`**：（*整数* `number`）随机数上限（含）。

### 返回值

一个随机整数（*整数* `number`）。

### 异常

一个 `Error` 或 `TypeError` 实例。

### 示例

```SugarCube
/* 返回 0–5 之间的数 */
<<set $randInt to random(5)>>

/* 返回 1–6 之间的数 */
<<set _randInt to random(1, 6)>>
```

> **注意**：默认返回 `Math.random()` 的非确定性结果；若通过 `State.prng.init()` 启用了可播种 PRNG，则返回播种 PRNG 的确定性结果。

</div>
