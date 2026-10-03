---
title: String.format_格式化
description: 用参数值替换格式项,返回格式化字符串
---

<div v-pre>

# String.format_格式化

返回一个格式化字符串，用对应参数值的文本等价物替换格式字符串中的每个格式项。（`String.format()` 是「填空题」——按位置把参数填进模板。）

### 语法

```SugarCube
String.format(format , arguments…)
```

### 参数

* **`format`**：（`string`）格式字符串，由普通文本和格式项组成。
* **`arguments`**：（`any`… | `Array<any>`）参数列表（按索引对应格式项）或数组（成员按索引对应）。

### 格式项

格式项语法为 `{index[,alignment]}`（方括号表示可选）：

* **`index`**：（*整数* `number`）参数的（零基）索引。
* **`alignment`**：（可选，*整数* `number`）字段总长度及对齐方式（正数右对齐，负数左对齐）。

### 返回值

一个基于格式和参数的新 `string`。

### 示例

```SugarCube
<<set $result to String.format('{0}, {1}!', 'Hello', 'World')>>
/* 返回 'Hello, World!' */

<<set $result to String.format('{0,6}', 'foo')>>
/* 返回 '   foo' */
```

</div>
