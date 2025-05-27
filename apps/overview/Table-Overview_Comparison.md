# Single-Codebase Mobile App Framework Comparison Table

> **Note:** This overview is for single-codebase mobile apps (Android/iOS), built with frameworks like React Native, Expo, or Capacitor+React.

This document provides a condensed, comparative table of the top frameworks for building modern mobile apps from a single codebase. Below the table, we provide stack-specific summaries and recommendations for use cases like mobile-first apps, rapid prototyping, and advanced native integrations.

---

## Comparison Table

| #  | Stack                | Native APIs | Web-to-Mobile | Mobile UX | Deployment | Ideal Use Case                |
| -- | -------------------- | ---------- | ------------- | --------- | ---------- | ----------------------------- |
| 1  | Expo (React Native)  | ✅ Yes     | ✅ Yes        | ✅ Yes    | ✅ Yes     | Rapid mobile, unified workflow|
| 2  | Capacitor + React    | ✅ Yes     | ✅ Yes        | ✅ Yes    | ✅ Yes     | Web-to-mobile, plugin access  |
| 3  | React Native CLI     | ✅ Yes     | ⚠️ Partial    | ✅ Yes    | ✅ Yes     | Advanced native integrations  |

---

## Stack Format Summaries

### 1. **Expo (React Native)**
* Managed workflow, unified APIs, fast dev/build.
* Expo Go for instant device testing.
* Easy deployment to app stores.

### 2. **Capacitor + React**
* Web-first, familiar React dev experience.
* Plugins for native features.
* Deploy to web, Android, iOS from one codebase.

### 3. **React Native CLI**
* More setup, full native access.
* Good for advanced integrations and custom modules.

---

## Recommended Use Cases

| Purpose                        | Recommended Stack(s)                |
| ------------------------------ | ----------------------------------- |
| Rapid mobile, unified workflow | **Expo (React Native)**             |
| Web-to-mobile, plugin access   | **Capacitor + React**               |
| Advanced native integrations   | **React Native CLI**                |

---

Let me know if you'd like visuals or starter code for any of these stacks. 