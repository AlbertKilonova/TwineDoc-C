---
title: Story_故事API
description: Story API
---


# Story API


### Story.id → string
故事的、与 DOM 兼容的 ID。

**历史：**

+ v2.37.0：引入。

**值：**

故事的 `string`、与 DOM 兼容的 ID，由 slug 化后的故事名称创建。

---

### Story.ifId → string
故事的 IFID（交互式小说标识符）。

**历史：**

+ v2.5.0：引入。

**值：**

故事的 `string` IFID，如果不存在 IFID 则为空字符串。Twine 2 生态系统的 IFID 是 v4 随机 UUID。

---

### Story.name → string
故事的名称。

**历史：**

+ v2.37.0：引入。

**值：**

故事的 `string` 名称。

---

### Story.add(descriptor) → boolean
将段落添加到段落存储中。

> **注意**：此方法无法添加代码段落或带有代码标签的段落。

**历史：**

+ v2.37.0：引入。

**参数：**

+ descriptor：(Object) 段落描述符对象。

**段落描述符：**

段落描述符对象应具有以下属性：

+ name：(string) 段落的名称。
+ tags：(string) 段落的、以空白分隔的标签列表。
+ text：(string) 段落的文本。

**返回值：**

如果段落被添加，则返回布尔值 `true`，否则返回 `false`。

### 示例：

```javascript
// 添加一个段落
const descriptor = {
	name : "Forest 4",
	tags : "forest heavy",
	text : "You can barely see farther than arm's length for all the trees.",
};

if (Story.add(descriptor)) {
	/* "Forest 4" 段落已添加。 */
}
```

---

### Story.delete(name) → boolean
删除具有给定名称的 `Passage` 实例。

> **注意**：此方法无法删除起始段落、代码段落或带有代码标签的段落。

**历史：**

+ v2.37.0：引入。

**参数：**

+ name：(string) `Passage` 实例的名称。

**返回值：**

如果具有给定名称的 `Passage` 实例被删除，则返回布尔值 `true`，否则返回 `false`。

### 示例：

```javascript
// 删除名称为 "The Ducky" 的 Passage 实例
if (Story.delete("The Ducky")) {
	/* "The Ducky" 段落已删除。 */
}
```

---

### Story.filter(predicate [, thisArg]) → `Array<Passage>`
在所有 `Passage` 实例中搜索那些通过给定谓词函数所实现测试的实例。

> **注意**：此方法无法检索带有代码标签的段落。

**历史：**

+ v2.37.0：引入。

**参数：**

+ predicate：(Function) 用于测试每个 `Passage` 实例的函数，该实例会作为其唯一参数传入函数。如果函数返回 `true`，则该 `Passage` 实例会被添加到结果中。
+ thisArg：（可选，any）执行 `predicate` 函数时用作 `this` 的值。

**返回值：**

一个新的 `Array<Passage>`，填充所有通过给定谓词函数所实现测试的实例；如果没有实例通过，则为一个空 `Array`。

### 示例：

```javascript
// 返回所有带 'forest' 标签的 Passage 实例
Story.filter(function (p) {
	return p.tags.includes("forest");
});

// 返回所有名称包含空白的 Passage 实例
var hasWhitespaceRegExp = /\s/;
Story.filter(function (p) {
	return hasWhitespaceRegExp.test(p.name);
});
```

---

### Story.find(predicate [, thisArg]) → Passage
在所有 `Passage` 实例中搜索第一个通过给定谓词函数所实现测试的实例。

> **注意**：此方法无法检索带有代码标签的段落。

**历史：**

+ v2.37.0：引入。

**参数：**

+ predicate：(Function) 用于测试每个 `Passage` 对象的函数，该对象会作为其唯一参数传入函数。如果函数返回 `true`，则该 `Passage` 实例会被添加到结果中。
+ thisArg：（可选，any）执行 `predicate` 函数时用作 `this` 的值。

**返回值：**

第一个通过给定谓词函数所实现测试的 `Passage` 实例；如果没有实例通过，则为 `undefined`。

### 示例：

```javascript
// 返回第一个带 'forest' 标签的 Passage 实例
Story.find(function (p) {
	return p.tags.includes("forest");
});

// 返回第一个名称包含空白的 Passage 实例
var hasWhitespaceRegExp = /\s/;
Story.find(function (p) {
	return hasWhitespaceRegExp.test(p.name);
});
```

---

### Story.get(name) → Passage
获取具有给定名称的 `Passage` 实例。

> **注意**：此方法无法检索带有代码标签的段落。

**历史：**

+ v2.0.0：引入。

**参数：**

+ name：(string) `Passage` 实例的名称。

**返回值：**

具有给定名称的 `Passage` 实例，如果不存在这样的段落，则为一个新的空 `Passage` 实例。

### 示例：

```javascript
// 获取名称为 "The Ducky" 的 Passage 实例
const theDucky = Story.get("The Ducky");
```

---

### Story.has(name) → boolean
确定具有给定名称的 `Passage` 实例是否存在。

> **注意**：此方法不检查带有代码标签的段落。

**历史：**

+ v2.0.0：引入。

**参数：**

+ name：(string) `Passage` 实例的名称。

**返回值：**

如果具有给定名称的 `Passage` 实例存在，则返回布尔值 `true`，否则返回 `false`。

### 示例：

```javascript
// 返回名称为 "The Ducky" 的 Passage 实例是否存在
if (Story.has("The Ducky")) {
	/* "The Ducky" 段落存在。 */
}
```

---

### Story.domId → string

> **已废弃**：此设置已被废弃，不应再使用。请参阅 Story.id 设置作为其替代。

**历史：**

+ v2.0.0：引入。
+ v2.37.0：废弃，推荐使用 `Story.id`。

---

### Story.title → string

> **已废弃**：此设置已被废弃，不应再使用。请参阅 Story.name 设置作为其替代。

**历史：**

+ v2.0.0：引入。
+ v2.37.0：废弃，推荐使用 `Story.name`。

---

### Story.lookup(propertyName , searchValue [, sortProperty]) → `Array<Passage>`

> **已废弃**：此静态方法已被废弃，不应再使用。请参阅 Story.filter() 静态方法作为其替代。

**历史：**

+ v2.0.0：引入。
+ v2.37.0：废弃，推荐使用 `Story.filter()`。

---

### Story.lookupWith(predicate [, sortProperty]) → `Array<Passage>`

> **已废弃**：此静态方法已被废弃，不应再使用。请参阅 Story.filter() 静态方法作为其替代。

**历史：**

+ v2.11.0：引入。
+ v2.37.0：废弃，推荐使用 `Story.filter()`。
