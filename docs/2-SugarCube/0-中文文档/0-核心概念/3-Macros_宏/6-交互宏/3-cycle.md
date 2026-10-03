---
title: Cycle_循环链接
description: 创建循环切换链接,用于修改变量值
---

<div v-pre>

# Cycle_循环链接

创建一个循环切换链接，用于修改给定名称变量的值。循环选项通过 `<<option>>` 和/或 `<<optionsfrom>>` 填充。（`<<cycle>>` 是「循环切换」小能手——点一下换一个选项，像翻牌一样，转到头了还能用 `once` 让它「锁死」。）

### 语法

```SugarCube
<<cycle receiverName [once] [autoselect]>>
	[<<option label [value [selected]]>> …]
	[<<optionsfrom collection>> …]
<</cycle>>
```

### 参数

#### `<<cycle>>`

* **`receiverName`**：要修改的变量名称，**必须**加引号——例如 `"$foo"`。也支持对象和数组属性引用。
* **`once`**：（可选）关键字，表示循环到达最后一个选项后应停止并停用自身。**注意**：使用此关键字时，你大概率想从第一个选项开始，所以要么不选选项（默认第一个），要么只选第一个选项。
* **`autoselect`**：（可选）关键字，表示应根据接收变量当前值自动选中一个选项作为循环默认值。**注意**：对非原始值（数组和对象）自动选中可能失效。

#### `<<option>>`

* **`label`**：循环链接为该选项显示的标签。
* **`value`**：（可选）选项被选中时循环链接设置的值。若省略，则用标签作为值。
* **`selected`**：（可选）关键字，表示该选项应为循环默认值。只能有一个选项被这样选中。若无选项被选为默认，则循环链接默认第一个选项（除非指定了 `autoselect` 关键字）。**注意**：若指定了 `selected`，则 `value` 参数不可省略。

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
<<cycle "$answer" autoselect>>
	<<option "毛巾">>
	<<option "π" 3.14159>>
	<<option 42>>
	<<option 69>>
	<<option "∞" Infinity>>
<</cycle>>
```

使用 `<<optionsfrom>>` 配合数组：

```SugarCube
/* 给定：_pieOptions = ["blueberry", "cherry", "coconut cream"] */
你最喜欢的馅饼是什么？
<<cycle "$pie" autoselect>>
	<<optionsfrom _pieOptions>>
<</cycle>>
```

使用 `once` 关键字：

```SugarCube
你看到一个巨大的、糖果般的红色按钮。
<<cycle "$presses" once>>
	<<option "要按吗？" 0>>
	<<option "什么都没发生。再按一次？" 1>>
	<<option "还来？" 2>>
	<<option "这一次它咔哒一声锁定，开始发出不祥的光芒。" 3>>
<</cycle>>
```

</div>
