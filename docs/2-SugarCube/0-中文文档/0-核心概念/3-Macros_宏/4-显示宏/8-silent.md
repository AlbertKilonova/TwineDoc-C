---
title: Silent_静默执行
description: 丢弃宏体产生的所有输出(错误除外)
---

<div v-pre>

# Silent_静默执行

使其宏体内产生的任何输出都被丢弃（错误除外，错误仍会显示）。通常只用于整理宏块、方便阅读，同时确保不会因间距等产生任何输出。（`<<silent>>` 是「静音室」——进去之后大喊大叫，外面也听不见（除了报错）。）

### 语法

```SugarCube
`<<silent>>` … <</silent>>
```

### 参数

*无*

### 示例

基本用法：

```SugarCube
`<<silent>>`

	你永远看不到这些内容！

<</silent>>
```

隐藏倒计时器的内部实现：

```SugarCube
<<set $seconds to 10>>\
倒计时：还剩 $seconds 秒!\
`<<silent>>`
	<<repeat 1s>>
		<<set $seconds to $seconds - 1>>
		<<if $seconds gt 0>>
			<<replace "#countdown">>还剩 $seconds 秒<</replace>>
		`<<else>>`
			<<replace "#countdown">>时间到<</replace>>
			/* 这里做点有用的事 */
			`<<stop>>`
		<</if>>
	<</repeat>>
<</silent>>
```

</div>
