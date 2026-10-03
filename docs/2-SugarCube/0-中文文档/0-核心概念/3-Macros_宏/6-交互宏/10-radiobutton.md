---
title: Radiobutton_单选按钮
description: 创建单选按钮,用于修改变量值
---

<div v-pre>

# Radiobutton_单选按钮

创建一个单选按钮，用于修改给定名称变量的值。可以设置多个 `<<radiobutton>>` 宏修改同一个变量，使它们成为同一组单选按钮。（`<<radiobutton>>` 是「单选题」本尊——一组里面只能选一个，选了这个另一个自动取消，没得商量。）

### 语法

```SugarCube
<<radiobutton receiverName checkedValue [autocheck|checked]>>
```

### 参数

* **`receiverName`**：要修改的变量名称，**必须**加引号——例如 `"$foo"`。也支持对象和数组属性引用。
* **`checkedValue`**：选中时单选按钮设置的值。
* **`autocheck`**：（可选）关键字，表示应根据接收变量当前值自动设为选中状态。**注意**：对非原始值自动勾选可能失效。
* **`checked`**：（可选）关键字，表示单选按钮应处于选中状态。**注意**：同一组（使用相同接收变量）中只能有一个单选按钮被这样选中。

### 示例

基本用法：

```SugarCube
你最喜欢的馅饼是什么？
* <<radiobutton "$pie" "blueberry" autocheck>> 蓝莓？
* <<radiobutton "$pie" "cherry" autocheck>> 樱桃？
* <<radiobutton "$pie" "coconut cream" autocheck>> 椰子奶油？
```

配合 `<label>` 元素：

```SugarCube
你最喜欢的馅饼是什么？
* <label><<radiobutton "$pie" "blueberry" autocheck>> 蓝莓？</label>
* <label><<radiobutton "$pie" "cherry" autocheck>> 樱桃？</label>
* <label><<radiobutton "$pie" "coconut cream" autocheck>> 椰子奶油？</label>
```

> **提示**：出于无障碍考虑，建议把每个 `<<radiobutton>>` 及其文字包在 `<label>` 元素里。

</div>
