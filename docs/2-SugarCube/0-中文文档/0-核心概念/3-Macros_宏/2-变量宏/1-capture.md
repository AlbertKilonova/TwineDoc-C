---
title: Capture_捕获
description: 在宏内部生成变量值的本地副本
---

<div v-pre>

# Capture_捕获

获取故事变量和临时变量，在宏体内部生成它们值的本地版本。（可以把 `<<capture>>` 想象成「给变量拍张快照」——快门一按，之后外面怎么变都跟它没关系了。）

### 语法

```SugarCube
<<capture variableList>> … <</capture>>
```

### 参数

* **`variableList`**：故事变量和/或临时变量的列表。

### 示例

捕获循环变量，供异步宏使用：

```SugarCube
<<set _what to [
	"a crab rangoon",
	"a gaggle of geese",
	"an aardvark",
	"the world's smallest violin"
]>>
<<for _i to 0; _i lt _what.length; _i++>>
	<<capture _i>>
		I spy with my little <<linkappend "eye" t8n>>, _what[_i]<</linkappend>>.
	<</capture>>
<</for>>
```

一次捕获多个变量：

```SugarCube
<<capture $aStoryVar, $anotherStoryVar, _aTempVar>> … <</capture>>
```

> **注意**：只有当你要在异步宏（如交互宏、`<<repeat>>`、`<<timed>>`）里使用一个会变化的变量（典型如循环变量）时，才需要 `<<capture>>`。

</div>
