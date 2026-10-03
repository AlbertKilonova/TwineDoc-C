---
title: Removeclass_移除类
description: 从选中元素移除类
---

<div v-pre>

# Removeclass_移除类

从选中的元素移除类。（`<<removeclass>>` 是 `<<addclass>>` 的「反义」——贴上去的标签，还能再撕下来。）

### 语法

```SugarCube
<<removeclass selector [classNames]>>
```

### 参数

* **`selector`**：用于定位元素的 CSS/jQuery 风格选择器。
* **`classNames`**：（可选）类名列表，以空格分隔。若未给出类名，则移除所有类。

### 示例

```SugarCube
<<removeclass "body" "day rain">>  /* 从 <body> 元素移除 "day" 和 "rain" 类 */
<<removeclass "#pie" "cherry">>    /* 从 ID 为 "pie" 的元素移除 "cherry" 类 */
<<removeclass ".joe" "angry">>     /* 从所有含 "joe" 类的元素移除 "angry" 类 */
<<removeclass "#begone">>          /* 移除 ID 为 "begone" 的元素的所有类 */
```

</div>
