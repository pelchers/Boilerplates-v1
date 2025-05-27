# 📘 Natty-or-Not: Angular

## 🏗️ Architecture
- **Framework:** Angular (TypeScript)
- **Styling:** Tailwind CSS (integrated via PostCSS or Angular plugin)
- **Routing:** Angular Router (file-based or manual route config)
- **State Management:** RxJS, Services, or NgRx (optional)
- **API Integration:** Angular HttpClient (REST/GraphQL)
- **SEO:** Angular Universal (SSR), meta services

## 🔌 API Conventions
- Use Angular's HttpClient for all API calls
- JWT stored in HttpOnly cookies or localStorage
- API endpoints prefixed with `/api/`
- Use Angular interceptors for auth headers

## 🧩 Component-API Mapping
| Component                        | API Endpoint              |
| -------------------------------- | ------------------------- |
| `login.component.ts`             | `/api/auth/login`         |
| `profile/[id].component.ts`      | `/api/users/:id`          |
| `investigation-form.component.ts`| `/api/investigations`     |
| `wanted-profile.component.ts`    | `/api/wanted/:id`         |

## 🗄️ DB Integration
- No direct DB access from frontend
- All data via secure backend API
- PostgreSQL recommended (Prisma, Drizzle, or SQL)

## 📝 Stack-Specific Notes
- Use Angular CLI for scaffolding and builds
- SSR via Angular Universal for SEO
- Environment variables managed via `environment.ts` files
- Tailwind setup may require custom configuration

# 📘 Stack-Specific Documentation: Angular

Tailored documentation for an Angular web app for the Natty or Not platform.

---

## 📁 1. `technical-spec.md`

### Architecture Overview

* **Frontend**: Angular (TypeScript), styled via Tailwind CSS
* **Routing**: Angular Router, dynamic `[id].component.ts` pages
* **API Interaction**: REST using Angular HttpClient
* **SEO**: Angular Universal (SSR), meta services, semantic HTML, accessibility

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
| `login.component.ts`    | `/api/auth/login`       |
| `profile/[id].component.ts` | `/api/users/:id`    |
| `workouts/create.component.ts` | `/api/workouts`  |
| `posts/create.component.ts` | `/api/posts`        |
| `natty-profiles/create.component.ts` | `/api/natty-profiles` |
| `natty-eras/create.component.ts` | `/api/natty-eras` |
| `vote-button.component.ts` | `/api/natty-votes`   |

### DB Integration

* No frontend access to DB
* All interactions pass through secure backend API
* PostgreSQL recommended for backend (Prisma, Drizzle, or direct SQL)

---

## 📁 2. `adr-database-choice.md`

### Decision: PostgreSQL via Remote API

**Rationale:**

* Angular web apps interact with backend APIs for all data
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

* Build with Angular CLI: `ng build --configuration production`
* Deploy to: Vercel, Netlify, or Render.com
* Use Angular Universal for SSR for best SEO and performance

### Backend Hosting

* Node.js + Express (or equivalent) hosted on Render, Railway, or Supabase
* All endpoints authenticated using JWT

### Environment Handling

* `.env` file support for secrets and API URLs
* Use Angular's environment system

### Hosting Notes

* Angular provides fast, SEO-optimized static and dynamic web output
* All code is web-first, with no native mobile dependencies 