---
title: StoryInterface_故事界面
description: 替换 SugarCube 默认 UI
---

<div v-pre>

# StoryInterface_故事界面

用于替换 SugarCube 默认 UI。其内容按原始 HTML 标记处理——即*不*执行任何 SugarCube 的特殊 HTML 处理。标记包含在 `<div id="story" role="main">` 元素内，且必须至少含一个 ID 为 `passages` 的元素作为主段落显示区。（`StoryInterface` 是「自定义皮肤」——整个界面随你捏。）

### 示例

最小可用示例：

```html
<div id="passages"></div>
```

配合内置包裹：

```html
<div id="story" role="main">
	<div id="passages"></div>
</div>
```

带 `data-init-passage` 和 `data-passage` 属性：

```html
<div id="menu" data-init-passage="Menu"></div>
<div id="notifications" data-passage="Notifications"></div>
<div id="passages"></div>
```

> **注意**：`data-init-passage` 属性让元素在初始化时更新一次，`data-passage` 属性让元素在每次段落导航时更新。
> **警告**：包含 `data-init-passage` 或 `data-passage` 属性的元素**不应**再包含子元素，因为其内容会被关联段落替换，子元素会丢失。

</div>
