---
title: HTML_超文本标记语言
description: 文档主体的层级结构与关联的 HTML ID 和类名
---

<div v-pre>

# HTML_超文本标记语言

文档主体的层级结构，包括关联的 HTML ID 和类名，如下所示。

### 注意事项：

+ 省略号（`…`）表示在运行时动态生成的数据。
+ `#story-title-separator` 元素通常未被使用。
+ 故事菜单 `#menu-story` 只有在使用了 StoryMenu 特殊段落时才会存在。
+ 继续按钮的核心菜单项 `#menu-item-continue` 只有在存在浏览器存档（自动或槽位）时才会存在。
+ 设置对话框的核心菜单项 `#menu-item-settings` 只有在使用了 Setting API 时才会存在。

```html
<body class="…">
	<div id="init-screen"></div>
	<div id="ui-overlay" class="ui-close"></div>
	<div id="ui-dialog" tabindex="0" role="dialog" aria-labelledby="ui-dialog-title">
		<div id="ui-dialog-titlebar">
			<h1 id="ui-dialog-title"></h1>
			<button id="ui-dialog-close" class="ui-close" tabindex="0" aria-label="…"></button>
		</div>
		<div id="ui-dialog-body"></div>
	</div>
	<div id="ui-bar">
		<div id="ui-bar-tray">
			<button id="ui-bar-toggle" tabindex="0" title="…" aria-label="…"></button>
			<div id="ui-bar-history">
				<button id="history-backward" tabindex="0" title="…" aria-label="…">…</button>
				<button id="history-jumpto" tabindex="0" title="…" aria-label="…">…</button>
				<button id="history-forward" tabindex="0" title="…" aria-label="…">…</button>
			</div>
		</div>
		<div id="ui-bar-body">
			<header id="title" role="banner">
				<div id="story-banner"></div>
				<h1 id="story-title"></h1>
				<div id="story-subtitle"></div>
				<div id="story-title-separator"></div>
				<p id="story-author"></p>
			</header>
			<div id="story-caption"></div>
			<nav id="menu" role="navigation">
				<ul id="menu-story">…<ul>
				<ul id="menu-core">
					<li id="menu-item-continue"><a tabindex="0">…</a></li>
					<li id="menu-item-saves"><a tabindex="0">…</a></li>
					<li id="menu-item-settings"><a tabindex="0">…</a></li>
					<li id="menu-item-restart"><a tabindex="0">…</a></li>
				</ul>
			</nav>
		</div>
	</div>
	<div id="story" role="main">
		<div id="passages">
			<div class="passage …" id="…" data-passage="…">
				<!-- 活动（当前）段落内容 -->
			</div>
		</div>
	</div>
	<!-- 故事数据块，取决于编译器版本（见下文） -->
	<script id="script-sugarcube" type="text/javascript"><!-- 主 SugarCube 模块 --></script>
</body>
```

### 故事数据块：

省略号（`…`）表示在编译时生成的数据。

##### Twine 2 风格数据块

```html
<tw-storydata name="…" startnode="…" creator="…" creator-version="…"
	ifid="…" zoom="…" format="…" format-version="…" options="…" hidden>
	<!-- 段落数据节点… -->
</tw-storydata>
```

##### Twine 1 风格数据块

```html
<div id="store-area" data-size="…" hidden>
	<!-- 段落数据节点… -->
</div>
```

</div>
