---
title: LastVisited_上次到访
description: 返回距上次到访指定段落已过去的回合数
---

<div v-pre>

# LastVisited_上次到访

返回故事历史中上次出现指定名称段落以来经过的回合数，若不存在则返回 `-1`。若给出多个段落名，返回其中最小的计数（可能为 `-1`）。（`lastVisited()` 是「时间戳」——查查玩家多久没来了。）

### 语法

```SugarCube
lastVisited(passageNames…)
```

### 参数

* **`passageNames…`**：（`string` | `Array<string>`）要搜索的段落名。可以是列表或段落名数组。

### 返回值

最小计数（*整数* `number`），否则 `-1`。

### 异常

一个 `Error` 实例。

### 示例

```SugarCube
<<if lastVisited('Bar') is -1>>
	…从没去过酒吧…
<</if>>

<<if lastVisited('Bar') is 0>>
	…现在正在酒吧…
<</if>>

<<if lastVisited('Bar') is 1>>
	…一个回合前去过酒吧…
<</if>>
```

</div>
