---
title: Time_时间
description: 返回当前段落渲染以来经过的毫秒数
---

<div v-pre>

# Time_时间

返回当前段落渲染到页面以来经过的毫秒数。（`time()` 是「秒表」——段落一亮就开始计时。）

### 语法

```SugarCube
time()
```

### 参数

*无*

### 返回值

段落渲染以来的毫秒数（*整数* `number`）。

### 异常

*无*

### 示例

```SugarCube
/* 根据时间变化的链接 */
In the darkness, something wicked this way comes.  Quickly!  Do you \
<<link "try to run back into the light">>
	<<if time() lt 10000>>
		/* 玩家 10 秒内点了链接,成功逃脱 */
		<<goto "Well lit passageway">>
	`<<else>>`
		/* 否则被 grue 吃掉 */
		<<goto "Eaten by a grue">>
	<</if>>
<</link>> \
or [[stand your ground|Eaten by a grue]]?
```

</div>
