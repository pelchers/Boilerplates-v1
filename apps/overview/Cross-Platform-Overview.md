# Single-Codebase Mobile App Deployment Methods (Android/iOS)

> **Note:** This overview is for single-codebase mobile apps (Android/iOS), built with frameworks like React Native, Expo, or Capacitor+React.

This document outlines top frameworks and toolchains for deploying modern mobile apps from a single codebase, covering:

1. Codebase modification requirements (Y/N, minimal, conditional)
2. File/folder tree structure
3. Routing system (navigation, tabs, stack)
4. API integration and communication methods
5. Mobile UX and deployment best practices

---

## 1. **Expo (React Native, Managed Workflow)**

* **Codebase Modifications:** Minimal — unified codebase for Android/iOS.
* **Routing:** Expo Router or React Navigation (stack, tabs, drawer).
* **API Handling:** REST/GraphQL via fetch/axios.
* **Mobile UX:** Use Expo SDK for device features, theming, and navigation.

### Example File Tree:

```
expo-app/
├── app/
│   ├── index.tsx
│   ├── about.tsx
│   ├── profile/[id].tsx
│   └── ...
├── components/
├── assets/
├── package.json
├── app.config.js
├── tailwind.config.js
├── tsconfig.json
└── README.md
```

### Notes:
* Use Expo Go for instant device testing.
* Unified navigation and theming.
* Easy deployment to app stores.

---

## 2. **Capacitor + React**

* **Codebase Modifications:** Minimal — web-first, bridges to native.
* **Routing:** React Router (SPA), or use Ionic for mobile navigation.
* **API Handling:** REST/GraphQL via fetch/axios, native plugins for device features.
* **Mobile UX:** Use Capacitor plugins for camera, storage, etc.

### Example File Tree:

```
capacitor-app/
├── src/
│   ├── App.tsx
│   ├── pages/
│   ├── components/
│   └── ...
├── public/
├── capacitor.config.ts
├── package.json
├── tailwind.config.js
├── tsconfig.json
└── README.md
```

### Notes:
* Web-first, but deploys to Android/iOS.
* Use plugins for native features.
* Familiar React dev experience.

---

## 3. **React Native CLI**

* **Codebase Modifications:** Some — more setup for native modules.
* **Routing:** React Navigation (stack, tabs, drawer).
* **API Handling:** REST/GraphQL via fetch/axios, native modules for advanced features.
* **Mobile UX:** Full control over native code and modules.

### Example File Tree:

```
react-native-app/
├── src/
│   ├── App.tsx
│   ├── screens/
│   ├── components/
│   └── ...
├── android/
├── ios/
├── package.json
├── tailwind.config.js
├── tsconfig.json
└── README.md
```

### Notes:
* More setup, but full native access.
* Good for advanced integrations.

---

Let me know if you want a starter folder structure or code sample for any of these approaches! 