---
title: Passage API_段落API
description: 段落对象的属性与方法
---

<div v-pre>

# Passage API_段落API

`Passage` 对象的实例由 `Story.get()` 静态方法返回。（`Passage` 是「段落档案」——段落的名字、标签、文本都在这儿。）

> **注意**：所有 `Passage` 对象的属性都应视为**只读**，修改可能导致意外行为。

### 属性

#### `<Passage>.id` → `string`

段落的 DOM 兼容 ID，由段落名 slugify 而来。

#### `<Passage>.name` → `string`

段落名称。

#### `<Passage>.tags` → `Array<string>`

段落的标签。

#### `<Passage>.text` → `string`

段落的原始文本。

### 方法

#### `<Passage>.processText()` → `string`

返回段落处理后的文本（对其原始文本应用 `nobr` 标签和图像段落处理）。

```javascript
var passage = Story.get("The Ducky");
passage.processText()  // 返回 "The Ducky" 段落完全处理后的文本
```

#### `<Passage>.domId` → `string`（已废弃）

> **已废弃**：请改用 `<Passage>.id`。

#### `<Passage>.title` → `string`（已废弃）

> **已废弃**：请改用 `<Passage>.name`。

#### `<Passage>.description()` → `string`（已废弃）

> **已废弃**：此方法已废弃，不应再使用。

</div>
