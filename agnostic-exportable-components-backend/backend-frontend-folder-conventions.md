# Backend Folder Conventions

This document defines the conventions for organizing backend grouping folders for exportable backend code, specifically for use in `@agnostic-exportable-components-backend`. It ensures all backend code is easy to find, test, and export for integration into any project.

---

## 1. Grouping Folders
- Grouping folders are used to organize related backend features (e.g., `user-auth-backend`, `data-sync-backend`).
- **Naming:**
  - Use clear, descriptive names for grouping folders (e.g., `user-auth-backend`).
  - For stack/framework-specific groupings, append the stack name (e.g., `user-auth-backend-express`).
- **Overview File:**
  - Every grouping folder must include a maximally detailed overview file (`[grouping].md` or `overview.md`) following these conventions.

---

## 2. Subfolder Organization
- Organize by `server/` (backend code) and, if needed for testing/demo, `client/` (minimal example frontend).
- Within `server/`, use subfolders as needed (e.g., `controllers/`, `models/`, `utils/`).
- **Only include folders that contain actual code files for exportable backend functionality. Do not include empty subfolders or placeholder folders in the structure.**
- When exporting, only backend code is required for integration; example frontend code is for demonstration/testing only.

---

## 3. File Naming & Structure
- **Server Folder:**
  - Use `server/` for all backend code.
  - Subfolders should reflect backend structure (e.g., `controllers/`, `models/`, `utils/`).
- **Component/Feature Files:**
  - Use clear, descriptive names (e.g., `UserController.ts`, `DataModel.ts`).
  - Keep code as generic and reusable as possible.
- **Overview/README:**
  - Every grouping and major subfolder must include an overview or README file explaining its purpose, structure, and usage.

---

## 4. Example File Tree

### Backend Grouping (e.g., `agnostic-exportable-components-backend`)
```
agnostic-exportable-components-backend/
  overview.md
  user-auth/
    server/
      controllers/
        UserController.ts
      models/
        UserModel.ts
      utils/
        hashPassword.ts
    client/
      pages/
        DemoLoginPage.tsx   # Only include if actually present for testing/demo
```

---

## 5. Required Overview/README Sections
Every grouping and major subfolder overview file must include:
1. What is [Grouping/Feature]?
2. Scope of This Grouping/Feature
3. Why [Grouping/Feature] Matters
4. Included Files/Explainers (with brief descriptions)
5. File Tree (with in-line comments)
6. Key Points
7. Benefits and Drawbacks
8. Technical Explanation
9. Nontechnical Explanation
10. Key Terms
11. Resources
12. Notes on Applicability
13. Example Use
14. Setup
15. Commands
16. More

---

## 6. Required Implementation Guide File
Every exportable backend grouping **must** include a `[grouping]-implementation.md` file (e.g., `user-auth-implementation.md`, `mcp-implementation.md`) in the root of the grouping. This file provides maximally detailed, step-by-step instructions for:
- How to copy/import the code into a user's project
- Required dependencies and provider setup
- Integration steps for controllers, models, and utilities
- Example usage and configuration
- Any caveats or project-specific adaptation notes

This ensures all exportable backend code is easy to adopt, configure, and productionize. See `mcp-implementation.md` in the MCP grouping for an example.

---

## 7. Required 'what-is-this.md' File
Every exportable backend grouping **must** include a `what-is-this.md` file in the root of the grouping. This file provides a high-level explainer summarizing the purpose, structure, and configuration of each file/component, and clarifies the grouping's readiness for export and integration. See the MCP frontend grouping for an example.

---

## 8. Overview File Location Convention
Every exportable backend grouping **must** include a maximally detailed overview file named `[grouping].md` (e.g., `mcp.md`) in the **root of the grouping folder**. This file must not be placed in subfolders. It provides a comprehensive overview of the grouping, including scope, file tree, key points, technical/nontechnical explanations, and setup instructions. See the MCP grouping for an example.

---

**Follow these conventions for all backend groupings in `@agnostic-exportable-components-backend` to ensure maximum clarity, reusability, and developer experience. Only include folders and files that contain actual exportable backend code or meaningful demo/test code.** 