---
title: Array.flat_展平
description: 把嵌套数组按给定深度展平为新数组
---

<div v-pre>

# Array.flat_展平

返回一个新数组，将源数组中的所有子数组元素按给定深度递归拼接进去。不修改原数组。（`flat()` 是「压平机」——把嵌套数组压成一层。）

### 语法

```SugarCube
<Array>.flat(depth)
```

### 参数

* **`depth`**：（可选，*整数* `number`）要展平的嵌套层级数。省略则默认 `1`。

### 返回值

一个由所有成员按给定深度展平而成的新 `Array`。

### 示例

```SugarCube
<<set $npa to [['Alfa', 'Bravo'], [[['Charlie'], 'Delta'], ['Echo']], 'Foxtrot']>>

<<set $result to $npa.flat()>>
/* 返回 ['Alfa', 'Bravo', [['Charlie'], 'Delta'], ['Echo'], 'Foxtrot'] */

<<set $result to $npa.flat(Infinity)>>
/* 返回 ['Alfa', 'Bravo', 'Charlie', 'Delta', 'Echo', 'Foxtrot'] */
```

</div>
