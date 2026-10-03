---
title: Createaudiogroup_创建音频组
description: 把多个轨道收集到一个组里
---

<div v-pre>

# Createaudiogroup_创建音频组

通过 `<<track>>` 子宏把轨道（必须先经 `<<cacheaudio>>` 设置）收集到一个组里。组适合同时对多个轨道应用动作，和/或在应用动作时把组内轨道从更大的集合中排除。（`<<createaudiogroup>>` 是「拉群」——把音频轨道拉进一个群，一声令下全体响应。）

### 语法

```SugarCube
<<createaudiogroup groupId>>
	[<<track trackId>> …]
<</createaudiogroup>>
```

### 参数

#### `<<createaudiogroup>>`

* **`groupId`**：组的 ID，用于引用，**必须**以冒号开头。**注意**：预定义组 ID（`:all`、`:looped`、`:muted`、`:paused`、`:playing`、`:stopped`）和 `:not` 组修饰符不可重用/覆盖。

#### `<<track>>`

* **`trackId`**：轨道 ID。

### 示例

```SugarCube
/* 给定（最好在 StoryInit 里做） */
<<cacheaudio "ui_beep"  "media/audio/ui/beep.mp3">>
<<cacheaudio "ui_boop"  "media/audio/ui/boop.mp3">>
<<cacheaudio "ui_swish" "media/audio/ui/swish.mp3">>

/* 建组 ":ui"，含 "ui_beep"、"ui_boop"、"ui_swish" */
<<createaudiogroup ":ui">>
	<<track "ui_beep">>
	<<track "ui_boop">>
	<<track "ui_swish">>
<</createaudiogroup>>
```

</div>
