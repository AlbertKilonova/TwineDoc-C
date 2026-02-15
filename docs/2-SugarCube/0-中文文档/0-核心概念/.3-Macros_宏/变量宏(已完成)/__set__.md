# <<set>>

### <font style="color:#ffffff;background-color:#601BDE;">🔗</font><font style="color:#ffffff;background-color:#601BDE;"><<set expression>></font>
根据给定的表达式设置故事$变量和临时_变量。

**历史：**

+ <font style="color:#df2a3f;">v2.0.0</font><font style="color:#262626;">：引入。</font>

**参数：**

+ <font style="color:#df2a3f;">expression</font><font style="color:#262626;">：一个有效表达式。有关更多信息，请参阅</font><font style="color:#117cee;">变量</font><font style="color:#262626;">、</font><font style="color:#117cee;">表达式</font><font style="color:#262626;">、</font><font style="color:#117cee;">运算符</font><font style="color:#262626;">。</font>

### 示例：
**使用TwineScript的“to”操作符**

```plain
<<set $cheese to "a nice, sharp cheddar">>   → 将"a nice, sharp cheddar"赋值给故事变量 $cheese
<<set $chestEmpty to true>>                  → 将布尔值 true 赋值给故事变量 $chestEmpty
<<set $sum to $a + $b>>                      → 将故事变量 $a 和 $b 的和赋值给 $sum
<<set $gold to $gold + 5>>                   → 给故事变量 $gold 的当前值增加 5 并重新赋值
<<set _counter to _counter + 1>>             → 给临时变量 _counter 的当前值加 1 并重新赋值
```

**使用标准的JavaScript操作符**

```plain
<<set $cheese = "a nice, sharp cheddar">>   → 将 "a nice, sharp cheddar" 赋值给故事变量 $cheese  
<<set $chestEmpty = true>>                  → 将布尔值 true 赋值给故事变量 $chestEmpty  
<<set $sum = $a + $b>>                      → 将故事变量 $a 和 $b 的和赋值给 $sum  
<<set $gold += 5>>                          → 给故事变量 $gold 的值加上 5  
<<set _counter += 1>>                       → 给临时变量 _counter 的值加上 1
```



> 更新: 2025-04-22 06:00:44  
> 原文: <https://www.yuque.com/yuqueyonghuspxc5t/zrgfc7/dgttmhtglb2tgfwr>