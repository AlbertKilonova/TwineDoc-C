---
title: AudioList API_音频列表API
description: 播放列表(顺序播放多轨道)的控制
---

<div v-pre>

# AudioList API_音频列表API

音频列表（播放列表）用于按顺序播放轨道——即一个接一个。（`AudioList` 是「歌单播放器」——轨道排队，按顺序放。）

> **参见**：`SimpleAudio` API、`AudioTrack` API、`AudioRunner` API。

### 方法

#### `<AudioList>.duration()` → `number`

返回播放列表总时长（秒），含流则为 `Infinity`，无元数据则 `NaN`。

#### `<AudioList>.fade(duration , toVol [, fromVol])` → `Promise`

开始播放并在指定秒数内把当前轨道从起始音量淡到目标音量。

```javascript
aList.fade(6, 1, 0); // 6 秒内从 0 淡到 1
```

#### `<AudioList>.fadeIn(duration [, fromVol])` → `Promise`

开始播放并在指定秒数内淡入到音量 1。

#### `<AudioList>.fadeOut(duration [, fromVol])` → `Promise`

开始播放并在指定秒数内淡出到音量 0。

#### `<AudioList>.fadeStop()`

中断进行中的淡出（无则无操作）。不改变音量级别。

#### `<AudioList>.isEnded()` / `isFading()` / `isPaused()` / `isPlaying()` / `isStopped()` → `boolean`

分别返回播放列表是否已结束 / 淡出中 / 已暂停 / 播放中 / 已停止。

#### `<AudioList>.load()`

暂停播放并强制丢弃现有数据、开始加载。

> **警告**：音频源在网络上时请谨慎——会强制玩家下载。

#### `<AudioList>.loop([state])` → **get:** `boolean` | **set:** `AudioList`

获取或设置循环播放状态（默认 `false`）。

#### `<AudioList>.mute([state])` → **get:** `boolean` | **set:** `AudioList`

获取或设置静音状态（默认 `false`）。

#### `<AudioList>.pause()`

暂停播放。

#### `<AudioList>.play()` → `Promise`

开始播放。

#### `<AudioList>.playWhenAllowed()`

开始播放；若失败则等玩家与文档交互后自动开始。

#### `<AudioList>.remaining()` → `number`

返回播放列表剩余时长（秒）。

#### `<AudioList>.shuffle([state])` → **get:** `boolean` | **set:** `AudioList`

获取或设置随机洗牌状态（默认 `false`）。

#### `<AudioList>.skip()`

跳到下一轨（如有）。

#### `<AudioList>.stop()`

停止播放。

#### `<AudioList>.time()` → `number`

返回播放列表当前时间（秒）。

#### `<AudioList>.unload()`

停止播放并强制丢弃现有数据。

#### `<AudioList>.volume([level])` → **get:** `number` | **set:** `AudioList`

获取或设置音量（默认 `1`，范围 0 静音到 1 最响）。

```javascript
aList.volume(0.75); // 设音量 75%
```

</div>
