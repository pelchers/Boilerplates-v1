# Popover/Panel UI Pattern for Notifications

This pattern provides a floating panel (popover) for displaying notification lists, such as when clicking a notification bell. It is designed for accessibility, keyboard navigation, and responsive design.

## Accessibility
- Use `role="dialog"` or `role="menu"` for the popover container.
- Set `aria-modal="true"` if the popover is modal.
- Ensure the popover is focus-trapped while open.
- Provide a close button with `aria-label="Close notifications"`.

## Focus Management
- Move focus to the popover when it opens.
- Return focus to the trigger (e.g., bell button) when it closes.
- Allow closing with `Escape` key.

## Responsive Design
- Position the popover below or beside the trigger on desktop.
- Use full-width or bottom sheet style on mobile.

## Example HTML Structure
```html
<button id="notif-bell" aria-haspopup="true" aria-controls="notif-popover">🔔</button>
<div id="notif-popover" role="dialog" aria-modal="true" tabindex="-1" hidden>
  <div class="popover-header">
    <span>Notifications</span>
    <button aria-label="Close notifications">&times;</button>
  </div>
  <ul class="notification-list">
    <li>...</li>
  </ul>
</div>
```

## Example CSS
```css
#notif-popover {
  position: absolute;
  right: 0;
  top: 2.5rem;
  width: 20rem;
  max-height: 70vh;
  background: #fff;
  border-radius: 0.5rem;
  box-shadow: 0 4px 24px rgba(0,0,0,0.12);
  overflow-y: auto;
  z-index: 1000;
}
``` 