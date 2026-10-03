---
title: Linkappend_追加链接
description: 点击后失效并把内容追加到链接文本后
---

<div v-pre>

# Linkappend_追加链接

创建一个一次性链接，点击后停用自身，并把其内容追加到链接文本后面。本质上就是 `<<link>>` 和 `<<append>>` 的结合。（`<<linkappend>>` 是「点击后补一句」——点一下，链接原地消失，内容补到后面，像魔法一样。）

### 语法

```SugarCube
<<linkappend linkText [transition|t8n]>> … <</linkappend>>
```

### 参数

* **`linkText`**：链接文本。可包含标记。
* **`transition`**：（可选）关键字，表示应对插入的内容应用 CSS 过渡。
* **`t8n`**：（可选）关键字，是 `transition` 的别名。

### 示例

```SugarCube
/* 无过渡 */
We—We should <<linkappend "take">> away their METAL BAWKSES<</linkappend>>!

/* 带过渡 */
I spy with my little <<linkappend "eye" t8n>>, a crab rangoon<</linkappend>>.
```

</div>
