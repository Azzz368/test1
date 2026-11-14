import assert from "node:assert/strict";
import test from "node:test";
import { mockModel } from "../mock/model.mjs";
import { validateStoryboard } from "../src/validateStoryboard.mjs";

test("the starter exposes the candidate entry point", () => {
  assert.equal(typeof validateStoryboard, "function");
});

test("the valid sample and mock are deterministic and offline", async () => {
  const response = await mockModel("valid");
  assert.equal(response, await mockModel("valid"));
  assert.equal(JSON.parse(response).scenes.length, 2);
  assert.equal(await mockModel("fenced"), `\`\`\`json\n${response}\n\`\`\``);
});

test("the mock includes invalid shape and malformed JSON scenarios", async () => {
  assert.equal(typeof JSON.parse(await mockModel("invalid")).scenes[0].duration, "string");
  assert.throws(() => JSON.parse('{"scenes": ['));
  assert.equal(await mockModel("malformed"), '{"scenes": [');
  await assert.rejects(mockModel("not-a-scenario"));
});