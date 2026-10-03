---
title: Previous_上一段落
description: 返回最近一个与活动段落不同的上一段落名
---

<div v-pre>

# Previous_上一段落

返回最近一个名称不与活动段落相同的上一段落的名称，若不存在则返回空字符串。（`previous()` 是「上一个」——返回你刚离开的段落名。）

### 语法

```SugarCube
previous()
```

### 参数

*无*

### 返回值

段落的名称（`string`），否则为空字符串（`''`）。

### 异常

*无*

### 示例

作为链接的一部分：

```SugarCube
[[Return|previous()]]
<<link "Return" `previous()`>><</link>>
```

宏中用法：

```SugarCube
<<set $previousName to previous()>>

<<if previous() is 'Café'>>
	…最近的上一段落是 Café 段落…
<</if>>
```

> **警告**：如果你需要返回多个段落（例如有菜单且希望玩家从任意深度返回），`previous()` 可能不够用，此时请参阅「任意长返回」。

</div>
