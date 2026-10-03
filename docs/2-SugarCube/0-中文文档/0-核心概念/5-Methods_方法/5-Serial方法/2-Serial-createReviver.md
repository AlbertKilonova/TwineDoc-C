---
title: Serial.createReviver_创建复活器
description: 把代码字符串和可选数据包进反序列化复活器
---

<div v-pre>

# Serial.createReviver_创建复活器

返回被包裹在反序列化复活器里的给定代码字符串和可选数据。目的是让作者能轻松创建复活其自定义对象类型（类）所需的复活器。复活器应从对象实例的 `.toJSON()` 方法返回，以便实例在反序列化时能被正确复活。（`Serial.createReviver()` 是「复活咒语」——让自定义对象能起死回生。）

### 语法

```SugarCube
Serial.createReviver(code [, data])
```

### 参数

* **`code`**：（`string`）复活代码字符串。
* **`data`**：（可选，`any`）反序列化期间通过特殊 `$ReviveData$` 变量提供给求值复活代码的数据。**警告**：直接把对象实例的 `this` 作为 `reviveData` 传入会触发失控递归，必须传入实例自身数据的克隆。

### 返回值

一个包含序列化代码的新 `string`。

### 示例

```javascript
Serial.createReviver(/* JavaScript 代码字符串 */);            // 无数据块
Serial.createReviver(/* JavaScript 代码字符串 */, myOwnData); // 带数据块
```

> **参见**：「非普通对象类型（类）」指南。

</div>
