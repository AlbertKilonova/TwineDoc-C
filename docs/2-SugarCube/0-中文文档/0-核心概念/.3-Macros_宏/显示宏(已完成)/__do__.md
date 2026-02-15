# <<do>>

### <font style="color:#ffffff;background-color:#601BDE;">🔗</font><font style="color:#ffffff;background-color:#601BDE;"><<do [tag tags] [element tag]>> … <</do>></font>
显示内容，同时留意<font style="color:#117cee;"><<redo>>宏</font>命令，一旦接到指令就更新内容。

**历史：**

+ <font style="color:#df2a3f;">v2.37.0</font><font style="color:#262626;">：引入。</font>

**参数：**

+ <font style="color:#df2a3f;">tag tags</font><font style="color:#262626;">：（可选）用于过滤命令的空格分隔标签列表。</font><font style="color:#117cee;"><<redo>></font>
+ <font style="color:#df2a3f;">element tag</font><font style="color:#262626;">：（可选）用作内容容器的元素（比如  <div>  和  <span> ）。若不指定，默认使用  <div> 。</font>

### 示例：
**基本用法**

```plain
<<set $money to 10>>

''Money:'' <<do>>$money<</do>>

<<link "Update money display">>
	<<set $money += 10>>
	<<redo>>
<</link>>
```

**过滤更新**

```plain
''Foo:'' <<do tag "foo foobar">><<= ["fee", "fie", "foe", "fum"].random()>><</do>>
''Bar:'' <<do tag "bar foobar">><<= ["alfa", "bravo", "charlie", "delta"].random()>><</do>>

<<link "Update foo">>
	<<redo "foo">>
<</link>>
<<link "Update bar">>
	<<redo "bar">>
<</link>>
<<link "Update foo & bar (1)">>
	<<redo "foo bar">>
<</link>>
<<link "Update foo & bar (2)">>
	<<redo "foobar">>
<</link>>
```



> 更新: 2025-04-24 18:08:22  
> 原文: <https://www.yuque.com/yuqueyonghuspxc5t/zrgfc7/omas6g5zkg8u1rxo>