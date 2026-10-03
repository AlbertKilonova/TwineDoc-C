---
title: Prepend_前置
description: 执行内容并把输出前置到选中元素内容前
---

<div v-pre>

# Prepend_前置

执行其内容，并把输出前置到选中元素的内容之前。（`<<prepend>>` 和 `<<append>>` 是「前后夹击」组合——一个插前面，一个插后面。）

### 语法

```SugarCube
<<prepend selector [transition|t8n]>> … <</prepend>>
```

### 参数

* **`selector`**：用于定位元素的 CSS/jQuery 风格选择器。
* **`transition`**：（可选）关键字，表示应对插入内容应用 CSS 过渡。
* **`t8n`**：（可选）关键字，是 `transition` 的别名。

### 示例

```SugarCube
/* 设置 */
I saw a dog.

/* 前置内容 */
<<link "Size">>
	<<prepend "#dog">>big <</prepend>>
<</link>>

/* 点击后结果 */
I saw a big dog.
```

</div>
