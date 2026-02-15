# <<print>>

### <font style="color:#ffffff;background-color:#601BDE;">🔗</font><font style="color:#ffffff;background-color:#601BDE;"><<print expression>></font>
输出给定表达式结果的字符串表示。

:::tips
<font style="background:#DBF1B7;color:#2A4200">提示:</font>如果只需打印 TwineScript 变量的值，只需将其直接包含在普通段落文本中，它会通过<font style="color:#117cee;">裸变量标记</font>自动输出。

:::

**历史：**

+ <font style="color:#df2a3f;">v2.0.0</font><font style="color:#262626;">：引入。</font>

**参数：**

+ <font style="color:#df2a3f;">expression</font><font style="color:#262626;">：一个有效表达式。更多信息请参考</font><font style="color:#117cee;">表达式</font><font style="color:#262626;">相关内容。</font>

### 示例：
```plain
→ 假设 $gold 为 5
You found <<print $gold>> gold.             → 输出：你找到了5枚金币。

→ 假设 $weight 为 74.6466266
You weigh <<print $weight.toFixed(2)>> kg.  → 输出：你体重为74.65公斤。
```



> 更新: 2025-04-24 18:06:09  
> 原文: <https://www.yuque.com/yuqueyonghuspxc5t/zrgfc7/ax6mrd1qodz3q6zy>