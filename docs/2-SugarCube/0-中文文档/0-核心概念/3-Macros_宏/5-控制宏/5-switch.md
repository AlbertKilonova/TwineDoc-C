---
title: Switch_分支
description: 根据表达式的值执行匹配的分支
---

<div v-pre>

# Switch_分支

求值给定的表达式，并将其与 `<<case>>` 子宏中的值进行比较。每个 case 中的值都会与父 `<<switch>>` 给定表达式的结果进行比较。匹配成功时，将执行匹配 case 的内容。若没有 case 匹配，且存在可选的 `<<default>>` case（必须是最后一个 case），则执行其内容。最多只有一个 case 会执行。（`<<switch>>` 是「多选一」的开关，记得把 `<<default>>` 放在最后——它是「都没猜中」时的兜底答案。）

### 语法

```SugarCube
<<switch expression>>
	[<<case valueList>> …]
	[`<<default>>` …]
<</switch>>
```

### 参数

#### `<<switch>>`

* **`expression`**：一个有效表达式。更多信息请参阅「表达式」。

#### `<<case>>`

* **`valueList`**：一个以空格分隔的值列表，用于与 switch 表达式的结果比较。

### 示例

没有 default case：

```SugarCube
<<switch $hairColor>>
<<case "red" "auburn">>
	You ginger.
<<case "black" "brown">>
	Dark haired, eh?
<<case "blonde">>
	You may have more fun.
<</switch>>
```

带 default case：

```SugarCube
<<switch visited()>>
<<case 1>>
	你第一次看到这壮观的瀑布，惊叹于它的自然之美。
<<case 2 3>>
	你再次凝视这壮观的瀑布。
<<case 4 5>>
	你又双叒叕看着这瀑布。
`<<default>>`
	哦，还是那座瀑布。呵。
<</switch>>
```

> **注意**：SugarCube 不会裁剪 `<<case>>`/`<<default>>` 宏内容中的空白，所以作者不必为了在需要的地方保留空白而使用各种权宜之计。不过，这也意味着在编写时需要格外小心，以确保最终输出中不会产生多余的空白。

</div>
