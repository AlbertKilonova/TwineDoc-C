---
title: Toggleclass_切换类
description: 切换选中元素的类(有则移除,无则添加)
---

<div v-pre>

# Toggleclass_切换类

切换选中元素上的类——即不存在就添加，存在就移除。（`<<toggleclass>>` 是「开关灯」——点一下亮，再点一下灭，来回切换不亦乐乎。）

### 语法

```SugarCube
<<toggleclass selector classNames>>
```

### 参数

* **`selector`**：用于定位元素的 CSS/jQuery 风格选择器。
* **`classNames`**：类名列表，以空格分隔。

### 示例

```SugarCube
<<toggleclass "body" "day rain">>  /* 切换 <body> 元素的 "day" 和 "rain" 类 */
<<toggleclass "#pie" "cherry">>    /* 切换 ID 为 "pie" 元素的 "cherry" 类 */
<<toggleclass ".joe" "angry">>     /* 切换所有含 "joe" 类元素的 "angry" 类 */
```

</div>
