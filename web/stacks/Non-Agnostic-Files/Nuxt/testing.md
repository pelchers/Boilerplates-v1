# Natty or Not — Nuxt 3 Testing Guide (Web App)

---

## 1. Overview

This guide details all major testing strategies for Nuxt 3 web projects, including unit, integration, E2E, and accessibility testing, with actionable steps and best practices.

---

## 2. Unit & Integration Testing

- **Tools:** Vitest, @vue/test-utils
- **Setup:**
  - Install: `npm install --save-dev vitest @vue/test-utils`
  - Configure `vitest.config.ts` for Nuxt 3
- **Run:** `npx vitest`
- **Best Practices:**
  - Test components, pages, and logic in isolation
  - Mock API calls as needed

---

## 3. End-to-End (E2E) Testing

- **Tools:** Cypress, Playwright
- **Setup:**
  - Install Cypress: `npm install --save-dev cypress`
  - Install Playwright: `npm install --save-dev playwright`
- **Run:**
  - `npx cypress open` or `npx playwright test`
- **Best Practices:**
  - Use stable selectors (data-testid)
  - Test all major flows (auth, posting, voting, etc.)

---

## 4. Accessibility & SEO Testing

- **Tools:** axe-core, Lighthouse
- **Run:**
  - Use browser extensions or CI tools to check accessibility and SEO
- **Best Practices:**
  - Use semantic HTML and correct heading structure
  - Ensure all interactive elements are keyboard accessible
  - Add meta tags and alt text for images

---

## 5. CI/CD & Automation

- **Popular CI:** GitHub Actions, Netlify CI, Vercel CI
- **Automate:**
  - Run Vitest and E2E tests on every PR
  - Use Nuxt build scripts for deployment
- **Example GitHub Actions step:**
  ```yaml
  - name: Run tests
    run: npx vitest
  ```

---

## 6. Example Commands & Configs

- Run all tests: `npx vitest`
- Start dev server: `npm run dev`
- Cypress test: `npx cypress open`
- Playwright test: `npx playwright test`

---

## 7. Best Practices

- Always test accessibility and SEO before release
- Use data-testid for E2E selectors
- Automate tests in CI
- Keep test coverage high for critical flows
- Test production builds before deployment

---

**This guide ensures robust testing for Nuxt 3 web apps with a focus on SEO, accessibility, and user experience.** 