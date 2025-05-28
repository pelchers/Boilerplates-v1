# Example Section Conventions

This document defines the conventions for writing example sections in all explainers within the `@agnostic-general-learning` area. These conventions ensure that code examples are maximally clear, context-rich, and easy to adapt to real-world projects.

---

## 1. In-Line Comments for Code Structure
- **Always** use in-line comments within code blocks to denote:
  - The role of each section (e.g., API route, controller logic, service layer, type definitions, etc.)
  - Where code would be split in a more structured or scalable repository (e.g., `routes/`, `controllers/`, `services/`, `types/`)
  - The source of types, interfaces, or utility functions (e.g., `import type { WeatherData } from './types'`)
- Comments should be concise but clear, and placed directly above or beside the relevant code.

## 2. Explaining Types and Imports
- When using TypeScript or any typed language, **always** show where types/interfaces are defined and imported.
- If a type or utility is used, include a code block for its definition, or reference its file location.
- For JavaScript, explain the shape of objects or expected data structures in comments.

## 3. Structured Repo Guidance
- For every example, note (in comments or prose) how the code could be split into more maintainable files/folders in a larger project:
  - Example: `// This route could be moved to routes/weather.js`
  - Example: `// Controller logic could be in controllers/weatherController.js`
  - Example: `// Types defined in src/types.ts`
- This helps new developers understand best practices for scaling codebases.

## 4. Visual Separation (5-Line Gaps)
- Insert **five blank lines** before and after major example blocks (such as full-stack or multi-file examples) for visual clarity.
- Use this especially when transitioning between prose and code, or between different example sections.
- Example:
  ```





// Example code block here





  ```

## 5. Sample Annotated Example

-----





```js
// --- Imports and Setup ---
const express = require('express');
const app = express();

// --- API Route (could be in routes/weather.js) ---
app.get('/api/weather', (req, res) => {
  // --- Controller Logic (could be in controllers/weatherController.js) ---
  // ...
});

// --- Server Start ---
app.listen(4000);
```





-----

## 6. Summary Checklist
- [ ] In-line comments for all code structure and file boundaries
- [ ] Types/interfaces shown and explained
- [ ] Notes on splitting code for larger repos
- [ ] 5-line gaps before/after major examples
- [ ] Sample provided for reference

## 7. Level-Appropriate Explanations and Examples
- When writing multi-level explainers (e.g., 3-5 levels from beginner to advanced), **all in-line comments, explanations, and examples must be tailored to the intended audience for that level**.
  - For beginners: Use simple language, step-by-step comments, and extra context.
  - For intermediate: Use more technical terms, introduce best practices, and show more realistic code structure.
  - For advanced/senior: Use concise, idiomatic code, highlight edge cases, and discuss architectural tradeoffs.
- This ensures that each level of explainer is maximally effective for its target audience.

## 8. Required File Flow Sections
- Every example section must include its own **file flow (file tree) section** for context, showing the structure of files and folders used in the example.
- The main explainer must also have a separate file flow section showing where the concept fits in the overall project.
- Both are required for maximum clarity and should be clearly labeled in their respective sections.

## 9. Example Reference for Beginner-Level Example Sections
- The file `api/api-basics.md` is an excellent example of a **beginner-level** explanation and example section.
- Use it as a reference for structure, in-line comments, file flow sections, and clarity when writing beginner-level example sections in future explainers.

---

**Follow these conventions for all future example sections to maximize clarity, maintainability, and developer learning.** 