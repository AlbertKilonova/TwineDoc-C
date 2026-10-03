---
title: If_如果
description: 条件判断宏
---

<div v-pre>

# If_如果

如果给定的条件表达式求值为 `true`，则执行其内容。如果条件求值为 `false` 且存在 `<<elseif>>` 或 `<<else>>`，则可以执行其他内容。（`<<if>>` 就像人生的岔路口——选对了是桃花源，选错了……嗯，还有 `<<else>>` 给你兜底。）

### 语法

```SugarCube
<<if conditional>> … [<<elseif conditional>> …] [`<<else>>` …] <</if>>
```

### 参数

* **`conditional`**：一个有效的条件表达式，求值为 `true` 或 `false`。更多信息请参阅「表达式」和「运算符」。

### 示例

```SugarCube
<<if $daysUntilLoanDue is 0>><<include "Panic">><</if>>

<<if $cash lt 5>>
	对不起，女士，但你的钱不够买馅饼。
`<<else>>`
	<<set $cash -= 5, $hasMeatPie = true>>
	一个刚出炉的肉馅饼，马上就来！
<</if>>

<<if $affection gte 75>>
	我爱你！
<<elseif $affection gte 50>>
	我喜欢你。
<<elseif $affection gte 25>>
	我觉得你还行。
`<<else>>`
	离我远点。
<</if>>

<<if $hullBreached>>
	<<if $wearingHardSuit>>
		<<include "That was close">>
	<<elseif $wearingSoftSuit>>
		<<include "Hole in suit">>
	`<<else>>`
		<<include "You die">>
	<</if>>
<</if>>
```

> **注意**：SugarCube 不会裁剪 `<<if>>` 宏内容中的空白，这样作者就不必为了在需要的地方保留空白而使用各种权宜之计。不过，这也意味着在编写时需要格外小心，以确保最终输出中不会产生多余的空白。

</div>
