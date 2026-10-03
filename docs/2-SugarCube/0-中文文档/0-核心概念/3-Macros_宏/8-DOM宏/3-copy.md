---
title: Copy_复制
description: 输出选中元素内容的副本
---

<div v-pre>

# Copy_复制

输出选中元素内容的副本。（`<<copy>>` 是「复印机」——把元素内容复制一份，贴到别处。）

### 语法

```SugarCube
<<copy selector>>
```

### 参数

* **`selector`**：用于定位元素的 CSS/jQuery 风格选择器。

### 示例

```SugarCube
/* 设置 */
I'd like a slice of Key lime pie, please.
I'll have a breadstick, thanks.

/* 用源元素的副本替换目标元素内容 */
<<link "Have the same">>
	<<replace "#snack-dest">><<copy "#snack-source">> too<</replace>>
<</link>>
```

> **警告**：大多数交互元素（如段落链接、交互宏等）无法通过 `<<copy>>` 正确复制，尝试这样做通常会产生不可用的结果。

</div>
