---
title: Special Attribute_特殊属性
description: 给 HTML 标签注入 SugarCube 灵魂
---

<div v-pre>

# Special Attribute_特殊属性

SugarCube 提供了一系列特殊的 HTML 和 SVG 属性。只需将这些属性添加到标签中，就能实现诸如段落跳转、媒体调用以及变量赋值等高级功能（那很有用了）。

### data-passage：片段指挥官

这是使用频率最高的属性，它能让任何支持它的元素变成通往另一个片段的“传送门”，或者让媒体元素直接引用内嵌资源。

| 适用类型 | 属性名称 | 应用示例 |
| --- | --- | --- |
| **交互链接** | `data-passage` | `<a>` 或 `<button>` 配合 `data-passage` |
| **音频资源** | `data-passage` | `<audio data-passage="音频名称">` |
| **图像资源** | `data-passage` | `<img data-passage="图片名称">` |
| **视频资源** | `data-passage` | `<video data-passage="视频名称">` |

> **贴心小笔记**：在 SVG 格式中，请使用 `<image data-passage="名称" />`。这对于做交互式地图的作者来说真的超方便！

### data-setter：隐形的变量调节器

`data-setter` 属性通常与链接类元素配合使用。它的神奇之处在于：只有当你点击并触发跳转时，它才会执行其中的代码（也就是延迟求值）。

* **功能说明**：其语法与 `<<set>>` 宏完全一致。
* **多任务处理**：如果你想一次性改变好几个变量，记得用分号 `;` 把它们隔开（就像在超市一口气买好几样东西一样）。

### 综合实战演示

让我们看看把这些属性组合在一起时有多强大：

```SugarCube
/* 点击按钮时：先扣除金币，再传送到商店段落 */
<button data-passage="Shop" data-setter="$gold -= 50; $inventory.push('木剑')">
    花费 50 金币购买木剑
</button>

/* 示例：在普通链接中使用 */
<a data-passage="Forest" data-setter="$energy -= 1">进入森林</a>

/* 在热区地图（Image Map）中使用 */
<area shape="rect" coords="0,0,50,50" data-passage="HiddenRoom" data-setter="$foundSecret = true">
```

> **专业避雷针**：还记得我们之前说的吗？千万不要在 `data-setter` 前面加 `@` 或 `sc-eval:`。它有自己的节奏，不需要你帮它提前求值（不然它会罢工给你看，呜呜）。

</div>
