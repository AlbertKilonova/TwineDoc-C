---
title: Set_赋值
description: 给故事变量或临时变量赋值
---

<div v-pre>

# Set_赋值

根据给定的表达式设置故事变量和临时变量。（`<<set>>` 大概是 SugarCube 里出场率最高的宏，没有之一——毕竟「存数据」是互动小说的一等公民。）

### 语法

```SugarCube
<<set expression>>
```

### 参数

* **`expression`**：一个有效表达式。赋值语法详见「表达式」和「运算符」。

### 示例

使用 TwineScript 的 `to` 操作符：

```SugarCube
<<set $cheese to "a nice, sharp cheddar">>   → 把字符串赋给 $cheese
<<set $chestEmpty to true>>                  → 把布尔值赋给 $chestEmpty
<<set $sum to $a + $b>>                      → 把和赋给 $sum
<<set $gold to $gold + 5>>                   → 给 $gold 加 5
<<set _counter to _counter + 1>>             → 给临时变量加 1
```

使用标准 JavaScript 操作符：

```SugarCube
<<set $cheese = "a nice, sharp cheddar">>
<<set $chestEmpty = true>>
<<set $sum = $a + $b>>
<<set $gold += 5>>
<<set _counter += 1>>
```

</div>
