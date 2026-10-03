---
title: String.first_首个码点
description: 返回字符串中的第一个 Unicode 码点
---

<div v-pre>

# String.first_首个码点

返回字符串中的第一个 Unicode 码点。不修改原值。（`first()` 是「拿第一个字符」——队首是谁，一目了然。）

### 语法

```SugarCube
<String>.first()
```

### 参数

*无*

### 返回值

一个包含第一个 Unicode 码点的新 `string`。

### 示例

```SugarCube
<<set $text to 'abc'>>
<<set $result to $text.first()>>
/* 返回 'a' */

<<set $text to '🙈🙉🙊'>>
<<set $result to $text.first()>>
/* 返回 '🙈' */
```

</div>
