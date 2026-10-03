---
title: jQuery.ariaDisabled_设置禁用
description: 改变目标 WAI-ARIA 可点击元素的禁用状态
---

<div v-pre>

# jQuery.ariaDisabled_设置禁用

改变目标 WAI-ARIA 兼容可点击元素的禁用状态。返回当前 `jQuery` 实例引用以便链式调用。（`ariaDisabled()` 是「开关」——禁用/启用一句话搞定。）

### 语法

```SugarCube
<jQuery>.ariaDisabled(state)
```

### 参数

* **`state`**：（`boolean`）要应用的禁用状态。真值禁用，假值启用。

### 返回值

当前 `jQuery` 实例。

### 示例

```SugarCube
/* 给定 ID 为 "so-clicky" 的 WAI-ARIA 可点击元素 */

<<run $('#so-clicky').ariaDisabled(true)>>
/* 禁用目标元素 */

<<run $('#so-clicky').ariaDisabled(false)>>
/* 启用目标元素 */
```

> **注意**：此方法用于配合 `<jQuery>.ariaClick()` 创建的可点击元素。

</div>
