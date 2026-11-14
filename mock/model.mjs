import { readFile } from "node:fs/promises";

/** @type {import('../types/index.d.ts').MockModel} */
export async function mockModel(scenario) {
  if (scenario === "malformed") return '{"scenes": [';
  if (!["valid", "fenced", "invalid"].includes(scenario)) {
    throw new Error("Unknown mock scenario");
  }
  const file = scenario === "invalid" ? "invalid.json" : "valid.json";
  const response = await readFile(new URL(`../samples/${file}`, import.meta.url), "utf8");
  return scenario === "fenced" ? `\`\`\`json\n${response}\n\`\`\`` : response;
}