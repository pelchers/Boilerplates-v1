# 🚀 Setup Guide: Angular

## 1. Prerequisites
- Node.js (v18+ recommended)
- Angular CLI: `npm install -g @angular/cli`

## 2. Create Project
```powershell
ng new wrongdoer-db --routing --style=scss
cd wrongdoer-db
```

## 3. Add Tailwind CSS
```powershell
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init
```
- Add `@tailwind base;`, `@tailwind components;`, `@tailwind utilities;` to `src/styles/tailwind.css`
- Import `tailwind.css` in `angular.json` styles array

## 4. Environment Variables
- Use `src/environments/environment.ts` for API URLs and secrets
- Example:
```typescript
export const environment = {
  production: false,
  apiUrl: 'https://api.example.com'
};
```

## 5. API Integration
- Use Angular's `HttpClientModule` in `app.module.ts`
- Create `api.service.ts` for API calls

## 6. Run the App
```powershell
ng serve
```

## 7. Build for Production
```powershell
ng build --configuration production
```

---

## 📖 What This File Does
Guides developers through initial setup, Tailwind integration, environment config, and API setup for Angular.

## 🔧 Configuration Notes
- Adjust `apiUrl` in environment files for different environments
- Use Angular CLI for all build and serve commands 