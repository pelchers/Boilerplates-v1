# Natty or Not Astro — Comprehensive File Tree

```
my-natty-or-not-astro-app/
├── src/
│   ├── pages/
│   │   ├── index.astro           # Home page (feed)
│   │   ├── explore.astro         # Explore/search natty profiles
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
│   │   │   ├── create.astro      # Add era to natty profile
│   │   │   └── [id].astro        # Era detail
│   │   ├── votes/
│   │   │   └── [id].astro        # Vote on natty profile/era
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
- All major features from the PRD are represented as folders/pages.
- `components/` holds reusable UI elements for posts, workouts, natty profiles, voting, etc.
- `api/` abstracts all backend API calls, including auth, users, content, voting, and admin.
- `styles/` and `ThemeToggle.astro` support theming and base style configuration.
- Admin, moderation, and code of conduct are included as per PRD. 