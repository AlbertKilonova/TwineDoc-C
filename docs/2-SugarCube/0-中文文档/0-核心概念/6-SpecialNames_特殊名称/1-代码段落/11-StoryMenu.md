---
title: StoryMenu_故事菜单
description: 填充 UI 栏中的故事菜单项
---

<div v-pre>

# StoryMenu_故事菜单

用于填充 UI 栏中的故事菜单项（元素 ID：`menu-story`）。（`StoryMenu` 是「菜单栏」——只认链接，别的都无视。）

> **注意**：故事菜单只显示链接——具体说，任何创建锚元素（`<a>`）的东西。它会从渲染输出中筛出链接并据此构建菜单。

### 示例

```SugarCube
[[Inventory]]

<<if not $inventory.isEmpty()>>
	[[Inventory]]
<</if>>
```

</div>
