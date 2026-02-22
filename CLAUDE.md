# therare.

backend engineer's personal site. geist mono. dark. minimal.

## stack

- next.js 16 (app router, turbopack)
- typescript strict
- tailwind css v4
- motion (`motion/react`)
- lucide-react icons
- geist mono (self-hosted via `geist` package) — default font everywhere
- inter 600 — reading font for log content only
- pnpm

## structure

```
src/
  app/
    layout.tsx            # root layout — geist mono on body, metadata, glass container
    page.tsx              # index — hero + workspace + recent logs
    icon.tsx              # dynamic favicon ({ })
    log/page.tsx          # blog list with inline detail (client-side navigation)
    keyboards/page.tsx    # mechanical keyboard timeline
    projects/page.tsx     # placeholder
    contact/page.tsx      # placeholder
    globals.css           # tailwind + glass-panel class + font-reading class
  components/
    home/
      hero.tsx            # heading, bio, cta, social links (github, telegram)
      workspace-card.tsx  # environment/editor + tech tags
      recent-logs.tsx     # pulls first 3 from posts.ts automatically
    log/
      post-list.tsx       # post listing with pushState navigation + directional animations
      post-detail.tsx     # full post with browser-back support
    keyboards/
      keyboard-timeline.tsx  # zigzag alternating timeline
    nav/
      navbar.tsx          # pill nav with active route detection (client component)
    shared/
      glass-panel.tsx     # glass container wrapper
      page-transition.tsx # animatepresence enter/exit
      under-construction.tsx
  data/
    posts.ts              # Post[] — title, date, category, excerpt, content
    keyboards.ts          # Keyboard[] — name, switch, desc, status
    navigation.ts         # NavItem[] — label, href
```

## design

- background: `bg-[#030303]`
- glass: `bg-white/[0.02] border border-white/[0.05]`
- hover: opacity increase — `hover:bg-white/[0.06] hover:border-white/[0.15]`
- font: geist mono everywhere, inter 600 for `.font-reading` (log content)
- text: `text-white` headings, `text-zinc-300`–`text-zinc-500` body/muted
- transitions: 300-500ms, ease `[0.16, 1, 0.3, 1]`
- radii: `rounded-[2rem]` container, `rounded-2xl` cards, `rounded-full` pills

## conventions

- default exports on all components
- `'use client'` only when needed (useState, usePathname, motion)
- server components by default
- data = typed arrays in `src/data/`. no cms, no api routes, no database
- `@/*` → `src/*`
- no semicolons, single quotes, trailing commas

## adding content

**blog post** → push to `posts` array in `src/data/posts.ts`. shows up on /log and homepage recent logs.

**keyboard** → push to `keyboards` array in `src/data/keyboards.ts`. shows up on /keyboards.

**new page** → create `src/app/<route>/page.tsx`, add to `src/data/navigation.ts`, wrap in `<PageTransition>`.
