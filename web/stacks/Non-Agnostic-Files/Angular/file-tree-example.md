# 📁 Example File Tree: Angular

```plaintext
src/
  app/
    auth/
      login/
        login.component.ts
        login.component.html
        login.component.scss
    profile/
      profile.component.ts
      profile.component.html
      profile.component.scss
    investigations/
      investigation-form/
        investigation-form.component.ts
        investigation-form.component.html
        investigation-form.component.scss
    wanted/
      wanted-profile/
        wanted-profile.component.ts
        wanted-profile.component.html
        wanted-profile.component.scss
    core/
      services/
        api.service.ts
        auth.service.ts
      interceptors/
        auth.interceptor.ts
    shared/
      components/
      pipes/
      directives/
  assets/
  environments/
    environment.ts
    environment.prod.ts
  styles/
    tailwind.css
index.html
main.ts
tailwind.config.js
```

---

## 📖 What This File Does
Shows a modular, scalable Angular project structure with feature folders, shared/core modules, and environment configs.

## 🔧 Configuration Notes
- Tailwind CSS config in `styles/tailwind.css` and `tailwind.config.js`
- Environment variables in `environments/`
- Use `core/` for singleton services and interceptors
- Use `shared/` for reusable components, pipes, and directives 