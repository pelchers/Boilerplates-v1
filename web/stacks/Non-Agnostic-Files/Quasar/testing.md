# 🧪 Testing Guide: Quasar

## 1. Unit Testing
- **Tool:** Vitest (recommended) or Jest
- **Command:**
```powershell
quasar test --unit
```
- **Best Practices:**
  - Test components, composables, and stores in isolation
  - Use Quasar's test utils for mounting

## 2. Integration Testing
- **Tool:** Vitest or Jest
- **Command:**
```powershell
quasar test --unit
```
- **Best Practices:**
  - Test component interaction with stores and plugins
  - Mock API calls with msw or axios-mock-adapter

## 3. End-to-End (E2E) Testing
- **Tool:** Cypress (recommended) or Playwright
- **Install Cypress:**
```powershell
npm install cypress --save-dev
```
- **Run Cypress:**
```powershell
npx cypress open
```
- **Best Practices:**
  - Write tests in `cypress/e2e/`
  - Test user flows, authentication, and API integration

---

## 📖 What This File Does
Explains how to test Quasar apps at all levels, with recommended tools and commands.

## 🔧 Configuration Notes
- Configure Cypress in `cypress.config.js` if using Cypress
- Use Quasar CLI for running all tests 