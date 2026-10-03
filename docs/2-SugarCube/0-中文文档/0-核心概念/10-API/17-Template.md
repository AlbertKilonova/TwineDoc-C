---
title: Template API_模板API
description: 模板的增删查
---

<div v-pre>

# Template API_模板API

提供模板的添加、删除与查询。（`Template` 是「模板仓库」——可复用的文本片段都存这儿。）

### 属性

#### Template.size → `number`

返回现有模板的数量。

```javascript
if (Template.size === 0) {
	/* 没有模板 */
}
```

### 方法

#### Template.add(name , definition)

添加新模板。

* **`name`**：（`string` | `Array<string>`）要添加的模板名或名称数组。名称须由基本拉丁字母组成，以字母开头，后可跟字母、数字、下划线或连字符。
* **`definition`**：（`Function` | `string` | `Array<Function | string>`）模板定义。**注意**：引用数组定义时，会随机选其中一个成员作为输出源。

函数模板：返回字符串（可含标记），调用时 `this` 设为模板执行上下文对象（含 `name` 属性）。

```javascript
Template.add('yolo', function () {
	return either('YOLO', 'You Only Live Once');
});

Template.add('cmyk', [
	'Cyan',
	function () { return either('Magenta', 'Yellow'); },
	'Black'
]);
```

#### Template.delete(name)

移除现有模板。

```javascript
Template.delete('yolo');
Template.delete(['yolo', 'nolf']);
```

#### Template.get(name) → `Function` | `string` | `Array<Function | string>`

返回指定名称的模板定义，失败则 `null`。

```javascript
var yolo = Template.get('yolo');
```

#### Template.has(name) → `boolean`

返回指定名称的模板是否存在。

```javascript
if (Template.has('yolo')) {
	/* 存在 ?yolo 模板 */
}
```

</div>
