---
title: Visited_到访次数
description: 返回指定段落在故事历史中出现的次数
---

<div v-pre>

# Visited_到访次数

返回故事历史中指定名称段落出现的次数。若给出多个段落名，返回其中最小的计数。（`visited()` 是「签到簿」——数数玩家来过这里几次。）

### 语法

```SugarCube
visited([passageNames])
```

### 参数

* **`passageNames`**：（可选，`string` | `Array<string>`）要搜索的段落名。可以是列表或段落名数组。省略则默认当前段落。

### 返回值

段落计数（*整数* `number`）。

### 异常

*无*

### 示例

```SugarCube
<<if visited() is 3>>
	…来过当前段落恰好三次…
<</if>>

<<if visited('Bar')>>
	…至少来过酒吧一次…
<</if>>

<<if visited('Café') is 2>>
	…恰好来过咖啡馆两次…
<</if>>
```

</div>
