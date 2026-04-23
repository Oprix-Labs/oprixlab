# Oprix Labs — Website

The official marketing site for **Oprix Labs**: a single-page–style experience with routed sections for services, portfolio, team, blog, contact, and legal pages. The front end is built for clarity, motion, and a polished first impression—3D-inspired visuals, scroll-driven reveals, and responsive layout throughout.

## What’s in this repo

| Area | Description |
|------|-------------|
| **Pages** | Home, About, Services, Portfolio, Process, Blog, Team, Contact, Privacy Policy, Terms of Service |
| **Routing** | Client-side routes via React Router (`BrowserRouter`) |
| **UI** | Shared chrome (`Header`, `Footer`), contact components, scroll-to-top on navigation |

Source lives under `src/` (`pages/`, `components/`, `assets/`).

## Tech stack

- **React 19** with **Vite 7**
- **Tailwind CSS 4** (`@tailwindcss/vite`)
- **React Router** 7
- **Framer Motion** for animation
- **Three.js** (where scenes or 3D utilities are used)
- **Lucide React** for icons
- **ESLint** 9 with React Hooks and Refresh plugins
- **React Compiler** enabled via `babel-plugin-react-compiler` (see [React Compiler](https://react.dev/learn/react-compiler) for behavior and performance notes)

## Requirements

- **Node.js** — use a current LTS (18+ recommended; match whatever your team standardizes on).
- **npm** (or compatible client) for installs and scripts.

## Getting started

```bash
npm install
npm run dev
```

The dev server prints a local URL (typically `http://localhost:5173`). Hot module replacement is provided by Vite.

### Other scripts

| Command | Purpose |
|---------|---------|
| `npm run build` | Production build to `dist/` |
| `npm run preview` | Serve the production build locally |
| `npm run lint` | Run ESLint across the project |

## Project layout (short)

```
oprixlab/
├── index.html
├── vite.config.js
├── src/
│   ├── main.jsx
│   ├── App.jsx          # routes
│   ├── App.css
│   ├── pages/           # route screens
│   ├── components/      # header, footer, forms, etc.
│   └── assets/          # images and static assets
└── public/              # static files served as-is
```

## Contributing

1. Branch from your team’s default branch and keep commits focused.
2. Run `npm run lint` before opening a PR or handing off work.
3. Match existing patterns for layout, naming, and styling so the site stays visually consistent.

For **known gaps and coordination**, use the sections at the end of this file so work is visible and does not collide.

---

## Open backlog — public (unfixed)

Use this list for **problems anyone can see and anyone can fix** when they have time: bugs, rough edges, refactors, or ideas that are **not** personally claimed.

**How to use it**

- Add a short bullet: what’s wrong, where it shows up (route or file if known), and optional context.
- Removing a bullet when the fix lands keeps the doc honest.
- **Other developers are welcome to pick these up**—no need to ask permission unless your team says otherwise.

**Entries**

- Images and Animations takes a while to load on each device [Done]
- Images of Teams have not been placed in yet [In Progress]
- Connecting of all links to real life public links (Github, LinkedIn) [In Progress]
- Color of the Team's page background is different from the other webpages [Done]

---

## Personal holds — private (unfixed)

Use this list when a **specific developer** has identified a problem or follow-up work that **they intend to fix themselves**. Entries here are **not** a free backlog for others: they exist so the team **knows the area is spoken for** and future changes do not conflict with that person’s plan.

**How to use it**

- One bullet per item; start with **your name or handle** so ownership is obvious.
- Describe the issue or the change you will make, and point to routes, components, or files when helpful.
- **Do not implement another person’s item** unless they explicitly hand it off or remove it.
- Delete or strike through the bullet when your fix is merged.

**Entries**

- _(None listed yet — add items below this line.)_
