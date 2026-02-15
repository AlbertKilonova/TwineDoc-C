# <<silent>>

### <font style="color:#ffffff;background-color:#601BDE;">🔗</font><font style="color:#ffffff;background-color:#601BDE;"><<silent>> … <</silent>></font>
会把里面生成的所有输出都扔掉，除了错误（错误会显示出来）。一般来说，主要是用来方便地格式化宏块，让它们更易读好用，同时保证不会有任何输出，比如空格什么的。

**历史：**

+ <font style="color:#df2a3f;">v2.37.3</font>：引入。

**参数：**无。

### 示例：
```plain
→ 基础
<<silent>>

	You'll never see any of this!

<</silent>>

→ 隐藏倒计时计时器的内部实现细节
<<set $seconds to 10>>\
Countdown: <span id="countdown">$seconds seconds remaining</span>!\
<<silent>>
	<<repeat 1s>>
		<<set $seconds to $seconds - 1>>
		<<if $seconds gt 0>>
			<<replace "#countdown">>$seconds seconds remaining<</replace>>
		<<else>>
			<<replace "#countdown">>Too Late<</replace>>
/* 在这里实现一些有用的功能 */
			<<stop>>
		<</if>>
	<</repeat>>
<</silent>>
```



> 更新: 2025-04-24 18:05:42  
> 原文: <https://www.yuque.com/yuqueyonghuspxc5t/zrgfc7/vgykaez9yecsoo6x>