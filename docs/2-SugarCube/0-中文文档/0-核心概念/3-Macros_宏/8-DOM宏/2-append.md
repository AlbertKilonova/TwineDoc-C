---
title: Append_追加
description: 执行内容并把输出追加到选中元素内容后
---

<div v-pre>

# Append_追加

执行其内容，并把输出追加到选中元素的内容之后。（`<<append>>` 是「续写」——把新内容接到元素屁股后面，无缝衔接。）

### 语法

```SugarCube
<<append selector [transition|t8n]>> … <</append>>
```

### 参数

* **`selector`**：用于定位元素的 CSS/jQuery 风格选择器。
* **`transition`**：（可选）关键字，表示应对插入内容应用 CSS 过渡。
* **`t8n`**：（可选）关键字，是 `transition` 的别名。

### 示例

```SugarCube
/* 设置 */
I saw a dog.

/* 追加内容 */
<<link "Doing">>
	<<append "#dog">> chasing a cat<</append>>
<</link>>

/* 点击后结果 */
I saw a dog chasing a cat.
```

> **参见**：DOM 宏警告。

</div>
