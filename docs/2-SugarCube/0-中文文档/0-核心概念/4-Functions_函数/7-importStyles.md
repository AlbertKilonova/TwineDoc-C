---
title: ImportStyles_导入样式
description: 加载并集成外部 CSS 样式表
---

<div v-pre>

# ImportStyles_导入样式

加载并集成外部 CSS 样式表。（`importStyles()` 是「换装师」——把外部样式表拉进来，页面立马变漂亮。）

### 语法

```SugarCube
importStyles(urls…)
```

### 参数

* **`urls`**：（`string` | `Array<string>`）要导入的外部样式表 URL。散列的 URL 并发导入，URL 数组则顺序导入。

### 返回值

一个 `Promise`，成功时解析，加载失败则拒绝并带错误。

### 异常

一个 `Error` 或 `TypeError` 实例。

### 示例

```javascript
// 并发导入所有样式表
importStyles(
	'https://somesite/a/path/a.css',
	'https://somesite/a/path/b.css',
	'https://somesite/a/path/c.css',
	'https://somesite/a/path/d.css'
);

// 用返回的 Promise 确保样式表加载完再解锁加载屏
var lsLockId = LoadScreen.lock();
importStyles('https://somesite/a/path/a.css')
	.then(() => { LoadScreen.unlock(lsLockId); })
	.catch((err) => { console.log(err); });
```

> **注意**：加载是运行时异步进行的，所以如果样式表必须在很短时间内可用，应使用函数返回的 `Promise` 确保样式表在需要前加载完成。

</div>
