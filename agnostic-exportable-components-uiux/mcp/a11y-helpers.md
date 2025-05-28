# Accessibility Helpers for Notification UI

This file explains accessibility (a11y) helpers and ARIA usage for notification UI/UX patterns.

## ARIA Roles
- Use `role="alert"` for urgent notifications (screen readers will announce them immediately).
- Use `role="status"` for less urgent, passive notifications.
- Use `role="dialog"` or `role="menu"` for popover/panel containers.

## Keyboard Navigation
- Ensure all interactive elements (buttons, links) are reachable via `Tab`.
- Support closing popovers with `Escape`.
- Use arrow keys for navigating notification lists if appropriate.

## Focus Management
- Move focus to popover/panel when opened.
- Return focus to trigger when closed.
- Use `tabindex="-1"` to make containers programmatically focusable.

## Best Practices
- Always provide visible focus indicators.
- Use descriptive `aria-label` or `aria-labelledby` for icons and buttons.
- Announce changes in notification count with `aria-live` regions if needed.

## Example
```html
<div role="alert" aria-live="assertive">New message received!</div>
``` 