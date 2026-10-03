---
title: Dialog API_对话框API
description: 对话框相关操作
---

<div v-pre>

# Dialog API_对话框API

提供对话框的创建、填充与开关控制。（`Dialog` 是「弹窗管家」——对话框的增删改开都归它。）

### 方法

#### Dialog.append(content) → `Dialog`

把给定内容追加到对话框内容区。返回 `Dialog` 对象引用以便链式调用。

* **`content`**：（`Node` | `string`）要追加的内容。此方法本质是 `jQuery(Dialog.body()).append(…)` 的快捷方式。

```javascript
Dialog.append("Cry 'Havoc!', and let slip the dogs of war.");
```

> **警告**：若内容含 SugarCube 标记，请改用 `Dialog.wiki()` 方法。

#### Dialog.body() → `HTMLElement`

返回对话框内容区的引用。

```javascript
jQuery(Dialog.body())
	.wiki("Cry 'Havoc!', and let slip the //dogs// of ''war''.");
```

> **注意**：实际使用中通常不需要此方法，因为已有 `Dialog.append()`。

#### Dialog.close() → `Dialog`

关闭对话框。

```javascript
Dialog.close();
```

#### Dialog.create([title [, classNames]]) → `Dialog`

准备对话框以供使用。

* **`title`**：（可选，`string`）对话框标题。
* **`classNames`**：（可选，`string`）添加到对话框的类列表（空格分隔）。

```javascript
Dialog
	.create('Character Sheet', 'charsheet')
	.wikiPassage('Player Character')
	.open();
```

#### Dialog.empty() → `Dialog`

清空对话框内容区。

```javascript
Dialog.empty();
```

#### Dialog.isOpen([classNames]) → `boolean`

返回对话框当前是否打开。

```javascript
if (Dialog.isOpen('saves')) {
	/* Saves 对话框已打开… */
}
```

#### Dialog.open([options [, closeFn]]) → `Dialog`

打开对话框。

* **`options`**：（可选，`null` | `Object`）打开对话框时的选项。属性 `top`：对话框顶部 y 坐标（像素，默认 `50`）。
* **`closeFn`**：（可选，`null` | `Function`）对话框关闭时要执行的函数。

```javascript
Dialog.open({ top : 100 }, () => {
	/* 关闭时执行的代码… */
});
```

> **注意**：仅在填充完内容后再调用此方法。

#### Dialog.wiki(wikiMarkup) → `Dialog`

渲染给定标记并追加到对话框内容区。

* **`wikiMarkup`**：（`string`）要渲染的标记。

```javascript
Dialog.wiki("Cry 'Havoc!', and let slip the //dogs// of ''war''.");
```

> **注意**：若只想渲染段落，请改用 `Dialog.wikiPassage()`。若内容是 DOM 节点，请改用 `Dialog.append()`。

#### Dialog.wikiPassage(passageName) → `Dialog`

渲染指定名称的段落并追加到对话框内容区。

```javascript
Dialog.wikiPassage('Inventory');
```

#### Dialog.setup([title [, classNames]]) → `HTMLElement`（已废弃）

> **已废弃**：此方法已废弃，不应再使用。请改用 `Dialog.create()`。

</div>
