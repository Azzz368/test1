export interface StoryboardScene {
  sceneNumber: number;
  description: string;
  visualPrompt: string;
  camera: string;
  duration: number;
}

export interface Storyboard {
  scenes: StoryboardScene[];
}

export type IssueCode =
  | "INVALID_JSON" | "INVALID_SHAPE" | "UNKNOWN_FIELD" | "SCENE_COUNT"
  | "SCENE_NUMBER" | "EMPTY_TEXT" | "DURATION_RANGE" | "TOTAL_DURATION";

export interface ValidationIssue {
  code: IssueCode;
  path: string;
  message: string;
}

export type ValidationResult =
  | { ok: true; value: Storyboard }
  | { ok: false; issues: [ValidationIssue, ...ValidationIssue[]] };

export type ValidateStoryboard = (response: string) => ValidationResult;

export type MockScenario = "valid" | "fenced" | "invalid" | "malformed";
export type MockModel = (scenario: MockScenario) => Promise<string>;