---
title: Save API_存档API
description: 存档的创建、加载、删除与导入导出
---

<div v-pre>

# Save API_存档API

提供存档的创建、加载、删除与导入导出。（`Save` 是「存档管家」——读档存档、导入导出都归它。）

> **注意**：建议先熟悉「存档相关配置设置」。
> **警告**：浏览器存档（自动与槽位）与隐私浏览模式基本不兼容。

### 常量

#### Save.Type

存档类型伪枚举：

| 类型 | 说明 |
| --- | --- |
| `Save.Type.Auto` | 浏览器自动存档 |
| `Save.Type.Base64` | Base64 字符串存档 |
| `Save.Type.Disk` | 磁盘存档 |
| `Save.Type.Slot` | 浏览器槽位存档 |

### 浏览器存档（通用）

#### Save.browser.size → *整数* `number`

现有浏览器存档（自动 + 槽位）总数。

#### Save.browser.clear()

删除所有浏览器存档。

#### Save.browser.continue() → `Promise`

加载最近的浏览器存档（自动或槽位）。

```javascript
if (Save.browser.size > 0) {
	Save.browser.continue()
		.then(() => Engine.show())
		.catch(error => { console.error(error); UI.alert(error); });
}
```

#### Save.browser.isEnabled() → `boolean`

返回是否有任一浏览器存档已启用。

#### Save.browser.newest() → `Object` | `null`

返回最近存档的描述符对象，无则 `null`。

### 自动存档（Save.browser.auto）

- `Save.browser.auto.size` → 自动存档总数
- `Save.browser.auto.clear()` → 删除所有自动存档
- `Save.browser.auto.delete(index)` → 删除指定索引的自动存档
- `Save.browser.auto.entries()` → 所有自动存档详情的数组
- `Save.browser.auto.get(index)` → 指定索引自动存档的描述符
- `Save.browser.auto.has(index)` → 指定索引自动存档是否存在
- `Save.browser.auto.isEnabled()` → 自动存档是否启用
- `Save.browser.auto.load(index)` → `Promise` 加载指定索引自动存档
- `Save.browser.auto.save([desc [, metadata]])` → 保存自动存档（满则替换最旧的）

### 槽位存档（Save.browser.slot）

- `Save.browser.slot.size` / `clear()` / `delete(index)` / `entries()` / `get(index)` / `has(index)` / `isEnabled()`
- `Save.browser.slot.load(index)` → `Promise` 加载指定索引槽位存档
- `Save.browser.slot.save(index, [desc [, metadata]])` → 保存到指定槽位

### 磁盘存档（Save.disk）

#### Save.disk.export(filename)

把所有浏览器存档打包导出到磁盘（可通过 `Save.disk.import()` 恢复）。

```javascript
Save.disk.export('The 6th Fantasy');
```

#### Save.disk.import(event) → `Promise`

从磁盘导入存档包（`<input type="file">` 的 `change` 事件处理器中调用）。

> **警告**：恢复时所有现有浏览器存档会被删除。

#### Save.disk.load(event) → `Promise`

从磁盘加载存档（`<input type="file">` 的 `change` 事件处理器中调用）。

#### Save.disk.save(filename [, metadata])

把当前故事状态保存到磁盘（可通过 `Save.disk.load()` 恢复）。

### Base64 存档（Save.base64）

- `Save.base64.export()` → `string` 导出所有浏览器存档为 Base64 字符串
- `Save.base64.import(bundle)` → `Promise` 导入 Base64 存档包
- `Save.base64.load(save)` → `Promise` 加载 Base64 存档字符串
- `Save.base64.save([metadata])` → `string` 保存当前状态为 Base64 字符串

### 存档事件处理器

#### Save.onLoad

- `Save.onLoad.size` → 已注册 on-load 处理器数
- `Save.onLoad.add(handler)` → 在存档加载前处理（如升级旧存档数据）
- `Save.onLoad.clear()` / `Save.onLoad.delete(handler)`

#### Save.onSave

- `Save.onSave.size` → 已注册 on-save 处理器数
- `Save.onSave.add(handler)` → 在存档保存前处理
- `Save.onSave.clear()` / `Save.onSave.delete(handler)`

### 已废弃 API

`Save.clear()`、`Save.get()`、`Save.ok()`、`Save.autosave.*`、`Save.slots.*`、`Save.import()`、`Save.export()` 等旧接口均已废弃，请使用上述 `Save.browser.*` / `Save.disk.*` / `Save.base64.*` 替代。

</div>
