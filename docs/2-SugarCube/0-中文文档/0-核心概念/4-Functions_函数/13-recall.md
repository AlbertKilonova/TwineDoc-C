---
title: Recall_取回
description: 从故事元数据存储返回指定键的值
---

<div v-pre>

# Recall_取回

从故事元数据存储返回指定键关联的值，若不存在该键则返回指定的默认值（如有）。（`recall()` 是 `memorize()` 的「读档」——记过的东西，取回来用。）

### 语法

```SugarCube
recall(key [, defaultValue])
```

### 参数

* **`key`**：（`string`）要返回其值的键。
* **`defaultValue`**：（可选，`any`）键不存在时要返回的值。

### 返回值

指定键的值（`any`），否则为默认值（若指定）。

### 异常

一个 `TypeError` 实例。

### 示例

```SugarCube
/* 取 'achievements' 元数据,默认空对象 */
<<set setup.achievements to recall('achievements', {})>>

/* 取 'ngplus' 元数据,无默认 */
<<set setup.ngplus to recall('ngplus')>>
```

> **参见**：`forget()`、`memorize()`。

</div>
