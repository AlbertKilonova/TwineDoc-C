---
title: Waitforaudio_等待音频
description: 显示加载屏直到所有音频就绪或报错
---

<div v-pre>

# Waitforaudio_等待音频

显示加载屏，直到*所有*当前注册的音频都已加载到可播放状态，或因错误中止加载。要求轨道先经 `<<cacheaudio>>` 设置。（`<<waitforaudio>>` 是「加载屏」——音频没就绪前，先让玩家看会儿转圈圈。）

### 语法

```SugarCube
`<<waitforaudio>>`
```

### 参数

*无*

### 示例

基本用法：

```SugarCube
<<cacheaudio "a" "a_track.…">>
<<cacheaudio "b" "b_track.…">>
<<cacheaudio "c" "c_track.…">>
<<cacheaudio "d" "d_track.…">>
`<<waitforaudio>>`
```

启动时只加载部分音频：

```SugarCube
/* 先注册很快会用到的轨道 */
<<cacheaudio "a" "a_track.…">>
<<cacheaudio "b" "b_track.…">>

/* 加载当前所有已注册轨道（即 "a" 和 "b"） */
`<<waitforaudio>>`

/* 最后再注册稍后才用到的轨道 */
<<cacheaudio "c" "c_track.…">>
<<cacheaudio "d" "d_track.…">>
```

</div>
