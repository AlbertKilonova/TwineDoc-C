---
title: Cacheaudio_缓存音频
description: 缓存一条音频轨道,供其他音频宏使用
---

<div v-pre>

# Cacheaudio_缓存音频

缓存一条音频轨道，供其他音频宏使用。（`<<cacheaudio>>` 是「音频上架」——先把音频文件登记入库，之后才能被其他音频宏点名使用。）

### 语法

```SugarCube
<<cacheaudio trackId sourceList>>
```

### 参数

* **`trackId`**：轨道 ID，用于引用该轨道。
* **`sourceList`**：以空格分隔的轨道来源列表。只需一个，但建议提供多种格式的额外来源（因为没有单一格式能被所有浏览器支持）。来源必须是：音频资源的 URL（绝对或相对）、音频段落名称、或 data URI。在极少数无法自动检测格式的情况下，可在来源前加格式说明符（语法：`formatId|`，例如 `mp3`、`ogg`、`wav`）。

### 示例

```SugarCube
/* 通过相对 URL 缓存 ID 为 "boom" 的轨道 */
<<cacheaudio "boom" "media/audio/explosion.mp3">>

/* 通过音频段落缓存 */
<<cacheaudio "boom" "explosion">>

/* 两个相对 URL 来源 */
<<cacheaudio "bgm_space" "media/audio/space_quest.mp3" "media/audio/space_quest.ogg">>

/* 带格式说明符的 URL 来源 */
<<cacheaudio "what" "mp3|http://an-audio-service.com/a-user/a-track-id">>
```

> **注意**：`StoryInit` 特殊段落通常是设置轨道的最佳位置。

</div>
