---
title: Code_代码
description: 展示不被执行的代码段落
---

<div v-pre>

# Code_代码

当你想在文档里展示源代码而不让它们执行时，代码标记就派上用场了。

### 1. 内联代码 (Inline)
使用三重花括号包裹：`{{{ 这是代码 }}}`。它会渲染为 `<code>` 标签，适合放在句子中间。

### 2. 块级代码 (Block)
如果你有多行代码需要展示，可以使用块级语法：

```SugarCube
{{{
  function hello() {
    console.log("Hello 阿波！");
  }
}}}
```

这会渲染为 `<pre><code>` 组合，能完美保留你的缩进、空格和换行（真的很省心呢）。

</div>