---
title: 指南：从 Harlowe 到 SugarCube
description: Harlowe 与 SugarCube 的关键差异
---

<div v-pre>

# 指南：从 Harlowe 到 SugarCube

Harlowe 和 SugarCube 之间有很多差异，本指南将记录一些如果你从 Harlowe 背景转向 SugarCube 需要考虑的最关键差异。

### 宏参数

与 Harlowe 一样，一些 SugarCube 宏接受表达式，另一些接受离散参数。在 SugarCube 中，传给宏的离散参数用空格分隔，而不是逗号。要向宏传递表达式或函数的结果作为参数，你必须将表达式用反引号（`` ` ``）包裹。

此外，SugarCube 中的宏不返回值，所以宏不能用作其他宏的参数。SugarCube 提供了各种可用的函数和方法，也可以使用标准 JavaScript 函数和方法。

考虑以下 Harlowe 代码：

```plain
(link-goto: "Go somewhere else", (either: "this passage", "that passage", "the other passage"))
```

上述代码在 SugarCube 中的版本可能如下所示：

```plain
<<link "Go somewhere else" `either("this passage", "that passage", "the other passage")`>><</link>>
```

### 容器宏

Harlowe 使用其钩子语法（方括号）将宏与其内容关联，而 SugarCube 则使用「容器」宏——可以有内容关联的宏具有开始和结束标签。

```plain
<<if $var is 1>>
	The variable is 1.
<</if>>
```

### 链接和点击宏

SugarCube 没有 Harlowe 的 `(click:)` 宏家族的任何等价物。此外，SugarCube 普通的 `<<link>>` 宏没有与之关联的输出元素，并且默认不是像其 Harlowe 等价物那样的一次性链接。这两者都可以在 SugarCube 中通过使用 `<<linkreplace>>` 之类的宏或将 `<<link>>` 宏与 DOM 宏组合来构建。

### 用户输入

SugarCube 的用户输入宏（如 `<<textbox>>`）不能像在 Harlowe 中那样嵌套在 `<<set>>` 宏内。相反，宏被传入一个*接收变量*，该变量被设置为用户输入的值。

```plain
<label>What is your name? <<textbox "$name" "Frank">></label>
```

### 数据类型

Harlowe 对数据类型的实现与 SugarCube 的显著不同。数据类型指的是变量所持有的数据的「类型」，如数字、字符串、数组或其他任何东西。Harlowe 的类型比 SugarCube 更严格，要求作者调用 `(str:)` 或 `(num:)` 之类的宏来更改变量类型。SugarCube 像 JavaScript 一样使用*动态*类型。

### 数组、数据映射和数据集

Harlowe 的数组、数据映射和数据集在功能上类似于 JavaScript 的 `Array`、`Map` 和 `Set`，但有一些关键差异。SugarCube 要求作者使用标准 JavaScript 方法来定义和处理这些数据类型。

使用数组（SugarCube）：

```plain
<<set $array to []>>
<<run $array.push("something")>>
<<if $array.includes("something")>>…<</if>>
```

使用数据映射（SugarCube）：

```plain
<<set $map to new Map([["key", "value"]])>>
<<run $map.set("key", "another value")>>
<<if $map.has("key")>>…<</if>>
```

另一个重要区别：Harlowe 按*值传递*其非原始数据类型，而 SugarCube 像 JavaScript 一样按*引用传递*（在段落导航开始时才克隆它们）。

</div>
