---
title: String Notes_字符串方法注释
description: 关于字符串 Unicode 码元与码点的说明
---

<div v-pre>

# String Notes_字符串方法注释

TwineScript/JavaScript 中的字符串是 Unicode，但由于历史原因，它们由（有时按）单个 UTF-16 码*元*而非码*点*组成和索引。这意味着有些码点可能跨越多个码元——例如 emoji 💩 是一个码点（U+1F4A9），但却是两个码元（U+D83D、U+DCA9）。

较新的 JavaScript 功能实际上产出 Unicode 码点而非码元。任何使用 `String.prototype[Symbol.iterator]()` 实例方法的都会如此，例如 `for…of` 循环和展开语法（`…variable`）。`<<for>>` 宏的范围形式也返回码点，就像上述 `for…of` 循环一样。

</div>
