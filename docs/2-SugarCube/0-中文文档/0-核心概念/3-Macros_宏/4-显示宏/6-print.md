---
title: Print_打印
description: 输出表达式结果的字符串表示
---

<div v-pre>

# Print_打印

输出给定表达式结果的字符串表示。（`<<print>>` 就是 SugarCube 的「嘴巴」，让它说啥它就输出啥。）

### 语法

```SugarCube
<<print expression>>
```

### 参数

* **`expression`**：一个有效表达式。更多信息请参阅「表达式」。

### 示例

```SugarCube
/* 假设 $gold 为 5 */
你找到了 <<print $gold>> 金币。                  /* 输出：你找到了 5 金币。 */

/* 假设 $weight 为 74.6466266 */
你的体重是 <<print $weight.toFixed(2)>> 公斤。    /* 输出：你的体重是 74.65 公斤。 */
```

> **提示**：如果只需要打印一个 TwineScript 变量的值，直接写裸变量即可自动打印。

</div>
