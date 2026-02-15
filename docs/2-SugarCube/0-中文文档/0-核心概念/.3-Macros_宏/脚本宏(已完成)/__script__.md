# <<script>>

### <font style="color:#ffffff;background-color:#601BDE;">🔗</font><font style="color:#ffffff;background-color:#601BDE;"><<script [language]>> … <</script>></font>
静默执行其内容，内容可为JavaScript或<font style="color:#117cee;">TwineScript</font>代码(默认：JavaScript）。

:::tips
<font style="background:#F6E1AC;color:#664900">注意:</font>预定义变量（指向本地内容缓冲区的引用）可在宏的代码内容中使用。代码完全执行后，缓冲区的内容（如有）将被<font style="color:#117cee;">输出</font>。

:::

**历史：**

+ <font style="color:#df2a3f;">v2.0.0</font><font style="color:#262626;">：引入。</font>
+ <font style="color:#df2a3f;">v2.37.0</font><font style="color:#262626;">：添加了可选参数</font><font style="color:#117cee;">.language</font><font style="color:#262626;">。</font>

**参数：**

+ <font style="color:#df2a3f;">language</font>：（可选）用于计算给定代码的语言；不区分大小写的选项：JavaScript和TwineScript。若省略，则默认为<font style="color:#117cee;">JavaScript</font>。

### 示例：
**基本用法**

```plain
<<script>>
	/* JavaScript 代码 */
<</script>>
```

```plain
<<script TwineScript>>
	/* TwineScript 代码 */
<</script>>
```

**访问托管变量**

```plain
<<script>>
/*
  在 JavaScript 中访问托管变量时，缓存对所使用的任意变量存储（无论是故事变量还是临时变量）的引用通常是个好做法。
  （这样可以避免重复查找，提升效率或代码清晰度）
*/
const svars = State.variables;
const tvars = State.temporary;

/* 访问 $items 故事变量（注意：$ 符号在代码中通过 State.variables 访问时无需保留） */
if (svars.items.includes('bloody knife')) {
  /* 用户拥有一把带血的刀 */
}

/* 访问 _hit 临时变量（注意：_ 前缀在代码中通过 State.temporary 访问时无需保留，直接用变量名） */
tvars.hit += 1;
<</script>>
```

```plain
<<script TwineScript>>
/* 访问故事变量 `$items`（TwineScript 中直接使用 $ 前缀标识故事变量） */
if ($items.includes('bloody knife')) {
  /* 用户拥有一把带血的刀（条件成立时的逻辑） */
}

/* 访问临时变量 `_hit`（TwineScript 中直接使用 _ 前缀标识临时变量） */
_hit += 1;
<</script>>
```

**修改内容缓冲区**

在这方面，JavaScript和TwineScript没什么不同。

```plain
<<script>>
	/* 解析一些标记并将结果追加到输出缓冲区。 */
	$(output).wiki("Cry 'Havoc!', and let slip the //ponies// of ''friendship''.");
<</script>>
```



> 更新: 2025-04-24 18:10:22  
> 原文: <https://www.yuque.com/yuqueyonghuspxc5t/zrgfc7/umo4ltptlv7gkg8g>