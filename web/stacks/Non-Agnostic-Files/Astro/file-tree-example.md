# Astro File Tree Example (Web App)

```
my-natty-or-not-astro-app/
├── src/
│   ├── pages/
│   │   ├── index.astro           # Home page
│   │   ├── explore.astro         # Explore/search page
│   │   ├── about.astro           # About page
│   │   ├── code-of-conduct.astro # Code of Conduct
│   │   ├── admin/
│   │   │   ├── dashboard.astro   # Admin dashboard
│   │   │   ├── users.astro       # User management
│   │   │   └── moderation.astro  # Content moderation
│   │   ├── auth/
│   │   │   ├── login.astro       # Login page
│   │   │   ├── register.astro    # Registration page
│   │   │   └── forgot.astro      # Password reset
│   │   ├── profile/
│   │   │   └── [id].astro        # Dynamic user profile
│   │   ├── workouts/
│   │   │   ├── index.astro       # Workouts list
│   │   │   ├── create.astro      # Create workout
│   │   │   └── [id].astro        # Workout detail
│   │   ├── posts/
│   │   │   ├── index.astro       # Posts feed
│   │   │   ├── create.astro      # Create post
│   │   │   └── [id].astro        # Post detail
│   │   ├── natty-profiles/
│   │   │   ├── index.astro       # Natty profiles list
│   │   │   ├── create.astro      # Submit natty profile
│   │   │   └── [id].astro        # Natty profile detail
│   │   ├── natty-eras/
│   │   │   ├── create.astro      # Add era
│   │   │   └── [id].astro        # Era detail
│   │   ├── votes/
│   │   │   └── [id].astro        # Vote page
│   │   ├── comments/
│   │   │   └── [id].astro        # Comments for posts/profiles/eras
│   │   └── settings.astro        # User settings/theme toggle
│   ├── components/
│   │   ├── PostCard.astro
│   │   ├── WorkoutCard.astro
│   │   ├── NattyProfileCard.astro
│   │   ├── EraCard.astro
│   │   ├── VoteButton.astro
│   │   ├── CommentList.astro
│   │   ├── UserAvatar.astro
│   │   └── ThemeToggle.astro
│   ├── layouts/
│   │   ├── MainLayout.astro
│   │   └── AdminLayout.astro
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
│   ├── styles/
│   │   └── tailwind.css
│   └── utils/
├── public/
│   └── favicon.svg
├── astro.config.mjs
├── package.json
├── tailwind.config.js
├── tsconfig.json
└── README.md
```

**Notes:**
- `pages/` uses Astro's file-based routing for all main screens and dynamic routes.
- `components/` holds reusable UI elements.
- `layouts/` for shared page layouts.
- `api/` abstracts backend API calls (can use Astro endpoints or external APIs).
- `styles/` for Tailwind and custom CSS.
- `utils/` for helper functions.
- SEO and accessibility best practices are built-in via Astro's SSR/SSG and semantic HTML. 