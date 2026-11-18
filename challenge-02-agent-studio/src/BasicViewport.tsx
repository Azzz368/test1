"use client";

import { useEffect, useRef, useState } from "react";
import * as THREE from "three";
import { OrbitControls } from "three/addons/controls/OrbitControls.js";

export default function BasicViewport() {
  const host = useRef<HTMLDivElement>(null);
  const [error, setError] = useState("");

  useEffect(() => {
    const container = host.current;
    if (!container) return;
    let renderer: THREE.WebGLRenderer;
    try { renderer = new THREE.WebGLRenderer({ antialias: true }); }
    catch { setError("WebGL 不可用，请检查浏览器硬件加速设置。"); return; }
    const scene = new THREE.Scene();
    scene.background = new THREE.Color("#eaedef");
    const camera = new THREE.PerspectiveCamera(45, 1, 0.1, 100);
    camera.position.set(6, 5, 6);
    const controls = new OrbitControls(camera, renderer.domElement);
    controls.update();
    const grid = new THREE.GridHelper(12, 24, "#9aa5ac", "#cbd2d7");
    scene.add(grid, new THREE.HemisphereLight(0xffffff, 0x888888, 2));
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    container.append(renderer.domElement);
    const resize = () => {
      const { width, height } = container.getBoundingClientRect();
      if (!width || !height) return;
      renderer.setSize(width, height);
      camera.aspect = width / height;
      camera.updateProjectionMatrix();
    };
    const observer = new ResizeObserver(resize);
    observer.observe(container);
    resize();
    renderer.setAnimationLoop(() => renderer.render(scene, camera));
    return () => {
      renderer.setAnimationLoop(null);
      observer.disconnect();
      controls.dispose();
      grid.geometry.dispose();
      const materials = Array.isArray(grid.material) ? grid.material : [grid.material];
      materials.forEach((material) => material.dispose());
      renderer.dispose();
      renderer.forceContextLoss();
      renderer.domElement.remove();
    };
  }, []);

  return <div className="viewport" ref={host} aria-label="空白三维场景">{error && <p role="alert">{error}</p>}</div>;
}