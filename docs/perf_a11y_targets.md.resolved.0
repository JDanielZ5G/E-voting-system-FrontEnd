# Performance & Accessibility Targets

## 1. Performance Targets
*   **Load Test**: Support **500 concurrent users** (simulated voters) within a 10-minute window.
*   **Response Time**:
    *   API Endpoints: < 200ms (95th percentile).
    *   Static Assets: < 100ms (CDN cached).
*   **Database**:
    *   Queries should execute in < 50ms.
    *   Indexes required on: `reg_no`, `ballot_token`, `position_id`.

## 2. Accessibility (A11y) Targets
**Standard**: WCAG 2.1 Level AA

### Checklist:
- [ ] **Color Contrast**: Text vs Background ratio at least 4.5:1.
- [ ] **Keyboard Navigation**: All interactive elements (forms, buttons) must be focusable and usable via Tab/Enter/Space.
- [ ] **Screen Readers**:
    -   Images have `alt` text.
    -   Inputs have `<label>` or `aria-label`.
    -   Error messages are announced (`role="alert"`).
- [ ] **Responsive Design**:
    -   UI scales correctly from Mobile (320px) to Desktop (1920px).
    -   Touch targets on mobile are at least 44x44px.

## 3. Tools for Verification
*   **Performance**: Google Lighthouse (Target > 90), k6 (Load Testing).
*   **Accessibility**: WAVE Evaluation Tool, axe-core (Automated tests).
