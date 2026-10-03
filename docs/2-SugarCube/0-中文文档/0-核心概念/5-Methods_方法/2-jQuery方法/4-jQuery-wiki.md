---
title: jQuery.wiki_渲染并丢弃
description: Wikify 给定内容源并丢弃结果
---

<div v-pre>

# jQuery.wiki_渲染并丢弃

Wikify 给定内容源并丢弃结果。有错误则抛异常。只在你想调用宏产生副作用、不关心其输出时才真正有用。（`jQuery.wiki()` 是「只做不说」——执行了但不输出。）

### 语法

```SugarCube
jQuery.wiki(sources…)
```

### 参数

* **`sources`**：（`string`…）内容源列表。

### 返回值

*无*

### 示例

```SugarCube
/* 调用 `<<somemacro>>` 宏,丢弃任何输出 */
<<run $.wiki('`<<somemacro>>`')>>
```

</div>
