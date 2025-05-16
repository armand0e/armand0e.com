# TODO List

## Features & Enhancements
- [ ] **Particle Background Rework:**
  - [ ] Particles should persist much longer (increase lifetime).
  - [ ] Remove or replace the current mouse hover effect (the white expanding circle).
  - [ ] Implement a "neural network + nebula cloud" aesthetic:
    - [ ] Adjust particle linking for a network feel.
    - [ ] Introduce nebula-like colors, opacity variations, and softer particle appearance.
    - [ ] Refine particle movement to be slow and ambient.
- [ ] **LinkedIn Profile Link**: Update the placeholder in `ContactSection.tsx` with the actual LinkedIn profile URL.
- [ ] **Image Optimization**: Review and optimize any images used (e.g., for projects, about me) for web performance.
- [ ] **Accessibility Review (A11y)**: Conduct a thorough accessibility check across all components and pages.
- [ ] **Content Update**: Populate all sections with final text, project details, and resume.
- [ ] **Light Theme Styling**: Ensure all components are well-styled for a potential light theme if theme switching is fully enabled.
- [ ] **Favicon**: Add a custom favicon.
- [ ] **SEO Enhancements**: Improve metadata, add Open Graph tags, etc.

## Bugs & Fixes
- [x] ~~Build hanging issue due to self-referencing dependency in `package.json`.~~ (Resolved)
- [x] ~~TypeScript error with `smoothTouch` in Lenis options.~~ (Resolved)
- [ ] Investigate if `@studio-freight/lenis` should be updated to the newer `lenis` package name if any further scroll-related issues arise.

## Refactoring & Code Quality
- [ ] Review `tsconfig.json` target (currently `es5`) for potential modernization if it doesn't impact compatibility.
- [ ] Ensure all components follow consistent naming conventions and project structure guidelines.

## Future Ideas
- [ ] Add a blog section.
- [ ] Implement more complex animations or micro-interactions. 