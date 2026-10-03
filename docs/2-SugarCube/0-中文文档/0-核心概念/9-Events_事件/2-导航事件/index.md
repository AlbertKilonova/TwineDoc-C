---
title: Navigation Order_导航事件顺序
description: 导航事件与特殊段落的处理顺序
---

<div v-pre>

# Navigation Order_导航事件顺序

导航事件允许在段落导航的特定时点执行 JavaScript 代码。按处理顺序：

1. **段落初始化**——发生在修改状态历史之前。
   * `:passageinit` 事件。
2. **段落开始**——发生在渲染传入段落之前。
   * `PassageReady` 特殊段落 → `:passagestart` 事件 → `PassageHeader` 特殊段落。
3. **段落渲染**——发生在渲染传入段落之后。
   * `PassageFooter` 特殊段落 → `:passagerender` 事件。
4. **段落显示**——发生在显示（输出）传入段落之后。
   * `PassageDone` 特殊段落 → `:passagedisplay` 事件。
5. **UI 更新**——发生在段落导航结束之前。
   * `:uiupdate` 事件 → `StoryDisplayTitle`、`StoryBanner`、`StorySubtitle`、`StoryAuthor`、`StoryCaption`、`StoryMenu` 特殊段落。
6. **段落结束**——发生在段落导航结束时。
   * `:passageend` 事件。

</div>
