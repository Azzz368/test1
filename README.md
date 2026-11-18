# Mindverse Development Tasks

Two independent tasks based on the Mindverse canvas workflow. Choose one. Each directory provides a minimal starter, requirements, and visual guidelines, not a completed implementation.

## 01. Multi-Agent Runtime

Build a runtime for coordinated agents working on a shared canvas. Focus on reliable execution, persistent context, retrieval, user intervention, tool control, and safety boundaries.

The starter includes an editable canvas, local snapshots, and a single-agent mock. Multi-agent orchestration, long-term memory, and RAG are not implemented.

[Requirements and setup](challenge-01-multi-agent/README.md)

## 02. Agent-Controlled Virtual Studio

Build a Three.js virtual studio that uses conversation to create blockout scenes, manage assets, control cameras, and export images or video. Define how scene outputs and asset references connect to a rendering service.

The starter includes an empty 3D grid, a basic node canvas, and a text input. Scene editing, agent execution, asset management, camera tools, persistence, and export are not implemented.

[Requirements and setup](challenge-02-agent-studio/README.md)

## Getting Started

Requires Node.js 22.18 or later and npm. Install dependencies inside the selected directory, not at the repository root.

```sh
git clone https://github.com/Azzz368/test1.git
cd test1/challenge-01-multi-agent
# For the virtual studio, use challenge-02-agent-studio instead.
npm install
npm run dev
```

Default URLs: runtime at `http://localhost:3061`, studio at `http://localhost:3062`.

Both projects support `npm run build`. For type checking, use `npm run typecheck` in the runtime project or `npm run check` in the studio project. The runtime starter also provides `npm test`.

## Scope and Deliverables

Each project is self-contained. Its `docs/` directory contains architecture notes and the original light and dark theme guidelines. Production authentication, billing, model routes, cloud storage, and user data are excluded.

Submit only the selected project: source code, a dependency lockfile, setup instructions, relevant tests, and an example project. Document design decisions, known limitations, actual time spent, and any AI tools or third-party code used. Plan for 20-30 hours and prioritize a working end-to-end implementation. Detailed acceptance criteria are in each project directory.

Paid APIs are not required. Clearly distinguish simulated behavior from live integrations. Keep credentials on the server. Do not execute arbitrary user- or model-generated code or shell commands, or commit credentials, user data, dependencies, or build output.

The starters were checked with an existing dependency installation; a clean-install verification is still required. Generate and include a lockfile after installation.

---

## 繁體中文

本儲存庫包含兩項以 Mindverse 畫布工作流程為基礎的開發任務，擇一完成。每個目錄提供最小起始專案、需求與視覺規範，不包含完整功能實作。

### 01. 多智能體執行系統

建立讓多個智能體在共用畫布上協作的執行系統，重點包括執行可靠性、持久上下文、資料檢索、使用者介入、工具控制與安全邊界。

起始專案包含可編輯畫布、本機快照與單一智能體模擬。多智能體調度、長期記憶與 RAG 尚未實作。

[需求與啟動說明](challenge-01-multi-agent/README.md)

### 02. 智能體虛擬攝影棚

以 Three.js 建立虛擬攝影棚，透過對話搭建白模場景、管理資產、控制攝影機，並匯出圖片或影片。設計場景輸出與資產參考如何銜接渲染服務。

起始專案僅包含空白 3D 網格、基礎節點畫布與文字輸入框。場景編輯、智能體執行、資產管理、攝影機工具、持久化與匯出尚未實作。

[需求與啟動說明](challenge-02-agent-studio/README.md)

### 啟動方式

需要 Node.js 22.18 或更新版本，以及 npm。請在所選專案目錄內安裝相依套件，不要在儲存庫根目錄執行安裝。

```sh
git clone https://github.com/Azzz368/test1.git
cd test1/challenge-01-multi-agent
# 虛擬攝影棚請改用 challenge-02-agent-studio。
npm install
npm run dev
```

預設網址：執行系統為 `http://localhost:3061`，攝影棚為 `http://localhost:3062`。

兩個專案皆可執行 `npm run build`。型別檢查分別使用執行系統的 `npm run typecheck` 與攝影棚的 `npm run check`。執行系統另提供 `npm test`。

### 範圍與交付

兩個專案皆可獨立執行。各自的 `docs/` 目錄包含架構說明與原始亮暗主題規範，不包含正式環境的身分驗證、計費、模型路由、雲端儲存或使用者資料。

僅提交所選專案，包含原始碼、相依套件鎖定檔、啟動說明、必要測試與範例專案。說明設計取捨、已知限制、實際投入時間，以及使用的 AI 工具或第三方程式碼。建議投入 20 至 30 小時，優先完成可運作的完整流程。詳細驗收標準見各專案目錄。

不強制使用付費 API。請明確區分模擬行為與真實服務。憑證僅能保留在伺服器端，不得執行使用者或模型產生的任意程式碼或 shell 指令，也不得提交憑證、使用者資料、相依套件目錄或建置產物。

起始專案已使用既有相依套件進行檢查，尚須驗證全新安裝。請在安裝後產生並提交鎖定檔。