# SolidStart File Tree Example (Web App)

```
my-natty-or-not-solidstart-app/
├── src/
│   ├── routes/
│   │   ├── index.tsx               # Home page
│   │   ├── explore.tsx             # Explore/search page
│   │   ├── about.tsx               # About page
│   │   ├── code-of-conduct.tsx     # Code of Conduct
│   │   ├── admin/
│   │   │   ├── dashboard.tsx       # Admin dashboard
│   │   │   ├── users.tsx           # User management
│   │   │   └── moderation.tsx      # Content moderation
│   │   ├── auth/
│   │   │   ├── login.tsx           # Login page
│   │   │   ├── register.tsx        # Registration page
│   │   │   └── forgot.tsx          # Password reset
│   │   ├── profile/
│   │   │   └── [id].tsx            # Dynamic user profile
│   │   ├── workouts/
│   │   │   ├── index.tsx           # Workouts list
│   │   │   ├── create.tsx          # Create workout
│   │   │   └── [id].tsx            # Workout detail
│   │   ├── posts/
│   │   │   ├── index.tsx           # Posts feed
│   │   │   ├── create.tsx          # Create post
│   │   │   └── [id].tsx            # Post detail
│   │   ├── natty-profiles/
│   │   │   ├── index.tsx           # Natty profiles list
│   │   │   ├── create.tsx          # Submit natty profile
│   │   │   └── [id].tsx            # Natty profile detail
│   │   ├── natty-eras/
│   │   │   ├── create.tsx          # Add era
│   │   │   └── [id].tsx            # Era detail
│   │   ├── votes/
│   │   │   └── [id].tsx            # Vote page
│   │   ├── comments/
│   │   │   └── [id].tsx            # Comments for posts/profiles/eras
│   │   └── settings.tsx            # User settings/theme toggle
│   ├── components/
│   │   ├── PostCard.tsx
│   │   ├── WorkoutCard.tsx
│   │   ├── NattyProfileCard.tsx
│   │   ├── EraCard.tsx
│   │   ├── VoteButton.tsx
│   │   ├── CommentList.tsx
│   │   ├── UserAvatar.tsx
│   │   └── ThemeToggle.tsx
│   ├── layouts/
│   │   ├── MainLayout.tsx
│   │   └── AdminLayout.tsx
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
├── solid.config.ts
├── package.json
├── tailwind.config.js
├── tsconfig.json
└── README.md
```

**Notes:**
- `routes/` uses SolidStart's file-based routing for all main screens and dynamic routes.
- `components/` holds reusable UI elements.
- `layouts/` for shared page layouts.
- `api/` abstracts backend API calls (can use endpoints or fetch/axios).
- `styles/` for Tailwind and custom CSS.
- `utils/` for helper functions.
- SEO and accessibility best practices are supported via SSR/SSG and semantic HTML. 