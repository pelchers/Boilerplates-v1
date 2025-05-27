# Natty or Not Next.js — Comprehensive File Tree

```
my-natty-or-not-nextjs-app/
├── src/
│   ├── pages/
│   │   ├── index.tsx             # Home page (feed)
│   │   ├── explore.tsx           # Explore/search natty profiles
│   │   ├── about.tsx             # About page
│   │   ├── code-of-conduct.tsx   # Code of Conduct
│   │   ├── admin/
│   │   │   ├── dashboard.tsx     # Admin dashboard
│   │   │   ├── users.tsx         # User management
│   │   │   └── moderation.tsx    # Content moderation
│   │   ├── auth/
│   │   │   ├── login.tsx         # Login page
│   │   │   ├── register.tsx      # Registration page
│   │   │   └── forgot.tsx        # Password reset
│   │   ├── profile/
│   │   │   └── [id].tsx          # Dynamic user profile
│   │   ├── workouts/
│   │   │   ├── index.tsx         # Workouts list
│   │   │   ├── create.tsx        # Create workout
│   │   │   └── [id].tsx          # Workout detail
│   │   ├── posts/
│   │   │   ├── index.tsx         # Posts feed
│   │   │   ├── create.tsx        # Create post
│   │   │   └── [id].tsx          # Post detail
│   │   ├── natty-profiles/
│   │   │   ├── index.tsx         # Natty profiles list
│   │   │   ├── create.tsx        # Submit natty profile
│   │   │   └── [id].tsx          # Natty profile detail
│   │   ├── natty-eras/
│   │   │   ├── create.tsx        # Add era to natty profile
│   │   │   └── [id].tsx          # Era detail
│   │   ├── votes/
│   │   │   └── [id].tsx          # Vote on natty profile/era
│   │   ├── comments/
│   │   │   └── [id].tsx          # Comments for posts/profiles/eras
│   │   └── settings.tsx          # User settings/theme toggle
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
├── next.config.js
├── package.json
├── tailwind.config.js
├── tsconfig.json
└── README.md
```

**Notes:**
- All major features from the PRD are represented as folders/pages.
- `components/` holds reusable UI elements for posts, workouts, natty profiles, voting, etc.
- `api/` abstracts all backend API calls, including auth, users, content, voting, and admin.
- `styles/` and `ThemeToggle.tsx` support theming and base style configuration.
- Admin, moderation, and code of conduct are included as per PRD. 