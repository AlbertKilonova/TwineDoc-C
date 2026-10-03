---
title: Array.flatMap_映射展平
description: 边映射边展平(深度 1),等价于 map().flat()
---

<div v-pre>

# Array.flatMap_映射展平

返回一个新数组，由对源数组每个元素调用给定映射函数的结果拼接（递归深度 1）而成。不修改原数组。等价于调用 `<Array>.map(…).flat()`。（`flatMap()` 是「边映射边压平」——一步到位。）

### 语法

```SugarCube
<Array>.flatMap(callback [, thisArg])
```

### 参数

* **`callback`**：（`Function`）用于产生新数组成员的函数，带三个参数调用：`value`（成员）、`index`（索引）、`array`（数组）。
* **`thisArg`**：（可选，`any`）执行 `callback` 时用作 `this` 的值。

### 返回值

一个由所有成员展平而成的新 `Array`。

### 示例

```SugarCube
<<set $npa to ['Alfa', 'Bravo Charlie', 'Delta Echo Foxtrot']>>

<<set $result to $npa.flatMap((val) => val.split(' '))>>
/* 返回 ['Alfa', 'Bravo', 'Charlie', 'Delta', 'Echo', 'Foxtrot'] */
```

</div>
