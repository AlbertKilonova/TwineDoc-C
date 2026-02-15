---
title: Verbatim HTML_纯 HTML
description: 将内容直接作为 HTML 标签输出
---

<div v-pre>

# Verbatim HTML_纯 HTML

这是一个非常特殊的标记，它的作用是告诉 SugarCube：请不要处理里面的任何标记，直接把内容丢给浏览器去渲染（嘿，这可是非常硬核的操作）。

### 使用方法

使用 `<html></html>` 标签包裹你的内容。

```SugarCube
<html><em>这段斜体是原生 HTML 渲染的</em></html>
```

> **专业小贴士**：由于它会禁用所有处理逻辑，所以你几乎只能在纯文本标记（Verbatim Text）里看到它的身影。说实话，在日常开发中，阿波几乎永远不需要用到这个标记呢（因为它太高冷了）。

</div>