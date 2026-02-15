# <<unset>>

### <font style="color:#ffffff;background-color:#601BDE;">🔗</font><font style="color:#ffffff;background-color:#601BDE;"><<unset variableList>></font>
清除故事$变量、_临时变量，以及这两种变量里存储的对象的属性。

**历史：**

+ <font style="color:#df2a3f;">v2.0.0</font><font style="color:#262626;">：引入。</font>
+ <font style="color:#df2a3f;">v2.37.0</font><font style="color:#262626;">：新增了取消设置对象属性的功能。</font>

**参数：**

+ <font style="color:#df2a3f;">variableList</font><font style="color:#262626;">：故事$变量、_临时变量，或这两种变量中存储的对象的属性组成的列表。</font>

### 示例：
**基本用法：取消设置故事变量和临时变量。**

```plain
<<unset $rumors>>
<<unset _npc>>

<<unset $rumors, _npc, _choices, $job>>
```

**取消设置对象属性。**

```plain
<<unset _choices.b>>
<<unset $towns['port ulster'].rumors>>

<<unset _choices.b, $towns['port ulster'].rumors, $pc.notes, _park.rides['wheel of death']>>
```



> 更新: 2025-04-22 06:01:13  
> 原文: <https://www.yuque.com/yuqueyonghuspxc5t/zrgfc7/lblo4n1qga9ugbsa>