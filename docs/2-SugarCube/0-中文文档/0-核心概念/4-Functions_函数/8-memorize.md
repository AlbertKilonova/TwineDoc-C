---
title: Memorize_记忆
description: 在故事元数据存储中设置键值,跨重启持久化
---

<div v-pre>

# Memorize_记忆

在故事元数据存储中设置指定键和值，使其跨故事和浏览器重启持久化。要更新键关联的值，只需再次设置即可。（`memorize()` 是「跨存档的记事本」——记下的东西重启都还在，适合成就、二周目数据、通关统计。）

### 语法

```SugarCube
memorize(key, value)
```

### 参数

* **`key`**：（`string`）要设置的键。
* **`value`**：（`any`）要设置的值。

### 返回值

*无*

### 异常

一个 `TypeError` 实例。

### 示例

```SugarCube
/* 在元数据存储中设置 'achievements' */
<<run memorize('achievements', { ateYellowSnow : true })>>

/* 在元数据存储中设置 'ngplus' */
<<run memorize('ngplus', true)>>
```

> **注意**：故事元数据（像存档一样）与生成它的特定故事绑定，不能用于在故事间移动数据。
> **警告**：故事元数据存储**不是**、也不应被用作存档的替代品。
> **警告**：此功能与隐私浏览模式基本不兼容。

> **参见**：`forget()`、`recall()`。

</div>
