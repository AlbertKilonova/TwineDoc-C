---
title: Unset_清除
description: 删除变量或对象的属性
---

<div v-pre>

# Unset_清除

清除故事变量、临时变量，以及这两种变量里存储的对象的属性。（`<<unset>>` 就是变量的「删除键」，点一下，眼不见心不烦（对象属性也能删，点得还很精准）。）

### 语法

```SugarCube
<<unset variableList>>
```

### 参数

* **`variableList`**：故事变量、临时变量，或这两种变量中存储的对象的属性组成的列表。

### 示例

取消设置变量：

```SugarCube
<<unset $rumors>>
<<unset _npc>>

<<unset $rumors, _npc, _choices, $job>>
```

取消设置对象属性：

```SugarCube
<<unset _choices.b>>
<<unset $towns['port ulster'].rumors>>

<<unset _choices.b, $towns['port ulster'].rumors, $pc.notes, _park.rides['wheel of death']>>
```

</div>
