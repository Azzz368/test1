# Starter Architecture

Standalone Next.js / React / TypeScript project; no Mindverse production services or configuration are required.

## Provided Files

- [app/page.tsx](../app/page.tsx): page entry.
- [src/Starter.tsx](../src/Starter.tsx): layout, themes, tabs and local message display; no Agent execution.
- [src/BasicViewport.tsx](../src/BasicViewport.tsx): empty Three.js grid, viewing camera, orbit controls and resource cleanup; no scene props.
- [src/Workflow.tsx](../src/Workflow.tsx): basic xyflow nodes and connections; no execution or persistence.
- [app/globals.css](../app/globals.css): interface styles.

## Sources and Implementation Boundary

The canvas technology and text, scene and output node concepts draw on the parent Mindverse project, not its complete production editor. Theme references also originate there; the parent documentation evolves independently and is not guaranteed to match local references verbatim.
No production Agent, model routing, accounts, billing, asset library, storage, export or tests are included. Messages do not control the viewport; messages and canvas edits are lost on refresh. Scene editing, asset identity, cameras, render linkage, local saving and tests remain to be implemented; no architecture, schema or protocol is prescribed.

# 基礎架構

獨立的 Next.js / React / TypeScript 專案；不需要 Mindverse 正式服務或設定。

## 已提供的檔案

- [app/page.tsx](../app/page.tsx)：頁面入口。
- [src/Starter.tsx](../src/Starter.tsx)：版面、主題、分頁與本機訊息顯示；沒有 Agent 執行。
- [src/BasicViewport.tsx](../src/BasicViewport.tsx)：空白 Three.js 網格、觀察相機、環繞控制與資源清理；沒有場景物件。
- [src/Workflow.tsx](../src/Workflow.tsx)：基本 xyflow 節點與連線；沒有執行或持久化。
- [app/globals.css](../app/globals.css)：介面樣式。

## 來源與實作邊界

畫布技術與文字、場景、輸出節點概念源自上層 Mindverse 專案，並非完整正式編輯器。主題參考亦源自該專案；上層文件持續獨立修訂，不保證與本機參考逐字相同。
未提供正式 Agent、模型路由、帳戶、付款、資產庫、儲存、匯出或測試。訊息不會控制場景；重新整理會遺失訊息與畫布修改。場景編輯、資產身分、攝影機、渲染銜接、本機儲存與測試均待實作，不指定架構、資料結構或協定。