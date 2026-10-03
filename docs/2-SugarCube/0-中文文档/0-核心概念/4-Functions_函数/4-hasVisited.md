---
title: HasVisited_是否到访
description: 判断指定段落是否出现在故事历史中
---

<div v-pre>

# HasVisited_是否到访

返回指定名称的段落是否出现在故事历史中。若给出多个段落名，返回集合的逻辑与聚合——即全部找到则 `true`，任一未找到则 `false`。（`hasVisited()` 是「到访记录查询」——查查玩家有没有来过这个地方。）

### 语法

```SugarCube
hasVisited(passageNames…)
```

### 参数

* **`passageNames`**：（`string` | `Array<string>`）要搜索的段落名。可以是列表或段落名数组。

### 返回值

全部找到则为布尔 `true`，否则 `false`。

### 异常

一个 `Error` 实例。

### 示例

```SugarCube
<<if hasVisited('Bar')>>
	…去过酒吧…
<</if>>

<<if not hasVisited('Bar')>>
	…从没去过酒吧…
<</if>>

<<if hasVisited('Bar', 'Café')>>
	…酒吧和咖啡馆都去过…
<</if>>
```

</div>
