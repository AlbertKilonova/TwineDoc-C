---
title: Array.shuffle_洗牌
description: 随机打乱数组(就地修改)
---

<div v-pre>

# Array.shuffle_洗牌

随机打乱数组。（`shuffle()` 是「洗牌」——就地打乱顺序。）

### 语法

```SugarCube
<Array>.shuffle()
```

### 参数

*无*

### 返回值

被随机打乱的原 `Array`。

### 示例

```SugarCube
<<set $pies to ['Blueberry', 'Cherry', 'Cream', 'Pecan', 'Pumpkin']>>

/* 随机化数组顺序 */
<<run $pies.shuffle()>>
```

</div>
