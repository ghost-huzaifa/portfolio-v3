# Dark and Gold Portfolio Implementation Plan

> Execution: implement inline in the existing task-specific checkout. The user approved the mockup and requested implementation on 2026-11-01.

**Goal:** Implement the approved portfolio layout while retaining the dark and gold theme, simple navigation, and videography placeholder.

**Architecture:** Keep the existing static HTML/CSS approach. All content and navigation must work without JavaScript. Reuse the original portrait and verified repository content.

**Reference:** Approved `huzaifa-portfolio.html` mockup in this chat.

## Constraints

- Preserve charcoal `#1a1a1a`, gold `#f4d03f`, Space Grotesk headings, and Inter body text.
- Use visible links to Projects, Research, Experience, Interests, and Contact.
- Include CodeCraft, the two existing research entries, and the existing experience.
- Keep the image placeholder; do not invent films or generate assets.
- Avoid adding dependencies, a framework, a build step, or a JavaScript requirement.
- Preserve useful existing experience details when shortening descriptions.

## Files

- `index.html`: complete semantic page, metadata, working anchors, existing portrait.
- `styles.css`: readable, responsive styles, visible focus, reduced-motion support.
- `script.js`: remove obsolete carousel, tabs, and reveal code; no longer needed.
- `README.md`: local preview and image replacement instructions.

## Review focus

- Every menu link resolves to a visible section.
- Mobile navigation stays visible and content fits widths down to 320 px.
- Sticky navigation does not cover anchor targets or keyboard focus.
- Text, image, and core links remain available without JavaScript or external fonts.
- Research statuses and job dates remain faithful to the original content.

## Implementation and checks

- [x] Inspect original page and approved mockup.
- [x] Confirm original Projects link has no matching section and mobile menu is hidden.
- [x] Transfer the approved markup and styles into the existing HTML and CSS files.
- [x] Use a local portrait, semantic landmarks, skip link, visible focus, normal anchors, and reduced-motion CSS.
- [x] Preserve experience, research, and repository links; remove broken CV link and unused script.
- [x] Document local preview and replacing the image placeholder.
- [x] Check HTML structure, local assets, all navigation targets, and browser errors.
- [x] Inspect desktop and mobile screenshots, keyboard navigation, and 320 px overflow.
- [x] Request an independent code review and resolve material findings.
- [x] Save the completed branch in a durable local portfolio checkout.

## Verification

- Browser widths: 320, 375, 768, 1024, and 1440 px; no horizontal overflow, all menu targets visible below the sticky header.
- At 320 px, the menu fits in one row, each touch target is at least 44 × 44 px, and the header is 124 px tall.
- Keyboard: first Tab reveals the skip link, Enter focuses the main content, and the next Tab focuses the project link with a visible outline.
- Reduced motion: smooth scrolling changes to automatic scrolling.
- Static checks: unique IDs, valid internal destinations, existing local assets, safe external-link attributes, and zero script dependencies.
- Prettier check and `git diff --check`: passed.
- Browser console: no warnings or errors.
- Independent code review: no material findings.
- Durable checkout: `/Users/macbookpro/dev/portfolio-v3`, branch `codex/dark-gold-portfolio`.
