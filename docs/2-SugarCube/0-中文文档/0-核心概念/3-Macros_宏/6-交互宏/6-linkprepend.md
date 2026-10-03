---
title: Linkprepend_前置链接
description: 点击后失效并把内容插入到链接文本前
---

<div v-pre>

# Linkprepend_前置链接

创建一个一次性链接，点击后停用自身，并把其内容前置到链接文本前面。本质上就是 `<<link>>` 和 `<<prepend>>` 的结合。（`<<linkprepend>>` 和 `<<linkappend>>` 是一对孪生兄弟——一个补前面，一个补后面。）

### 语法

```SugarCube
<<linkprepend linkText [transition|t8n]>> … <</linkprepend>>
```

### 参数

* **`linkText`**：链接文本。可包含标记。
* **`transition`**：（可选）关键字，表示应对插入的内容应用 CSS 过渡。
* **`t8n`**：（可选）关键字，是 `transition` 的别名。

### 示例

```SugarCube
/* 无过渡 */
You see a <<linkprepend "robot">>GIANT <</linkprepend>>.

/* 带过渡 */
I <<linkprepend "like" t8n>>do not <</linkprepend>> lemons.
```

</div>
