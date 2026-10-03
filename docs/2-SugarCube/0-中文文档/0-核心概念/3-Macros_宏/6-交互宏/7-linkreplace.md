---
title: Linkreplace_替换链接
description: 点击后失效并把链接文本替换为内容
---

<div v-pre>

# Linkreplace_替换链接

创建一个一次性链接，点击后停用自身，并用其内容替换链接文本。本质上就是 `<<link>>` 和 `<<replace>>` 的结合。（`<<linkreplace>>` 是「点击后大变身」——链接文本一键换成新内容，最适合做展开/折叠。）

### 语法

```SugarCube
<<linkreplace linkText [transition|t8n]>> … <</linkreplace>>
```

### 参数

* **`linkText`**：链接文本。可包含标记。
* **`transition`**：（可选）关键字，表示应对插入的内容应用 CSS 过渡。
* **`t8n`**：（可选）关键字，是 `transition` 的别名。

### 示例

```SugarCube
/* 无过渡 */
I'll have a <<linkreplace "cupcake">>slice of key lime pie<</linkreplace>>, please.

/* 带过渡 */
<<linkreplace "You'll //never// take me alive!" t8n>>On second thought, don't hurt me.<</linkreplace>>
```

</div>
