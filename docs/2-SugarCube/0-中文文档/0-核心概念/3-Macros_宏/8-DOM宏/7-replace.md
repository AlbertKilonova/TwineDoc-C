---
title: Replace_替换
description: 执行内容并用输出替换选中元素内容
---

<div v-pre>

# Replace_替换

执行其内容，并用输出替换选中元素的内容。（`<<replace>>` 是「大变活人」——元素内容一键换成新的，DOM 魔术师本师。）

### 语法

```SugarCube
<<replace selector [transition|t8n]>> … <</replace>>
```

### 参数

* **`selector`**：用于定位元素的 CSS/jQuery 风格选择器。
* **`transition`**：（可选）关键字，表示应对插入内容应用 CSS 过渡。
* **`t8n`**：（可选）关键字，是 `transition` 的别名。

### 示例

```SugarCube
/* 设置 */
I saw a dog.

/* 替换内容 */
<<link "Breed">>
	<<replace "#dog">>Catahoula Cur<</replace>>
<</link>>

/* 点击后结果 */
I saw a Catahoula Cur.
```

</div>
