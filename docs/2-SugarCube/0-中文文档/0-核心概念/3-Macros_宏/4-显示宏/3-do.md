---
title: Do_刷新容器
description: 显示内容并响应 `<<redo>>` 更新
---

<div v-pre>

# Do_刷新容器

显示其内容。监听 `<<redo>>` 宏命令，在收到命令时更新其内容。（`<<do>>` 是个「听话的显示屏」——平时乖乖显示，一听到 `<<redo>>` 喊「刷新」，立马更新内容。）

### 语法

```SugarCube
<<do [tag tags] [element tag]>> … <</do>>
```

### 参数

* **`tag` *`tags`***：（可选）以空格分隔的标签列表，用于过滤 `<<redo>>` 命令。
* **`element` *`tag`***：（可选）用作内容容器的元素——例如 `div` 和 `span`。若省略，默认 `span`。

### 示例

基本用法：

```SugarCube
<<set $money to 10>>

''金钱：'' `<<do>>`$money<</do>>

<<link "更新金钱显示">>
	<<set $money += 10>>
	`<<redo>>`
<</link>>
```

```SugarCube
<<set $key to "">> /* 没有钥匙 */

`<<do>>`
	<<if $key>>
		你有 $key 这把钥匙。
	`<<else>>`
		你没有钥匙。
	<</if>>
<</do>>

<<link "更新钥匙显示">>
	<<set $key to ["", "red", "blue", "skull"].random()>>
	`<<redo>>`
<</link>>
```

过滤更新：

```SugarCube
''Foo：'' <<do tag "foo foobar">><<= ["fee", "fie", "foe", "fum"].random()>><</do>>
''Bar：'' <<do tag "bar foobar">><<= ["alfa", "bravo", "charlie", "delta"].random()>><</do>>

<<link "更新 foo">><<redo "foo">><</link>>
<<link "更新 bar">><<redo "bar">><</link>>
<<link "更新 foo 和 bar (1)">><<redo "foo bar">><</link>>
<<link "更新 foo 和 bar (2)">><<redo "foobar">><</link>>
```

</div>
