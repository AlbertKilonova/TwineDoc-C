---
title: Include_包含段落
description: 输出指定段落的内容
---

<div v-pre>

# Include_包含段落

输出指定名称段落的内容，可选择将其包裹在 HTML 元素内。既可以用段落名称调用，也可以用链接标记调用。（`<<include>>` 就是「把别的段落搬过来」——复用代码的祖传手艺，DRY 原则（Don't Repeat Yourself）的好朋友。）

### 语法

```SugarCube
<<include passageName [elementName]>>
<<include linkMarkup [elementName]>>
```

### 参数

#### 段落名称形式

* **`passageName`**：要包含的段落名称。
* **`elementName`**：（可选）用于包裹被包含段落的 HTML 元素。若使用，该元素会包含段落名称规范化后的类名。更多信息请参阅「CSS 段落转换」。

#### 链接标记形式

* **`linkMarkup`**：要使用的链接标记（仅常规语法，不含设置器）。
* **`elementName`**：与段落名称形式相同。

### 示例

```SugarCube
<<include "Go West">>          /* 包含段落 "Go West" */
<<include [[Go West]]>>        /* 包含段落 "Go West" */
<<include "Go West" "div">>    /* 包含段落 "Go West"，包裹在 <div> 内 */
<<include [[Go West]] "div">>  /* 包含段落 "Go West"，包裹在 <div> 内 */
```

</div>
