---
title: AudioRunner API_音频运行器API
description: 对多个轨道批量执行操作
---

<div v-pre>

# AudioRunner API_音频运行器API

音频运行器用于一次对多个轨道执行操作。（`AudioRunner` 是「批量遥控器」——一声令下，多个轨道同时响应。）

> **参见**：`SimpleAudio` API、`AudioTrack` API、`AudioList` API。

### 方法

#### `<AudioRunner>.fade(duration , toVol [, fromVol])`

开始播放选中轨道并在指定秒数内从起始音量淡到目标音量。

```javascript
someTracks.fade(6, 1, 0);
```

#### `<AudioRunner>.fadeIn(duration [, fromVol])`

开始播放并淡入到音量 1。

#### `<AudioRunner>.fadeOut(duration [, fromVol])`

开始播放并淡出到音量 0。

#### `<AudioRunner>.fadeStop()`

中断进行中的淡出。

#### `<AudioRunner>.load()`

暂停播放并强制丢弃数据、开始加载。

#### `<AudioRunner>.loop(state)` → `AudioRunner`

设置循环播放状态（默认 `false`）。

#### `<AudioRunner>.mute(state)` → `AudioRunner`

设置静音状态（默认 `false`）。

#### `<AudioRunner>.off(...args)` → `AudioRunner`

移除选中轨道的事件处理器（jQuery `.off()` 的快捷方式）。

```javascript
someTracks.off('ended.myEvents');
```

#### `<AudioRunner>.on(...args)` → `AudioRunner`

附加事件处理器（jQuery `.on()` 的快捷方式）。

```javascript
someTracks.on('ended.myEvents', function () { /* do something */ });
```

#### `<AudioRunner>.one(...args)` → `AudioRunner`

附加一次性事件处理器（jQuery `.one()` 的快捷方式）。

#### `<AudioRunner>.pause()`

暂停播放。

#### `<AudioRunner>.play()`

开始播放。

#### `<AudioRunner>.playWhenAllowed()`

开始播放；若失败则等玩家交互后自动开始。

#### `<AudioRunner>.stop()`

停止播放。

#### `<AudioRunner>.time(seconds)` → `AudioRunner`

设置选中轨道的当前时间（秒）。

#### `<AudioRunner>.unload()`

停止播放并强制丢弃数据。

#### `<AudioRunner>.volume(level)` → `AudioRunner`

设置音量（0 静音到 1 最响）。

```javascript
someTracks.volume(0.75);
```

> **警告**：SimpleAudio API 内部使用事件。为避免冲突，强烈建议附加/移除自己的处理器时指定自定义用户命名空间（如 `.myEvents`）。

</div>
