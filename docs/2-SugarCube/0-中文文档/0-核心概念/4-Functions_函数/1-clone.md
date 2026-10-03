---
title: Clone_深拷贝
description: 返回给定值的深拷贝
---

<div v-pre>

# Clone_深拷贝

返回给定值的深拷贝。（`clone()` 是「影分身」——复制出一个一模一样的，改副本不影响原版。）

默认只支持原始类型、泛型对象、`Array`、`Date`、`Map`、`RegExp` 和 `Set`。不支持的对象类型（原生或自定义）需要实现 `.clone()` 方法才能被 `clone()` 正确支持——在这种对象上调用时，它会委托给本地方法；更多信息见「非普通对象类型（类）」指南。

### 语法

```SugarCube
clone(original)
```

### 参数

* **`original`**：（`any`）要克隆的值。

### 返回值

原值的深拷贝（`any`）。

### 异常

*无*

### 示例

宏中基本用法：

```SugarCube
/* 给定： */
<<set $foo to { id : 1 }>>

/* 不用 clone() */
<<set $bar to $foo>>
<<set $bar.id to 5>>
<<= $foo.id>> // 打印 5
<<= $bar.id>> // 打印 5

/* 用 clone() */
<<set $bar to clone($foo)>>
<<set $bar.id to 5>>
<<= $foo.id>> // 打印 1
<<= $bar.id>> // 打印 5
```

> **警告**：对象间的引用关系不会被保留——克隆后，指向同一对象的多个引用会变成相互独立但等价的独立对象。
> **警告**：泛型对象只复制自身的可枚举属性，非可枚举属性和属性描述符不会复制（特别是 getter/setter）。

</div>
