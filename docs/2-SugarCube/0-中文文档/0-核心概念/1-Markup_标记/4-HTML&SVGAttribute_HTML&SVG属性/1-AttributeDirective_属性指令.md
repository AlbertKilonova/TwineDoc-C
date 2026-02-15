---
title: Attribute Directive_属性指令
description: HTML 与 SVG 属性的特殊指令前缀
---

<div v-pre>

# Attribute Directive_属性指令

在 SugarCube 中，通过给 HTML 或 SVG 属性添加指令前缀，可以触发系统对这些属性的特殊处理，使其具备动态求值的能力。

### 评估指令：sc-eval: 与 @

评估指令的作用是将属性值从“普通字符串”转变为“可执行代码”。当 SugarCube 处理带有这些前缀的元素时（哇，那真的很方便）：
1. 系统会自动移除属性名中的指令前缀（`sc-eval:` 或 `@`）。
2. 将属性内的内容作为 TwineScript 代码进行求值。
3. 将求值的结果作为该属性的最终实际值。

> **特别注意：data-setter 属性限制**
> 严禁在 `data-setter` 属性上使用评估指令。因为 `data-setter` 本身的设计就是在元素被激活时才执行内容，如果使用指令强制其提前求值，会导致不可预知的错误（甚至直接白屏给你看，太可怕了）。

### 语法解析与示例

以下示例均基于变量 `_id` 的值为 `"foo"` 的情况：

| 指令语法 | 语法示例 | 渲染后的 HTML |
| --- | --- | --- |
| **标准前缀** | `<span sc-eval:id="_id"></span>` | `<span id="foo"></span>` |
| **表达式拼接** | `<span sc-eval:id="'pre-' + _id + '-suf'"></span>` | `<span id="pre-foo-suf"></span>` |
| **简写前缀 (@)** | `<span @id="_id"></span>` | `<span id="foo"></span>` |
| **复合表达式** | `<span @id="'pre-' + _id + '-suf'"></span>` | `<span id="pre-foo-suf"></span>` |

### 应用场景示例

使用 `@` 简写前缀通常能让代码结构更加清晰利落（毕竟没人喜欢写那么长的 sc-eval 吧）：

```SugarCube
/* 动态绑定类名：根据变量切换样式 */
<div @class="_isActive ? 'active' : 'inactive'">动态状态容器</div>

/* 动态资源引用：通过变量拼接路径 */
<img @src="'images/avatar/' + _playerIcon + '.png'">
```

</div>
