---
title: Textarea_多行文本框
description: 创建多行文本输入块,用于修改变量值
---

<div v-pre>

# Textarea_多行文本框

创建一个多行文本输入块，用于修改给定名称变量的值。（`<<textarea>>` 是「作文本」——让玩家写小作文的地方，多行输入随便写。）

### 语法

```SugarCube
<<textarea receiverName defaultValue [autofocus]>>
```

### 参数

* **`receiverName`**：要修改的变量名称，**必须**加引号——例如 `"$foo"`。也支持对象和数组属性引用。
* **`defaultValue`**：文本块的默认值。
* **`autofocus`**：（可选）关键字，表示文本块应自动获得焦点。每页只能使用一次。

### 示例

```SugarCube
/* 创建一个修改 $pieEssay 的文本块 */
写一篇关于馅饼的小作文：
<<textarea "$pieEssay" "">>

/* 自动聚焦 */
写一篇关于馅饼的小作文：
<<textarea "$pieEssay" "" autofocus>>
```

</div>
