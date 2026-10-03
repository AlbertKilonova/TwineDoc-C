---
title: Masteraudio_主音量
description: 控制主音频设置
---

<div v-pre>

# Masteraudio_主音量

控制主音频设置。（`<<masteraudio>>` 是「总开关」——一键静音全场的终极杀器。）

### 语法

```SugarCube
<<masteraudio actionList>>
```

### 参数

* **`actionList`**：要执行的动作列表。可用动作：

| 动作 | 说明 |
| --- | --- |
| `load` | 暂停*所有*轨道并强制丢弃数据、开始加载 |
| `mute` | 静音主音量（等效音量 0，不改音量级别） |
| `muteonhide` | 失去可见性时自动静音（切到别的标签页/最小化窗口） |
| `nomuteonhide` | 禁用失去可见性自动静音（默认） |
| `stop` | 停止*所有*轨道的播放 |
| `unload` | 停止*所有*轨道并强制丢弃数据 |
| `unmute` | 取消静音主音量（默认） |
| `volume 级别` | 设置主音量（0 静音 到 1 最响） |

### 示例

```SugarCube
<<masteraudio stop>>              /* 停止所有轨道 */
<<masteraudio volume 0.40>>       /* 主音量 40% */
<<masteraudio mute>>              /* 静音 */
<<masteraudio unmute>>            /* 取消静音 */
<<masteraudio muteonhide>>        /* 失去可见性自动静音 */
<<masteraudio nomuteonhide>>      /* 关闭自动静音 */
<<masteraudio load>>              /* 加载所有轨道 */
<<masteraudio unload>>            /* 卸载所有轨道 */
```

> **警告**：如果音频源在网络上，请谨慎使用 `load`/`unload`——会强制玩家开始下载。

</div>
