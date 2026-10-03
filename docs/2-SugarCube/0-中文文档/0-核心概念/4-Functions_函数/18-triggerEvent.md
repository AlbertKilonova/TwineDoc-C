---
title: TriggerEvent_触发事件
description: 以给定名称派发合成事件
---

<div v-pre>

# TriggerEvent_触发事件

以给定名称派发合成事件，可选地在给定目标上并以给定选项派发。（`triggerEvent()` 是「喊话」——手动触发事件，让监听者动起来。）

### 语法

```SugarCube
triggerEvent(name [, targets [, options]])
```

### 参数

* **`name`**：（`string`）要触发的事件名。原生和自定义事件都支持。
* **`targets`**：（可选，`Document` | `HTMLElement` | `jQuery` | `NodeList` | `Array<HTMLElement>`）要触发事件的目标。省略则默认 `document`。
* **`options`**：（可选，`Object`）派发事件时使用的选项。

### options 对象

* **`bubbles`**：（可选，`boolean`）事件是否冒泡（默认 `true`）。
* **`cancelable`**：（可选，`boolean`）事件是否可取消（默认 `true`）。
* **`composed`**：（可选，`boolean`）事件是否触发 shadow root 之外的监听器（默认 `false`）。
* **`detail`**：（可选，`any`）随事件发送的自定义数据（默认 `undefined`）。

### 示例

```javascript
// 在 document 上派发自定义 fnord 事件
triggerEvent('fnord');

// 在 ID 为 some-menu 的元素上派发 click 事件
triggerEvent('click', document.getElementById('some-menu'));

// 派发带选项的自定义事件
triggerEvent('update-meter', document, {
	detail : { tags : ['health', 'magick'] }
});
```

> **提示**：派发自定义事件时，建议事件名只使用字母、数字、句点（`.`）、连字符（`-`）、下划线（`_`）、冒号（`:`）。
> **警告**：不建议直接给事件 options 对象添加额外属性，应使用 `detail` 属性。

</div>
