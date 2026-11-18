"use client";

import { useState } from "react";
import { Background, Controls, ReactFlow, addEdge, useEdgesState, useNodesState, type Node, type Edge } from "@xyflow/react";
import { Plus } from "lucide-react";

const initialNodes: Node[] = [
  { id: "brief", position: { x: 30, y: 120 }, data: { label: "Brief / 产品桌面短片" }, type: "input" },
  { id: "scene", position: { x: 285, y: 120 }, data: { label: "Scene / 白模摄影棚" } },
  { id: "output", position: { x: 540, y: 120 }, data: { label: "Output / 镜头输出" }, type: "output" },
];
const initialEdges: Edge[] = [
  { id: "brief-scene", source: "brief", target: "scene" },
  { id: "scene-output", source: "scene", target: "output" },
];

export default function Workflow() {
  const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes);
  const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);
  const [selected, setSelected] = useState("brief");
  const active = nodes.find((node) => node.id === selected);
  return <div className="workflow">
    <div className="workflow-bar">
      <span className="muted">WORKFLOW / 临时草稿</span>
      <button onClick={() => {
        const id = crypto.randomUUID();
        setNodes((current) => [...current, { id, position: { x: 280, y: 260 }, data: { label: "Reference / 待绑定" } }]);
        setSelected(id);
      }}><Plus size={14} />参考节点</button>
      {active && <input aria-label="节点文本" value={String(active.data.label)} onChange={(event) => {
        const label = event.target.value;
        setNodes((current) => current.map((node) => node.id === selected ? { ...node, data: { ...node.data, label } } : node));
      }} />}
    </div>
    <ReactFlow nodes={nodes} edges={edges} onNodesChange={onNodesChange} onEdgesChange={onEdgesChange}
      onConnect={(connection) => setEdges((current) => addEdge(connection, current))}
      onNodeClick={(_, node) => setSelected(node.id)} fitView minZoom={0.3} maxZoom={2}>
      <Background gap={24} size={1} /><Controls showInteractive={false} />
    </ReactFlow>
  </div>;
}