# 🚀 Setup Guide: Quasar

## 1. Prerequisites
- Node.js (v18+ recommended)
- Quasar CLI: `npm install -g @quasar/cli`

## 2. Create Project
```powershell
quasar create wrongdoer-db
cd wrongdoer-db
```

## 3. Add Tailwind CSS (Optional)
```powershell
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init
```
- Add `@tailwind base;`, `@tailwind components;`, `@tailwind utilities;` to `src/css/tailwind.css`
- Import `tailwind.css` in `quasar.conf.js` under `css` array

## 4. Environment Variables
- Use `.env` and `.env.production` in `env/` folder
- Example:
```env
API_URL=https://api.example.com
```
- Access via `process.env.API_URL` or Quasar's `$q.env`

## 5. API Integration
- Use `boot/axios.js` for axios setup
- Example axios boot file:
```js
import { boot } from 'quasar/wrappers';
import axios from 'axios';

const api = axios.create({ baseURL: process.env.API_URL });

export default boot(({ app }) => {
  app.config.globalProperties.$axios = axios;
  app.config.globalProperties.$api = api;
});

export { axios, api };
```

## 6. Run the App
```powershell
quasar dev
```

## 7. Build for Production
```powershell
quasar build
```

---

## 📖 What This File Does
Guides developers through initial setup, Tailwind integration, environment config, and API setup for Quasar.

## 🔧 Configuration Notes
- Adjust `API_URL` in env files for different environments
- Use Quasar CLI for all build and serve commands 