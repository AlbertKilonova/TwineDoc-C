---
title: Checkbox_复选框
description: 创建复选框,用于修改变量值
---

<div v-pre>

# Checkbox_复选框

创建一个复选框，用于修改给定名称变量的值。（`<<checkbox>>` 是「打勾勾」神器——勾上是一个值，不勾是另一个值，用来记玩家的选择再合适不过。）

### 语法

```SugarCube
<<checkbox receiverName uncheckedValue checkedValue [autocheck|checked]>>
```

### 参数

* **`receiverName`**：要修改的变量名称，**必须**加引号——例如 `"$foo"`。也支持对象和数组属性引用——例如 `"$foo.bar"`、`"$foo['bar']"`、`"$foo[0]"`。
* **`uncheckedValue`**：未勾选时复选框设置的值。
* **`checkedValue`**：勾选时复选框设置的值。
* **`autocheck`**：（可选）关键字，表示复选框应根据接收变量当前值自动设为勾选状态。**注意**：对非原始值（即数组和对象）自动勾选可能失效。
* **`checked`**：（可选）关键字，表示复选框应处于勾选状态。

### 示例

基本用法：

```SugarCube
你喜欢什么馅饼？
* <<checkbox "$pieBlueberry" false true autocheck>> 蓝莓？
* <<checkbox "$pieCherry" false true autocheck>> 樱桃？
* <<checkbox "$pieCoconutCream" false true autocheck>> 椰子奶油？
```

```SugarCube
你喜欢什么馅饼？
* <<checkbox "$pieBlueberry" false true checked>> 蓝莓？
* <<checkbox "$pieCherry" false true>> 樱桃？
* <<checkbox "$pieCoconutCream" false true checked>> 椰子奶油？
```

配合 `<label>` 元素：

```SugarCube
你喜欢什么馅饼？
* <label><<checkbox "$pieBlueberry" false true autocheck>> 蓝莓？</label>
* <label><<checkbox "$pieCherry" false true autocheck>> 樱桃？</label>
* <label><<checkbox "$pieCoconutCream" false true autocheck>> 椰子奶油？</label>
```

> **提示**：出于无障碍考虑，建议把每个 `<<checkbox>>` 及其文字包在 `<label>` 元素里，这样点击文字也能触发复选框。

</div>
