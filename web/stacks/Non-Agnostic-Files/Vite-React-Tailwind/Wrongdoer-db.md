# 📘 Stack-Specific Documentation: Vite + React + Tailwind

Tailored documentation for a Vite + React + Tailwind web app for the Scammer & Wrongdoer Database platform.

---

## 📁 1. `technical-spec.md`

### Architecture Overview

* **Frontend**: Vite + React (TypeScript), styled via Tailwind CSS
* **Routing**: React Router (or similar), dynamic `[id].tsx` pages
* **API Interaction**: REST or GraphQL using `fetch` or `axios`
* **SEO**: Manual implementation (React Helmet, meta tags, semantic HTML)

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
| `auth/login.tsx`        | `/api/auth/login`     |
| `profile/[id].tsx`      | `/api/users/:id`      |
| `investigations/create.tsx` | `/api/investigations` |
| `wanted/[id].tsx`       | `/api/wanted/:id`     |

### DB Integration

* No frontend access to DB
* All interactions pass through secure backend API
* PostgreSQL recommended for backend (Prisma, Drizzle, or direct SQL)

---

## 📁 2. `adr-database-choice.md`

### Decision: PostgreSQL via Remote API

**Rationale:**

* Vite-React-Tailwind web apps interact with backend APIs for all data
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