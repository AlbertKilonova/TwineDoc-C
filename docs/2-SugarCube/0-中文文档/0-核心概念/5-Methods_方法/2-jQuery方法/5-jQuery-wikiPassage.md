---
title: jQuery.wikiPassage_渲染段落并丢弃
description: Wikify 指定名称的段落并丢弃结果
---

<div v-pre>

# jQuery.wikiPassage_渲染段落并丢弃

Wikify 指定名称的段落并丢弃结果。有错误则抛异常。（`jQuery.wikiPassage()` 是「只做不说」的段落版。）

### 语法

```SugarCube
jQuery.wikiPassage(passageName)
```

### 参数

* **`passageName`**：（`string`）段落名称。

### 返回值

*无*

### 示例

```SugarCube
/* 渲染段落,丢弃任何输出 */
<<run $.wikiPassage('Fight Init')>>
```

</div>
