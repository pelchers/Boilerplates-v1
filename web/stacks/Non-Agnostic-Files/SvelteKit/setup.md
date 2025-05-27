# SvelteKit — Project Setup Instructions (Web App)

---

## 1. Prerequisites
- **Install Node.js:**
  - Download from https://nodejs.org (LTS recommended)
  - Verify: `node -v` and `npm -v`
- **Install Git:**
  - Download from https://git-scm.com/
  - Verify: `git --version`

---

## 2. Create a New SvelteKit Project
- In your empty root directory:
  ```powershell
  npm create svelte@latest my-natty-or-not-sveltekit-app
  cd my-natty-or-not-sveltekit-app
  npm install
  ```
- Add Tailwind CSS:
  ```powershell
  npm install -D tailwindcss postcss autoprefixer
  npx tailwindcss init -p
  ```
- Configure Tailwind in `svelte.config.js` and import in `src/styles/tailwind.css`.

---

## 3. Project Structure
- See `file-tree-example.md` for a recommended structure.
- Use `src/routes/` for all main routes and dynamic pages.
- Use `src/lib/` for reusable UI elements.
- Use `src/api/` for API abstraction.
- Use `src/styles/` for Tailwind and custom CSS.

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
  npm install --save-dev vitest @testing-library/svelte
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
- If `npm run dev` fails, check SvelteKit and integration versions.
- Always check SvelteKit docs for latest best practices.

---

## 8. Deployment
- **Build for Production:**
  ```powershell
  npm run build
  # Output in 'build' or '.svelte-kit' (depending on adapter)
  ```
- **Deploy:**
  - Vercel: `vercel --prod`
  - Netlify: `netlify deploy --prod --dir=build`
  - Render: Use static site or SSR deployment as needed

---

**You now have a working SvelteKit project ready for development and testing!** 