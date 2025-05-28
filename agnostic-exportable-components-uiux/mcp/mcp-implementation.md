# MCP Notification UI/UX: Implementation Guide

This guide explains how to import and configure the MCP notification UI/UX code into your own frontend or design system project. Follow these steps to ensure a smooth integration and consistent notification UI/UX across your stack.

---

## 1. Copy the Code
- Copy the entire `mcp/` folder (including all files) from `@agnostic-exportable-components-uiux` into your project (e.g., `src/uiux/mcp/`).
- Only include files that contain actual code or documentation (no empty folders).

## 2. Import SVG Icons
- Use `bell-icon.svg` and `alert-icon.svg` as inline SVGs or image assets in your notification components.
- Example (inline SVG in HTML):
  ```html
  <img src="./uiux/mcp/bell-icon.svg" alt="Notifications" aria-label="Notifications" />
  ```
- For React, you can import as a component if your build supports it.

## 3. Use CSS Assets
- Import `unread-badge.css`, `animation-utils.css`, and `notification-tokens.css` into your global or component-level CSS:
  ```css
  @import './uiux/mcp/unread-badge.css';
  @import './uiux/mcp/animation-utils.css';
  @import './uiux/mcp/notification-tokens.css';
  ```
- Apply the `.unread-badge`, `.fade-in`, `.slide-in`, etc. classes to your notification elements as needed.

## 4. Integrate Popover Pattern
- Follow the `popover-pattern.md` explainer for implementing accessible, responsive popover/panel UIs for notification lists.
- Use the provided HTML/CSS structure and adapt to your framework as needed.

## 5. Apply Accessibility Helpers
- Reference `a11y-helpers.md` for ARIA roles, keyboard navigation, and focus management best practices.
- Ensure all notification UI is accessible to screen readers and keyboard users.

## 6. Adapt Design Tokens
- The `notification-tokens.css` file provides design tokens for colors, spacing, font sizes, etc.
- Adapt these tokens to match your project's design system if needed.

## 7. Example Usage
```html
<!-- Notification Bell with Unread Badge -->
<div style="position: relative;">
  <img src="./uiux/mcp/bell-icon.svg" alt="Notifications" />
  <span class="unread-badge">3</span>
</div>

<!-- Notification Popover -->
<div id="notif-popover" class="notification fade-in" role="dialog" aria-modal="true">
  <!-- ...notification list... -->
</div>
```

## 8. Additional Configuration
- You may need to adjust import paths based on your project structure.
- Extend or override CSS classes and tokens as needed for your brand/design system.
- Add new icons, badge styles, or animation utilities as your project evolves.

---

**Convention:** Every exportable grouping must include a `[grouping]-implementation.md` file with detailed instructions for importing, configuring, and integrating the code into a user's project. This ensures all exportable code is easy to adopt and productionize. 