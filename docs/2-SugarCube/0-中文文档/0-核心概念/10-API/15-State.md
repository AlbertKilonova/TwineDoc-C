---
title: State_状态API
description: State API
---


# State API


故事历史包含游玩过程中创建的时刻（状态）。由于可以导航历史——即，在历史内的时刻之间前后移动——它可能既包含过去时刻——即，已游玩的时刻——也包含未来时刻——即，曾游玩过、但已被回退/撤销、但仍可恢复的时刻。

除历史外，还有活动时刻——即，当前——和过期时刻——即，曾游玩过、但已从历史中过期、因此无法导航到的时刻。

### State.active → Object
返回活动（当前）时刻。

> **注意**：通常没有必要直接使用 `State.active`，因为存在许多快捷属性 State.passage 和 State.variables，以及故事函数 passage() 和 variables()，它们授予对其正常属性的访问。

**历史：**

+ v2.0.0：引入。

### 示例：

```plain
State.active.title      → 当前时刻的标题
State.active.variables  → 当前时刻的变量
```

---

### State.bottom → Object
返回完整进行中历史（过去 + 未来）中最底部（最不近的）的时刻。

**历史：**

+ v2.0.0：引入。

### 示例：

```plain
State.bottom.title      → 完整进行中历史中最不近的时刻的标题
State.bottom.variables  → 完整进行中历史中最不近的时刻的变量
```

---

### State.current → Object
返回完整进行中历史（过去 + 未来）中的当前时刻，它是活动时刻的播放前版本。

> **警告**：`State.current` *不是* State.active 的同义词。你很可能永远不需要在你的代码中直接使用 `State.current`。

**历史：**

+ v2.8.0：引入。

### 示例：

```plain
State.current.title      → 完整进行中历史中当前时刻的标题
State.current.variables  → 完整进行中历史中当前时刻的变量
```

---

### State.length → integer number
返回过去进行中历史（仅过去）中时刻的数量。

**历史：**

+ v2.0.0：引入。

### 示例：

```plain
if (State.length === 0) {
	/* 过去进行中历史中没有时刻。天哪！ */
}
```

---

### State.passage → string
返回与活动（当前）时刻关联的段落的标题。

**历史：**

+ v2.0.0：引入。

### 示例：

```plain
State.passage  → 当前时刻的段落标题
```

---

### State.size → integer number
返回完整进行中历史（过去 + 未来）中时刻的数量。

**历史：**

+ v2.0.0：引入。

**参数：**无

### 示例：

```plain
if (State.size === 0) {
	/* 完整进行中历史中没有时刻。天哪！ */
}
```

---

### State.temporary → Object
返回当前的临时变量。

**历史：**

+ v2.13.0：引入。

### 示例：

```plain
State.temporary  → 当前的临时变量
```

---

### State.top → Object
返回完整进行中历史（过去 + 未来）中最顶部（最近的）的时刻。

> **警告**：`State.top` *不是* State.active 的同义词。你很可能永远不需要在你的代码中直接使用 `State.top`。

**历史：**

+ v2.0.0：引入。

### 示例：

```plain
State.top.title      → 完整进行中历史中最近的时刻的标题
State.top.variables  → 完整进行中历史中最近的时刻的变量
```

---

### State.turns → integer number
返回扩展过去历史（过期 + 过去）中已游玩时刻的总数（计数）。

**历史：**

+ v2.0.0：引入。

### 示例：

```plain
if (State.turns === 1) {
	/* 初始回合。正在显示起始段落。 */
}
```

---

### State.variables → Object
返回活动（当前）时刻的变量。

**历史：**

+ v2.0.0：引入。

### 示例：

```plain
State.variables  → 当前时刻的变量
```

---

### State.getVar(varName) → any
返回给定名称的故事或临时变量的值。

**历史：**

+ v2.22.0：引入。

**参数：**

+ varName：(string) 故事或临时变量的名称，包括其符号——例如 `$charName`。

### 示例：

```plain
State.getVar("$charName")  → 返回 $charName 的值
```

---

### State.has(passageTitle) → boolean
返回过去进行中历史（仅过去）中是否存在具有给定标题的任何时刻。

> **注意**：`State.has()` *不会*检查过期时刻。如果你需要知道玩家是否曾去过某个特定段落，那么你*必须*使用 State.hasPlayed() 方法或 hasVisited() 故事函数。

**历史：**

+ v2.0.0：引入。

**参数：**

+ passageTitle：(string) 将要验证其存在的时刻的标题。

### 示例：

```plain
State.has("The Ducky")  → 返回是否存在匹配 "The Ducky" 的时刻
```

---

### State.hasPlayed(passageTitle) → boolean
返回扩展过去历史（过期 + 过去）中是否存在具有给定标题的任何时刻。

> **注意**：如果你需要检查多个段落，hasVisited() 故事函数可能更方便使用。

**历史：**

+ v2.0.0：引入。

**参数：**

+ passageTitle：(string) 将要验证其存在的时刻的标题。

### 示例：

```plain
State.hasPlayed("The Ducky")  → 返回是否曾经存在匹配 "The Ducky" 的时刻
```

---

### State.index(index) → Object
返回相对于过去进行中历史（仅过去）底部、给定索引处的时刻。

**历史：**

+ v2.0.0：引入。

**参数：**

+ index：（整数 `number`）要返回的时刻的索引。

### 示例：

```plain
State.index(0)                 → 返回过去进行中历史中最不近的时刻
State.index(1)                 → 返回过去进行中历史中第二不近的时刻
State.index(State.length - 1)  → 返回过去进行中历史中最近的时刻
```

---

### State.isEmpty() → boolean
返回完整进行中历史（过去 + 未来）是否为空。

**历史：**

+ v2.0.0：引入。

**参数：**无

### 示例：

```plain
if (State.isEmpty()) {
	/* 完整进行中历史中没有时刻。天哪！ */
}
```

---

### State.peek([offset]) → Object
返回相对于过去进行中历史（仅过去）顶部、位于可选偏移量处的时刻。

**历史：**

+ v2.0.0：引入。

**参数：**

+ offset：（可选，整数 `number`）要返回的时刻距过去进行中历史顶部的偏移量。若未给出，则使用 `0` 的偏移量。

### 示例：

```plain
State.peek()                  → 返回过去进行中历史中最近的时刻
State.peek(1)                 → 返回过去进行中历史中第二近的时刻
State.peek(State.length - 1)  → 返回过去进行中历史中最不近的时刻
```

---

### State.metadata.size → integer number
返回故事元数据存储的大小——即，存储的对的数量。

**历史：**

+ v2.30.0：引入。

### 示例：

```plain
// 确定元数据存储是否有任何成员。
if (State.metadata.size > 0) {
	/* 存储非空 */
}
```

---

### State.metadata.clear()
清空故事元数据存储。

**历史：**

+ v2.29.0：引入。

**参数：**无

### 示例：

```plain
// 从元数据存储中移除所有值。
State.metadata.clear();
```

---

### State.metadata.delete(key)
从故事元数据存储中移除指定的键及其关联的值。

**历史：**

+ v2.29.0：引入。

**参数：**

+ key：(string) 要删除的键。

### 示例：

```plain
// 从元数据存储中移除 'achievements'。
State.metadata.delete('achievements');
```

---

### State.metadata.entries() → Array<Array<string, any>>
以 `[key, value]` 数组的形式返回故事元数据存储的键/值对数组。

**历史：**

+ v2.36.0：引入。

**参数：**无

### 示例：

```javascript
// 用 for 循环遍历这些对。
var metadata = State.metadata.entries();
for (var i = 0; i < metadata.length; ++i) {
	var key   = metadata[i][0];
	var value = metadata[i][1];

	/* 做点事 */
}
```

---

### State.metadata.get(key) → any
从故事元数据存储中返回与指定键关联的值。

**历史：**

+ v2.29.0：引入。

**参数：**

+ key：(string) 应返回其值的键。

### 示例：

```plain
// 从元数据存储中返回 'achievements' 的值。
var playerAchievements = State.metadata.get('achievements');
```

---

### State.metadata.has(key) → boolean
返回故事元数据存储中是否存在指定的键。

**历史：**

+ v2.29.0：引入。

**参数：**

+ key：(string) 应测试其存在的键。

### 示例：

```plain
// 返回 'achievements' 是否存在于元数据存储中。
if (State.metadata.has('achievements')) {
	/* 做点事 */
}
```

---

### State.metadata.keys() → Array<string>
返回故事元数据存储的键数组。

**历史：**

+ v2.36.0：引入。

**参数：**无

### 示例：

```javascript
// 用 for 循环遍历这些键。
var metadataKeys = State.metadata.keys();
for (var i = 0; i < metadataKeys.length; ++i) {
	var key = metadataKeys[i];

	/* 做点事 */
}
```

---

### State.metadata.set(key, value)
在故事元数据存储中设置指定的键和值，使它们在故事和浏览器重启后依然保留——注意，隐私浏览模式确实会干扰这一点。要更新与键关联的值，只需再次设置它即可。

> **注意**：故事元数据与存档一样，与生成它的特定故事绑定。它不是在不同故事之间移动数据的机制。

> **警告**：故事元数据存储**不是**存档的替代品，也不应如此使用。好的用途示例：成就追踪、二周目数据、通关统计等。

**历史：**

+ v2.29.0：引入。

**参数：**

+ key：(string) 应设置的键。
+ value：(any) 要设置的值。

### 示例：

```plain
// 在元数据存储中设置 'achievements' 及其给定值。
State.metadata.set('achievements', { ateYellowSnow : true });

// 在元数据存储中设置 'ngplus' 及其给定值。
State.metadata.set('ngplus', true);
```

---

### State.prng.init([seed [, useEntropy]])
初始化可播种的伪随机数生成器（PRNG），并将其集成到故事状态和存档中。一旦初始化，State.random() 方法和故事函数 random()、randomFloat() 会从播种的 PRNG 返回确定性结果——默认情况下，它们从 `Math.random()` 返回非确定性结果。

> **注意**：`State.prng.init()` *必须*在故事初始化期间调用，位于你项目的 JavaScript 区（Twine 2：故事 JavaScript；Twine 1/Twee：一个 `script` 标签段落）或 `StoryInit` 特殊段落中。此外，**强烈**建议你不要为 `State.prng.init()` 指定任何参数，让它自动播种。但是，如果你选择使用显式种子，则**强烈**建议你也启用额外的熵，否则所有玩家的所有通关都将完全相同。

**历史：**

+ v2.29.0：引入。

**参数：**

+ seed：（可选，string）用于初始化伪随机数生成器的显式种子。
+ useEntropy：（可选，boolean）启用额外熵来填充指定的显式种子。

### 示例：

```plain
State.prng.init()                       → 自动播种 PRNG（推荐）
State.prng.init("aVeryLongSeed")        → 用 "aVeryLongSeed" 播种 PRNG（不推荐）
State.prng.init("aVeryLongSeed", true)  → 用 "aVeryLongSeed" 播种 PRNG 并用额外熵填充
```

---

### State.prng.isEnabled() → boolean
返回可播种 PRNG 是否已被启用。

**历史：**

+ v2.29.0：引入。

### 示例：

```plain
State.prng.isEnabled()  → 返回可播种 PRNG 是否已启用
```

---

### State.prng.pull → integer number | NaN
返回可播种 PRNG 的当前拉取计数——即，已发出的请求数——或者，如果 PRNG 未启用，则为 `NaN`。

**历史：**

+ v2.29.0：引入。

### 示例：

```plain
State.prng.pull  → 返回当前 PRNG 拉取计数
```

---

### State.prng.seed → string | null
返回可播种 PRNG 的种子，或者，如果 PRNG 未启用，则为 `null`。

**历史：**

+ v2.29.0：引入。

### 示例：

```plain
State.prng.seed  → 返回 PRNG 种子
```

---

### State.random() → number
返回一个范围在 `0`（含）到 `1`（不含）之间的伪随机小数（浮点数）。

> **注意**：默认情况下，它只是从 `Math.random()` 返回非确定性结果；然而，当通过 State.prng.init() 启用了可播种 PRNG 时，它会改为从播种的 PRNG 返回确定性结果。

**历史：**

+ v2.0.0：引入。

**参数：**无

### 示例：

```plain
State.random()  → 返回范围 [0, 1) 内的伪随机浮点数
```

---

### State.setVar(varName, value) → boolean
设置给定名称的故事或临时变量的值。返回操作是否成功。

**历史：**

+ v2.22.0：引入。

**参数：**

+ varName：(string) 故事或临时变量的名称，包括其符号——例如 `$charName`。
+ value：(any) 要赋的值。

### 示例：

```plain
State.setVar("$charName", "Jane Doe")  → 将字符串 "Jane Doe" 赋值给 $charName
```
