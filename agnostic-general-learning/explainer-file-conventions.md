# Explainer File Conventions

This document describes the conventions for writing explainer files in each learning area folder of `@agnostic-general-learning`. Each explainer file should focus on a single term or concept (e.g., `path-aliases.md`) and be placed in the relevant grouping folder (e.g., `file-communication/capacitor/path-aliases.md`).

## 📄 File Naming
- The filename **must** be the term or concept being explained (e.g., `path-aliases.md`).
- **For every topic, an agnostic explainer file must be created in the grouping folder** (e.g., `file-communication/path-aliases.md`).
- **Only if there is a considerable or semi-significant difference in how a framework/stack/tool works should an additional file be created** (e.g., `file-communication/path-aliases---capacitor.md`).
- **When an additional file is created, it must include an 'Agnostic Difference Explanation' section at the very top, outlining how and why this stack differs from the agnostic case.**
- This ensures the default file in each grouping folder is the most universal, and stack-specific differences are clearly denoted, explained, and easy to find.

## 📁 Grouping Folders
- The main learning areas are organized into grouping folders (e.g., `file-communication`, `frontend-backend-communication`, `performance-optimization`, etc.).
- **Additional grouping folders may be created at the AI's discretion based on need, to better organize new or emerging areas of knowledge.**
- Grouping folders should be named clearly and concisely to reflect the learning area or protocol they cover.
- **For every grouping folder, an `.md` file with the same name as the folder must be created (e.g., `file-communication.md`). This file should explain the general concept, scope, and purpose of the grouping area, providing context for all included explainers.**
- **This grouping .md file must be updated every time new files are added to the folder, especially when new considerations arise. The Included Explainers section must always be kept up to date and provide context for each explainer.**
- **The grouping .md file should be maximally detailed and follow the organizational conventions of the explainers. It must include the following grouping-specific intro sections at the top, in this order:**
  1. What is [Grouping]?
  2. Scope of This Grouping
  3. Why [Grouping] Matters
  4. Included Explainers (with a brief description of each)
- **After these, the file should include the standard explainer sections as described below, to provide even deeper context and reference for the grouping as a whole.**

## 📝 Required Sections & Structure
Each explainer file should include the following sections, in order:

### 1. (Stack-specific only) Agnostic Difference Explanation
- At the very top of any stack-specific file, explain how and why this stack's implementation or usage differs from the agnostic case.

### 2. Overview
- Brief summary of the concept and its relevance to the stack/context.

### 3. File Tree
- Show a minimal or typical file/folder structure relevant to the concept.
- Highlight where the concept fits in the project structure.
- **Use in-line comments (with `#` or `//`) within the file tree to provide added context or explanations for specific files or folders.**

### 4. Key Points
- Bullet list of the most important facts, features, or considerations.
  - Use sub-bullets for details or clarifications.

### 5. Benefits and Drawbacks
- List the main advantages and disadvantages of the concept/feature in this stack.

### 6. Technical Explanation
- In-depth, technical description of how the concept works in this stack.
- Include code snippets, diagrams, or references as needed.

### 7. Nontechnical Explanation
- Simple, easy-to-understand explanation for non-experts.
- Use analogies or plain language.

### 8. Key Terms
- Define any jargon, acronyms, or important terms used in the explainer.

### 9. Resources
- List of official docs, guides, or helpful links for further reading.

### 10. Notes on Applicability to Stack
- Explain any stack-specific considerations, limitations, or best practices.

### 11. Example Use
- Provide a concrete example of how the concept is used in this stack.
- Include code or configuration samples if relevant.

### 12. Setup
- Step-by-step instructions for enabling or configuring the feature/concept in this stack.

### 13. Commands
- List any CLI or shell commands needed for setup, usage, or troubleshooting.

### 14. More
- Any additional notes, tips, or advanced topics not covered above.

---

## 📚 Example Structure: `file-communication/path-aliases---capacitor.md`

```markdown
# Path Aliases in Capacitor Projects

## Agnostic Difference Explanation
Capacitor projects require special attention to path aliases because code must work in both web and native environments. Some mobile build tools and plugins may not respect TypeScript aliases, so extra configuration and testing are needed compared to the agnostic case.

## Overview
A short summary of what path aliases are and why they matter in Capacitor-based projects.

## File Tree
```
my-capacitor-app/
  src/
    components/        # UI components (aliased as @components)
      Button.tsx
    utils/             # Utility functions (aliased as @utils)
      api.ts
  tsconfig.json        # Path aliases configured here
  vite.config.ts       # Vite plugin for path aliases
  capacitor.config.ts  # Capacitor project config
  android/             # Native Android project
  ios/                 # Native iOS project
```

## Key Points
- Path aliases simplify imports.
  - Reduce relative path complexity.
- Supported via `tsconfig.json` or `jsconfig.json`.
- Must be configured for both build tools and IDEs.

## Benefits and Drawbacks
- **Benefits:**
  - Cleaner imports
  - Easier refactoring
- **Drawbacks:**
  - Misconfiguration can break builds
  - Tooling inconsistencies

## Technical Explanation
Detailed explanation of how to set up and use path aliases in a Capacitor project, with code samples.

## Nontechnical Explanation
Simple analogy or plain-language description of what path aliases do.

## Key Terms
- Path Alias
- Import Path
- `tsconfig.json`

## Resources
- [TypeScript Path Mapping Docs](https://www.typescriptlang.org/tsconfig#paths)
- [Capacitor Docs](https://capacitorjs.com/docs)

## Notes on Applicability to Stack
- Special notes for Capacitor, e.g., how aliases interact with mobile builds.

## Example Use
Show a before/after import example using path aliases.

## Setup
Step-by-step guide to configuring path aliases in Capacitor.

## Commands
- `npm run build`
- `npx tsc --traceResolution`

## More
- Troubleshooting tips
- IDE integration notes
```

---

## 🏆 Example Response: `file-communication/path-aliases---capacitor.md`

```markdown
# Path Aliases in Capacitor Projects

## Agnostic Difference Explanation
Capacitor projects require special attention to path aliases because code must work in both web and native environments. Some mobile build tools and plugins may not respect TypeScript aliases, so extra configuration and testing are needed compared to the agnostic case.

## Overview
Path aliases allow you to define custom, short import paths for your project files instead of using long, complex relative paths. In Capacitor projects (which are often TypeScript-based and may have both web and native code), path aliases streamline development, improve code readability, and reduce errors when refactoring or moving files.

## File Tree
```
my-capacitor-app/
  src/
    components/        # UI components (aliased as @components)
      Button.tsx
    utils/             # Utility functions (aliased as @utils)
      api.ts
  tsconfig.json        # Path aliases configured here
  vite.config.ts       # Vite plugin for path aliases
  capacitor.config.ts  # Capacitor project config
  android/             # Native Android project
  ios/                 # Native iOS project
```

## Key Points
- Path aliases map custom import prefixes (like `@components/`) to specific folders in your project.
  - This avoids long relative paths like `../../../components/Button`.
- Configured in `tsconfig.json` (or `jsconfig.json` for JS projects).
- Must be supported by both your build tool (Vite, Webpack, etc.) and your IDE (VSCode, WebStorm, etc.).
- In Capacitor, aliases are especially useful for shared code between web and native layers.
- Misconfigured aliases can cause build failures or runtime errors, especially in cross-platform builds.

## Benefits and Drawbacks
- **Benefits:**
  - Cleaner, more maintainable imports throughout your codebase.
  - Easier to refactor and move files without breaking imports.
  - Reduces cognitive load for developers navigating large projects.
  - Helps enforce project structure and boundaries (e.g., `@api/`, `@components/`).
- **Drawbacks:**
  - Requires configuration in multiple places (TypeScript, build tool, sometimes test runner).
  - If not set up in your IDE, you may lose autocomplete or jump-to-definition features.
  - Can cause confusion if different tools interpret aliases differently.
  - In Capacitor, must ensure aliases work for both web and native builds.

## Technical Explanation
Path aliases are defined in the `paths` property of your `tsconfig.json`:

```json
{
  "compilerOptions": {
    "baseUrl": ".",
    "paths": {
      "@components/*": ["src/components/*"],
      "@utils/*": ["src/utils/*"]
    }
  }
}
```

- `baseUrl` sets the root directory for resolving non-relative module names.
- Each key in `paths` is an alias; the value is an array of paths it maps to.
- In Vite, you must also add these aliases to `vite.config.ts`:

```ts
import { defineConfig } from 'vite';
import tsconfigPaths from 'vite-tsconfig-paths';

export default defineConfig({
  plugins: [tsconfigPaths()],
});
```

- For Webpack, use the `resolve.alias` field.
- In Capacitor, ensure your build output (usually `dist/`) preserves the alias structure, and that any native plugins or bridges reference the correct paths.
- IDEs like VSCode will use `tsconfig.json` for intellisense if the project is opened at the correct root.

## Nontechnical Explanation
Imagine your project is a big city, and every file is a building. Normally, to get from one building to another, you have to give detailed directions ("go up three blocks, turn left, go down two blocks"). Path aliases are like giving every important building a nickname ("The Library"), so you can just say "go to The Library" and everyone knows where it is. This makes it much easier to find things and give directions, especially as the city grows.

## Key Terms
- **Path Alias:** A custom shortcut for importing files or folders in your project.
- **`tsconfig.json`:** TypeScript configuration file where aliases are defined.
- **BaseUrl:** The root directory for resolving non-relative imports.
- **Vite/Webpack:** Build tools that may require their own alias configuration.
- **IDE:** Integrated Development Environment (e.g., VSCode) that uses alias info for navigation and autocomplete.

## Resources
- [TypeScript Path Mapping Docs](https://www.typescriptlang.org/tsconfig#paths)
- [Vite Plugin: vite-tsconfig-paths](https://github.com/aleclarson/vite-tsconfig-paths)
- [Capacitor Docs](https://capacitorjs.com/docs)
- [VSCode: jsconfig/tsconfig Reference](https://code.visualstudio.com/docs/languages/jsconfig)

## Notes on Applicability to Stack
- In Capacitor, path aliases are most useful for code shared between web and native layers.
- Be careful with plugins or native modules that expect standard paths; always test on both web and mobile.
- Some mobile build tools may not respect TypeScript aliases—ensure your build process transpiles everything correctly.
- If using Jest or another test runner, configure aliases there as well.

## Example Use
**Before (without aliases):**
```ts
import Button from '../../../components/Button';
import { fetchData } from '../../utils/api';
```

**After (with aliases):**
```ts
import Button from '@components/Button';
import { fetchData } from '@utils/api';
```

## Setup
1. Open your `tsconfig.json` and add a `baseUrl` and `paths`:
   ```json
   {
     "compilerOptions": {
       "baseUrl": ".",
       "paths": {
         "@components/*": ["src/components/*"],
         "@utils/*": ["src/utils/*"]
       }
     }
   }
   ```
2. If using Vite, install and configure `vite-tsconfig-paths`:
   ```sh
   npm install vite-tsconfig-paths --save-dev
   ```
   In `vite.config.ts`:
   ```ts
   import tsconfigPaths from 'vite-tsconfig-paths';
   export default defineConfig({ plugins: [tsconfigPaths()] });
   ```
3. For Webpack, add aliases to `resolve.alias` in `webpack.config.js`.
4. Restart your IDE to pick up the new aliases.
5. Test imports in your codebase and run a build to ensure everything resolves.
6. If using Jest, add `moduleNameMapper` to your `jest.config.js`:
   ```js
   moduleNameMapper: {
     '^@components/(.*)$': '<rootDir>/src/components/$1',
     '^@utils/(.*)$': '<rootDir>/src/utils/$1',
   }
   ```

## Commands
- `npm run build` — Build the project and check for import errors.
- `npx tsc --traceResolution` — Debug TypeScript module resolution.
- `npm install vite-tsconfig-paths --save-dev` — Install Vite plugin for path aliases.
- `npm test` — Run tests to ensure aliases work in test environment.

## More
- If you move files, update your aliases as needed.
- Some editors may require a restart to recognize new aliases.
- For monorepos, consider using project references and shared `tsconfig.base.json`.
- If you encounter "module not found" errors, check all config files and ensure paths are correct.
- For advanced setups, see [TypeScript Project References](https://www.typescriptlang.org/docs/handbook/project-references.html).
```

---

**Use this example as a gold standard for detail and clarity in all future explainer files.**

> **Note:** The example response above represents the **base level of detail** required for every explainer file. All explanation files should aim for this level of completeness at a minimum, and should strive for even more detail, depth, and clarity wherever possible. 