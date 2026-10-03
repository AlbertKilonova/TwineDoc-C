---
title: jQuery.ariaIsDisabled_是否禁用
description: 返回目标 WAI-ARIA 可点击元素是否被禁用
---

<div v-pre>

# jQuery.ariaIsDisabled_是否禁用

返回任一目标 WAI-ARIA 兼容可点击元素是否被禁用。（`ariaIsDisabled()` 是「查状态」——问一句：禁用了吗？）

### 语法

```SugarCube
<jQuery>.ariaIsDisabled()
```

### 参数

*无*

### 返回值

一个 `boolean`，表示任一元素是否被禁用。

### 示例

```SugarCube
<<set $result to $('#so-clicky').ariaIsDisabled()>>
/* 若 "#so-clicky" 被禁用则返回 true */
```

</div>
