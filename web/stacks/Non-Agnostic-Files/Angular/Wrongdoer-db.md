# 📘 Stack-Specific Documentation: Angular

Tailored documentation for an Angular web app for the Scammer & Wrongdoer Database platform.

---

## 📁 1. `technical-spec.md`

### Architecture Overview

* **Frontend**: Angular (TypeScript), styled via Tailwind CSS
* **Routing**: Angular Router, dynamic `[id].component.ts` pages
* **API Interaction**: REST or GraphQL using Angular HttpClient
* **SEO**: Angular Universal (SSR), meta services, semantic HTML, accessibility

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
| `login.component.ts`    | `/api/auth/login`     |
| `profile/[id].component.ts` | `/api/users/:id`  |
| `investigation-form.component.ts` | `/api/investigations` |
| `wanted-profile.component.ts` | `/api/wanted/:id` |

### DB Integration

* No frontend access to DB
* All interactions pass through secure backend API
* PostgreSQL recommended for backend (Prisma, Drizzle, or direct SQL)

---

## 📁 2. `adr-database-choice.md`

### Decision: PostgreSQL via Remote API

**Rationale:**

* Angular web apps interact with backend APIs for all data
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