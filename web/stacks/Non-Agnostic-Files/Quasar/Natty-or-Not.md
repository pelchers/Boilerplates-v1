# 📘 Natty-or-Not: Quasar

## 🏗️ Architecture
- **Framework:** Quasar (Vue 3)
- **Styling:** Tailwind CSS (optional, can use Quasar CSS utilities)
- **Routing:** Vue Router (file-based, dynamic routes)
- **State Management:** Pinia (recommended) or Vuex
- **API Integration:** fetch/axios or Pinia actions
- **SEO:** Quasar meta plugin, SSR/SSG support

## 🔌 API Conventions
- Use fetch/axios or Pinia actions for API calls
- JWT stored in HttpOnly cookies or localStorage
- API endpoints prefixed with `/api/`
- Use request/response interceptors for auth headers

## 🧩 Component-API Mapping
| Component               | API Endpoint              |
| ----------------------- | ------------------------- |
| `Login.vue`             | `/api/auth/login`         |
| `Profile/[id].vue`      | `/api/users/:id`          |
| `InvestigationForm.vue` | `/api/investigations`     |
| `WantedProfile.vue`     | `/api/wanted/:id`         |

## 🗄️ DB Integration
- No direct DB access from frontend
- All data via secure backend API
- PostgreSQL recommended (Prisma, Drizzle, or SQL)

## 📝 Stack-Specific Notes
- Use Quasar CLI for scaffolding and builds
- SSR/SSG for SEO and performance
- Environment variables managed via Quasar's system
- Tailwind setup is optional; Quasar CSS utilities are robust

---

## 📁 1. `technical-spec.md`

### Architecture Overview

* **Frontend**: Quasar (Vue 3), styled via Tailwind CSS or Quasar CSS
* **Routing**: Vue Router, dynamic `[id].vue` pages
* **API Interaction**: REST using `fetch`, `axios`, or Pinia/Vuex actions
* **SEO**: Quasar meta plugin, semantic HTML, accessibility

### Key APIs

| Endpoint                | Method | Description                                 |
| ----------------------- | ------ | ------------------------------------------- |
| `/api/auth/login`       | POST   | Login + JWT retrieval                       |
| `/api/users/:id`        | GET    | Dashboard and profile data                  |
| `/api/workouts`         | POST   | Create a new workout                        |
| `/api/posts`            | POST   | Create a new post                           |
| `/api/natty-profiles`   | POST   | Submit a new natty profile                  |
| `/api/natty-eras`       | POST   | Add an era to a natty profile               |
| `/api/natty-votes`      | POST   | Vote natty or not for a profile/era         |

### Component-API Map

| Component               | API Used                |
| ----------------------- | ----------------------- |
| `Login.vue`             | `/api/auth/login`       |
| `Profile/[id].vue`      | `/api/users/:id`        |
| `Workouts/Create.vue`   | `/api/workouts`         |
| `Posts/Create.vue`      | `/api/posts`            |
| `NattyProfiles/Create.vue` | `/api/natty-profiles` |
| `NattyEras/Create.vue`  | `/api/natty-eras`       |
| `VoteButton.vue`        | `/api/natty-votes`      |

### DB Integration

* No frontend access to DB
* All interactions pass through secure backend API
* PostgreSQL recommended for backend (Prisma, Drizzle, or direct SQL)

---

## 📁 2. `adr-database-choice.md`

### Decision: PostgreSQL via Remote API

**Rationale:**

* Quasar web apps interact with backend APIs for all data
* Complex fitness/voting data models demand strict schema + reliable joins

**Alternatives Considered:**

* **Firebase**: Real-time sync, but lacks relational model enforcement
* **MongoDB**: Flexible, but less ideal for relational voting data

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