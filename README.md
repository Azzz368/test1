# AI Engineering Exercise: Validate a Storyboard Response

Build a small, reliable boundary between an AI response and an application.
This standalone exercise is adapted from a creative workflow's scene data
shape. All examples are synthetic. No access to the original application,
private repository, database, external API, or credentials is required.

## Time Box

Spend up to **4 hours**, including tests and a short explanation. An incomplete
solution with clear limitations is preferable to unreported extra hours.
Prerequisites: JavaScript or TypeScript, JSON, and basic automated testing.

## Run

Use **Node.js 22.16 or later**. No dependencies or installation are needed.

```sh
npm test
npm run test:assessment
```

`npm test` checks the supplied fixtures, mock, and starter interface; it passes
on the untouched starter. `test:assessment` runs acceptance examples against
your implementation and intentionally fails until you implement it. Passing
only `npm test` does not complete the exercise.

## Implement

Implement `validateStoryboard(response)` in `src/validateStoryboard.mjs` using
the input/output types in `types/index.d.ts`. The input is an untrusted string
returned by a model. Do not call a real model. The deterministic mock in
`mock/model.mjs` returns the supplied scenarios without network access.

Rules:

1. Accept a JSON object with exactly one top-level field, `scenes`. You may also
   strip one surrounding Markdown fence: opening line ``` or ```json and a
   closing ``` line. Allow whitespace around the response. Do not extract JSON
   from prose, fix malformed JSON, coerce types, or invent missing content.
2. `scenes` must contain 1 to 12 scenes. A scene must have exactly the five
   fields in `StoryboardScene`. Reject unknown fields, including at the root.
3. Scene numbers must be integers equal to their one-based array positions.
   `description`, `visualPrompt`, and `camera` must be nonempty after trimming.
   Preserve the original string values when returning a successful result.
4. `duration` must be a finite number between 1 and 30 seconds, inclusive.
   The combined duration must not exceed 120 seconds.
5. Return the discriminated result in the types file. Never throw for a string
   input. Return one or more useful issues with stable codes and JSON Pointer
   paths. Issue ordering is not prescribed. Do not include raw response text
   in error messages. A failure must not include a partial `value`.
6. Do not mutate input-derived data to make an invalid response pass. Treat text
   such as instructions inside a description as data, not executable guidance.

Issue codes and paths:

| Problem | Code | Path |
| --- | --- | --- |
| Cannot parse the allowed JSON representation | `INVALID_JSON` | empty string |
| Wrong container/value type or absent required field | `INVALID_SHAPE` | offending field, root is empty string |
| Unknown property | `UNKNOWN_FIELD` | that property |
| Scene count outside 1..12 | `SCENE_COUNT` | `/scenes` |
| Incorrect scene number | `SCENE_NUMBER` | `/scenes/{index}/sceneNumber` |
| Empty/whitespace text field | `EMPTY_TEXT` | corresponding field |
| Duration outside allowed bounds | `DURATION_RANGE` | corresponding duration |
| Combined duration exceeds 120 | `TOTAL_DURATION` | `/scenes` |

Check container types before accessing children. For the same field, a wrong
type is `INVALID_SHAPE`; apply range/content checks only after type checks pass.
The public tests are examples, not exhaustive coverage. Add your own edge cases.

## Deliver

- The implementation and tests, runnable with the documented commands.
- A short `SUBMISSION.md`: approach, limitations, time spent, and how to run any
  extra tests. Include AI tools used and how you checked their output.
- A brief answer: how would you evaluate this validator on real model outputs
  without storing private prompts or responses?

You may use AI tools. Be prepared to explain and modify your code during a
20-minute discussion. Do not submit keys, personal information, production logs,
or output copied from an employer's private systems. Do not deploy a service.


## Sharing and Scope

This repository is the complete candidate handout. It contains only the task,
types, synthetic examples, an offline mock, tests, and a starter function.
There is deliberately no reference solution. Share this repository rather than
the original application. No upstream history, user content, provider routing,
billing logic, infrastructure settings, or legal documents are included.
