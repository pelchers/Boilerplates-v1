# UI/UX Component Folder Conventions

 This document defines the conventions for organizing UI/UX component groupings for exportable UI/UX code, specifically for use in `@agnostic-exportable-components-uiux`. It ensures all UI/UX components are easy to find, style, and export across projects.

---

## 1. Grouping Folders
- Grouping folders are used to organize related UI/UX components (e.g., `sliders`, `grids`, `inputs`).
- **Naming:**
  - Use clear, descriptive names for grouping folders (e.g., `sliders`, `grids`).
  - Each component should have its own subfolder (e.g., `infinite-slider-v1`).
- **Overview File:**
  - Every grouping folder must include a maximally detailed overview file (`[grouping].md` or `overview.md`) following these conventions.

---

## 2. Component Folder Organization
- Each component must be in its own subfolder (e.g., `infinite-slider-v1/`).
- **Required files in each component folder:**
  - Main component file (e.g., `InfiniteSlider.tsx`, `DataGrid.vue`)
  - `base-styles.[css|ts|js]` for shared, generic styles
  - `README.md` or overview file for usage, props, and integration notes
- **Only include folders that contain actual code files for exportable UI/UX functionality. Do not include empty subfolders or placeholder folders in the structure.**
- **Optional files:**
  - Demo/example files (e.g., `Demo.tsx`)
  - Test files (e.g., `InfiniteSlider.test.tsx`)

---

## 3. File Naming & Structure
- **Component Files:**
  - Use PascalCase for component files (e.g., `InfiniteSlider.tsx`).
  - Keep code as generic and reusable as possible.
- **Base Styles:**
  - Every component folder must include a `base-styles.[css|ts|js]` file.
  - Reference base styles in the component for visual consistency.
- **README/Overview:**
  - Every component folder must include a README or overview file explaining usage, props, integration, and design notes.

---

## 4. Example File Tree

### UI/UX Grouping (e.g., `sliders`)
```
sliders/
  sliders.md                 # Overview and conventions for this grouping
  infinite-slider-v1/
    InfiniteSlider.tsx       # Main component
    base-styles.css          # Shared base styles
    README.md                # Usage, props, and integration notes
  carousel-slider-v2/
    CarouselSlider.tsx
    base-styles.css
    README.md
```

---

## 5. Required Overview/README Sections
Every grouping and component overview file must include:
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
Every exportable UI/UX grouping **must** include a `[grouping]-implementation.md` file (e.g., `infinite-slider-implementation.md`) in the root of the grouping. This file provides maximally detailed, step-by-step instructions for:
- How to copy/import the code into a user's project
- Required dependencies and provider setup
- Integration steps for components, styles, and utilities
- Example usage and configuration
- Any caveats or project-specific adaptation notes

This ensures all exportable UI/UX code is easy to adopt, configure, and productionize. See any existing implementation guide in a grouping for an example.

**Follow these conventions for all UI/UX groupings in `@agnostic-exportable-components-uiux`.**

## 7. Required 'what-is-this.md' File
Every exportable UI/UX grouping **must** include a `what-is-this.md` file in the root of the grouping. This file provides a high-level explainer summarizing the purpose, structure, and configuration of each file/component, and clarifies the grouping's readiness for export and integration. See the MCP frontend grouping for an example.

## 8. Overview File Location Convention
Every exportable UI/UX grouping **must** include a maximally detailed overview file named `[grouping].md` (e.g., `mcp.md`) in the **root of the grouping folder**. This file must not be placed in subfolders. It provides a comprehensive overview of the grouping, including scope, file tree, key points, technical/nontechnical explanations, and setup instructions. See the MCP grouping for an example.