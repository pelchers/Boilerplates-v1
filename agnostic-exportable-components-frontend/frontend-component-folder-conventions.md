# Frontend Component & Feature Folder Conventions

This document outlines the conventions for organizing frontend component and feature grouping folders for exportable frontend code, specifically for use in `@agnostic-exportable-components-frontend`. It ensures consistency, clarity, and maximum reusability for all interactive, functional frontend code.

---

## 1. Grouping Folders
- Grouping folders are used to organize related frontend components or features (e.g., `dashboard-frontend`, `user-profile-frontend`).
- **Naming:**
  - Use clear, descriptive names for grouping folders (e.g., `dashboard-frontend`).
  - For stack/framework-specific groupings, append the stack name (e.g., `dashboard-frontend-react`).
- **Overview File:**
  - Every grouping folder must include a maximally detailed overview file (`[grouping].md` or `overview.md`) following these conventions.

---

## 2. Subfolder Organization
- Organize by `client/` (frontend code) and, if needed for testing/demo, `server/` (minimal example backend).
- Within `client/`, use subfolders as needed (e.g., `components/`, `pages/`, `hooks/`).
- **Only include folders that contain actual code files for exportable frontend functionality. Do not include empty subfolders or placeholder folders in the structure.**
- When exporting, only frontend code is required for integration; example backend code is for demonstration/testing only.

---

## 3. File Naming & Structure
- **Client Folder:**
  - Use `client/` for all frontend code.
  - Subfolders should reflect frontend structure (e.g., `components/`, `pages/`, `hooks/`).
- **Component/Feature Files:**
  - Use clear, descriptive names (e.g., `DashboardPage.tsx`, `UserProfileCard.tsx`).
  - Keep code as generic and reusable as possible.
- **Overview/README:**
  - Every grouping and major subfolder must include an overview or README file explaining its purpose, structure, and usage.

---

## 4. Example File Tree

### Frontend Grouping (e.g., `agnostic-exportable-components-frontend`)
```
agnostic-exportable-components-frontend/
  overview.md
  dashboard/
    client/
      components/
        DashboardPage.tsx
        UserProfileCard.tsx
      pages/
        HomePage.tsx
      hooks/
        useDashboardData.ts
    server/
      api/
        mockApi.ts         # Only include if actually present for testing/demo
```

---

## 5. Required Overview/README Sections
Every grouping and major subfolder overview file must include:
1. What is [Grouping/Component]?
2. Scope of This Grouping/Component
3. Why [Grouping/Component] Matters
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
Every exportable frontend grouping **must** include a `[grouping]-implementation.md` file (e.g., `dashboard-implementation.md`) in the root of the grouping. This file provides maximally detailed, step-by-step instructions for:
- How to copy/import the code into a user's project
- Required dependencies and provider setup
- Integration steps for components, hooks, and utilities
- Example usage and configuration
- Any caveats or project-specific adaptation notes

This ensures all exportable frontend code is easy to adopt, configure, and productionize. See any existing implementation guide in a grouping for an example.

**Follow these conventions for all frontend groupings in `@agnostic-exportable-components-frontend` to ensure maximum clarity, reusability, and developer experience. Only include folders and files that contain actual exportable frontend code or meaningful demo/test code.**

## 7. Required 'what-is-this.md' File
Every exportable frontend grouping **must** include a `what-is-this.md` file in the root of the grouping. This file provides a high-level explainer summarizing the purpose, structure, and configuration of each file/component, and clarifies the grouping's readiness for export and integration. See the MCP frontend grouping for an example.

## 8. Overview File Location Convention
Every exportable frontend grouping **must** include a maximally detailed overview file named `[grouping].md` (e.g., `mcp.md`) in the **root of the grouping folder**. This file must not be placed in subfolders. It provides a comprehensive overview of the grouping, including scope, file tree, key points, technical/nontechnical explanations, and setup instructions. See the MCP grouping for an example. 