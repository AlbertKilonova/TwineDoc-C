---
title: Listbox_列表框
description: 创建下拉列表框,用于修改变量值
---

<div v-pre>

# Listbox_列表框

创建一个列表框，用于修改给定名称变量的值。列表选项通过 `<<option>>` 和/或 `<<optionsfrom>>` 填充。（`<<listbox>>` 是 `<<cycle>>` 的「下拉款」——不用一下下点，直接展开列表选，效率党狂喜。）

### 语法

```SugarCube
<<listbox receiverName [autoselect]>>
	[<<option label [value [selected]]>> …]
	[<<optionsfrom collection>> …]
<</listbox>>
```

### 参数

#### `<<listbox>>`

* **`receiverName`**：要修改的变量名称，**必须**加引号——例如 `"$foo"`。也支持对象和数组属性引用。
* **`autoselect`**：（可选）关键字，表示应根据接收变量当前值自动选中一个选项作为默认值。**注意**：对非原始值（数组和对象）自动选中可能失效。

#### `<<option>>`

* **`label`**：列表框为该选项显示的标签。
* **`value`**：（可选）选项被选中时设置的值。若省略，则用标签作为值。
* **`selected`**：（可选）关键字，表示该选项应为默认值。只能有一个选项被选中。**注意**：若指定了 `selected`，则 `value` 参数不可省略。

#### `<<optionsfrom>>`

* **`collection`**：求值结果必须是有效集合类型的表达式。

| 集合类型 | 选项：标签，值 |
| --- | --- |
| 数组、集合 | 成员：值，值 |
| 泛型对象 | 属性：名称，值 |
| 映射 | 条目：键，值 |

### 示例

使用 `<<option>>`：

```SugarCube
生命、宇宙以及一切的终极问题的答案是？
<<listbox "$lbanswer" autoselect>>
	<<option "毛巾">>
	<<option "π" 3.14159>>
	<<option 42>>
	<<option 69>>
	<<option "∞" Infinity>>
<</listbox>>
```

使用 `<<optionsfrom>>` 配合数组：

```SugarCube
/* 给定：_pieOptions = ["blueberry", "cherry", "coconut cream"] */
你最喜欢的馅饼是什么？
<<listbox "$pie" autoselect>>
	<<optionsfrom _pieOptions>>
<</listbox>>
```

</div>
