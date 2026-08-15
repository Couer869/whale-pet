# 🐋 dsh-whale-pet — 小鲸桌宠

[![DSH](https://img.shields.io/badge/DSH-%3E%3D0.1.0--rc.3%20%3C0.2.0-5b8def)](https://github.com/deepseek-ai/deepseek-harness)
[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](./LICENSE)

DeepSeek 风格的**像素虎鲸桌面宠物**，自带**按住说话转文字**的语音输入（浏览器 Web Speech API）——
常驻在 DSH Web 页面上的小鲸鱼：点击/按住说话、拖动移动、一键开启/关闭、可调大小。

## ✨ 特性

- 🐋 **像素虎鲸造型**：18×13 像素网格手绘（黑身、白眼斑、白腹、灰鞍斑、分叉尾、胸鳍），`crispEdges` 锐利边缘，与 DeepSeek logo 同风格
- 🎙️ **语音输入**：浏览器内置 Web Speech API（Edge=Azure、Chrome=Google），零服务端、零 API Key、零模型下载
- 🎛️ **自定义触发方式**：长按说话（默认）或单击切换（设置面板切换）
- 📏 **自定义大小**：70–190px 步进调节
- 🖐️ **拖拽移动**：位置自动记忆（localStorage）
- 💤 **一键开关**：✕ 关闭后缩为休眠小鲸按钮（同样可拖拽），单击重新开启
- 🗣️ **识别结果直接进输入框**：识别文字写入 composer（可编辑），或一键发送
- 🌐 **多语言**：中文/粤语/繁体/英/日/韩/法/德/西/俄
- 📦 **常驻 bundle**：安装进 DSH profile 后每次启动自动加载

## 📦 安装

```sh
dsh plugin --profile web add "github:Couer869/dsh-whale-pet"
dsh web
```

或从本地安装：

```sh
dsh plugin --profile web add file:/path/to/dsh-whale-pet
dsh web
```

> 安装后**重启 `dsh --profile web`** 生效。小鲸自动出现在页面右下角。

## 🎮 使用

| 操作 | 行为 |
|---|---|
| **按住小鲸**（长按模式） | 开始聆听 → 松手转文字 |
| **单击小鲸**（单击模式） | 开始/停止识别 |
| **单击**（长按模式） | 打开/收起设置面板 |
| **双击**（单击模式） | 打开/收起设置面板 |
| **拖动小鲸** | 移动位置（自动记忆） |
| **✕** | 关闭桌宠 → 缩为休眠小鲸按钮 |
| **点击休眠小鲸** | 重新开启 |
| **拖动休眠小鲸** | 移动休眠按钮位置 |

识别完成后，气泡内出现 **输入框 / 发送 / 清空** 按钮：
- **输入框**：文字写入 composer 草稿（默认追加），可编辑后发送
- **发送**：直接提交给 agent
- 开启「松手自动发送」后识别结束即自动发送

### 设置面板（单击小鲸）

| 项 | 说明 |
|---|---|
| 触发方式 | 长按说话 / 单击切换 |
| 桌宠大小 | 70–190px 步进 ±10 |
| 识别语言 | 10 种语言下拉 |
| 松手自动发送 | 开关 |
| 桌宠动画 | 开关（喷水/眨眼/鳍摆/游动） |

## 🔧 开发

```sh
# 源码结构
lib/index.js    # host 半（空 apply，仅让插件树发现 client bundle）
lib/client.js   # client 半（__ModuleLoader__.load 注册，全部 UI/逻辑）
cordis.patch.yml # profile bundle patch
package.json    # dsh.client 契约 + dsh.bundle.patch 声明
```

修改 `lib/client.js` 后重新安装：

```sh
dsh plugin --profile web rm dsh-whale-pet
dsh plugin --profile web add file:/path/to/dsh-whale-pet
dsh web
```

## 🧩 工作原理

- 通过 `dsh.client` 契约声明 + `dsh.bundle.patch` 挂载，作为 out-of-tree client bundle 被 DSH 的 client-modules 扫描器发现
- `ctx.slots` 注册三个槽位：`shell.overlay`（浮窗）、`conversation.input.dock`（隐形桥，捕获 `inputActions` 写回 composer）、`settings.general.item`（设置开关行）
- CSS 经 `ctx.effect` 注入 `<style>`，偏好存 localStorage（重启保留）
- 语音识别用 Web Speech API，`continuous + interimResults`，含手动停止/自动续听/失败提示自动消失等状态机

## 📄 License

[MIT](./LICENSE)
