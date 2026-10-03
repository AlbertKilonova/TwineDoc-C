---
title: jQuery.wikiPassage_渲染段落追加
description: Wikify 指定段落并把结果追加到目标元素
---

<div v-pre>

# jQuery.wikiPassage_渲染段落追加

Wikify 指定名称的段落并把结果追加到目标元素。返回当前 `jQuery` 实例引用以便链式调用。（`<jQuery>.wikiPassage()` 是「渲染段落并贴上去」。）

### 语法

```SugarCube
<jQuery>.wikiPassage(passageName)
```

### 参数

* **`passageName`**：（`string`）段落名称。

### 返回值

当前 `jQuery` 实例。

### 示例

```SugarCube
/* 给定元素：<div id="notebook"></div> */

/* 把渲染后的段落追加到目标元素 */
<<run $('#notebook').wikiPassage('Notes')>>
```

</div>
