# Nuxt 3 File Tree Example (Web App)

```
my-natty-or-not-nuxt-app/
├── pages/
│   ├── index.vue               # Home page
│   ├── explore.vue             # Explore/search page
│   ├── about.vue               # About page
│   ├── code-of-conduct.vue     # Code of Conduct
│   ├── admin/
│   │   ├── dashboard.vue       # Admin dashboard
│   │   ├── users.vue           # User management
│   │   └── moderation.vue      # Content moderation
│   ├── auth/
│   │   ├── login.vue           # Login page
│   │   ├── register.vue        # Registration page
│   │   └── forgot.vue          # Password reset
│   ├── profile/
│   │   └── [id].vue            # Dynamic user profile
│   ├── workouts/
│   │   ├── index.vue           # Workouts list
│   │   ├── create.vue          # Create workout
│   │   └── [id].vue            # Workout detail
│   ├── posts/
│   │   ├── index.vue           # Posts feed
│   │   ├── create.vue          # Create post
│   │   └── [id].vue            # Post detail
│   ├── natty-profiles/
│   │   ├── index.vue           # Natty profiles list
│   │   ├── create.vue          # Submit natty profile
│   │   └── [id].vue            # Natty profile detail
│   ├── natty-eras/
│   │   ├── create.vue          # Add era
│   │   └── [id].vue            # Era detail
│   ├── votes/
│   │   └── [id].vue            # Vote page
│   ├── comments/
│   │   └── [id].vue            # Comments for posts/profiles/eras
│   └── settings.vue            # User settings/theme toggle
├── components/
│   ├── PostCard.vue
│   ├── WorkoutCard.vue
│   ├── NattyProfileCard.vue
│   ├── EraCard.vue
│   ├── VoteButton.vue
│   ├── CommentList.vue
│   ├── UserAvatar.vue
│   └── ThemeToggle.vue
├── layouts/
│   ├── default.vue
│   └── admin.vue
├── composables/
│   └── useAuth.ts              # Example composable
├── server/
│   ├── api/
│   │   ├── auth.ts
│   │   ├── users.ts
│   │   ├── workouts.ts
│   │   ├── posts.ts
│   │   ├── nattyProfiles.ts
│   │   ├── eras.ts
│   │   ├── votes.ts
│   │   ├── comments.ts
│   │   └── admin.ts
├── store/
│   └── index.ts                # Pinia store setup
├── assets/
│   └── tailwind.css
├── public/
│   └── favicon.svg
├── nuxt.config.ts
├── package.json
├── tailwind.config.js
├── tsconfig.json
└── README.md
```

**Notes:**
- `pages/` and Nuxt file-based routing for all main screens and dynamic routes.
- `components/` holds reusable UI elements.
- `layouts/` for shared page layouts.
- `composables/` for reusable logic (Nuxt 3 convention).
- `server/api/` for backend API endpoints (can be used for SSR or API routes).
- `store/` for Pinia state management.
- `assets/` for Tailwind and custom CSS.
- `public/` for static assets.
- SEO and accessibility best practices are supported via Nuxt's Head component and semantic HTML. 