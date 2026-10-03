---
title: UIBar API_UI栏API
description: UI 栏的显示、隐藏与收纳
---

<div v-pre>

# UIBar API_UI栏API

提供 UI 栏的显示、隐藏、收纳与展开控制。（`UIBar` 是「UI 栏管家」——顶栏底栏归它管。）

### 方法

#### UIBar.destroy()

彻底移除 UI 栏及其所有关联样式和事件处理器。

```javascript
UIBar.destroy();
```

#### UIBar.hide() → `UIBar` 对象

隐藏 UI 栏。返回 `UIBar` 对象引用以便链式调用。

```javascript
UIBar.hide().stow();
```

> **注意**：这不会回收 UI 栏占用的空间，可能还需调用 `UIBar.stow()`。若想彻底移除，用 `UIBar.destroy()` 或 `StoryInterface` 特殊段落。

#### UIBar.isHidden() → `boolean`

返回 UI 栏当前是否隐藏。

```javascript
if (UIBar.isHidden()) {
	/* UI 栏已隐藏… */
}
```

#### UIBar.isStowed() → `boolean`

返回 UI 栏当前是否收纳。

#### UIBar.show() → `UIBar` 对象

显示 UI 栏。返回 `UIBar` 对象引用以便链式调用。

```javascript
UIBar.unstow().show();
```

#### UIBar.stow([noAnimation]) → `UIBar` 对象

收纳 UI 栏，使其占用更少空间。

* **`noAnimation`**：（可选，`boolean`）是否跳过默认动画。

```javascript
UIBar.stow();
UIBar.stow(true);
```

#### UIBar.unstow([noAnimation]) → `UIBar` 对象

展开 UI 栏，使其完全可访问。

```javascript
UIBar.unstow();
```

#### UIBar.update()（已废弃）

> **已废弃**：请改用 `UI.update()` 静态方法。

</div>
