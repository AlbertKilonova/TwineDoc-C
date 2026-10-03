---
title: Passage_当前段落
description: 返回活动(当前)段落的名称
---

<div v-pre>

# Passage_当前段落

返回活动（当前）段落的名称。（`passage()` 是「自报家门」——当前段落在哪，一问便知。）

### 语法

```SugarCube
passage()
```

### 参数

*无*

### 返回值

段落的名称（`string`）。

### 异常

*无*

### 示例

作为链接的一部分：

```SugarCube
[[Reload passage|passage()]]
<<link "Reload passage" `passage()`>><</link>>
```

宏中用法：

```SugarCube
<<set $passageName to passage()>>

<<if passage() is 'Café'>>
	…当前段落是 Café 段落…
<</if>>
```

</div>
