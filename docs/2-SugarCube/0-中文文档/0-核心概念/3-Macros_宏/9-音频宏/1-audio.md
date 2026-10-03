---
title: Audio_音频
description: 控制音频轨道的播放
---

<div v-pre>

# Audio_音频

控制音频轨道的播放，这些轨道必须先通过 `<<cacheaudio>>` 设置。（`<<audio>>` 是「总控台」——播放、暂停、淡入淡出、调音量，一条龙服务。）

### 语法

```SugarCube
<<audio trackIdList actionList>>
```

### 参数

* **`trackIdList`**：轨道和/或组 ID 列表，以空格分隔。
* **`actionList`**：要执行的动作列表。可用动作：

| 动作 | 说明 |
| --- | --- |
| `fadein` | 开始播放并淡入到音量 1（最响），时长 5 秒 |
| `fadeout` | 开始播放并淡出到音量 0（静音），时长 5 秒 |
| `fadeoverto 秒 级别` | 在指定秒数内淡到指定音量 |
| `fadeto 级别` | 在 5 秒内淡到指定音量 |
| `goto 段落` | 首个轨道正常结束时前往指定段落 |
| `load` | 暂停播放并强制丢弃现有数据、开始加载 |
| `loop` | 结束后重复播放 |
| `mute` | 静音（等效音量 0，但不改音量级别） |
| `pause` | 暂停播放 |
| `play` | 开始播放 |
| `stop` | 停止播放 |
| `time 秒` | 设置播放时间点（0 到最大时长） |
| `unload` | 停止播放并强制丢弃现有数据 |
| `unloop` | 不重复播放（默认） |
| `unmute` | 取消静音（默认） |
| `volume 级别` | 设置音量（0 静音 到 1 最响） |

### 组 ID

组 ID 允许同时选中多个轨道。预定义组 ID 有 `:all`、`:looped`、`:muted`、`:paused`、`:playing`、`:stopped`，自定义 ID 可通过 `<<createaudiogroup>>` 定义。`:not()` 组修饰符语法（`groupId:not(trackIdList)`）可从组中排除某些轨道。

### 示例

组 ID 用法：

```SugarCube
<<audio ":paused" play>>
<<audio ":playing" pause>>
<<audio ":playing" stop>>
<<audio ":all" stop>>
<<audio ":playing:not(:ui)" stop>>
<<audio ":all:not(:ui)" volume 0.40>>
```

轨道 ID 用法：

```SugarCube
/* 给定（最好在 StoryInit 特殊段落里做） */
<<cacheaudio "bgm_space" "media/audio/space_quest.mp3" "media/audio/space_quest.ogg">>

<<audio "bgm_space" play>>
<<audio "bgm_space" volume 0.5 play>>
<<audio "bgm_space" time 120 play>>
<<audio "bgm_space" loop play>>
<<audio "bgm_space" volume 0 fadein>>
<<audio "bgm_space" volume 0.75 fadeout>>
<<audio "bgm_space" volume 0.25 fadeto 0.75>>
<<audio "bgm_space" volume 0.25 fadeoverto 30 0.75>>
<<audio "bgm_space" play goto "Peace Moon">>
<<audio "bgm_space" pause>>
<<audio "bgm_space" stop>>
<<audio "bgm_space" mute>>
<<audio "bgm_space" unmute>>
<<audio "bgm_space" volume 0.40>>
<<audio "bgm_space" time 90>>
```

> **注意**：`<<audio>>` 宏无法影响所有权已转移给各自播放列表的轨道（即通过 `<<createplaylist>>` 的 `own` 动作设置的轨道）。
> **注意**：`Config.audio.pauseOnFadeToZero` 设置（默认 `true`）控制淡出到 0 音量（静音）的轨道是否自动暂停。
> **警告**：如果音频源在网络上，请谨慎使用 `load`/`unload`——这会强制玩家开始下载，别轻易挥霍玩家的带宽和流量。

</div>
