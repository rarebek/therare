---
title: "How This Blog Works: Git as a CMS"
date: "Feb 23, 2026"
category: "Systems"
excerpt: "No database, no CMS, no admin panel. Just markdown files in a git repo, fetched at runtime. Here's how I built a blog that deploys itself."
---

I wanted a blog with zero overhead. No WordPress, no Notion API, no headless CMS with a dashboard I'd never open. Just writing.

## the setup

This site is a Next.js app deployed on Coolify. Posts are markdown files sitting in `content/posts/` inside the same repo as the site code.

When someone visits `/log`, the server fetches the file list from GitHub's API, parses each markdown file's frontmatter for metadata (title, date, category, excerpt), and renders the content. Next.js caches this with ISR — incremental static regeneration — revalidating every 60 seconds.

## how I publish

To write a new post, I create a `.md` file with frontmatter at the top:

```
---
title: "My Post Title"
date: "Feb 23, 2026"
category: "Systems"
excerpt: "A short description."
---

The actual content in markdown.
```

Then I push it to the repo. Within 60 seconds, the site picks it up. No redeploy, no build trigger, no waiting.

From my laptop, that's `git add && git commit && git push`. From my phone, I use GitHub's web editor — create a new file in `content/posts/`, paste the frontmatter template, write, commit.

## why this works

The entire blog is a directory of text files. There's no database to back up, no API keys to rotate, no admin panel to secure. If GitHub goes down, the cached version keeps serving. If I want to migrate, I copy a folder.

Every post is version-controlled. I can see the full edit history, revert changes, or branch off drafts. The same tools I use for code work for writing.

## what's next

A Telegram bot that lets me send a message and auto-commits it as a post. Writing from anywhere, publishing instantly. But that's for another day.

For now, this is enough. A blog that gets out of the way.
