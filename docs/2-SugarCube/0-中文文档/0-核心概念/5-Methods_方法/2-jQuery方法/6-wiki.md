---
title: jQuery.wiki_渲染追加
description: Wikify 内容源并把结果追加到目标元素
---

<div v-pre>

# jQuery.wiki_渲染追加

Wikify 给定内容源并把结果追加到目标元素。返回当前 `jQuery` 实例引用以便链式调用。（`<jQuery>.wiki()` 是「渲染并贴上去」——把标记渲染后塞进元素。）

### 语法

```SugarCube
<jQuery>.wiki(sources…)
```

### 参数

* **`sources`**：（`string`…）内容源列表。

### 返回值

当前 `jQuery` 实例。

### 示例

```SugarCube
/* 给定元素：<div id="the-box"></div> */

/* 把 "Who <em>are</em> you?" 追加到目标元素 */
<<run $('#the-box').wiki('Who //are// you?')>>
```

</div>
