# <<type>>

### <font style="color:#ffffff;background-color:#601BDE;">🔗</font><font style="color:#ffffff;background-color:#601BDE;"><<type speed [start delay] [class classes] [element tag] [id ID] [keep|none] [skipkey key]>>…<</type>></font>
它会像电传打字机/老式打字机那样，一次输出一个字符（严格来说是代码点）。大部分内容都能输入：链接、标记、宏之类的都行。

:::tips
<font style="background:#F8CED3;color:#70000D">警告:</font>与宏或其他仅在某些外部操作或一段时间后才注入内容的代码进行交互时，可能会出现非预期行为，**强烈建议**先进行测试。

<font style="color:#117cee;"><<linkreplace>></font>

<font style="color:#117cee;"><<timed>></font>

:::

:::tips
<font style="background:#C0CAFC;color:#101E60">参阅:</font><font style="color:#117cee;">Config.macros.typeSkipKey、Config.macros.typeVisitedPassages 、<<type>>事件。</font>

:::

**历史：**

+ <font style="color:#df2a3f;">v2.3.20</font><font style="color:#262626;">：引入。</font>
+ <font style="color:#df2a3f;">v2.33.0</font><font style="color:#262626;">：新增了 [具体选项1]、[具体选项2]、[具体选项3] 等选项，以及</font><font style="color:#117cee;">class.classelementidmacro-type-done</font><font style="color:#262626;">类。</font>
+ <font style="color:#df2a3f;">v2.33.1</font><font style="color:#262626;">：新增了 option.</font><font style="color:#117cee;">skipkey</font><font style="color:#262626;"> 选项。</font>
+ <font style="color:#df2a3f;">v2.37.0</font><font style="color:#262626;">：更新了参数 so 和 skip.</font><font style="color:#117cee;">speed0s0ms</font><font style="color:#262626;">。</font>

**参数：**

+ <font style="color:#df2a3f;">speed</font><font style="color:#262626;">：字符输入的速率需为有效的</font><font style="color:#117cee;">CSS时间值</font><font style="color:#262626;">（例如1s和40ms）。建议从</font><font style="color:#117cee;">20–60ms</font><font style="color:#262626;">这个范围的值开始尝试。若设置为</font><font style="color:#117cee;">0s或0ms</font><font style="color:#262626;">，输入会立即完成。</font>
+ <font style="color:#df2a3f;">start delay</font><font style="color:#262626;">：（可选）延迟开始输入的时间，需为有效的</font><font style="color:#117cee;">CSS时间值</font><font style="color:#262626;">（例如 5s、500ms）。若省略，则默认为</font><font style="color:#117cee;">400ms</font><font style="color:#262626;">。</font>
+ <font style="color:#df2a3f;">class classes</font><font style="color:#262626;">：（可选）要添加到输入容器的、以空格分隔的类名列表。</font>
+ <font style="color:#df2a3f;">element tag</font><font style="color:#262626;">：（可选）用作输入容器的元素（例如 <div> 和 <span>）。若省略，则默认为 </font><font style="color:#117cee;"><div></font><font style="color:#262626;"> 。</font>
+ <font style="color:#df2a3f;">id ID</font><font style="color:#262626;">：（可选）分配给输入容器的唯一ID。</font>
+ <font style="color:#df2a3f;">keep</font><font style="color:#262626;">：（可选）关键词，用于表示输入完成后应保留光标。</font>
+ <font style="color:#df2a3f;">none</font><font style="color:#262626;">：（可选）关键词，用于表示完全不使用光标。</font>
+ <font style="color:#df2a3f;">skipkey</font><font style="color:#262626;">：（可选）用于立即完成输入的按键。若省略，则默认为</font><font style="color:#117cee;">Config.macros.typeSkipKey</font><font style="color:#262626;"> 的值。</font>

### 示例：
```plain
<<type 40ms>>
	每隔40毫秒就把这段内容里的字符敲进去，包括[[link]]和''其他标记''！
<</type>>

<<type 40ms start 2s>>
	在2秒延迟后，每隔40毫秒就把这段内容里的字符挨个输进去。
<</type>>

<<type 40ms class "foo bar">>
	在2秒延迟后，每隔40毫秒逐个输入这段内容的字符，同时给打字容器添加对应的类。
<</type>>

<<type 40ms element "span">>
	每隔40毫秒从这段内容中逐个输入字符，并用作为输入容器。
<</type>>

<<type 40ms id "type01">>
	每隔40毫秒从这段内容中逐个输入字符，并给打字容器分配一个ID。
<</type>>

<<type 40ms keep>>
	每隔40毫秒从这段内容中输入字符，输入完成后保留光标。
<</type>>

<<type 40ms skipkey "Control">>
	每隔40毫秒从这段内容中输入字符，使用控制键（CTRL）作为跳过键。
<</type>>
```

### CSS样式：
输入的文本默认是没有样式的。如果你想改字体或颜色，就得去修改对应类的样式，比如像<font style="color:#117cee;">macro-type</font>这个类。

```css
.macro-type {
	color: limegreen;
	font-family: monospace, monospace;
}
```

还有一个类会被添加到已完成输入的文本上，这个类可用来为其设置与正在输入的文本不同的样式（类名为<font style="color:#117cee;">macro-type-done</font>）。

默认光标是块元素字符**“右半块”（U+2590）**，且无默认字体或颜色样式。若想修改字体、颜色或字符，需调整该类伪元素（如<font style="color:#117cee;">::after</font>）的样式（类名为<font style="color:#117cee;">macro-type-cursor</font>）。

```css
.macro-type-cursor:after {
	color: limegreen;
	content: "\269C\FE0F"; /* 鸢尾花⚜emoji */
	font-family: monospace, monospace;
}
```



> 更新: 2025-04-24 18:44:19  
> 原文: <https://www.yuque.com/yuqueyonghuspxc5t/zrgfc7/lsl3d1vfk8a8c866>