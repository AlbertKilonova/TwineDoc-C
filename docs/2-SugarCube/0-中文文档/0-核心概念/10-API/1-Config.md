---
title: Config_配置API
description: Config API
---


# Config API


`Config` 对象控制 SugarCube 行为的各个方面。

> **注意**：`Config` 对象设置应放置在你项目的 JavaScript 区（Twine 2：故事 JavaScript；Twine 1/Twee：一个 `script` 标签段落）。

## General Settings

### Config.addVisitedLinkClass ↔ boolean（默认：false）
决定是否向前往已访问段落的内部段落链接添加 `link-visited` 类。

**历史：**

+ v2.0.0：引入。

### 示例：

```javascript
Config.addVisitedLinkClass = true;
```

```css
.link-visited {
	color: purple;
}
```

---

### Config.cleanupWikifierOutput ↔ boolean（默认：false）
决定 Wikifier 的输出是否被后处理为更合理的标记——即，在合适的地方，尝试将大量的 `<br>` 元素转换为 `` 元素。

**历史：**

+ v2.0.0：引入。

### 示例：

```javascript
Config.cleanupWikifierOutput = true;
```

---

### Config.debug ↔ boolean（默认：false）
表示 SugarCube 是否运行在测试模式，该模式启用调试视图和各种可选调试错误和警告。

**历史：**

+ v2.2.0：引入。

### 示例：

```javascript
// 强制启用测试模式。
Config.debug = true;

// 检查测试模式是否启用（在 JavaScript 中）
if (Config.debug) {
	// 做点调试相关的事。
}
```

```plain
<<if Config.debug>>
	/* 做点调试相关的事 */
<</if>>
```

---

### Config.enableOptionalDebugging ↔ boolean（默认：false）
决定是否在测试模式之外启用各种可选调试错误和警告。

**历史：**

+ v2.37.0：引入。

### 示例：

```javascript
Config.enableOptionalDebugging = true;
```

---

### Config.loadDelay ↔ integer number（默认：0）
设置在文档发出就绪信号后、加载画面消失之前的整数延迟（毫秒）。

**历史：**

+ v2.0.0：引入。

### 示例：

```javascript
// 将加载画面的消失延迟 2000ms（2s）
Config.loadDelay = 2000;
```

## Audio Settings

### Config.audio.pauseOnFadeToZero ↔ boolean（默认：true）
决定音频子系统是否自动暂停已淡出到 `0` 音量（静音）的音轨。

**历史：**

+ v2.28.0：引入。

### 示例：

```javascript
Config.audio.pauseOnFadeToZero = false;
```

---

### Config.audio.preloadMetadata ↔ boolean（默认：true）
决定音频子系统是否尝试预加载音轨元数据——即，有关音轨的信息（例如，时长），而非其音频帧。

**历史：**

+ v2.28.0：引入。

### 示例：

```javascript
Config.audio.preloadMetadata = false;
```

## History Settings

### Config.history.controls ↔ boolean（默认：true）
决定历史控件（后退、跳转到、前进按钮）是否在 UI 栏中启用。

**历史：**

+ v2.0.0：引入。

### 示例：

```javascript
Config.history.controls = false;
```

---

### Config.history.disableDeltas ↔ boolean（默认：false）
决定历史状态是否进行增量编码/解码。

**历史：**

+ v2.38.0：引入。

### 示例：

```javascript
// 禁用历史的增量编码/解码。
Config.history.disableDeltas = true;
```

---

### Config.history.maxStates ↔ integer number（默认：40）
设置历史允许增长到的最大状态（时刻）数。如果历史超过限制，状态将从过去（最早优先）被丢弃。

**历史：**

+ v2.0.0：引入。
+ v2.36.0：将默认值降低到 `40`。

### 示例：

```javascript
// 将历史限制为单个时刻（游戏推荐）
Config.history.maxStates = 1;

// 将历史限制为 25 个时刻
Config.history.maxStates = 25;
```

## Macros Settings

### Config.macros.maxLoopIterations ↔ integer number（默认：1000）
设置在 `<<for>>` 宏条件形式被错误终止之前允许的最大迭代次数。

**历史：**

+ v2.0.0：引入。

### 示例：

```javascript
// 只允许 5000 次迭代
Config.macros.maxLoopIterations = 5000;
```

---

### Config.macros.typeSkipKey ↔ string（默认：" "，空格）
设置使当前运行的 `<<type>>` 宏实例立即完成输入其内容的默认 `KeyboardEvent.key` 值。

**历史：**

+ v2.33.1：引入。

### 示例：

```javascript
// 将默认跳过键改为 Control (CTRL)
Config.macros.typeSkipKey = 'Control';
```

---

### Config.macros.typeVisitedPassages ↔ boolean（默认：true）
决定 `<<type>>` 宏是否在已访问过的段落上输入内容，还是简单地立即输出。

**历史：**

+ v2.32.0：引入。

### 示例：

```javascript
// 在已访问段落上不输入
Config.macros.typeVisitedPassages = false;
```

---

### Config.macros.ifAssignmentError ↔ boolean（默认：true）

> **已废弃**：此设置已被废弃，不应再使用。请参阅 Config.enableOptionalDebugging 设置作为其替代。

**历史：**

+ v2.0.0：引入。
+ v2.37.0：废弃，推荐使用 `Config.enableOptionalDebugging` 设置。

## Navigation Settings

### Config.navigation.override ↔ Function（默认：无）
允许覆盖段落导航的目的地。回调会传入一个参数，即原始目的地段落名称。如果其返回值是假值，则覆盖被取消，导航到原始目的地不受干扰地继续。如果其返回值是真值，则覆盖成功，该值被用作导航的新目的地。

**历史：**

+ v2.13.0：引入。

### 示例：

```javascript
Config.navigation.override = (destinationPassage) => {
	/* 返回段落名称或假值的代码 */
};
```

```javascript
Config.navigation.override = (destinationPassage) => {
	var sv = State.variables;

	// 如果 $health 小于或等于 0，则改为前往 "You Died" 段落。
	if (sv.health <= 0) {
		return 'You Died';
	}
};
```

## Passages Settings

### Config.passages.displayTitles ↔ boolean（默认：false）
决定当前段落名称是否与故事名称组合在浏览器标签页的标题栏中。

**历史：**

+ v2.0.0：引入。

### 示例：

```javascript
Config.passages.displayTitles = true;
```

---

### Config.passages.nobr ↔ boolean（默认：false）
决定渲染段落是否在渲染前移除开头/结尾换行符，并将所有剩余的换行符序列替换为单个空格。等效于在每个段落上包含 nobr 特殊标签。

**历史：**

+ v2.19.0：引入。

### 示例：

```javascript
Config.passages.nobr = true;
```

---

### Config.passages.onProcess ↔ Function（默认：无）
允许自定义段落文本的处理。该函数在每次调用 .processText() 方法时被调用。它会被传入关联段落 Passage 实例的缩略版本——只包含 `name`、`tags` 和 `text` 属性。其返回值应为后处理后的文本。

**历史：**

+ v2.30.0：引入。

### 示例：

```javascript
// 将段落中的 "cat" 实例改为 "dog"
Config.passages.onProcess = (p) => p.text.replace(/\bcat(s?)\b/g, 'dog$1');
```

---

### Config.passages.start ↔ string（Twine 2 默认：用户选择；Twine 1/Twee 默认："Start"）
设置起始段落名称，即第一个显示的段落。

**历史：**

+ v2.0.0：引入。

### 示例：

```javascript
Config.passages.start = 'That Other Starting Passage';
```

---

### Config.passages.transitionOut ↔ string | integer number（默认：无）
决定是否启用传出段落过渡。

**历史：**

+ v2.0.0：引入。

### 示例：

```javascript
// 当透明度动画结束时移除传出元素
Config.passages.transitionOut = 'opacity';

// 1500ms（1.5s）后移除传出元素
Config.passages.transitionOut = 1500;
```

```css
.passage-out {
	opacity: 0;
}
```

---

### Config.passages.descriptions ↔ boolean | Object | Function（默认：无）

> **已废弃**：此设置已被废弃，不应再使用。请参阅 Config.saves.descriptions 设置作为其替代。

## Saves Settings

### Config.saves.descriptions ↔ Function（默认：无）
设置浏览器存档描述。如果未设置，则使用当前回合的简短描述。如果分配了回调函数，它会被传入一个参数，即正在尝试的存档类型。如果其返回值是真值，则使用返回的描述，否则使用默认描述。

**历史：**

+ v2.37.0：引入。

### 示例：

```javascript
Config.saves.descriptions = (saveType) => passage();
```

---

### Config.saves.id ↔ string（默认：slug 化故事名称）
设置与存档关联的 ID。

**历史：**

+ v2.0.0：引入。

### 示例：

```javascript
Config.saves.id = 'a-big-huge-story-part-1';
```

---

### Config.saves.isAllowed ↔ Function（默认：无）
决定当前上下文中是否允许存档。如果未设置，则始终允许存档。

**历史：**

+ v2.0.0：引入。
+ v2.37.0：新增存档类型参数。

### 示例：

```javascript
// 禁止在带有 `menu` 标签的段落上存档。
Config.saves.isAllowed = (saveType) => !tags().includes('menu');
```

---

### Config.saves.maxAutoSaves ↔ integer number（默认：0）
设置可用自动存档的最大数量。使用 `0` 值禁用自动存档。

**历史：**

+ v2.37.0：引入。

### 示例：

```javascript
Config.saves.maxAutoSaves = 3;
```

---

### Config.saves.maxSlotSaves ↔ integer number（默认：8）
设置可用槽位存档的最大数量。使用 `0` 值禁用槽位存档。

**历史：**

+ v2.37.0：引入。

### 示例：

```javascript
Config.saves.maxSlotSaves = 4;
```

---

### Config.saves.metadata ↔ Function（默认：无）
设置存档的 `metadata` 属性。回调在每次存档时被调用。

**历史：**

+ v2.37.0：引入。

### 示例：

```javascript
Config.saves.metadata = (saveType) => {
	const sv = State.variables;

	return {
		party : sv.party, // 例如，['Celes', 'Locke', 'Edward']
		gold  : sv.gold   // 例如，2345
	};
};
```

---

### Config.saves.version ↔ any（默认：无）
设置存档的 `version` 属性。

> **注意**：**强烈建议**你为版本使用整数 `number`。

**历史：**

+ v2.0.0：引入。

### 示例：

```javascript
// 作为整数（强烈推荐）
Config.saves.version = 3;
```

---

### Config.saves.autoload

> **已废弃**：此设置已被废弃，不应再使用。

---

### Config.saves.autosave

> **已废弃**：此设置已被废弃，不应再使用。请参阅 Config.saves.maxAutoSaves 和 Config.saves.isAllowed 设置。

---

### Config.saves.onLoad / onSave / slots / tryDiskOnMobile

> **已废弃**：这些设置已被废弃，不应再使用。请参阅相应的 Save Events API 方法。

## UI Settings

### Config.ui.stowBarInitially ↔ boolean | integer number（默认：800）
决定 UI 栏（侧边栏）是否初始处于收起（关闭）状态。

**历史：**

+ v2.11.0：引入。

### 示例：

```javascript
// 作为布尔值；始终以收起状态开始
Config.ui.stowBarInitially = true;

// 作为整数；如果视口为 800px 或更小，则以收起状态开始
Config.ui.stowBarInitially = 800;
```

---

### Config.ui.updateStoryElements ↔ boolean（默认：true）
决定 UI 栏中的某些元素是否在段落导航时更新。受影响的元素（按顺序）：`StoryDisplayTitle`、`StoryBanner`、`StorySubtitle`、`StoryAuthor`、`StoryCaption` 和 `StoryMenu`。

**历史：**

+ v2.0.0：引入。

### 示例：

```javascript
// 如果你不需要那些元素更新
Config.ui.updateStoryElements = false;
```
