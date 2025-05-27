# 📚 Stack-Agnostic Documentation Bundle for Scammer & Wrongdoer Database Platform

This document contains the **comprehensive, pre-development files** that are independent of the chosen technical stack. These documents define product intent, features, milestones, and design logic to guide any future implementation — regardless of platform.

---

## 🔍 Matrix: Stack-Agnostic vs Stack-Specific

| File/Filename Stack Agnostic Stack Dependent Notes |            |            |                                                               |
| -------------------------------------------------- | ---------- | ---------- | ------------------------------------------------------------- |
| `prd.md`                                           | ✅ Yes      |            | Product vision, audience, and features remain constant.       |
| `technical-spec.md`                                |            | ✅ Yes      | Routes, services, and architecture vary by stack.             |
| `srs.docx`                                         | ✅ Yes      |            | Functional/Non-functional specs defined independent of stack. |
| `sow.md`                                           | ✅ Yes      |            | Deliverables, roles, and scope not stack-related.             |
| `adr-database-choice.md`                           |            | ✅ Yes      | Justifies tech-specific DB and tradeoffs.                     |
| `user-stories.json`                                | ✅ Yes      |            | Role-function mappings stay the same across stacks.           |
| `ui-specs/`                                        | ⚠️ Partial | ⚠️ Partial | Design remains shared, but layout may shift slightly.         |
| `milestones-timeline.md`                           | ✅ Yes      |            | Timeline phases unaffected by stack unless changed.           |

> ❗ `dev-notes/README.md` will be generated after development is complete, to reflect actual architecture, setup, and structure.

---

## 1. `prd.md` — Product Requirements Document

### 📝 Project Title

**Scammer & Wrongdoer Database Platform**

### 🎯 Purpose & Vision

To build a trustworthy, community-driven investigative platform where:

* Users of different expertise (investigators, journalists, developers, etc.) contribute to uncovering and exposing scammers or wrongdoers
* Collaboration, transparency, and evidence-based reporting form the backbone of case building
* Donation-based prioritization helps focus public attention on the most impactful actors
* Users can engage with rich data, contribute to multi-format storytelling, and trace scam patterns across time

### 📊 Platform Feature Access Matrix

All users can perform all actions on the site, with permissions gated by status (e.g., verified, public vs private content) rather than user type.

| Functionality Description Common Roles Engaged |                                                                         |                                  |
| ---------------------------------------------- | ----------------------------------------------------------------------- | -------------------------------- |
| Create Investigations                          | Start private/public collaborative case with media, tags, collaborators | Investigator, Expert, Journalist |
| Submit Reports                                 | Public or private summaries, witness accounts, memos                    | All types (including Victim)     |
| Follow/Watch                                   | Track users, wanted profiles, investigations                            | Supporters, Creators, Analysts   |
| Donate to Wanted Profiles                      | Boost visibility via donation                                           | Supporters, Victims              |
| Upload Evidence                                | Images, chat logs, PDFs                                                 | Scam Baiters, Investigators      |
| Moderate Content                               | Flag, remove, promote entries                                           | Admins, Moderators               |
| Create Newsletter/Media                        | Write platform updates or public briefings                              | Journalists, Content Creators    |

### 🧩 Expanded Feature Set

#### 🔐 JWT Auth + Profile

* Register/login with email & password
* Role selection & profile enrichment (bio, tags, experience)
* JWT-based token stored in local/session storage
* Route protection for private pages
* Avatar dropdown with full state-based menu (login vs logout)

#### 👤 User Dashboard

* View editable profile
* Tabs for:

  * Profile Info
  * Following / Followers
  * Watchlist (Investigations, Wanted)
  * Reports submitted
  * Investigations participated in
  * Donations history

#### 📇 Wanted Directory

* Cards for each individual/org
* Tags: scam type, status, aliases, location
* Wanted level bar (raised via donations)
* CTAs:

  * View Profile
  * Donate
  * Watch
  * Link to related investigations & reports

#### 🕵️ Investigations

* Fields: title, summary, status, tags, creator, collaborators
* File uploader (docs, images, videos)
* Threaded discussion for collaborators
* Link reports, wanted IDs, tags
* Status toggles: in_development, in_progress, complete, on_hold
* Outcome: success, partial_success, failure, undefined
* Visibility toggle (public/private)
* Invite by username
* Collaborator role permissions (view/comment/edit)

#### 📝 Reports

* WYSIWYG or Markdown editor
* Report types:

  * Threat Assessment
  * Victim Statement
  * Whistleblower Memo
  * Investigation Summary
  * Public Brief
  * More...
* Tags, visibility settings
* Author credit or anonymous
* Link to multiple entities: user, wanted, investigation

#### 💸 Donations

* Donate to any wanted entity
* Donation label/intent field
* Anonymous donation option
* Aggregate "wanted level" per target

#### 🧭 Explore

* Sections:

  * Wanted
  * Reports
  * Investigations
  * Users
* Filtering by:

  * Role
  * Tags
  * Location
  * Status
  * Date created
* Sort by: most followed, most watched, most wanted

#### 📬 Newsletter

* Subscribe via Contact form (checkbox)
* `newsletter_recipients` table: email + name + opt-in date
* `newsletters` table: title, content, format, sent_at, preview
* 5 display formats toggle:

  * Web
  * Letter
  * Newspaper
  * Comic
  * Card

#### 🖥️ Admin Controls

* View reported/inappropriate content
* Delete entries
* Manage users (roles, bans)
* Post system-wide messages

#### 🧾 Code of Conduct

* Dedicated page
* Linked in navbar dropdown
* Includes community rules, investigative ethics, evidence handling principles

### 🧪 Testing Coverage

* Zod validation schemas
* DB constraints (relational integrity)
* Protected route coverage
* Form input validation
* Format rendering for newsletters

### 📌 Related Docs

* [`technical-spec.md`](https://chatgpt.com/c/technical-spec.md)
* [`srs.docx`](https://chatgpt.com/c/srs.docx)
* [`dev-notes/README.md`](https://chatgpt.com/c/dev-notes/README.md)

---

The remaining documents (`srs.docx`, `sow.md`, `user-stories.json`, etc.) will now be rewritten to match this level of depth in follow-up files or appended here if requested.

---

## 2. `srs.docx` — Software Requirements Specification

### 📐 Functional Requirements

#### 🔐 Authentication

* Login via email + password
* JWT token-based session (expires after 1 hour, refresh optional)
* Role assigned on registration or later approval (Investigator, Journalist, Victim, Supporter, Admin)
* Form validation with live error messages (email, password strength)

#### 👥 User Profile & Dashboard

* Profile tab with editable bio, tags, photo upload
* View and manage investigations and reports the user is linked to
* Donations history (sortable by entity, date, amount)
* Follow/unfollow lists

#### 🕵️ Investigations

* CRUD operations with per-role permission control (e.g., comment-only vs full-edit)
* File upload UI with preview and attachment tagging
* Visibility toggles per collaborator and status logic enforcement (e.g., only "complete" cases can be made public)

#### 📝 Reports

* Multi-type submission with pre-filled templates
* Markdown/WYSIWYG toggle, autosave, tag selector
* Draft/publish state system
* Public or private designation
* Moderation triggers for flagged terms, anonymity checks

#### 📇 Wanted Entities

* Donation-driven "wanted level" scoring
* Cards update dynamically via API
* Tabbed display of linked cases, reports, aliases, locations
* View-only for anonymous users; follow/watch/login required to interact

#### 🧭 Explore Page

* Search: fuzzy match, autocomplete tags
* Filters: multiple facet selectors (AND/OR logic)
* Sorting: relevance, donations, watches, recency
* Cross-entity highlighting (e.g., show all wanted targets connected to a given investigation)

#### 🧾 Admin Tools

* Role management
* Moderation queue with context links
* Content audit logs
* Ban/mute system with appeal workflow
* Platform-wide message board editor

### 🧮 Non-Functional Requirements

* **Availability**: 99.9% uptime expected, cloud autoscaling supported
* **Accessibility**: WCAG 2.1 AA compliant
* **Performance**: SPA renders interactive views within 300ms; image-heavy dashboards within 750ms
* **Security**: HTTPS required; no plain-text tokens; file validation & virus scan on all uploads
* **Scalability**: Modular microservice-ready backend; pagination APIs

### 🚫 System Constraints

* Max file upload per user: 5 files of 50MB per investigation
* Max report length: 20,000 characters
* API rate limit: 300 requests/user/hour
* Archived content preserved in immutable DB tier

### 🔁 Input/Output Behavior

* **Login**: `{email, password} → JWT`
* **Investigation**: `{title, tags, collaborators} → Case ID + timeline status`
* **Newsletter**: `{title, markdown} → formatted preview → queued email`
* **Donation**: `{amount, label, user_id} → updated "wanted level"` stored in aggregate table

---

## 3. `sow.md` — Scope of Work

### 🏁 Project Definition

A web + mobile-friendly investigative database platform designed to manage reports, investigations, scammer profiles, and cross-functional roles in a secure, collaborative, and data-rich format.

### 📅 Timeline Phases

| Phase | Time Estimate | Key Deliverables                             |
| ----- | ------------- | -------------------------------------------- |
| 1     | 1 week        | Auth flow, dashboard shell, role selector    |
| 2     | 2 weeks       | Wanted entity system, explore page filters   |
| 3     | 1.5 weeks     | Investigations editor, invite logic          |
| 4     | 1 week        | Reports system, newsletter engine            |
| 5     | 1+ week       | Admin tools, moderation, deployment pipeline |

### 🔄 Revision & QA Windows

* 1 day per sprint for bug triage
* Weekly sprint reviews and retro

### 🧑 Team Assignments

| Role             | Responsibility                                      |
| ---------------- | --------------------------------------------------- |
| Project Lead     | Sprint structure, velocity estimation, roadmap      |
| Fullstack Dev    | Auth, DB schema, route API logic                    |
| Frontend Dev     | Component building, styling, mobile responsiveness  |
| Content Admin    | Seeding database, validating example data           |
| QA / Tester      | Automated form testing, endpoint coverage reports   |
| DevOps / Hosting | CI/CD pipeline setup, domain provisioning, env mgmt |

---

## 4. `user-stories.json`

```json
[
  {
    "role": "Journalist",
    "feature": "Create and publish public briefings",
    "benefit": "to inform the public about threats or trends"
  },
  {
    "role": "Victim",
    "feature": "Submit a secure and anonymous report",
    "benefit": "to tell their story while remaining protected"
  },
  {
    "role": "Investigator",
    "feature": "Create and manage collaborative investigations",
    "benefit": "to document, verify, and expose wrongdoing"
  },
  {
    "role": "Admin",
    "feature": "Flag and moderate unsafe content",
    "benefit": "to maintain trust, civility, and legal compliance"
  },
  {
    "role": "Supporter",
    "feature": "Donate to wanted profiles",
    "benefit": "to boost visibility and investigative priority"
  }
]
```

---

Would you like `ui-specs/` or `milestones-timeline.md` expanded next with the same level of complexity?

...

## 5. `ui-specs/` — Interface & Design Specifications

### 🖼️ Visual Structure

* **App Shell**

  * Navigation:

    * Desktop: vertical sidebar with icons + labels
    * Mobile: bottom tab bar, collapsible drawer
  * Header (all views): global search + user menu dropdown
* **Key Screens**

#### Login & Onboarding

* Login form with validation, error messaging, and password show toggle
* Register form with role selection dropdown
* Optional welcome modal post-login with quick links

#### Dashboard

* Tabbed interface:

  * Profile (editable bio/tags)
  * Activity log (recent follows, reports, donations)
  * Watchlist (cards linked to wanted or investigation pages)

#### Explore Page

* Top tabs:

  * Wanted, Reports, Investigations, Users
* Filters (left sidebar on desktop, collapsible on mobile):

  * Role, Date Range, Status, Tags, Location
* Card previews:

  * Tag chips, action buttons (Watch, Donate, Link)

#### Investigation Builder

* Multistep form UX (title → media → tags → invite → submit)
* Auto-save per step
* Markdown preview tab for summary text

#### Report Editor

* Editor toggle: Markdown or Rich Text
* Dynamic type dropdown (e.g., Threat Assessment, Victim Memo)
* Public/private toggle switch
* Media preview embed area

#### Wanted Directory

* Grid and list views with search toggle
* Donation bars with thresholds and ranks
* "Most Wanted" badge system by percentile

#### Admin Panel

* Table layout with pagination
* Tabs:

  * Flagged Content
  * Role Requests
  * System Announcements
* Modal-based content editor with audit preview

### 📱 Responsive Behavior

* All components tested down to 360px wide (Android S width)
* Layouts collapse in this order: sidebar → filters → tabs
* Contextual modals scale dynamically to viewport height
* Mobile action menus grouped under floating FAB + icon grid

### 🎨 Style System

* Theme tokens:

  * Primary: #003366 (deep blue)
  * Accent: #FFCA3A (golden yellow)
  * Danger: #FF595E (warning red)
* Typography:

  * Headings: Inter, semi-bold
  * Body: Roboto, regular/medium
  * Monospace: JetBrains Mono for code snippets
* Dark mode: automatic toggle via system preference, persists in `localStorage`

---

## 6. `milestones-timeline.md`

### 🗂️ Development Phases

#### ✅ Phase 1: Auth & User Flow

* Implement email/password registration
* Role selector during onboarding
* JWT session storage + logout logic
* Build Dashboard shell (tabs, profile UI, route guards)

#### 🧭 Phase 2: Wanted Directory + Explore

* Wanted page (grid/list, filters, donation tracker)
* Explore page scaffold with shared filters + tabs
* Full search bar with debounced query to `/search`
* Tag chip filters with OR/AND logic support

#### 🕵️ Phase 3: Investigations

* Create form with file uploader
* Collaborator manager with inline permissions
* Status timeline component with icons
* Investigation detail page with nested report list

#### 📝 Phase 4: Reports + Newsletter

* Editor: dual-mode Markdown + rich text
* Submission flow + auto-draft saving
* Newsletter editor (5 formats toggle)
* Opt-in system for subscriber storage

#### 🚦 Phase 5: Admin Panel + Final Hosting

* Flagged report moderation queue
* User role escalation logic + bans
* Global messaging announcement system
* Connect to Render/Vercel + CI/CD scripts

---

The stack-agnostic documentation set is now complete at full specification depth.
Let me know if you'd like it exported to GitHub, zipped as folders, or seeded into a starter app repo. 