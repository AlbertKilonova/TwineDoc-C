---
title: Button_按钮
description: 创建按钮,点击时静默执行内容
---

<div v-pre>

# Button_按钮

创建一个按钮，点击时静默执行其内容，可选择把玩家转到另一个段落。既可以用「链接文本 + 段落名」两个独立参数调用，也可以用链接标记或图像标记调用。（`<<button>>` 就是「伪装成按钮的链接」——长得像按钮，干的却是链接的活儿。）

### 语法

```SugarCube
<<button linkText [passageName] [class classNames] [id identifier]>> … <</button>>
<<button linkMarkup [class classNames] [id identifier]>> … <</button>>
<<button imageMarkup [class classNames] [id identifier]>> … <</button>>
```

### 参数

#### 独立参数形式

* **`linkText`**：按钮文本。可包含标记。
* **`passageName`**：（可选）要前往的段落名称。

#### 链接标记形式

* **`linkMarkup`**：要使用的链接标记（仅常规语法，不含设置器）。

#### 图像标记形式

* **`imageMarkup`**：要使用的图像标记（仅常规语法，不含设置器）。

此外，所有形式都可包含以下可选参数：

* **`class` *`classNames`***：（可选）设置按钮的类。
* **`id` *`identifier`***：（可选）设置按钮的标识符，必须唯一。

### 示例

基本用法（不转发）：属性加点示例：

```SugarCube
力量：<<set $pcStr to 10>>$pcStr \
( <<button "[+]">><<set $pcStr++>><<replace "#stats-str">>$pcStr<</replace>><</button>> \
| <<button "[-]">><<set $pcStr-->><<replace "#stats-str">>$pcStr<</replace>><</button>> )
```

基本用法（转发）：运行代码，然后前往指定段落：

```SugarCube
<<button "Do the thing, Zhu Li!" "Does the thing">>
	/* 要运行的代码… */
<</button>>
```

```SugarCube
<<button [[Do the thing, Zhu Li!|Does the thing]]>>
	/* 要运行的代码… */
<</button>>
```

```SugarCube
<<button [img[doing-the-thing.jpg][Does the thing]]>>
	/* 要运行的代码… */
<</button>>
```

带可选参数：

```SugarCube
<<button "Poke the bear." "Pokes bear" class "bear-poke">><</button>>
```

```SugarCube
<<button "Menu" id "menu-button">>
	/* 打开菜单… */
<</button>>
```

> **注意**：此宏在功能上与 `<<link>>` 完全一致，只是用的是按钮元素（`<button>`）而非锚元素（`<a>`）。

> **参见**：交互宏警告。

</div>
