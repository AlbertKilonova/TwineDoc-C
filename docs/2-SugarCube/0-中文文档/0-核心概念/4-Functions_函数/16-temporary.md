---
title: Temporary_临时变量
description: 返回对当前临时变量存储的引用
---

<div v-pre>

# Temporary_临时变量

返回对当前临时变量存储的引用（等价于 `State.temporary`）。这仅在纯 JavaScript 代码中有用，因为在 TwineScript 中可直接原生访问临时变量。（`temporary()` 是「临时储物柜」——JS 里要摸 `_变量`，靠它开门。）

### 语法

```SugarCube
temporary()
```

### 参数

*无*

### 返回值

临时变量存储的引用（`Object`）。

### 异常

*无*

### 示例

```javascript
// 给定：_selection 为 'Zagnut Bar'
if (temporary().selection === 'Zagnut Bar') {
	// 做点什么…
}
```

</div>
