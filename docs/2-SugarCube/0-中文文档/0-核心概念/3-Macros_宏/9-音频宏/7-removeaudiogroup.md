---
title: Removeaudiogroup_移除音频组
description: 移除指定 ID 的音频组
---

<div v-pre>

# Removeaudiogroup_移除音频组

移除指定 ID 的音频组。（`<<removeaudiogroup>>` 是「解散群」——群聊结束，一拍两散。）

### 语法

```SugarCube
<<removeaudiogroup groupId>>
```

### 参数

* **`groupId`**：组的 ID。

### 示例

```SugarCube
/* 给定一个经 <<createaudiogroup ":ui">> 设置的组 */
<<removeaudiogroup ":ui">>
```

> **注意**：不能移除预定义组 ID（`:all`、`:looped`、`:muted`、`:paused`、`:playing`、`:stopped`）或 `:not` 组修饰符。

</div>
