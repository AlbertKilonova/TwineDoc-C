---
title: Removeplaylist_移除播放列表
description: 移除指定 ID 的播放列表
---

<div v-pre>

# Removeplaylist_移除播放列表

移除指定 ID 的播放列表。（`<<removeplaylist>>` 是「删歌单」——不喜欢的列表，一键删除。）

### 语法

```SugarCube
<<removeplaylist listId>>
```

### 参数

* **`listId`**：播放列表 ID。

### 示例

```SugarCube
/* 给定一个经 <<createplaylist "bgm_lacuna">> 设置的列表 */
<<removeplaylist "bgm_lacuna">>
```

</div>
