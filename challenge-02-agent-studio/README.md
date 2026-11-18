# Agent Studio

Choose one of the two projects. Build a conversation-driven virtual studio using Three.js and an Agent, connecting scene edits to visible results.

## Setup

Requires Node.js >=22.18 and npm. From the repository root:
```sh
cd challenge-02-agent-studio
npm install
npm run dev
```
Open http://localhost:3062. Type check: `npm run check`. Production build: `npm run build`.

## Provided Starter

- Next.js, React and TypeScript shell with light/dark themes.
- Empty Three.js grid with orbit controls; basic xyflow nodes and connections.
- Message input displaying local text only, with no Agent execution or scene interaction.

No scene props, asset management, persistence, export, model integration or tests are provided. The grid and viewing controls are not studio features. See [Architecture](docs/ARCHITECTURE.md) for boundaries and sources.

## Work to Implement

1. **Conversation and scene:** let an Agent create and modify a Three.js whitebox scene from dialogue, including follow-up requests and clear feedback for invalid operations.
2. **Asset identity:** reuse identifiable objects across edits, with basic position, rotation and scale controls.
3. **Cameras:** support multiple shots and conversational framing changes; camera-only requests must leave objects unchanged.
4. **Output:** export images and a short video or numbered image sequence, traceable to the scene, assets and cameras used.
5. **Render linkage:** connect whitebox output and asset references to a downstream image/video generation service; explain continuity constraints, checks and limitations across shots. A simulated service is acceptable; paid APIs are optional.
6. **Local workflow:** connect the basic canvas to at least one working data path; save and reopen projects locally while preserving references and protecting existing content from invalid edits.

Choose the architecture, data structures, Agent framework, protocols, storage and tests. Open-source libraries and replaceable offline model adapters are acceptable. Distinguish working functionality from simulation; prerecorded logs or a few fixed commands do not replace Agent execution.

## Delivery and Boundaries

Provide source, dependency lockfile, setup instructions, necessary tests, an example project and a brief demonstration. Document design decisions, limitations, incomplete work and simulated services.

Complex materials, mesh editing, rigging, physics, custom models, authentication, billing and production deployment are out of scope. Never execute arbitrary user/model-generated code or shell commands; keep real model keys server-side. Do not include secrets, personal data, dependencies or build caches.

---

## 繁體中文

### Agent 虛擬攝影棚

兩個專案擇一完成。使用 Three.js 與 Agent 建立對話驅動的虛擬攝影棚，讓場景修改產生可見結果。

## 啟動

需要 Node.js >=22.18 與 npm。在儲存庫根目錄執行：
```sh
cd challenge-02-agent-studio
npm install
npm run dev
```
開啟 http://localhost:3062。型別檢查：`npm run check`。正式建置：`npm run build`。

## 已提供的基礎

- Next.js、React 與 TypeScript 外殼，含亮暗主題。
- 空白 Three.js 網格與環繞觀察控制；基本 xyflow 節點與連線。
- 訊息輸入僅在本機顯示文字，沒有 Agent 執行或場景互動。

未提供場景物件、資產管理、持久化、匯出、模型整合或測試。網格與觀察控制不屬於攝影棚功能。來源與邊界見[架構說明](docs/ARCHITECTURE.md)。

## 需實作的內容

1. **對話與場景：** Agent 能依對話建立及修改 Three.js 白模場景，支援追加要求，並清楚回饋無效操作。
2. **資產身分：** 編輯時重用可識別的物件，支援基本位置、旋轉與縮放控制。
3. **攝影機：** 支援多個鏡頭與對話構圖調整；僅修改機位的要求不得改動物件。
4. **輸出：** 匯出圖片，以及短影片或編號圖片序列，並可追溯使用的場景、資產與攝影機。
5. **渲染銜接：** 將白模輸出與資產參考連接至後續圖片或影片生成服務；說明跨鏡頭連貫性的約束、檢查與限制。可使用模擬服務，不強制付費 API。
6. **本機流程：** 將基本畫布連接至少一條實際資料路徑；支援在本機儲存及重新開啟專案，保留參照，並避免無效編輯破壞既有內容。

架構、資料結構、Agent 框架、協定、儲存與測試自行選擇。可使用開源函式庫與可替換的離線模型介接。須區分實際功能與模擬；預錄紀錄或少數固定指令不能取代 Agent 執行。

## 交付與邊界

提供原始碼、相依套件鎖定檔、啟動說明、必要測試、範例專案與簡短示範。說明設計取捨、限制、未完成項目與模擬服務。

複雜材質、網格編輯、骨架、物理、自建模型、登入、付款與正式部署不在範圍內。不得執行使用者或模型產生的任意程式碼或 shell 指令；真實模型金鑰僅存於伺服器端。勿包含機密、個人資料、相依套件目錄或建置快取。