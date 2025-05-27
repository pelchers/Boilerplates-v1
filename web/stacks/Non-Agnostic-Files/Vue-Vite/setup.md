# Vue 3 + Vite — Project Setup Instructions (Web App)

---

## 1. Prerequisites
- **Install Node.js:**
  - Download from https://nodejs.org (LTS recommended)
  - Verify: `node -v` and `npm -v`
- **Install Git:**
  - Download from https://git-scm.com/
  - Verify: `git --version`

---

## 2. Create a New Vue 3 + Vite Project
- In your empty root directory:
  ```powershell
  npm create vite@latest my-natty-or-not-vue-app -- --template vue-ts
  cd my-natty-or-not-vue-app
  npm install
  ```
- Choose TypeScript and Tailwind when prompted or add Tailwind after project creation.

---

## 3. Project Structure
- See `file-tree-example.md` for a recommended structure.
- Use `src/views/` for all main routes and dynamic pages.
- Use `src/components/` for reusable UI elements.
- Use `src/api/` for API abstraction.
- Use `src/store/` for Pinia or Vuex state management.

---

## 4. Run the Project
- **Development:**
  ```powershell
  npm run dev
  ```
- **Production Build:**
  ```powershell
  npm run build
  npm run preview
  ```

---

## 5. Add Testing Tools
- **Vitest & Testing Library:**
  ```powershell
  npm install --save-dev vitest @testing-library/vue
  ```
- **Cypress (E2E, optional):**
  ```powershell
  npm install --save-dev cypress
  ```

---

## 6. Initialize Git
- In project root:
  ```powershell
  git init
  git add .
  git commit -m "Initial commit"
  ```

---

## 7. Troubleshooting
- If you see errors about missing dependencies, run `npm install`.
- For Windows, restart PowerShell after installing Node.js or Git.
- If `npm run dev` fails, check Vite, Vue, and integration versions.
- Always check Vue and Vite docs for latest best practices.

---

## 8. Deployment
- **Build for Production:**
  ```powershell
  npm run build
  # Output in 'dist'
  ```
- **Deploy:**
  - Vercel: `vercel --prod`
  - Netlify: `netlify deploy --prod --dir=dist`
  - Render: Use static site or SSR deployment as needed

---

**You now have a working Vue 3 + Vite project ready for development and testing!** 