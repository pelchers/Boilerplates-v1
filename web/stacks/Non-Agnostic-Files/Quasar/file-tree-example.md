# 📁 Example File Tree: Quasar

```plaintext
src/
  pages/
    Index.vue
    Login.vue
    Profile/
      [id].vue
    InvestigationForm.vue
    WantedProfile.vue
  components/
    SharedButton.vue
    UserCard.vue
  stores/
    user.js
    investigation.js
  boot/
    axios.js
  css/
    tailwind.css
    app.scss
  router/
    index.js
  assets/
  layouts/
    MainLayout.vue
  quasar.conf.js
  env/
    .env
    .env.production
```

---

## 📖 What This File Does
Shows a modular, scalable Quasar project structure with pages, components, stores, and Quasar-specific config.

## 🔧 Configuration Notes
- Tailwind CSS config in `css/tailwind.css` (optional)
- Environment variables in `env/`
- Use `boot/` for plugins like axios
- Use `stores/` for Pinia/Vuex stores
- `quasar.conf.js` for project-wide config 