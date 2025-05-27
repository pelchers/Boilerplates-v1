# Nuxt 3 — Project Setup Instructions (Web App)

---

## 1. Prerequisites
- **Install Node.js:**
  - Download from https://nodejs.org (LTS recommended)
  - Verify: `node -v` and `npm -v`
- **Install Git:**
  - Download from https://git-scm.com/
  - Verify: `git --version`

---

## 2. Create a New Nuxt 3 Project
- In your empty root directory:
  ```powershell
  npx nuxi init my-natty-or-not-nuxt-app
  cd my-natty-or-not-nuxt-app
  npm install
  ```
- Add Tailwind CSS:
  ```powershell
  npm install -D tailwindcss postcss autoprefixer
  npx tailwindcss init -p
  ```
- Configure Tailwind in `nuxt.config.ts` and import in `assets/tailwind.css`.

---

## 3. Project Structure
- See `file-tree-example.md` for a recommended structure.
- Use `pages/` for all main routes and dynamic pages.
- Use `components/` for reusable UI elements.
- Use `composables/` for reusable logic.
- Use `server/api/` for backend endpoints.
- Use `store/` for Pinia state management.

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
  npm install --save-dev vitest @vue/test-utils
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
- If `npm run dev` fails, check Nuxt, Vue, and integration versions.
- Always check Nuxt docs for latest best practices.

---

## 8. Deployment
- **Build for Production:**
  ```powershell
  npm run build
  # Output in `.output` or `dist` (depending on target)
  ```
- **Deploy:**
  - Vercel: `vercel --prod`
  - Netlify: `netlify deploy --prod --dir=.output/public`
  - Render: Use static site or SSR deployment as needed

---

**You now have a working Nuxt 3 project ready for development and testing!** 