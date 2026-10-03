---
title: Array.countWith_条件计数
description: 返回数组中通过谓词函数测试的成员次数
---

<div v-pre>

# Array.countWith_条件计数

返回数组中通过给定谓词函数测试的成员次数。（`countWith()` 是「按条件点人头」——只数满足条件的。）

### 语法

```SugarCube
<Array>.countWith(predicate [, thisArg])
```

### 参数

* **`predicate`**：（`Function`）用于测试每个成员的函数，带三个参数调用：
  * **`value`**：（`any`）正在处理的成员。
  * **`index`**：（可选，*整数* `number`）正在处理成员的索引。
  * **`array`**：（可选，`array`）正在处理的数组。
* **`thisArg`**：（可选，`any`）执行 `predicate` 时用作 `this` 的值。

### 返回值

一个*整数* `number`，值为成员通过测试的次数。

### 示例

```SugarCube
<<set $fruits to ['Apples', 'Oranges', 'Plums', 'Oranges']>>
<<set $result to $fruits.countWith((fruit) => fruit === 'Oranges')>>
/* 返回 2 */

<<set $numbers to [1, 2.3, 4, 76, 3.1]>>
<<set $result to $numbers.countWith(Number.isInteger)>>
/* 返回 3 */
```

</div>
