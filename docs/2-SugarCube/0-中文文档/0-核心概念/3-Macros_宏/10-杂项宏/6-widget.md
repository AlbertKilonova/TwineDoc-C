---
title: Widget_小部件
description: 用标准宏和标记创建自定义宏
---

<div v-pre>

# Widget_小部件

用给定名称创建新的小部件宏（widget）。小部件允许你用故事里常用的标准宏和标记来创建宏。所有小部件都能通过 `_args` 特殊变量访问传入的参数。块状小部件能通过 `_contents` 特殊变量访问它们包裹的内容。（`<<widget>>` 是「自定义宏工厂」——把常用的宏组合打包成一个新宏，一次定义，到处调用，懒人福音。）

### 语法

```SugarCube
<<widget widgetName [container]>> … <</widget>>
```

### 参数

* **`widgetName`**：所创建小部件的名称，不应包含空白或尖括号（`<`、`>`）。若选择已有小部件的名称，新小部件会覆盖旧版本。**注意**：现有宏的名称是无效的小部件名称，使用会导致错误。
* **`container`**：（可选）关键字，表示创建为容器小部件——即非空，需要闭合标签；例如 `<<foo>>…<</foo>>`。

### 特殊变量 `_args` 与 `_contents`

`_args` 特殊变量在内部存储传给小部件的参数——以零基索引访问（`_args[0]` 是第一个参数），原始与解析后的完整参数字符串通过 `_args.raw` 和 `_args.full` 属性访问，小部件名称通过 `_args.name` 属性访问。

`_contents` 特殊变量由容器小部件在内部使用，存储它们包裹的内容。

### 示例

非容器小部件——性别代词：

```SugarCube
<<widget "he">>
	<<if $pcSex eq "male">>
		he
	<<elseif $pcSex eq "female">>
		she
	`<<else>>`
		it
	<</if>>
<</widget>>

"Are you sure that `<<he>>` can be trusted?"
```

带参数的小部件：

```SugarCube
<<widget "pm">>
	<<if _args[0]>>
		<<print _args[0]>>
	`<<else>>`
		Mum's the word!
	<</if>>
<</widget>>

`<<pm>>`        /* 输出：Mum's the word! */
<<pm "Hi!">>  /* 输出：Hi! */
```

容器小部件——对话框：

```SugarCube
<<widget "say" container>>
	<div class="say-box">
		<img class="say-image" @src="'images/' + _args[0].toLowerCase() + '.png'">
		<p class="say-text">_contents</p>
	</div>
<</widget>>

<<say "Chapel">>Tweego is a pathway to many abilities some consider to be… unnatural.<</say>>
```

> **警告**：小部件应*始终*定义在带 `widget` 标签的段落里——否则可能在页面重载时丢失。
> **警告**：`_args` 变量应视为不可变，未来将强制如此。
> **警告**：在一个容器小部件内直接调用另一个容器小部件时，外部小部件的 `_contents` **不能**包含在内部小部件的调用体里，否则会导致失控递归。

</div>
