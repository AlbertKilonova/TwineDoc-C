---
title: String.toUpperFirst_首字母大写
description: 把首个 Unicode 码点转为大写
---

<div v-pre>

# String.toUpperFirst_首字母大写

返回首个 Unicode 码点转为大写后的字符串。不修改原值。（`toUpperFirst()` 是「首字母大写」——一句话开头的体面。）

### 语法

```SugarCube
<String>.toUpperFirst()
```

### 参数

*无*

### 返回值

一个新 `string`，首个 Unicode 码点已大写。

### 示例

```SugarCube
<<set $text to 'hello.'>>
<<set $result to $text.toUpperFirst()>>
/* 返回 'Hello.' */

<<set $text to 'χαίρετε.'>>
<<set $result to $text.toUpperFirst()>>
/* 返回 'Χαίρετε.' */
```

</div>
