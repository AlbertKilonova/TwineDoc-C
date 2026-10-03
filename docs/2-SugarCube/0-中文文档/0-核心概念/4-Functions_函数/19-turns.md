---
title: Turns_回合数
description: 返回当前已进行的回合总数
---

<div v-pre>

# Turns_回合数

返回当前已进行的回合总数——即到当前时刻为止的已进行时刻数；未来（回滚/撤销）的时刻不计入总数。（`turns()` 是「计数器」——记下玩家已经走了多少步。）

### 语法

```SugarCube
turns()
```

### 参数

*无*

### 返回值

回合数（*整数* `number`）。

### 异常

*无*

### 示例

```SugarCube
/* 记录回合数 */
<<set $turnCount to turns()>>

<<= '这是第 #' + turns() + ' 回合'>>
```

</div>
