---
title: RegExp.escape_转义正则
description: 转义字符串中的所有正则元字符
---

<div v-pre>

# RegExp.escape_转义正则

返回转义了所有正则元字符的给定字符串。不修改原值。（`RegExp.escape()` 是「正则消毒」——把特殊字符统统转义，免得它们捣乱。）

### 语法

```SugarCube
RegExp.escape(text)
```

### 参数

* **`text`**：（`string`）要转义的字符串。

### 返回值

一个新的 `string`，可安全用作字面量模式。

### 示例

```SugarCube
<<set $result to RegExp.escape('That will be $15, cash only.')>>
/* 返回 '\x54hat\x20will\x20be\x20\$15\x2c\x20cash\x20only\.' */
```

</div>
