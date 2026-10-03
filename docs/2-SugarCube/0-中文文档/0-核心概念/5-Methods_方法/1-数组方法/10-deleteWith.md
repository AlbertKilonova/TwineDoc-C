---
title: Array.deleteWith_条件删除
description: 移除通过谓词函数测试的成员并返回被移除成员
---

<div v-pre>

# Array.deleteWith_条件删除

从数组中移除所有通过谓词函数测试的成员，并返回一个包含被移除成员的新数组。（`deleteWith()` 是「按条件清除」——满足条件的统统删掉。）

### 语法

```SugarCube
<Array>.deleteWith(predicate [, thisArg])
```

### 参数

* **`predicate`**：（`Function`）用于测试每个成员的函数，带三个参数调用：`value`（成员）、`index`（索引）、`array`（数组）。
* **`thisArg`**：（可选，`any`）执行 `predicate` 时用作 `this` 的值。

### 返回值

一个包含被移除成员的新 `Array`。

### 示例

```SugarCube
<<set $fruits to ['Apples', 'Apricots', 'Oranges']>>

$fruits.deleteWith((val) => val === 'Apricots')
/* 返回 ['Apricots'];$fruits 变为 ['Apples', 'Oranges'] */

$fruits.deleteWith((val) => val.startsWith('Ap'))
/* 返回 ['Apples', 'Apricots'] */
```

</div>
