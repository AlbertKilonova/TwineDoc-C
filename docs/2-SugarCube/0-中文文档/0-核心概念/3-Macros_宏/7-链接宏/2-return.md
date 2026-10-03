---
title: Return_返回
description: 创建链接,前进到之前访问过的段落
---

<div v-pre>

# Return_返回

创建一个链接，用于前进到之前访问过的段落。可以用「链接文本 + 段落名」两个可选参数调用，也可以用链接标记或图像标记调用。（`<<return>>` 是 `<<back>>` 的「向前版」——不撤销，而是重新跳到之前去过的段落。）

### 语法

```SugarCube
<<return [linkText [passageName]]>>
<<return linkMarkup>>
<<return imageMarkup>>
```

### 参数

#### 独立参数形式

* **`linkText`**：（若未指定 `passageName` 则必填）链接文本。可包含标记。
* **`passageName`**：（可选）要前往的段落名称。

#### 链接标记形式

* **`linkMarkup`**：要使用的链接标记（仅常规语法，不含设置器）。

#### 图像标记形式

* **`imageMarkup`**：要使用的图像标记（仅常规语法，不含设置器）。

### 示例

视觉示意——假设历史为 `A, B, [C]`（方括号表示活动时刻），使用一次 `<<return>>` 后：

```plain
A, B, C, [B]
```

即向历史中添加了一个新时刻（与上一时刻相同的段落）。

基本用法：

```SugarCube
`<<return>>`
```

独立参数形式：

```SugarCube
<<return "Home.">>
<<return "Home." "HQ">>
```

链接标记形式：

```SugarCube
<<return [[HQ]]>>
<<return [[Home.|HQ]]>>
```

图像标记形式：

```SugarCube
<<return [img[home.png]]>>
<<return [img[home.png][HQ]]>>
```

> **注意**：如果你想撤销历史中的过去时刻（而不是返回段落），请参阅 `<<back>>` 宏。

</div>
