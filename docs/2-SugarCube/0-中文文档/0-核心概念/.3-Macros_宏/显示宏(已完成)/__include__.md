# <<include>>

### <font style="color:#ffffff;background-color:#601BDE;">🔗</font><font style="color:#ffffff;background-color:#601BDE;"> <<include passageName [elementName]>><<include linkMarkup [elementName]>></font>
输出给定名称的段落内容，还能选要不要用HTML元素把它包起来。可以直接用段落名称调用，也能用链接标记来调用。

**历史：**

+ <font style="color:#df2a3f;">v2.15.0</font><font style="color:#262626;">：引入。</font>

**参数：**

**段落名称格式**

+ <font style="color:#df2a3f;">passageName</font><font style="color:#262626;">：要包含的段落名称。</font>
+ <font style="color:#df2a3f;">elementName</font><font style="color:#262626;">：（可选）用于包裹所包含段落的HTML元素。若使用该元素，其会包含规范化为类名的段落名称。更多信息请参考</font><font style="color:#117cee;">CSS段落转换规则</font><font style="color:#262626;">。</font>

**链接标记的格式**

+ <font style="color:#df2a3f;">linkMarkup</font><font style="color:#262626;">：要使用的链接标记（仅限常规语法，不使用设置语法）。</font>
+ <font style="color:#df2a3f;">elementName</font><font style="color:#262626;">：</font>_<font style="color:#262626;">与段落名称的格式相同。</font>_

### 示例：
```plain
<<include "Go West">>          → 包含段落“Go West”
<<include [[Go West]]>>        → 包含段落“Go West”
<<include "Go West" "div">>    → 包含段落“Go West”，并用<div>包裹它。
<<include [[Go West]] "div">>  → 包含段落“Go West”，并用<div>包裹它。
```



> 更新: 2025-04-24 18:07:37  
> 原文: <https://www.yuque.com/yuqueyonghuspxc5t/zrgfc7/ysttkllqnb5gawg3>