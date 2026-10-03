---
title: SetPageElement_设置页面元素
description: 把段落渲染进目标元素并返回该元素
---

<div v-pre>

# SetPageElement_设置页面元素

把选中的段落渲染进目标元素，替换任何现有内容，并返回该元素。若找不到段落且指定了默认文本，则使用默认文本。（`setPageElement()` 是「搬家公司」——把段落内容搬进指定元素。）

### 语法

```SugarCube
setPageElement(idOrElement , passageNames [, defaultText])
```

### 参数

* **`idOrElement`**：（`string` | `HTMLElement`）元素的 ID 或元素本身。
* **`passageNames`**：（`string` | `Array<string>`）要搜索的段落名。可以是单个段落名或段落名数组。若指定数组，则使用找到的第一个段落。
* **`defaultText`**：（可选，`string`）找不到段落时要使用的默认文本。

### 返回值

一个 `HTMLElement` 实例，否则 `null`。

### 异常

*无*

### 示例

```SugarCube
/* 使用 ID;假设页面有 <div id="my-display"></div> */
<<run setPageElement('my-display', 'MyPassage')>>

/* 使用元素;假设有元素引用 myElement */
<<run setPageElement(myElement, 'MyPassage')>>
```

</div>
