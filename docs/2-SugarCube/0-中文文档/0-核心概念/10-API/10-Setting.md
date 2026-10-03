---
title: Setting API_设置API
description: 管理设置对话框与 settings 对象
---

<div v-pre>

# Setting API_设置API

管理设置对话框与 `settings` 对象。（`Setting` 是「设置中心」——玩家能调的开关都在这儿登记。）

> **警告**：`Setting` API 方法调用**必须**放在项目的 JavaScript 区（Twine 2：故事 JavaScript；Twine 1/Twee：`script` 标签段落），否则设置无法正常工作。

### 方法

#### Setting.addHeader(name [, desc])

向设置对话框添加标题。

```javascript
Setting.addHeader("Content Settings");
Setting.addHeader("Content Settings", "控制游戏内可用内容的设置。");
```

#### Setting.addList(name, definition)

向 `settings` 对象添加命名属性，并向设置对话框添加列表控件。

定义对象属性：`label`（标签）、`list`（成员数组）、`desc`（可选说明）、`default`（可选默认值，缺省用第一个成员）、`onInit`（初始化回调）、`onChange`（变更回调）。

```javascript
Setting.addList("difficulty", {
	label   : "Choose a difficulty level.",
	list    : ["Easy", "Normal", "Hard", "INSANE"],
	default : "Normal"
});
```

#### Setting.addRange(name, definition)

添加范围（滑块）控件。定义对象属性：`label`、`min`、`max`、`step`、`desc`、`default`（缺省用 `max`）、`onInit`、`onChange`。

```javascript
Setting.addRange("masterVolume", {
	label : "Master volume.",
	min   : 0, max : 10, step : 1
});
```

#### Setting.addToggle(name, definition)

添加开关控件。定义对象属性：`label`、`desc`、`default`（缺省 `false`）、`onInit`、`onChange`。

```javascript
Setting.addToggle("mature", {
	label : "Content for mature audiences?"
});
```

#### Setting.addValue(name [, definition])

向 `settings` 对象添加命名属性（不添加控件）。

#### Setting.getValue(name) → `any`

返回设置的当前值（等价于 `settings[name]`）。

#### Setting.load()

从存储加载设置（启动时自动调用，通常无需手动调用）。

#### Setting.reset([name])

把指定名称的设置重置为默认值；不传名称则重置所有。

```javascript
Setting.reset("difficulty");
Setting.reset(); // 重置所有
```

#### Setting.save()

把设置保存到存储。设置对话框控件和 `Setting.setValue()` 会自动调用此方法。

#### Setting.setValue(name, value)

设置设置的值（自动调用 `Setting.save()`）。

```javascript
Setting.setValue("theme", "dark");
```

> **警告**：手动改有控件的设置时，注意设置的值要合理（如范围型设置别设成非数字或越界值）。

### `settings` 对象

一个无原型普通对象，其属性由 `Setting.addList()`、`addRange()`、`addToggle()`、`addValue()` 定义。除 value 型外，属性值由设置对话框控件自动管理。也可直接赋值（如 `settings["mode"] = "day"`），但这样**不会**自动保存，需手动调用 `Setting.save()`。

</div>
