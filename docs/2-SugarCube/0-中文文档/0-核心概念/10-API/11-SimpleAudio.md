---
title: SimpleAudio API_音频API
description: 音频宏的核心音频子系统与后端
---

<div v-pre>

# SimpleAudio API_音频API

音频宏的核心音频子系统与后端。（`SimpleAudio` 是「音频总控」——轨道/组/播放列表的注册与总控。）

> **参见**：`AudioTrack` API、`AudioRunner` API、`AudioList` API。

### 音频限制

音频子系统基于 HTML Media Elements API，带有一些内置限制：

1. 不支持轨道间真正无缝过渡。
2. 移动浏览器上音量由设备硬件控制，音量调整会被忽略（静音通常正常）。
3. 移动浏览器（及最近的多数桌面浏览器）上播放必须由玩家发起，异步代码（如 `<<timed>>`）中启动的播放可能无法自动播放。
4. 轨道的加载与播放状态当前不记入活动会话或存档。

### 通用方法

#### SimpleAudio.load()

暂停*所有*当前注册轨道的播放并强制它们丢弃数据、开始加载。

#### SimpleAudio.loadWithScreen()

显示加载屏直到所有注册轨道加载完成或报错。

#### SimpleAudio.mute([state]) → **get:** `boolean` | **set:** `undefined`

获取或设置主音量静音状态（默认 `false`）。

#### SimpleAudio.muteOnHidden([state]) → **get:** `boolean` | **set:** `undefined`

获取或设置「失焦自动静音」状态（默认 `false`）——控制标签页失去/获得可见性时主音量是否自动静音/取消。

#### SimpleAudio.select(selector) → `AudioRunner` 对象

返回匹配给定选择器的轨道对应的 `AudioRunner` 实例。

```javascript
SimpleAudio.select(":paused").play();  // 播放已暂停的轨道
SimpleAudio.select(":playing").stop(); // 停止播放中的轨道
SimpleAudio.select(":all").stop();     // 停止所有轨道
SimpleAudio.select(":playing:not(:ui)").stop(); // 停止除 :ui 组外的播放中轨道
```

选择器为空格分隔的轨道 ID 和/或组 ID 列表。预定义组 ID：`:all`、`:looped`、`:muted`、`:paused`、`:playing`、`:stopped`。`:not()` 组修饰符可排除组内某些轨道。

#### SimpleAudio.stop()

停止*所有*当前注册轨道的播放。

#### SimpleAudio.unload()

停止*所有*轨道并强制丢弃数据。

#### SimpleAudio.volume([level]) → **get:** `number` | **set:** `undefined`

获取或设置主音量（默认 `1`）。

```javascript
SimpleAudio.volume(0.75); // 设主音量 75%
```

### 轨道（Tracks）

#### SimpleAudio.tracks.add(trackId, sources…)

用给定 ID 添加音频轨道。

```javascript
SimpleAudio.tracks.add("bgm_space", "media/audio/space_quest.mp3", "media/audio/space_quest.ogg");
```

#### SimpleAudio.tracks.clear() / SimpleAudio.tracks.delete(trackId)

删除所有轨道 / 删除指定 ID 的轨道。

#### SimpleAudio.tracks.get(trackId) → `AudioTrack` | `null`

返回指定 ID 的 `AudioTrack` 实例，失败则 `null`。

#### SimpleAudio.tracks.has(trackId) → `boolean`

返回指定 ID 的轨道是否存在。

### 组（Groups）

#### SimpleAudio.groups.add(groupId, trackIds…)

用给定组 ID 添加音频组。组 ID **必须**以冒号开头。

```javascript
SimpleAudio.groups.add(":ui", "ui_beep", "ui_boop", "ui_swish");
```

#### SimpleAudio.groups.clear() / SimpleAudio.groups.delete(groupId)

删除所有组 / 删除指定 ID 的组。

#### SimpleAudio.groups.get(groupId) → `Array<string>` | `null`

返回指定组 ID 的轨道 ID 数组，失败则 `null`。

#### SimpleAudio.groups.has(groupId) → `boolean`

返回指定 ID 的组是否存在。

### 播放列表（Lists）

#### SimpleAudio.lists.add(listId, sources…)

用给定列表 ID 添加播放列表。来源可为轨道 ID、描述符对象（`{ id, [own], [volume] }` 或 `{ sources, [volume] }`）或数组。

```javascript
SimpleAudio.lists.add("bgm_lacuna", "swamped",
	{ id : "heavens_a_lie", volume : 0.5 },
	{ id : "closer", own : true });
```

#### SimpleAudio.lists.clear() / SimpleAudio.lists.delete(listId)

删除所有播放列表 / 删除指定 ID 的播放列表。

#### SimpleAudio.lists.get(listId) → `AudioList` | `null`

返回指定列表 ID 的 `AudioList` 实例，失败则 `null`。

#### SimpleAudio.lists.has(listId) → `boolean`

返回指定 ID 的播放列表是否存在。

</div>
