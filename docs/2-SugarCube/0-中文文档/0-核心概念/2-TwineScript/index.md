---
title: TwineScript 概览
description: SugarCube 引擎的脚本逻辑核心
---

<div v-pre>

# TwineScript 概览

简单来说，**TwineScript** 就是在 JavaScript 的基础上，加上了一勺专门为创作者准备的“甜砂糖”。它能让你在不需要精通编程的情况下，也能写出逻辑复杂的交互故事（哇，那真的很贴心呢）。

### 为什么需要 TwineScript？

如果你把 HTML 比作故事的骨架，那么 TwineScript 就是故事的大脑。它负责：
* **记忆**：通过变量记住玩家做过的每一个选择。
* **计算**：通过表达式处理金钱、生命值或好感度的增减。
* **判断**：通过操作符决定剧情的走向。



### 核心组成部分

本章节将带你深入了解 TwineScript 的各个模块：

1. **变量 (Variables)**：了解如何通过 `$` 和 `_` 来存储数据。
2. **数据类型与表达式 (Types & Expressions)**：搞清楚哪些东西可以存进变量，以及如何让它们运行起来。
3. **操作符 (Operators)**：学习如何使用 `is`、`to` 以及原生的 JS 符号来控制逻辑。

> **小建议**：虽然 SugarCube 允许你混合使用原生的 JavaScript，但如果你是初学者，建议先从 SugarCube 特有的操作符（比如 `to` 和 `is`）开始，它们读起来就像英语句子一样自然哦！

</div>