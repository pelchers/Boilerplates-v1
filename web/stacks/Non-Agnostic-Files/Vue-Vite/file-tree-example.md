# Vue 3 + Vite File Tree Example (Web App)

```
my-natty-or-not-vue-app/
├── src/
│   ├── views/
│   │   ├── Home.vue               # Home page
│   │   ├── Explore.vue            # Explore/search page
│   │   ├── About.vue              # About page
│   │   ├── CodeOfConduct.vue      # Code of Conduct
│   │   ├── admin/
│   │   │   ├── Dashboard.vue      # Admin dashboard
│   │   │   ├── Users.vue          # User management
│   │   │   └── Moderation.vue     # Content moderation
│   │   ├── auth/
│   │   │   ├── Login.vue          # Login page
│   │   │   ├── Register.vue       # Registration page
│   │   │   └── Forgot.vue         # Password reset
│   │   ├── profile/
│   │   │   └── [id].vue           # Dynamic user profile
│   │   ├── workouts/
│   │   │   ├── Index.vue          # Workouts list
│   │   │   ├── Create.vue         # Create workout
│   │   │   └── [id].vue           # Workout detail
│   │   ├── posts/
│   │   │   ├── Index.vue          # Posts feed
│   │   │   ├── Create.vue         # Create post
│   │   │   └── [id].vue           # Post detail
│   │   ├── natty-profiles/
│   │   │   ├── Index.vue          # Natty profiles list
│   │   │   ├── Create.vue         # Submit natty profile
│   │   │   └── [id].vue           # Natty profile detail
│   │   ├── natty-eras/
│   │   │   ├── Create.vue         # Add era
│   │   │   └── [id].vue           # Era detail
│   │   ├── votes/
│   │   │   └── [id].vue           # Vote page
│   │   ├── comments/
│   │   │   └── [id].vue           # Comments for posts/profiles/eras
│   │   └── Settings.vue           # User settings/theme toggle
│   ├── components/
│   │   ├── PostCard.vue
│   │   ├── WorkoutCard.vue
│   │   ├── NattyProfileCard.vue
│   │   ├── EraCard.vue
│   │   ├── VoteButton.vue
│   │   ├── CommentList.vue
│   │   ├── UserAvatar.vue
│   │   └── ThemeToggle.vue
│   ├── layouts/
│   │   ├── MainLayout.vue
│   │   └── AdminLayout.vue
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
│   ├── store/
│   │   └── index.ts              # Pinia/Vuex store setup
│   ├── styles/
│   │   └── tailwind.css
│   └── utils/
├── public/
│   └── favicon.svg
├── vite.config.ts
├── package.json
├── tailwind.config.js
├── tsconfig.json
└── README.md
```

**Notes:**
- `views/` and Vue Router for all main screens and dynamic routes.
- `components/` holds reusable UI elements.
- `layouts/` for shared page layouts.
- `api/` abstracts backend API calls.
- `store/` for Pinia or Vuex state management.
- `styles/` for Tailwind and custom CSS.
- `utils/` for helper functions.
- SEO and accessibility best practices are supported via vue-meta and semantic HTML. 