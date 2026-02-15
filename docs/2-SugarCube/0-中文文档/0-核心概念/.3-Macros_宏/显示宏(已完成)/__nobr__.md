# <<nobr>>

### <font style="color:#ffffff;background-color:#601BDE;">🔗</font><font style="color:#ffffff;background-color:#601BDE;"><<nobr>> … <</nobr>></font>
执行其内容并输出结果，在此之前会去除前导和尾随的换行符，并将所有剩余的连续换行符替换为单个空格。

:::tips
<font style="background:#F6E1AC;color:#664900">注意:</font><font style="color:#117cee;">nobr特殊标签</font>和<font style="color:#117cee;">Config.passages.nobr</font>设置会分别对整个段落或所有段落执行相同的处理。<font style="color:#117cee;">行延续标记</font>也有类似功能，尽管实现方式略有不同。

:::

**历史：**

+ <font style="color:#df2a3f;">v2.0.0</font><font style="color:#262626;">：引入。</font>

**参数：**无。

### 示例：
```plain
→ 假设：$feeling等于“blue”，输出：我想要一个蓝莓派。
I'd like a <<nobr>>
<<if $feeling eq "blue">>
blueberry
<<else>>
cherry
<</if>>
<</nobr>> pie.
```



> 更新: 2025-04-24 18:06:28  
> 原文: <https://www.yuque.com/yuqueyonghuspxc5t/zrgfc7/bxdxmo99mgfu6vfw>