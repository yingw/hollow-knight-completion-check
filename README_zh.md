# 空洞骑士存档完成度分析器

> 现在你可以轻松查看你错过了什么！游戏完成度百分比、每一个碎片/护符/矿石、成本、位置、游戏统计数据、猎人日志、成就、游戏完成必要条件。如果你完全迷失了方向，我还设计了一个基于你个人游戏进度的无剧透提示系统。

本项目（中文版）发布地址：

- <https://yingw.github.io/hollow-knight-completion-check>
- <https://hollow-knight-completion-check.vercel.app>

## 概述

空洞骑士游戏中没有游戏完成度列表。没有简单的方法在游戏中检查你忘记做或错过的具体事情，以获得完整的112%游戏完成度、猎人日志、成就和许多其他隐藏的东西。我创建的这个分析器应该能帮助你更容易地检查所有这些内容。

*灵感和感谢：对空洞骑士的热爱、论坛上的讨论、[KayDeeTee](https://github.com/KayDeeTee/Hollow-Knight-SaveManager)和[bloodorca](https://bloodorca.github.io/hollow)的存档编辑器、编程学习、Elderbug、ManicJamie的[HKTranslator](https://github.com/ManicJamie/HKTranslator)、[Klocus](https://klocus.pl/)的cookiealert。*

中文定制内容：

- 大部分内容都做了中文化
- 更新了项目的nodejs依赖组件到最新版
- 替换了原wiki外链为中文维基

## Steam指南

有关功能和视觉预览的更多信息，可以在工具的官方[Steam指南](https://steamcommunity.com/sharedfiles/filedetails/?id=2209910193)中找到。

## 如何使用

有两种使用这个网络工具的方法：

1. **简单方式**：只需选择你的**user*.dat**存档文件，然后见证奇迹的发生！有关在哪里找到你的空洞骑士存档文件，请参阅下面的[存档位置段落](#空洞骑士存档文件位置)。
该工具没有能力修改你的任何文件，但*始终*要做备份以防万一。

2. **高级方式**：适用于希望通过[pastebin.com](https://pastebin.com/)在论坛上以文本格式分享存档的人。逐步教程：

   * 使用bloodorca令人惊叹的[在线存档编辑器](https://bloodorca.github.io/hollow)将你的空洞骑士**user*.dat**存档文件解码为文本。

   * 解码存档后，左键点击编辑器中的文本框，然后按**CTRL+A**（或右键点击 -> 全选）。只应选中文本框内的文本（解码后的存档文件内容）。
  
   * 按**CTRL+C**（或右键点击 -> 复制）复制文本框内的全部内容。

   * 转到[工具网页](https://yingw.github.io/hollow-knight-completion-check/)，按**CTRL+V**（或右键点击 -> 粘贴）将复制的文本粘贴到文本框中。

   * 点击**"分析文本"**。如果复制粘贴的数据正确，你将看到你的完成度百分比、游戏时间以及你已完成（✅）或尚未完成（❌）的所有事情的完整列表。

## 空洞骑士存档文件位置

### Steam云

如果你为空洞骑士启用了Steam云存储，你可以[直接从这里下载你的存档](https://store.steampowered.com/account/remotestorageapp/?appid=367520)。
如果你想在没有访问PC的情况下（例如在手机/平板上）检查你的存档进度，或者如果你不想手动搜索存档文件，可以使用此方法。

### Windows

`%USERPROFILE%\AppData\LocalLow\Team Cherry\Hollow Knight\`
**提示**：将此代码复制并粘贴到Windows文件资源管理器窗口的文件夹路径栏中，然后按Enter键立即前往那里（Windows 10）。你也可以将其粘贴到运行窗口（Windows键 + R）中。
*示例路径：C:\Users\你的用户名\AppData\LocalLow\Team Cherry\Hollow Knight*

### Linux

`~/.config/unity3d/Team Cherry/Hollow Knight/`

### macOS

`~/Library/Application Support/unity.Team Cherry.Hollow Knight/`

### 文件名

**user*.dat** — 主存档文件。其中*是1到4之间的数字，表示游戏中的相应存档槽。
**user*.dat.bak1** — 自动备份存档文件。
**user*_\[游戏版本号\].dat** — 主存档文件的副本。在任何游戏更新后作为备份。

## 离线或在线（网络）使用 - 你的选择

我的工具使用客户端Javascript，因此它可以在任何有现代浏览器的设备上运行。即使没有互联网连接。你可以在本地PC上使用它，在移动设备上或在任何你想要的操作系统（Windows、MacOS、Linux）上使用它，无需互联网连接 - 所有操作都在你的设备和CPU上完成。要做到这一点，你可以直接从GitHub下载源代码[直接从GitHub](https://github.com/ReznoRMichael/hollow-knight-completion-check/archive/master.zip)，进入`/docs`文件夹并启动`index.html`。程序运行只需要`/docs`文件夹内的内容。或者前往工具的网页，然后像保存普通程序一样选择*页面 -> 另存为...*。
在Android上本地运行工具需要在浏览器中手动输入地址`file:///storage/emulated/0`，然后从那里指向你保存工具的文件夹中的`index.html`文件。然后你可以将其保存在书签中，以便后续轻松使用。

## 支持和反馈

所有反馈/问题/错误数据都很受欢迎。请随时在工具的[Steam讨论](https://steamcommunity.com/app/367520/discussions/0/2915472677711090083/)线程或[Steam指南](https://steamcommunity.com/sharedfiles/filedetails/?id=2209910193)下写下它们。

## 技术栈

* JavaScript（编译到 ES 6 / ES 2015）
* [ESLint](https://eslint.org/)
* [AES-JS](https://github.com/ricmoo/aes-js)
* [Webpack](https://github.com/webpack/webpack)
* [Babel](https://github.com/babel/babel)
* [core-js](https://github.com/zloirock/core-js)
* [regenerator-runtime](https://github.com/facebook/regenerator/tree/master/packages/regenerator-runtime)
* [Simple Icons](https://github.com/simple-icons/simple-icons)
* [Fontello](https://github.com/fontello/fontello)
* [Google Fonts](https://fonts.google.com/)
* HTML5/CSS/JSON

## 联系方式

- 由 [ReznoRMichael](https://github.com/ReznoRMichael) 编写和创建
- 由 [Yingw](https://github.com/yingw) 维护翻译成中文版
