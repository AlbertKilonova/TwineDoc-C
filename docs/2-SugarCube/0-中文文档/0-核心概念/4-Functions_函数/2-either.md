---
title: Either_随机取值
description: 从给定参数中随机返回一个值
---

<div v-pre>

# Either_随机取值

从给定参数中返回一个随机值。（`either()` 是「抽奖箱」——扔一堆选项进去，随机摸一个出来。）

### 语法

```SugarCube
either(list…)
```

### 参数

* **`list`**：（`any`）要操作的值列表。可以是单个值、实际数组或类数组对象的任意组合。所有值会拼成一个列表供选择。**注意**：不会展平嵌套数组——若需要，可先用 `<Array>.flat()` 展平。

### 返回值

来自给定参数的一个随机值（`any`）。

### 异常

*无*

### 示例

宏中用法（单个值）：

```SugarCube
<<set $pie to either('Blueberry', 'Cherry', 'Pecan')>>
```

（数组）：

```SugarCube
<<set $pies to ['Blueberry', 'Cherry', 'Pecan']>>
<<set $pie to either($pies)>>
```

（值和数组混合）：

```SugarCube
<<set $letters to ['A', 'B']>>
<<set $letter to either($letters, 'C', 'D')>>
```

</div>
