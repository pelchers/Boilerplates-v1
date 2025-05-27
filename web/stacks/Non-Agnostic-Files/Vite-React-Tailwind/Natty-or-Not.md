# 📘 Stack-Specific Documentation: Vite + React + Tailwind

Tailored documentation for a Vite + React + Tailwind web app for the Natty or Not platform.

---

## 📁 1. `technical-spec.md`

### Architecture Overview

* **Frontend**: Vite + React (TypeScript), styled via Tailwind CSS
* **Routing**: React Router (or similar), dynamic `[id].tsx` pages
* **API Interaction**: REST using `fetch` or `axios`
* **SEO**: Manual implementation (React Helmet, meta tags, semantic HTML)

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
| `auth/login.tsx`        | `/api/auth/login`       |
| `profile/[id].tsx`      | `/api/users/:id`        |
| `workouts/create.tsx`   | `/api/workouts`         |
| `posts/create.tsx`      | `/api/posts`            |
| `natty-profiles/create.tsx` | `/api/natty-profiles` |
| `natty-eras/create.tsx` | `/api/natty-eras`       |
| `VoteButton.tsx`        | `/api/natty-votes`      |

### DB Integration

* No frontend access to DB
* All interactions pass through secure backend API
* PostgreSQL recommended for backend (Prisma, Drizzle, or direct SQL)

---

## 📁 2. `adr-database-choice.md`

### Decision: PostgreSQL via Remote API

**Rationale:**

* Vite-React-Tailwind web apps interact with backend APIs for all data
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

* Build with Vite: `npm run build`
* Deploy to: Netlify, Vercel, or Render.com
* Use static export or SSR as needed

### Backend Hosting

* Node.js + Express (or equivalent) hosted on Render, Railway, or Supabase
* All endpoints authenticated using JWT

### Environment Handling

* `.env` file support for secrets and API URLs
* Use Vite environment variable system (`VITE_` prefix)

### Hosting Notes

* Vite provides fast, optimized static and dynamic web output
* All code is web-first, with no native mobile dependencies 