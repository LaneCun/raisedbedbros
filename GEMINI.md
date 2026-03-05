# GEMINI.md - The Raised Bed Bros Project Context

## Project Overview
**The Raised Bed Bros** is a business landing page for a cedar raised garden bed installation service based in Spring Hill and surrounding areas. The project is a modern, single-page website designed to showcase service packages, share the business's origin story, and provide quick contact options (call/text/email) for potential customers.

## Tech Stack
- **Framework:** [Vite](https://vitejs.dev/) (v8.0.0-beta.13)
- **Language:** [TypeScript](https://www.typescriptlang.org/) (~v5.9.3)
- **Styling:** [Tailwind CSS v4](https://tailwindcss.com/) (using `@tailwindcss/vite` plugin)
- **Deployment:** Static site (builds to `dist/` via Vite)

## Architecture & Key Files
- `index.html`: The main entry point. It contains the structural layout, semantic sections (Hero, About, Packages, Contact), and uses base64 encoded images for branding.
- `src/main.ts`: The "brain" of the site. It defines a `SiteConfig` interface and object which stores the business's core data and handles dynamic DOM population and CTA (Call/Text/Email) initialization.
- `src/style.css`: Modern styling using Tailwind CSS v4 and standard CSS media queries for full compatibility.
- `vite.config.ts`: Configures the Vite build pipeline.

## Building and Running
| Task | Command |
| :--- | :--- |
| **Install Dependencies** | `npm install` |
| **Start Dev Server** | `npm run dev` |
| **Build for Production** | `npm run build` |
| **Preview Local Build** | `npm run preview` |

## Business Metadata (Managed in `src/main.ts`)
- **Phone:** 931-477-6544
- **Email:** graysonvincent4@gmail.com
- **Service Area:** Spring Hill & Surrounding Areas

## Development Conventions
- **Dynamic Content:** Always update business details (phone numbers, service areas, headlines) in the `site` object within `src/main.ts` rather than hardcoding them in `index.html`.
- **Styling:** Leverage Tailwind CSS v4's modern features. Use the CSS variables defined in `:root` for consistency. **Avoid `@screen`**; prefer standard `@media (width >= ...)` for compatibility.
- **Type Safety:** Maintain the `SiteConfig` interface for any new business-level configurations.
- **Assets:** If adding new large images, consider the existing pattern of base64 encoding or placing them in the `public/` directory.

## Changelog & Task State
- [x] **2026-03-04:** Initialized GEMINI.md context file.
- [x] **2026-03-04:** Implemented Email CTA functionality (Hero, Sidebar, Footer).
- [x] **2026-03-04:** Optimized sidebar "Fast Quote" layout for vertical CTA stacking.
- [x] **2026-03-04:** Refactored `src/style.css` to remove deprecated `@screen` directives and fix build warnings.

## Developement Preferences
-Stay organized and keep things neat
-If you reconize that files and things would be better and more organized in other places/ new places you can switch it up as long as all the code stays the same
-Keep things minimal and neat
-When completling large tasks, focus on doing smaller portions of it to avoid anything messing up.
