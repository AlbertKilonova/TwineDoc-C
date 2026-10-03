---
title: Tags_标签
description: 返回给定段落名的所有标签
---

<div v-pre>

# Tags_标签

返回一个新数组，包含给定段落名的所有标签。（`tags()` 是「查户口」——看看这段落身上贴了哪些标签。）

### 语法

```SugarCube
tags([passageNames])
```

### 参数

* **`passageNames`**：（可选，`string` | `Array<string>`）要收集标签的段落名。可以是列表或段落名数组。省略则默认活动（当前）段落——被包含的段落不算（如通过 `<<include>>`、`PassageHeader` 拉进来的）。

### 返回值

包含标签的 `Array<string>`。

### 异常

*无*

### 示例

```SugarCube
/* 获取活动段落的标签 */
<<set $activeTags to tags()>>

/* 获取指定段落的标签 */
<<set $lonelyGladeTags to tags('Lonely Glade')>>
```

```SugarCube
<<if tags().includes('forest')>>
	…活动段落属于森林…
<</if>>
```

</div>
