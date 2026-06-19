# portfolio-blog

Minimal two-column site. Left column (name, email, intro, nav) is in the
root layout, so it persists across every route including individual posts.
Right column is page content.

## Run locally

```
npm install
npm run dev
```

## Structure

- `app/layout.js` — sidebar + page shell. Edit name/email/intro here.
- `app/page.js` — home page, lists posts from `content/posts`.
- `app/about/page.js` — `/about` page. Edit bio/projects here.
- `app/blog/[slug]/page.js` — renders one post.
- `content/posts/*.mdx` — your posts. Filename = slug = URL
  (`hello-world.mdx` → `/blog/hello-world`).
- `app/globals.css` — all the styling. ~150 lines, no framework.

## Writing a post

Add a file to `content/posts/`, e.g. `content/posts/my-post.mdx`:

```
---
title: "My Post"
date: "2026-06-19"
summary: "One-line summary shown on the index."
---

Body in Markdown/MDX.
```

It shows up on `/` automatically, sorted by `date` descending.

## Deploy to Vercel

```
npx vercel
```

or push to GitHub and import the repo at vercel.com/new. No env vars or
config needed — framework auto-detected.
