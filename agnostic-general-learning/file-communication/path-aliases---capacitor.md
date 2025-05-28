# Path Aliases in Capacitor Projects

## Agnostic Difference Explanation
Capacitor projects require special attention to path aliases because code must work in both web and native environments. Some mobile build tools and plugins may not respect TypeScript aliases, so extra configuration and testing are needed compared to the agnostic case.

## Overview
Path aliases in Capacitor projects allow you to use custom, short import paths for your files, just like in other modern TypeScript projects. However, because Capacitor bridges web and native code, there are special considerations to ensure aliases work in both environments and do not break mobile builds.

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
- Configured in `tsconfig.json` (or `jsconfig.json` for JS projects).
- Must be supported by both your build tool (Vite, Webpack, etc.) and your IDE.
- In Capacitor, aliases are especially useful for code shared between web and native layers.
- Misconfigured aliases can cause build failures or runtime errors, especially in cross-platform builds.
- Some native plugins or mobile build tools may not respect TypeScript aliases.

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
  - Some mobile build tools may not respect TypeScript aliases—ensure your build process transpiles everything correctly.

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

- In Vite, add these aliases to `vite.config.ts`:

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
- If using Jest, add `moduleNameMapper` to your `jest.config.js`.

## Nontechnical Explanation
Imagine your project is a big city, and every file is a building. Normally, to get from one building to another, you have to give detailed directions ("go up three blocks, turn left, go down two blocks"). Path aliases are like giving every important building a nickname ("The Library"), so you can just say "go to The Library" and everyone knows where it is. In Capacitor, you have to make sure both the web and mobile city maps know about these nicknames!

## Key Terms
- **Path Alias:** A custom shortcut for importing files or folders in your project.
- **`tsconfig.json`:** TypeScript configuration file where aliases are defined.
- **BaseUrl:** The root directory for resolving non-relative imports.
- **Vite/Webpack:** Build tools that may require their own alias configuration.
- **IDE:** Integrated Development Environment (e.g., VSCode) that uses alias info for navigation and autocomplete.
- **Capacitor:** A cross-platform runtime for building web-native apps.

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