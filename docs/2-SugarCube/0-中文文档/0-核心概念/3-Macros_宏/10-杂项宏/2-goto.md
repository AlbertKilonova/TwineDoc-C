---
title: Goto_跳转
description: 立即把玩家转到指定段落
---

<div v-pre>

# Goto_跳转

立即把玩家转到指定名称的段落。既可用段落名调用，也可用链接标记调用。（`<<goto>>` 是「瞬移」——一闭眼一睁眼，人已经在另一个段落了。）

### 语法

```SugarCube
<<goto passageName>>
<<goto linkMarkup>>
```

### 参数

#### 段落名形式

* **`passageName`**：要前往的段落名称。

#### 链接标记形式

* **`linkMarkup`**：要使用的链接标记（仅常规语法，不含设置器）。

### 示例

```SugarCube
<<goto "Somewhere over yonder">>
<<goto $selectedPassage>>
<<goto [[Somewhere over yonder]]>>
<<goto [[$selectedPassage]]>>
```

> **注意**：大多数情况下你不需要 `<<goto>>`——`<<link>>` 已包含转发能力，且更简单。
> **警告**：用 `<<goto>>` 在无输入的情况下自动转发玩家，会在历史中产生垃圾时刻，并让玩家难以导航历史。
> **警告**：`<<goto>>` **不会**终止所在段落的渲染，所以调用之后要小心别产生多余的状态修改。

</div>
