---
title: Playlist_播放列表
description: 控制播放列表的播放
---

<div v-pre>

# Playlist_播放列表

控制播放列表的播放，列表必须先经 `<<createplaylist>>` 设置。（`<<playlist>>` 是「点歌台」——播放、洗牌、切歌、循环，KTV 技能点满。）

### 语法

```SugarCube
<<playlist listId actionList>>
```

### 参数

* **`listId`**：播放列表 ID。
* **`actionList`**：要执行的动作列表。可用动作：

| 动作 | 说明 |
| --- | --- |
| `fadein` | 开始播放并淡入到 1（最响），5 秒 |
| `fadeout` | 开始播放并淡出到 0（静音），5 秒 |
| `fadeoverto 秒 级别` | 在指定秒数内淡到指定音量 |
| `fadeto 级别` | 在 5 秒内淡到指定音量 |
| `load` | 暂停并强制丢弃数据、开始加载 |
| `loop` | 结束后重复播放 |
| `mute` | 静音（等效音量 0） |
| `pause` | 暂停播放 |
| `play` | 开始播放 |
| `shuffle` | 随机洗牌 |
| `skip` | 跳到队列中下一轨 |
| `stop` | 停止播放 |
| `unload` | 停止并强制丢弃数据 |
| `unloop` | 不重复播放（默认） |
| `unmute` | 取消静音（默认） |
| `unshuffle` | 不洗牌（默认） |
| `volume 级别` | 设置音量（0 到 1） |

### 示例

```SugarCube
/* 给定设置（含 <<createplaylist "bgm_lacuna">>…<</createplaylist>>） */

<<playlist "bgm_lacuna" play>>
<<playlist "bgm_lacuna" volume 0.5 play>>
<<playlist "bgm_lacuna" unloop play>>
<<playlist "bgm_lacuna" shuffle play>>
<<playlist "bgm_lacuna" volume 0 fadein>>
<<playlist "bgm_lacuna" volume 0.75 fadeout>>
<<playlist "bgm_lacuna" volume 0.25 fadeto 0.75>>
<<playlist "bgm_lacuna" volume 0.25 fadeoverto 30 0.75>>
<<playlist "bgm_lacuna" pause>>
<<playlist "bgm_lacuna" stop>>
<<playlist "bgm_lacuna" mute>>
<<playlist "bgm_lacuna" unmute>>
<<playlist "bgm_lacuna" volume 0.40>>
<<playlist "bgm_lacuna" shuffle>>
```

</div>
