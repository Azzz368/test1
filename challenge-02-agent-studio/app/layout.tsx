import type { Metadata } from "next";
import "@xyflow/react/dist/style.css";
import "./globals.css";

export const metadata: Metadata = {
  title: "Agent Studio | Hiring Challenge 02",
  description: "Independent whitebox film studio starter",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="zh-CN"><body>{children}</body></html>;
}