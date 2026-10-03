---
title: Numberbox_数字输入框
description: 创建数字输入框,用于修改变量值
---

<div v-pre>

# Numberbox_数字输入框

创建一个数字输入框，用于修改给定名称变量的值，可选择把玩家转到另一个段落。（`<<numberbox>>` 是「数字收割机」——让玩家乖乖输入数字，你负责在后面用 `$变量` 收钱。）

### 语法

```SugarCube
<<numberbox receiverName defaultValue [passage] [autofocus]>>
```

### 参数

* **`receiverName`**：要修改的变量名称，**必须**加引号——例如 `"$foo"`。也支持对象和数组属性引用。
* **`defaultValue`**：数字框的默认值。
* **`passage`**：（可选）按下回车键时要前往的段落名称。既可用段落名，也可用链接标记。
* **`autofocus`**：（可选）关键字，表示数字框应自动获得焦点。每页只能使用一次；尝试聚焦多个元素是未定义行为。

### 示例

```SugarCube
/* 创建一个修改 $wager 的数字框 */
在比赛里给 Buttstallion 下注多少？ <<numberbox "$wager" 100>>

/* 自动聚焦 */
在比赛里给 Buttstallion 下注多少？ <<numberbox "$wager" 100 autofocus>>

/* 转发到 "Result" 段落 */
在比赛里给 Buttstallion 下注多少？ <<numberbox "$wager" 100 "Result">>
```

</div>
