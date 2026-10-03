---
title: String.toLocaleUpperFirst_本地化首字母大写
description: 按本地化规则把首个码点转为大写
---

<div v-pre>

# String.toLocaleUpperFirst_本地化首字母大写

返回按本地化规则把首个 Unicode 码点转为大写后的字符串。不修改原值。（`toLocaleUpperFirst()` 是「首字母大写」，还懂各地的字母规则。）

### 语法

```SugarCube
<String>.toLocaleUpperFirst()
```

### 参数

*无*

### 返回值

一个新 `string`，首个 Unicode 码点按本地化规则大写。

### 示例

使用土耳其语（Türkçe）地区：

```SugarCube
<<set $text to 'ışık'>>
<<set $result to $text.toLocaleUpperFirst()>>
/* 返回 'Işık' */
```

</div>
