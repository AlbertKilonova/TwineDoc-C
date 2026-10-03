---
title: String.last_末个码点
description: 返回字符串中的最后一个 Unicode 码点
---

<div v-pre>

# String.last_末个码点

返回字符串中的最后一个 Unicode 码点。不修改原值。（`last()` 是「拿最后一个字符」——队尾是谁，一目了然。）

### 语法

```SugarCube
<String>.last()
```

### 参数

*无*

### 返回值

一个包含最后一个 Unicode 码点的新 `string`。

### 示例

```SugarCube
<<set $text to 'abc'>>
<<set $result to $text.last()>>
/* 返回 'c' */

<<set $text to '🙈🙉🙊'>>
<<set $result to $text.last()>>
/* 返回 '🙊' */
```

</div>
