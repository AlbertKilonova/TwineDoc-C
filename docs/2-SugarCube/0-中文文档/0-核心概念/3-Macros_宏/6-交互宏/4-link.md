---
title: Link_链接
description: 创建链接,点击时静默执行内容
---

<div v-pre>

# Link_链接

创建一个链接，点击时静默执行其内容，可选择把玩家转到另一个段落。既可以用「链接文本 + 段落名」两个独立参数调用，也可以用链接标记或图像标记调用。（`<<link>>` 是 `<<button>>` 的「文静版」——一个用链接，一个用按钮，内核一模一样。）

### 语法

```SugarCube
<<link linkText [passageName] [class classNames] [id identifier]>> … <</link>>
<<link linkMarkup [class classNames] [id identifier]>> … <</link>>
<<link imageMarkup [class classNames] [id identifier]>> … <</link>>
```

### 参数

#### 独立参数形式

* **`linkText`**：链接文本。可包含标记。
* **`passageName`**：（可选）要前往的段落名称。

#### 链接标记形式

* **`linkMarkup`**：要使用的链接标记（仅常规语法，不含设置器）。

#### 图像标记形式

* **`imageMarkup`**：要使用的图像标记（仅常规语法，不含设置器）。

此外，所有形式都可包含以下可选参数：

* **`class` *`classNames`***：（可选）设置链接的类。
* **`id` *`identifier`***：（可选）设置链接的标识符，必须唯一。

### 示例

基本用法（不转发）：

```SugarCube
力量：<<set $pcStr to 10>>$pcStr \
( <<link "[+]">><<set $pcStr++>><<replace "#stats-str">>$pcStr<</replace>><</link>> \
| <<link "[-]">><<set $pcStr-->><<replace "#stats-str">>$pcStr<</replace>><</link>> )
```

基本用法（转发）：

```SugarCube
<<link "Do the thing, Zhu Li!" "Does the thing">>
	/* 要运行的代码… */
<</link>>
```

```SugarCube
<<link [[Do the thing, Zhu Li!|Does the thing]]>>
	/* 要运行的代码… */
<</link>>
```

```SugarCube
<<link [img[doing-the-thing.jpg][Does the thing]]>>
	/* 要运行的代码… */
<</link>>
```

带可选参数：

```SugarCube
<<link "Poke the bear." "Pokes bear" class "bear-poke">><</link>>
```

```SugarCube
<<link "Menu" id "menu-link">>
	/* 打开菜单… */
<</link>>
```

> **注意**：如果你只是需要一个能修改变量的段落链接，链接标记和图像标记都提供「设置器」变体。

</div>
