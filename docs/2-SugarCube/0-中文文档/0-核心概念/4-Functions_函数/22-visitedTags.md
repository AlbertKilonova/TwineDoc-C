---
title: VisitedTags_标签到访次数
description: 返回带有所给全部标签的段落数量
---

<div v-pre>

# VisitedTags_标签到访次数

返回故事历史中带有所给全部标签的段落数量。（`visitedTags()` 是「标签打卡」——按标签统计到访过的段落。）

### 语法

```SugarCube
visitedTags(tags…)
```

### 参数

* **`tags`**：（`string` | `Array<string>`）要搜索的标签。可以是列表或标签数组。

### 返回值

带有给定标签的段落数量（*整数* `number`）。

### 异常

一个 `Error` 实例。

### 示例

```SugarCube
<<if visitedTags('forest')>>
	…至少去过森林某处一次…
<</if>>

<<if visitedTags('forest', 'haunted') is 2>>
	…恰好去过森林闹鬼处两次…
<</if>>

<<if visitedTags('forest', 'burned') gte 3>>
	…去过森林烧毁处三次及以上…
<</if>>
```

</div>
