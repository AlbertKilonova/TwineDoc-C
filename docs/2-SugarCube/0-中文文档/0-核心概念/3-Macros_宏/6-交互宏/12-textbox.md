---
title: Textbox_文本框
description: 创建单行文本输入框,用于修改变量值
---

<div v-pre>

# Textbox_文本框

创建一个文本输入框，用于修改给定名称变量的值，可选择把玩家转到另一个段落。（`<<textbox>>` 是「起名神器」——让玩家给角色/宠物/武器取名字，回头你就能在剧情里喊出来。）

### 语法

```SugarCube
<<textbox receiverName defaultValue [passage] [autofocus]>>
```

### 参数

* **`receiverName`**：要修改的变量名称，**必须**加引号——例如 `"$foo"`。也支持对象和数组属性引用。
* **`defaultValue`**：文本框的默认值。
* **`passage`**：（可选）按下回车键时要前往的段落名称。既可用段落名，也可用链接标记。
* **`autofocus`**：（可选）关键字，表示文本框应自动获得焦点。每页只能使用一次。

### 示例

```SugarCube
/* 创建一个修改 $pie 的文本框 */
你最喜欢的馅饼是什么？ <<textbox "$pie" "Blueberry">>

/* 自动聚焦 */
你最喜欢的馅饼是什么？ <<textbox "$pie" "Blueberry" autofocus>>

/* 转发到 "Cakes" 段落 */
你最喜欢的馅饼是什么？ <<textbox "$pie" "Blueberry" "Cakes">>
```

</div>
