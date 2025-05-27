# 📘 Stack-Specific Documentation: Quasar

Tailored documentation for a Quasar web app for the Scammer & Wrongdoer Database platform.

---

## 📁 1. `technical-spec.md`

### Architecture Overview

* **Frontend**: Quasar (Vue 3), styled via Tailwind CSS or Quasar CSS
* **Routing**: Vue Router, dynamic `[id].vue` pages
* **API Interaction**: REST or GraphQL using `fetch`, `axios`, or Pinia/Vuex actions
* **SEO**: Quasar meta plugin, semantic HTML, accessibility

### Key APIs

| Endpoint              | Method | Description                        |
| --------------------- | ------ | ---------------------------------- |
| `/api/auth/login`     | POST   | Login + JWT retrieval              |
| `/api/users/:id`      | GET    | Dashboard and profile data         |
| `/api/investigations` | POST   | New collaborative investigation    |
| `/api/wanted/:id`     | PATCH  | Update wanted visibility/donations |

### Component-API Map

| Component               | API Used              |
| ----------------------- | --------------------- |
| `Login.vue`             | `/api/auth/login`     |
| `Profile/[id].vue`      | `/api/users/:id`      |
| `InvestigationForm.vue` | `/api/investigations` |
| `WantedProfile.vue`     | `/api/wanted/:id`     |

### DB Integration

* No frontend access to DB
* All interactions pass through secure backend API
* PostgreSQL recommended for backend (Prisma, Drizzle, or direct SQL)

---

## 📁 2. `adr-database-choice.md`

### Decision: PostgreSQL via Remote API

**Rationale:**

* Quasar web apps interact with backend APIs for all data
* Complex investigative data models demand strict schema + reliable joins

**Alternatives Considered:**

* **Firebase**: Real-time sync, but lacks relational model enforcement
* **MongoDB**: Flexible, but less ideal for relational data

**Justification:**

* PostgreSQL ensures reliability, transactional safety, and flexible query options
* Compatible with any hosting model or ORM

---

## 📁 3. `hosting-guide.md`

### Web Deployment

* Build with Quasar CLI: `quasar build`
* Deploy to: Vercel, Netlify, or Render.com
* Use SSR/SSG for best SEO and performance

### Backend Hosting

* Node.js + Express (or equivalent) hosted on Render, Railway, or Supabase
* All endpoints authenticated using JWT

### Environment Handling

* `.env` file support for secrets and API URLs
* Use Quasar's environment variable system

### Hosting Notes

* Quasar provides fast, SEO-optimized static and dynamic web output
* All code is web-first, with no native mobile dependencies 