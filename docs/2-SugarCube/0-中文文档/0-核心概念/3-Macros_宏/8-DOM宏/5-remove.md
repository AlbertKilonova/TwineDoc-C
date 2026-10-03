---
title: Remove_移除
description: 移除选中的元素
---

<div v-pre>

# Remove_移除

移除选中的元素。（`<<remove>>` 是「橡皮擦」——选中元素，一键擦除，眼不见为净。）

### 语法

```SugarCube
<<remove selector>>
```

### 参数

* **`selector`**：用于定位元素的 CSS/jQuery 风格选择器。

### 示例

```SugarCube
/* 给定 */
I'd like a humongous cupcake, please.

/* 移除目标元素 */
<<link "Go small">>
	<<remove "#huge-cupcake">>
<</link>>

/* 点击后结果 */
I'd like a cupcake, please.
```

> **注意**：如果你只是想清空选中元素（而非彻底移除），应该用一个空的 `<<replace>>` 宏代替。

</div>
