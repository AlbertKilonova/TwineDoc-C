---
title: MacroContext API_宏上下文API
description: 宏执行上下文对象的数据与方法
---

<div v-pre>

# MacroContext API_宏上下文API

宏处理器在无参数的情况下被调用，但其 `this` 被设置为一个宏（执行）上下文对象。（`MacroContext` 是「宏的身份证」——宏运行时，它知道自己是谁、从哪来、参数是什么。）

> **参见**：`Macro` API。

### 属性

#### `<MacroContext>.args` → `Array<any>`

从参数字符串解析出的离散参数数组。

```javascript
// 给定：<<someMacro "a" "b" "c">>
this.args.length  // 返回 3
this.args[0]      // 返回 'a'
```

#### `<MacroContext>.args.full` → `string`

把所有 TwineScript 语法元素转换为其原生 JavaScript 对应物后的参数字符串。

```javascript
// 给定：<<if $a is "b">>
this.args.full  // 返回 'State.variables.a === "b"'
```

#### `<MacroContext>.args.raw` → `string`

未处理的原始参数字符串。

```javascript
// 给定：<<if "a" is "b">>
this.args.raw  // 返回 '"a" is "b"'
```

#### `<MacroContext>.name` → `string`

宏的名称。

```javascript
this.name  // 返回 'someMacro'
```

#### `<MacroContext>.output` → `HTMLElement`

当前输出元素。

```javascript
$(this.output).wiki('Some //awesome// markup!');
```

#### `<MacroContext>.parent` → `Object` | `null`

宏的父级宏上下文对象，无父级则 `null`。

#### `<MacroContext>.parser` → `Wikifier`

生成该宏调用的解析器实例。

#### `<MacroContext>.payload` → `Array<Object>` | `null`

容器宏的文本按标签解析成的离散 payload 对象数组。每个 payload 对象有：`name`（标签名）、`args`（参数，含 `.full`/`.raw`）、`contents`（内容）。

#### `<MacroContext>.self` → `Object`

宏的定义（通过 `Macro.add()` 创建）。

### 方法

#### `<MacroContext>.contextFilter(predicate)` → `Array<Object>`

返回一个包含所有通过给定谓词函数测试的宏祖先的新数组（无则空数组）。

```javascript
var isInclude = function (ctx) { return ctx.name === 'include'; };
this.contextFilter(isInclude); // 返回所有 `<<include>>` 宏祖先的数组
```

#### `<MacroContext>.contextFind(predicate)` → `Object` | `undefined`

返回第一个通过谓词函数测试的宏祖先，无则 `undefined`。

```javascript
this.contextFind(isInclude); // 返回第一个 `<<include>>` 宏祖先
```

#### `<MacroContext>.contextSome(predicate)` → `boolean`

返回是否有任一宏祖先通过谓词函数测试。

```javascript
this.contextSome(isInclude); // 若任一祖先是 `<<include>>` 则返回 true
```

#### `<MacroContext>.error(message)` → `boolean`

渲染带宏名前缀的消息并返回 `false`。

```javascript
return this.error('oops'); // 输出 '`<<someMacro>>`: oops'
```

#### `<MacroContext>.shadowHandler(callback [, doneCallback [, startCallback]])` → `Function`

返回一个包装指定回调函数的回调，以提供对 `<<capture>>` 宏所用变量遮蔽系统的访问。

```javascript
$someElement.on('some_event', this.shadowHandler(function (ev) {
	/* 主异步代码 */
}));
```

> **警告**：仅在你有异步回调需要访问被 `<<capture>>` 遮蔽的变量时才有用。

#### `<MacroContext>.wiki(sources…)`

Wikify 给定内容源并追加到宏的输出。

```javascript
this.wiki('Who //are// you?'); // 输出 "Who <em>are</em> you?"
```

#### `<MacroContext>.contextHas(filter)` → `boolean`（已废弃）

> **已废弃**：请改用 `<MacroContext>.contextSome()`。

#### `<MacroContext>.contextSelect(filter)` → `Object` | `null`（已废弃）

> **已废弃**：请改用 `<MacroContext>.contextFind()`。

#### `<MacroContext>.contextSelectAll(filter)` → `Array<Object>`（已废弃）

> **已废弃**：请改用 `<MacroContext>.contextFilter()`。

#### `<MacroContext>.createShadowWrapper(callback [, doneCallback [, startCallback]])` → `Function`（已废弃）

> **已废弃**：请改用 `<MacroContext>.shadowHandler()`。

</div>
