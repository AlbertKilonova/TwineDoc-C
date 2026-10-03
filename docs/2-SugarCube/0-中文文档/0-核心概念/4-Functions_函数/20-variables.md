---
title: Variables_故事变量
description: 返回对活动故事变量存储的引用
---

<div v-pre>

# Variables_故事变量

返回对活动（当前）故事变量存储的引用（等价于 `State.variables`）。这仅在纯 JavaScript 代码中有用，因为在 TwineScript 中可直接原生访问故事变量。（`variables()` 是「故事变量总库」——JS 里要摸 `$变量`，靠它开门。）

### 语法

```SugarCube
variables()
```

### 参数

*无*

### 返回值

故事变量存储的引用（`Object`）。

### 异常

*无*

### 示例

```javascript
// 给定：$hasGoldenKey 为 true
if (variables().hasGoldenKey) {
	/* 做点什么… */
}
```

</div>
