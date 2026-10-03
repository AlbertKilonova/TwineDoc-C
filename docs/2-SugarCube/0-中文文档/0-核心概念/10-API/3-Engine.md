---
title: Engine API_引擎API
description: 引擎状态与历史导航控制
---

<div v-pre>

# Engine API_引擎API

提供引擎状态与历史导航控制。（`Engine` 是「发动机」——故事怎么走、历史怎么回退，都听它的。）

### 常量

#### Engine.State

引擎状态伪枚举：

| 状态 | 说明 |
| --- | --- |
| `Engine.State.Idle` | 引擎空闲，等待触发段落导航（默认状态） |
| `Engine.State.Playing` | 段落导航已触发，引擎正在处理段落 |
| `Engine.State.Rendering` | 传入段落正在渲染（此时蕴含 `Playing`） |

段落导航时引擎状态循环：idle（开始）→ playing → rendering → playing → idle（结束）。

### 属性

#### Engine.lastPlay → `number`

返回上次调用 `Engine.play()` 的时间戳（整数）。

```javascript
if ((now() - Engine.lastPlay) > 5000) {
	// 距上次 Engine.play() 已过 5 秒
}
```

#### Engine.state → `Engine.State`

返回引擎当前状态。

### 方法

#### Engine.backward() → `boolean`

在完整历史（过去 + 未来）中回退一个时刻，返回导航是否成功。

#### Engine.forward() → `boolean`

在完整历史中前进一个时刻。

#### Engine.go(offset) → `boolean`

激活距活动时刻给定偏移的时刻并显示。正数前进，负数回退。

```javascript
Engine.go(2);   // 前进两个时刻
Engine.go(-4);  // 回退四个时刻
```

#### Engine.goTo(index) → `boolean`

激活完整历史中给定索引的时刻并显示。

```javascript
Engine.goTo(0); // 回到第一个时刻
```

#### Engine.isIdle() / Engine.isPlaying() / Engine.isRendering() → `boolean`

分别返回引擎是否空闲 / 处理中 / 渲染中。

#### Engine.play(passageName [, noHistory]) → `HTMLElement`

渲染并显示给定名称的段落，可选不向历史添加新时刻。

```javascript
Engine.play('Foo');        // 渲染显示并添加历史时刻
Engine.play('Foo', true);  // 渲染显示但不添加历史时刻
```

#### Engine.restart()

让浏览器立即重载窗口，从而重启故事。

> **警告**：玩家不会被提示，所有未保存状态将丢失。一般应调用 `UI.restart()`（会先弹确认框）。

#### Engine.show() → `HTMLElement`

渲染并显示活动时刻关联的段落，不添加新历史时刻。

```javascript
Engine.show();
```

</div>
