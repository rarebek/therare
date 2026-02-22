# `{ }` therare.

> ~/portfolio — where packets come to rest.

personal site of a backend engineer who types in monospace and thinks in systems.

dark theme. no bloat. no CMS. content lives in typed arrays because databases are for production, not portfolios.

## run

```bash
pnpm i && pnpm dev
```

## anatomy

```
src/
├── app/            # routes. each page is a file. radical concept.
├── components/     # ui atoms grouped by feature, not by vibes
└── data/           # posts, keyboards, nav — just .ts files. grep-friendly.
```

adding content = pushing to an array. no migrations, no webhooks, no yaml.

## design decisions

- **geist mono everywhere** — because proportional fonts are a suggestion, not a requirement
- **inter for reading** — even i have mercy on long-form readers
- **no client JS unless necessary** — server components by default. `'use client'` is earned, not given
- **history.pushState for post navigation** — browser back button works. revolutionary.
- **zero API routes** — if it doesn't need a server at runtime, it doesn't get one

## deps

6 production dependencies. that's it. i count them regularly to make sure none snuck in.

```
next      — the framework
react     — the library
react-dom — react's plus one
motion    — things move
geist     — things look right
lucide    — things have icons
```

## license

mit — fork it, ship it, mass produce it. i don't mass produce.
