---
title: Macro API_宏API
description: 宏的添加、删除与查询
---

<div v-pre>

# Macro API_宏API

提供宏的添加、删除与查询。（`Macro` 是「宏工厂」——自定义宏的底层接口。）

> **参见**：`MacroContext` API。

### 方法

#### Macro.add(name , definition)

添加新宏。

* **`name`**：（`string` | `Array<string>`）宏名或名称数组。名称须由基本拉丁字母组成，以字母开头。
* **`definition`**：（`Object` | `string`）宏定义对象或要复制其定义的现有宏名。

定义对象属性（仅 `handler` 必需）：

* **`skipArgs`**：（可选，`boolean` | `Array<string>`）禁用把参数字符串解析为离散参数。
* **`tags`**：（可选，`null` | `Array<string>`）表示宏是容器宏（非自闭合），值为子标签名数组或 `null`。
* **`handler`**：（`Function`）宏的主函数，无参数调用，`this` 设为宏上下文对象。

```javascript
/* 一个极简的 `<<if>>`/`<<elseif>>`/`<<else>>` 实现 */
Macro.add('if', {
	skipArgs : true,
	tags     : ['elseif', 'else'],
	handler  : function () {
		try {
			for (var i = 0, len = this.payload.length; i < len; ++i) {
				if (
					this.payload[i].name === 'else' ||
					!!Scripting.evalJavaScript(this.payload[i].args.full)
				) {
					jQuery(this.output).wiki(this.payload[i].contents);
					break;
				}
			}
		}
		catch (ex) {
			return this.error('bad conditional expression: ' + ex.message);
		}
	}
});
```

#### Macro.delete(name)

移除现有宏。

```javascript
Macro.delete("amacro");
Macro.delete(["amacro", "bmacro"]);
```

#### Macro.get(name) → `Object`

返回指定名称的宏定义，失败则 `null`。

#### Macro.has(name) → `boolean`

返回指定名称的宏是否存在。

#### Macro.tags.get(name) → `Array<string>`

返回指定宏标签的父级数组（含所有注册了该子标签的宏名），失败则 `null`。

```javascript
Macro.tags.get("else")  // 标准库返回：["if"]
```

#### Macro.tags.has(name) → `boolean`

返回指定宏标签是否存在。

</div>
