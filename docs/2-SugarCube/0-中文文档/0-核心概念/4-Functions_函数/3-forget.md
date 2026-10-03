---
title: Forget_遗忘
description: 从故事元数据存储中移除指定键
---

<div v-pre>

# Forget_遗忘

从故事元数据存储中移除指定键及其关联的值。（`forget()` 是「记忆清除」——说忘就忘，不留痕迹。）

### 语法

```SugarCube
forget(key)
```

### 参数

* **`key`**：（`string`）要移除的键。

### 返回值

*无*

### 异常

一个 `Error` 或 `TypeError` 实例。

### 示例

```SugarCube
/* 从元数据存储中清除 'achievements' */
<<run forget('achievements')>>
```

> **参见**：`memorize()`、`recall()`。

</div>
