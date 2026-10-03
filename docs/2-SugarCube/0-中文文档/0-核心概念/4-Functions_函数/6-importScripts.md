---
title: ImportScripts_导入脚本
description: 加载并集成外部 JavaScript 脚本
---

<div v-pre>

# ImportScripts_导入脚本

加载并集成外部 JavaScript 脚本。（`importScripts()` 是「外挂加载器」——把外部 JS 拉进来，你的故事就能用上别人写好的轮子。）

### 语法

```SugarCube
importScripts(urls…)
```

### 参数

* **`urls`**：（`string` | `Array<string>`）要导入的外部脚本 URL。散列的 URL 并发导入，URL 数组则顺序导入。

### 返回值

一个 `Promise`，成功时解析，加载失败则拒绝并带错误。

### 异常

一个 `Error` 或 `TypeError` 实例。

### 示例

```javascript
// 并发导入所有脚本
importScripts(
	'https://somesite/a/path/a.js',
	'https://somesite/a/path/b.js',
	'https://somesite/a/path/c.js',
	'https://somesite/a/path/d.js'
);

// 顺序导入所有脚本
importScripts([
	'https://somesite/a/path/a.js',
	'https://somesite/a/path/b.js',
	'https://somesite/a/path/c.js',
	'https://somesite/a/path/d.js'
]);

// 用返回的 Promise 确保脚本加载完再执行依赖代码
importScripts('https://somesite/a/path/a.js')
	.then(() => { /* 依赖脚本的代码 */ })
	.catch((err) => { console.log(err); });
```

> **注意**：加载是运行时异步进行的，所以如果脚本必须在很短时间内可用，应使用函数返回的 `Promise` 确保脚本在需要前加载完成。
> **注意**：项目的 JavaScript 区（Twine 2：故事 JavaScript；Twine 1/Twee：`script` 标签段落）通常是调用 `importScripts()` 的最佳位置。

</div>
