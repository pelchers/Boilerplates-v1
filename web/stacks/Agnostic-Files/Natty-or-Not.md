# 📚 Stack-Agnostic Documentation Bundle for Natty or Not Platform

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

**Natty or Not Platform**

### 🎯 Purpose & Vision

To build a trustworthy, community-driven fitness and gym culture platform where:

* Users of all backgrounds (influencer, trainer, athlete, casual, etc.) can join, create detailed profiles, share workouts and posts, follow others, and participate in the "Natty or Not" voting system for public gym culture figures.
* Collaboration, transparency, and evidence-based voting form the backbone of the community.
* Users can engage with rich data, contribute to multi-format storytelling, and trace fitness journeys and transformations across time.

### 📊 Platform Feature Access Matrix

All users can perform all actions on the site, with permissions gated by status (e.g., verified, public vs private content) rather than user type.

| Functionality Description Common Roles Engaged |                                                                         |                                  |
| ---------------------------------------------- | ----------------------------------------------------------------------- | -------------------------------- |
| Create Profiles                               | Start/edit personal or public figure profiles with media, stats, eras   | All users                       |
| Submit Workouts                               | Upload, share, and tag regular workouts                                | All users                       |
| Create Posts                                  | Share text, images, or video posts                                      | All users                       |
| Follow/Unfollow                               | Track other users and public figures                                    | All users                       |
| Vote Natty or Not                             | Vote on public figures or eras                                          | All users                       |
| Comment & Like                                | Interact with posts, profiles, and eras                                 | All users                       |
| Moderate Content                              | Flag, remove, promote entries                                           | Admins, Moderators              |
| Search & Filter                               | Explore users, posts, and natty profiles                                | All users                       |

### 🧩 Expanded Feature Set

#### 🔐 JWT Auth + Profile
* Register/login with email & password
* User type selection & profile enrichment (bio, stats, gym focus, social links)
* JWT-based token stored in local/session storage
* Route protection for private pages
* Avatar dropdown with full state-based menu (login vs logout)

#### 👤 User Dashboard
* View editable profile
* Tabs for:
  * Profile Info
  * Workouts
  * Posts
  * Followers / Following
  * Natty or Not votes
  * History & Achievements

#### 🏋️ Workouts
* Upload, tag, and describe regular workouts
* Fields: title, type, duration, intensity, exercises (sets, reps, weight)
* Media support (images, video)

#### 📝 Posts
* Create posts with text, images, or videos
* Like, comment, and share posts
* Feed page with infinite scroll

#### 🧑‍🤝‍🧑 Following
* Follow/unfollow users and public figures
* See posts and updates from followed users in feed

#### 🏆 Natty or Not Voting
* Submit public figures for natty or not voting
* Add eras to a natty profile (e.g., "2015-2018")
* Vote natty or not for a profile or a specific era
* Vote tallies displayed on user cards in explore/feed
* Comment and discuss on profiles/eras

#### 🧭 Explore
* Search and filter for users, posts, and natty profiles
* Display user cards with vote results
* Sort by most voted, most followed, recent, etc.

#### 🖥️ Admin Controls
* View reported/inappropriate content
* Delete entries
* Manage users (roles, bans)
* Post system-wide messages

#### 🧾 Code of Conduct
* Dedicated page
* Linked in navbar dropdown
* Includes community rules, fitness ethics, evidence handling principles

### 🧪 Testing Coverage
* Validation schemas
* DB constraints (relational integrity)
* Protected route coverage
* Form input validation

---

## 2. `srs.docx` — Software Requirements Specification

### 📐 Functional Requirements

#### 🔐 Authentication
* Login via email + password
* JWT token-based session (expires after 1 hour, refresh optional)
* User type assigned on registration
* Form validation with live error messages (email, password strength)

#### 👥 User Profile & Dashboard
* Profile tab with editable bio, stats, gym focus, social links
* View and manage workouts, posts, votes, and followers

#### 🏋️ Workouts
* CRUD operations for workouts
* Media upload UI with preview
* Tagging and categorization

#### 📝 Posts
* CRUD operations for posts
* Like, comment, and share
* Feed with infinite scroll

#### 🏆 Natty or Not Voting
* Submit public figures
* Add eras to profiles
* Vote natty or not for profiles/eras
* View vote tallies and history
* Comment on profiles/eras

#### 🧭 Explore Page
* Search: fuzzy match, autocomplete tags
* Filters: user type, gym focus, era, vote status
* Sorting: most voted, most followed, recent

#### 🧾 Admin Tools
* Role management
* Moderation queue
* Content audit logs
* Ban/mute system
* Platform-wide message board editor

### 🧮 Non-Functional Requirements
* **Availability**: 99.9% uptime expected
* **Accessibility**: WCAG 2.1 AA compliant
* **Performance**: SPA renders interactive views within 300ms
* **Security**: HTTPS required; no plain-text tokens; file validation & virus scan on all uploads
* **Scalability**: Modular backend; pagination APIs

### 🚫 System Constraints
* Max file upload per user: 10 files of 50MB per workout/post
* Max post length: 10,000 characters
* API rate limit: 300 requests/user/hour
* Archived content preserved in immutable DB tier

### 🔁 Input/Output Behavior
* **Login**: `{email, password} → JWT`
* **Workout**: `{title, type, exercises} → Workout ID + stats`
* **Vote**: `{profileId, eraId, value} → updated tally`

---

## 3. `sow.md` — Scope of Work

### 🏁 Project Definition
A web + mobile-friendly fitness and gym culture platform designed to manage user profiles, workouts, posts, natty or not voting, and social interactions in a secure, collaborative, and data-rich format.

### 📅 Timeline Phases
| Phase | Time Estimate | Key Deliverables                             |
| ----- | ------------- | -------------------------------------------- |
| 1     | 1 week        | Auth flow, dashboard shell, profile editor   |
| 2     | 2 weeks       | Workouts, posts, following system            |
| 3     | 1.5 weeks     | Natty or Not voting, explore page            |
| 4     | 1 week        | Comments, likes, feed, search                |
| 5     | 1+ week       | Admin tools, moderation, deployment pipeline |

### 🔄 Revision & QA Windows
* 1 day per sprint for bug triage
* Weekly sprint reviews and retro

### 🧑 Team Assignments
| Role             | Responsibility                                      |
| ---------------- | --------------------------------------------------- |
| Product Owner    | Sprint structure, velocity estimation, roadmap      |
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
    "role": "User",
    "feature": "Create and update profile",
    "benefit": "to share my fitness journey and connect with others"
  },
  {
    "role": "User",
    "feature": "Upload and share workouts",
    "benefit": "to track progress and inspire others"
  },
  {
    "role": "User",
    "feature": "Create posts and follow others",
    "benefit": "to engage with the community"
  },
  {
    "role": "User",
    "feature": "Vote natty or not on public figures and eras",
    "benefit": "to contribute to community knowledge and discussion"
  },
  {
    "role": "Admin",
    "feature": "Moderate content and manage users",
    "benefit": "to ensure a safe and positive environment"
  }
]
```

---

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
* Register form with user type and gym focus selection
* Optional welcome modal post-login with quick links

#### Dashboard
* Tabbed interface:
  * Profile (editable bio/stats)
  * Workouts
  * Posts
  * Votes
  * Followers/Following

#### Explore Page
* Top tabs:
  * Users, Workouts, Posts, Natty Profiles
* Filters (left sidebar on desktop, collapsible on mobile):
  * User type, Gym focus, Era, Vote status
* Card previews:
  * Stat chips, action buttons (Follow, Vote, Comment)

#### Natty Profile Builder
* Multistep form UX (profile → eras → media → submit)
* Auto-save per step
* Markdown preview tab for bio/summary

#### Post & Workout Editors
* Editor toggle: Markdown or Rich Text
* Media upload area
* Tag selector, privacy toggle

#### Admin Panel
* Table layout with pagination
* Tabs:
  * Flagged Content
  * User Management
  * System Announcements
* Modal-based content editor with audit preview

### 📱 Responsive Behavior
* All components tested down to 360px wide (Android S width)
* Layouts collapse in this order: sidebar → filters → tabs
* Contextual modals scale dynamically to viewport height
* Mobile action menus grouped under floating FAB + icon grid

### 🎨 Style System
* Theme tokens:
  * Primary: #1A202C (deep gray)
  * Accent: #38B2AC (teal)
  * Danger: #E53E3E (red)
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
* User type and gym focus selector during onboarding
* JWT session storage + logout logic
* Build Dashboard shell (tabs, profile UI, route guards)

#### 🏋️ Phase 2: Workouts, Posts & Following
* Workouts page (list, filters, upload)
* Posts page (feed, create, like, comment)
* Following system
* Tag chip filters with OR/AND logic support

#### 🏆 Phase 3: Natty or Not Voting & Explore
* Natty profiles and eras (create, edit, vote)
* Explore page scaffold with shared filters + tabs
* Full search bar with debounced query

#### 📝 Phase 4: Comments, Likes, Admin Tools
* Commenting system (posts, profiles, eras)
* Like system (posts, comments)
* Admin panel (moderation, user management)

#### 🚦 Phase 5: Final Hosting & QA
* Connect to Render/Vercel + CI/CD scripts
* Final QA, accessibility, and performance checks

---

## 7. `prd-db.md` — Database Schema

### users
- id: Primary key
- username: Unique username
- email: User's email address
- password: Hashed password (JWT-based auth)
- profilePhoto: URL to profile photo
- bannerPhoto: URL to banner image
- userType: User type (influencer, trainer, athlete, etc.)
- gymFocus: Array of gym focus areas (bodybuilding, calisthenics, etc.)
- demographics: JSON (age, gender, pronouns, location, ethnicity)
- bio: User's biography
- history: Training/gym history
- motivation: Why user joined gym culture
- goals: Fitness goals
- achievements: Achievements/awards
- transformationStory: Text or URL
- socialLinks: JSON (Instagram, YouTube, etc.)
- createdAt: Account creation timestamp
- updatedAt: Last update timestamp

### posts
- id: Primary key
- userId: Author's user ID
- content: Post content (text)
- media: Array of media URLs (images, videos)
- createdAt: Creation timestamp
- updatedAt: Update timestamp

### follows
- id: Primary key
- userId: User being followed
- followerId: User who is following
- createdAt: Timestamp

### workouts
- id: Primary key
- userId: User who uploaded
- title: Workout title
- description: Workout description
- type: Workout type (e.g., strength, cardio)
- duration: Duration in minutes
- intensity: Intensity level
- exercises: JSON array (exercise name, sets, reps, weight, etc.)
- createdAt: Creation timestamp

### natty_profiles
- id: Primary key
- name: Public figure's name
- submittedBy: User ID who submitted
- description: Bio/summary
- profilePhoto: URL to profile photo
- createdAt: Creation timestamp
- updatedAt: Update timestamp

### natty_eras
- id: Primary key
- nattyProfileId: Foreign key to natty_profiles
- title: Era title (e.g., "2015-2018")
- years: Text or range
- description: Era description
- media: Array of media URLs
- createdAt: Creation timestamp

### natty_votes
- id: Primary key
- userId: User who voted
- nattyProfileId: Profile being voted on
- eraId: Era being voted on (nullable)
- value: Enum ('natty', 'not')
- createdAt: Timestamp

### comments
- id: Primary key
- userId: Author's user ID
- postId: Post ID (nullable)
- nattyProfileId: Natty profile ID (nullable)
- eraId: Era ID (nullable)
- content: Comment content
- parentId: Parent comment ID (for nested comments)
- createdAt: Creation timestamp
- updatedAt: Update timestamp

### likes
- id: Primary key
- userId: User who liked
- postId: Post ID (nullable)
- commentId: Comment ID (nullable)
- createdAt: Timestamp

### admin_users
- id: Primary key
- username: Admin username
- email: Admin email
- password: Hashed password
- role: Enum ('admin', 'moderator')
- createdAt: Timestamp

### Relationships
- A user can have many posts, workouts, comments, likes, followers, and natty profile submissions.
- A post can have many comments and likes.
- A natty profile can have many eras, votes, and comments.
- An era can have many votes and comments.
- A vote must be for either a natty profile or a specific era.
- Follower relationships are many-to-many between users.
- Comments can be nested via parentId. 