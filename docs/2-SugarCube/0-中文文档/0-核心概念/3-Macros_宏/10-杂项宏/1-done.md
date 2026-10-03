---
title: Done_渲染完成
description: 页面渲染完成且引擎空闲时静默执行内容
---

<div v-pre>

# Done_渲染完成

当页面渲染完成、引擎进入空闲状态时，静默执行其内容。通常只用于运行需要操作传入段落元素的代码，因为你必须等它们被添加到页面之后。（`<<done>>` 是「等等再动手」——等页面渲染完了，再悄咪咪地改 DOM。）

### 语法

```SugarCube
`<<done>>` … <</done>>
```

### 参数

*无*

### 示例

```SugarCube
@@#spy;@@

`<<done>>`
	<<replace "#spy">>I spy with my little eye, a crab rangoon.<</replace>>
<</done>>
```

> **提示**：如果你需要在多个段落运行同一段代码，考虑用 `PassageDone` 特殊段落，或用 `:passagedisplay` 事件代替。

</div>
