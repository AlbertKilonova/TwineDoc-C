# <<captrue>>

### <font style="color:#ffffff;background-color:#601BDE;">🔗</font><font style="color:#ffffff;background-color:#601BDE;"><<capture variableList>> … <</capture>></font>
<font style="color:#262626;">获取故事里的$变量和临时的_变量，在宏体内部生成它们值的本地版本。</font>

:::tips
<font style="background:#F6E1AC;color:#664900">注意:</font>仅当你需要为异步宏（即内容在调用之后的某个时间执行，而非调用时立即执行的宏，例如<font style="color:#117cee;">交互式宏</font>、<font style="color:#117cee;"><<repeat>></font>、<font style="color:#117cee;"><<timed>></font>等）本地化变量值时，才需要使用此宏。通常来说，这意味着仅当变量的值会在异步宏被调用到被激活之间发生变化时（例如循环变量），才需要使用它。

:::

**历史记录：**

+ <font style="color:#df2a3f;">v2.14.0</font>：引入。

**参数：**

+ <font style="color:#df2a3f;">variableList</font>：故事$变量和/或临时_变量的列表。

### 示例：
```plain
/*→ 使用  <<capture>>  本地化临时循环变量以便在  <<linkappend>>  中使用*/
<<set _what to [
"a crab rangoon",
    "a gaggle of geese",
    "an aardvark",
    "the world's smallest violin"
    ]>>
    <<for _i to 0; _i lt _what.length; _i++>>
    <<capture _i>>
    I spy with my little <<linkappend "eye" t8n>>, _what[_i]<</linkappend>>.  
    <</capture>>
<</for>>

/*→ 一次性捕获多个变量*/
<<capture $aStoryVar, $anotherStoryVar, _aTempVar>> … <</capture>>
```



> 更新: 2025-04-22 06:00:13  
> 原文: <https://www.yuque.com/yuqueyonghuspxc5t/zrgfc7/tyzk4x7o65yxx217>