# 🧪 Testing Guide: Angular

## 1. Unit Testing
- **Tool:** Jasmine + Karma (default)
- **Command:**
```powershell
ng test
```
- **Best Practices:**
  - Test components, services, and pipes in isolation
  - Use Angular TestBed for setup

## 2. Integration Testing
- **Tool:** Jasmine + Karma
- **Command:**
```powershell
ng test
```
- **Best Practices:**
  - Test component interaction with services and child components
  - Mock API calls with HttpTestingController

## 3. End-to-End (E2E) Testing
- **Tool:** Cypress (recommended) or Protractor (legacy)
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
Explains how to test Angular apps at all levels, with recommended tools and commands.

## 🔧 Configuration Notes
- Configure Cypress in `cypress.config.js` if using Cypress
- Use Angular CLI for running all tests 