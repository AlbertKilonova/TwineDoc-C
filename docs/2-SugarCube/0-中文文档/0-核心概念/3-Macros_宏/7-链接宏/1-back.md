---
title: Back_撤销
description: 创建链接,撤销故事历史中的过去时刻
---

<div v-pre>

# Back_撤销

创建一个链接，用于撤销故事历史中的过去时刻。可以用「链接文本 + 段落名」两个可选参数调用，也可以用链接标记或图像标记调用。（`<<back>>` 是「后悔药」——点一下，时光倒流，回到上一个历史时刻。）

### 语法

```SugarCube
<<back [linkText [passageName]]>>
<<back linkMarkup>>
<<back imageMarkup>>
```

### 参数

#### 独立参数形式

* **`linkText`**：（若未指定 `passageName` 则必填）链接文本。可包含标记。
* **`passageName`**：（可选）要撤销到（直到到达为止）的时刻名称。

#### 链接标记形式

* **`linkMarkup`**：要使用的链接标记（仅常规语法，不含设置器）。

#### 图像标记形式

* **`imageMarkup`**：要使用的图像标记（仅常规语法，不含设置器）。

### 示例

视觉示意——假设你的故事历史由三个时刻组成（方括号表示活动时刻）：

```plain
A, B, [C]
```

使用一次 `<<back>>` 后变为：

```plain
A, [B], C
```

即历史回滚到了上一个时刻。

基本用法：

```SugarCube
/* 创建一个撤销最近时刻的链接，使用默认文本 */
`<<back>>`
```

独立参数形式：

```SugarCube
/* 文本为 "Home." */
<<back "Home.">>

/* 撤销直到最近的 "HQ" 时刻，文本为 "Home." */
<<back "Home." "HQ">>
```

链接标记形式：

```SugarCube
<<back [[HQ]]>>
<<back [[Home.|HQ]]>>
```

图像标记形式：

```SugarCube
<<back [img[home.png]]>>
<<back [img[home.png][HQ]]>>
```

> **注意**：如果你想返回之前访问过的段落（而不是撤销历史中的时刻），请参阅 `<<return>>` 宏或 `previous()` 函数。

</div>
