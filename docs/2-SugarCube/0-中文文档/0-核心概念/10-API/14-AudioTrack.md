---
title: AudioTrack API_音频轨道API
description: 单个音频轨道的封装与统一接口
---

<div v-pre>

# AudioTrack API_音频轨道API

音频轨道封装音频资源并提供统一接口。（`AudioTrack` 是「单曲播放器」——一条轨道，全程掌控。）

> **参见**：`SimpleAudio` API、`AudioRunner` API、`AudioList` API。

### 方法

#### `<AudioTrack>.clone()` → `AudioTrack`

返回轨道的新独立副本。

```javascript
var trackCopy = aTrack.clone();
```

#### `<AudioTrack>.duration()` → `number`

返回轨道总时长（秒），流则 `Infinity`，无元数据则 `NaN`。

#### `<AudioTrack>.fade(duration , toVol [, fromVol])` → `Promise`

开始播放并在指定秒数内从起始音量淡到目标音量。

```javascript
aTrack.fade(6, 1, 0);
```

#### `<AudioTrack>.fadeIn(duration [, fromVol])` → `Promise`

开始播放并淡入到音量 1。

#### `<AudioTrack>.fadeOut(duration [, fromVol])` → `Promise`

开始播放并淡出到音量 0。

#### `<AudioTrack>.fadeStop()`

中断进行中的淡出。

#### 状态查询方法（均返回 `boolean`）

| 方法 | 说明 |
| --- | --- |
| `hasData()` | 是否已加载足够数据可无中断播放到结束 |
| `hasMetadata()` | 是否至少已加载元数据 |
| `hasNoData()` | 是否尚未加载任何数据 |
| `hasSomeData()` | 是否至少已加载部分数据 |
| `hasSource()` | 是否注册了任何有效来源 |
| `isEnded()` | 播放是否已结束 |
| `isFading()` | 是否正在淡出 |
| `isFailed()` | 是否发生了错误 |
| `isLoading()` | 是否正在加载数据 |
| `isPaused()` | 播放是否已暂停 |
| `isPlaying()` | 是否正在播放 |
| `isSeeking()` | 是否正在 seek |
| `isStopped()` | 播放是否已停止 |
| `isUnavailable()` | 当前是否不可播放 |
| `isUnloaded()` | 来源是否已卸载 |

> **提示**：`hasData()` 通常比 `hasSomeData()` 更有用。

#### `<AudioTrack>.load()`

暂停播放并强制丢弃数据、开始加载。

#### `<AudioTrack>.loop([state])` → **get:** `boolean` | **set:** `AudioTrack`

获取或设置循环播放状态（默认 `false`）。

#### `<AudioTrack>.mute([state])` → **get:** `boolean` | **set:** `AudioTrack`

获取或设置静音状态（默认 `false`）。

#### `<AudioTrack>.off(...args)` / `on(...args)` / `one(...args)` → `AudioTrack`

移除 / 附加 / 一次性附加事件处理器（jQuery `.off()`/`.on()`/`.one()` 的快捷方式）。

```javascript
aTrack.on('ended.myEvents', function () { /* do something */ });
aTrack.off('ended.myEvents');
```

#### `<AudioTrack>.pause()`

暂停播放。

#### `<AudioTrack>.play()` → `Promise`

开始播放。

#### `<AudioTrack>.playWhenAllowed()`

开始播放；若失败则等玩家交互后自动开始。

#### `<AudioTrack>.remaining()` → `number`

返回轨道剩余时长（秒）。

#### `<AudioTrack>.stop()`

停止播放。

#### `<AudioTrack>.time([seconds])` → **get:** `number` | **set:** `AudioTrack`

获取或设置当前时间（秒）。

```javascript
aTrack.time(30);
aTrack.time(aTrack.duration() - 30);
```

#### `<AudioTrack>.unload()`

停止播放并强制丢弃数据。

#### `<AudioTrack>.volume([level])` → **get:** `number` | **set:** `AudioTrack`

获取或设置音量（默认 `1`，范围 0 到 1）。

```javascript
aTrack.volume(0.75);
```

</div>
