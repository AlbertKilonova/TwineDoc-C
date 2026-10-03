---
title: Nobr_去除换行
description: 去除内容的首尾换行,并把剩余换行换成空格
---

<div v-pre>

# Nobr_去除换行

执行其内容并输出结果，在此之前会移除首尾换行，并把所有剩余的连续换行替换为单个空格。（`<<nobr>>` 是「换行碾压机」——把碍事的换行统统压成空格，让你的文字严丝合缝。）

### 语法

```SugarCube
`<<nobr>>` … <</nobr>>
```

### 参数

*无*

### 示例

```SugarCube
/* 假设：$feeling 为 "blue"，输出：I'd like a blueberry pie. */
I'd like a `<<nobr>>`
<<if $feeling eq "blue">>
blueberry
`<<else>>`
cherry
<</if>>
<</nobr>> pie.
```

> **注意**：`nobr` 特殊标签和 `Config.passages.nobr` 设置会对整个段落（或所有段落）应用相同处理。「行续标记」也能实现类似功能，只是方式略有不同。

</div>
