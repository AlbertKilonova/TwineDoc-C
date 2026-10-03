---
title: Createplaylist_创建播放列表
description: 把多个轨道收集到一个播放列表里
---

<div v-pre>

# Createplaylist_创建播放列表

通过 `<<track>>` 子宏把轨道（必须先经 `<<cacheaudio>>` 设置）收集到一个播放列表里。（`<<createplaylist>>` 是「歌单」——把曲目排好队，之后 `<<playlist>>` 一键播放。）

### 语法

```SugarCube
<<createplaylist listId>>
	[<<track trackId actionList>> …]
<</createplaylist>>
```

### 参数

#### `<<createplaylist>>`

* **`listId`**：播放列表 ID，用于引用。

#### `<<track>>`

* **`trackId`**：轨道 ID。
* **`actionList`**：要执行的动作列表。可用动作：
  * **`volume` *`level`***：（可选）设置轨道在列表中的基础音量，省略则用轨道当前音量。有效值 `0`（静音）到 `1`（最响）。
  * **`own`**：（可选）关键字，表示列表应创建轨道的独立副本，而非引用现有版本。自有副本完全由列表控制——`<<audio>>` 动作（即使使用组 ID）也无法影响它们。

### 示例

```SugarCube
/* 给定设置 */
<<cacheaudio "swamped"       "media/audio/Swamped.mp3">>
<<cacheaudio "heavens_a_lie" "media/audio/Heaven's_A_Lie.mp3">>
<<cacheaudio "closer"        "media/audio/Closer.mp3">>
<<cacheaudio "to_the_edge"   "media/audio/To_The_Edge.mp3">>

/* 建列表 "bgm_lacuna" */
<<createplaylist "bgm_lacuna">>
	<<track "swamped"       volume 1>>      /* 100% 音量 */
	<<track "heavens_a_lie" volume 0.5>>    /* 50% 音量 */
	<<track "closer"        own>>           /* 独立副本,当前音量 */
	<<track "to_the_edge"   volume 1 own>>  /* 独立副本,100% 音量 */
<</createplaylist>>
```

> **注意**：`StoryInit` 特殊段落通常是设置播放列表的最佳位置。

</div>
