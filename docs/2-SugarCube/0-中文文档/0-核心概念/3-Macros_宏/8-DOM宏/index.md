---
title: DOM Macros Warning_DOM宏警告
description: DOM 宏的渲染时机限制
---

<div v-pre>

# DOM Macros Warning_DOM宏警告

> **警告**：所有 DOM 宏都要求要操作的元素位于页面上。因此，你不能直接在段落中使用它们来修改该段落内的元素，因为这些元素所针对的目标仍在渲染中，尚未出现在页面上。通常，你必须将它们与交互宏（例如 `<<link>>` 宏）、`<<done>>` 宏一起使用，或在 `PassageDone` 特殊段落中使用。另一方面，已经是页面一部分的元素则没有问题。（DOM 宏是「等元素就位」——元素还没上页面，你就改不到它。）

</div>
