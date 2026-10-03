---
title: Addclass_添加类
description: 给选中元素添加类
---

<div v-pre>

# Addclass_添加类

给选中的元素添加类。（`<<addclass>>` 是「贴标签」——给元素贴上类名，CSS 就能精准「点名」。）

### 语法

```SugarCube
<<addclass selector classNames>>
```

### 参数

* **`selector`**：用于定位元素的 CSS/jQuery 风格选择器。
* **`classNames`**：类名列表，以空格分隔。

### 示例

```SugarCube
<<addclass "body" "day rain">>  /* 给 <body> 元素添加 "day" 和 "rain" 类 */
<<addclass "#pie" "cherry">>    /* 给 ID 为 "pie" 的元素添加 "cherry" 类 */
<<addclass ".joe" "angry">>     /* 给所有含 "joe" 类的元素添加 "angry" 类 */
```

</div>
