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
- gray-matter + react-markdown + remark-gfm — markdown blog
- pnpm

## structure

```
src/
  app/
    layout.tsx            # root layout — geist mono on body, metadata, glass container, footer
    page.tsx              # index — hero + workspace + recent logs (async, fetches posts)
    icon.tsx              # dynamic favicon ({ })
    not-found.tsx         # custom 404
    opengraph-image.tsx   # dynamic og image
    sitemap.ts            # auto-generated sitemap
    robots.ts             # robots.txt
    log/page.tsx          # blog list (async, fetches posts from github)
    keyboards/page.tsx    # mechanical keyboard timeline
    projects/page.tsx     # placeholder
    contact/page.tsx      # contact info + links
    globals.css           # tailwind + glass-panel + font-reading + prose-custom
  components/
    home/
      hero.tsx            # heading, bio, cta, social links (github, telegram)
      workspace-card.tsx  # environment/editor + currently
      recent-logs.tsx     # receives posts as prop from page
    log/
      post-list.tsx       # post listing with pushState navigation + directional animations
      post-detail.tsx     # full post with markdown rendering + browser-back
    keyboards/
      keyboard-timeline.tsx  # zigzag alternating timeline
    contact/
      contact-info.tsx    # contact links grid
    nav/
      navbar.tsx          # pill nav + mobile hamburger menu
    shared/
      glass-panel.tsx     # glass container wrapper
      page-transition.tsx # animatepresence enter/exit (blur fade)
      footer.tsx          # copyright + location
      under-construction.tsx
  lib/
    posts.ts              # getPosts() — fetches markdown from github API with ISR
  data/
    keyboards.ts          # Keyboard[] — name, switch, desc, status
    navigation.ts         # NavItem[] — label, href
content/
  posts/                  # markdown files with frontmatter (title, date, category, excerpt)
```

## blog system

posts are markdown files in `content/posts/`. fetched at runtime via github API with 60s ISR revalidation. no redeploy needed to publish.

env vars (optional):
- `GITHUB_REPO` — defaults to `rarebek/therare`
- `GITHUB_BRANCH` — defaults to `main`
- `GITHUB_TOKEN` — for private repos (not needed for public)

## design

- background: `bg-[#030303]`
- glass: `bg-white/[0.02] border border-white/[0.05]`
- hover: opacity increase — `hover:bg-white/[0.06] hover:border-white/[0.15]`
- font: geist mono everywhere, inter 600 for `.font-reading` (log content)
- text: `text-white` headings, `text-zinc-300`–`text-zinc-500` body/muted
- animations: blur fade — `blur(6px) → blur(0px)`, 700ms, ease `[0.16, 1, 0.3, 1]`
- radii: `rounded-[2rem]` container, `rounded-2xl` cards, `rounded-full` pills

## terminology

- "log" outside app context = blog post (not application logs)

## conventions

- default exports on all components
- `'use client'` only when needed (useState, usePathname, motion)
- server components by default
- static data = typed arrays in `src/data/`
- blog posts = markdown in `content/posts/` (fetched via github API)
- `@/*` → `src/*`
- no semicolons, single quotes, trailing commas

## adding content

**blog post** → create `content/posts/my-slug.md` with frontmatter, push to repo. site picks it up in 60s.

```markdown
---
title: "Post Title"
date: "Feb 23, 2026"
category: "Systems"
excerpt: "Short description."
---

Content in markdown.
```

**keyboard** → push to `keyboards` array in `src/data/keyboards.ts`. shows up on /keyboards.

**new page** → create `src/app/<route>/page.tsx`, add to `src/data/navigation.ts`, wrap in `<PageTransition>`.
