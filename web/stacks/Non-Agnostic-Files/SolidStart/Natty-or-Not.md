# 📘 Stack-Specific Documentation: SolidStart

Tailored documentation for a SolidStart web app for the Natty or Not platform.

---

## 📁 1. `technical-spec.md`

### Architecture Overview

* **Frontend**: SolidStart (SolidJS), styled via Tailwind CSS
* **Routing**: File-based routing, dynamic `[id].tsx` pages
* **API Interaction**: REST using `fetch`, `axios`, or SolidStart endpoints
* **SEO**: Built-in meta, semantic HTML, accessibility

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
| `Login.tsx`             | `/api/auth/login`       |
| `Profile/[id].tsx`      | `/api/users/:id`        |
| `Workouts/Create.tsx`   | `/api/workouts`         |
| `Posts/Create.tsx`      | `/api/posts`            |
| `NattyProfiles/Create.tsx` | `/api/natty-profiles` |
| `NattyEras/Create.tsx`  | `/api/natty-eras`       |
| `VoteButton.tsx`        | `/api/natty-votes`      |

### DB Integration

* No frontend access to DB
* All interactions pass through secure backend API
* PostgreSQL recommended for backend (Prisma, Drizzle, or direct SQL)

---

## 📁 2. `adr-database-choice.md`

### Decision: PostgreSQL via Remote API

**Rationale:**

* SolidStart web apps interact with backend APIs for all data
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

* Build with SolidStart: `npm run build`
* Deploy to: Vercel, Netlify, or Render.com
* Use SSR/SSG for best SEO and performance

### Backend Hosting

* Node.js + Express (or equivalent) hosted on Render, Railway, or Supabase
* All endpoints authenticated using JWT

### Environment Handling

* `.env` file support for secrets and API URLs
* Use SolidStart's environment variable system

### Hosting Notes

* SolidStart provides fast, SEO-optimized static and dynamic web output
* All code is web-first, with no native mobile dependencies 