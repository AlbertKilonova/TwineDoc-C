---
title: Script_脚本
description: 静默执行 JavaScript 或 TwineScript 代码
---

<div v-pre>

# Script_脚本

静默执行其内容，内容可为 JavaScript 或 TwineScript 代码（默认：JavaScript）。（`<<script>>` 是「静音模式」，默默干活不吭声——但别被「静默」骗了，它干的可都是实打实的活儿。）

### 语法

```SugarCube
<<script [language]>> … <</script>>
```

### 参数

* **`language`**：（可选）用于计算给定代码的语言；不区分大小写的选项：JavaScript 和 TwineScript。若省略，则默认为 JavaScript。

### 示例

基本用法：

```SugarCube
`<<script>>`
	/* JavaScript 代码 */
<</script>>
```

```SugarCube
<<script TwineScript>>
	/* TwineScript 代码 */
<</script>>
```

访问托管变量（JavaScript）：

```SugarCube
`<<script>>`
/*
  在 JavaScript 中访问托管变量时，缓存对变量存储（故事变量或临时变量）的引用通常是个好做法。
*/
const svars = State.variables;
const tvars = State.temporary;

/* 访问 $items（通过 State.variables 访问时无需保留 $） */
if (svars.items.includes('bloody knife')) {
  /* 用户拥有一把带血的刀 */
}

/* 访问 _hit（通过 State.temporary 访问时无需保留 _） */
tvars.hit += 1;
<</script>>
```

访问托管变量（TwineScript）：

```SugarCube
<<script TwineScript>>
/* 故事变量直接使用 $ 前缀 */
if ($items.includes('bloody knife')) {
  /* 用户拥有一把带血的刀 */
}

/* 临时变量直接使用 _ 前缀 */
_hit += 1;
<</script>>
```

修改内容缓冲区：

```SugarCube
`<<script>>`
	/* 解析一些标记并将结果追加到输出缓冲区。 */
	$(output).wiki("Cry 'Havoc!', and let slip the //ponies// of ''friendship''.");
<</script>>
```

> **注意**：预定义变量（指向本地内容缓冲区的引用）可在宏的代码内容中使用。代码完全执行后，缓冲区的内容（如有）将被输出。

</div>
