---
title: LoadScreen API_加载屏API
description: 加载屏的锁定与解锁
---

<div v-pre>

# LoadScreen API_加载屏API

提供加载屏的锁定与解锁控制。（`LoadScreen` 是「转圈圈管家」——该转的时候转，该停的时候停。）

> **注意**：若只是想给加载屏消失加个延迟以隐藏未样式化内容的初始闪烁（FOUC），无需使用此 API，参见 `Config.loadDelay` 配置设置。

### 方法

#### LoadScreen.lock() → *整数* `number`

获取加载屏锁，如有必要则显示加载屏。

```javascript
var lockId = LoadScreen.lock();
```

#### LoadScreen.unlock(lockId)

释放指定 ID 的加载屏锁，若再无其他锁则隐藏加载屏。

* **`lockId`**：（*整数* `number`）加载屏锁 ID。

```javascript
var lockId = LoadScreen.lock();
/* 做一些时机不可预测、需要被加载屏遮住的事 */
LoadScreen.unlock(lockId);
```

</div>
