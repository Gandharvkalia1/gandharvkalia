# Portfolio Website

Personal portfolio built with Next.js, React, Tailwind CSS, and Motion.

## Run locally

Prerequisite: Node.js 18+.

1. Install dependencies with `npm install`
2. Start the development server with `npm run dev`
3. Open [http://localhost:3000](http://localhost:3000)

## Project structure

- `pages/index.tsx` assembles the homepage sections
- `src/components` contains the UI sections
- `src/data/blogPosts.ts` stores the blog card content
- `public/assets/images` contains local images

## How to update the blog section

The homepage blog cards are powered by `src/data/blogPosts.ts`.

Each post looks like this:

```ts
{
  slug: 'your-post-slug',
  date: 'Apr 23, 2026',
  title: 'Your blog title',
  excerpt: 'A short 1-2 sentence summary for the card.',
  category: 'Frontend',
  image: 'https://your-image-url.com/image.jpg',
  href: '/blog/your-post-slug'
}
```

## How to add a new blog post

1. Open [src/data/blogPosts.ts](D:/portfolio/src/data/blogPosts.ts)
2. Add a new object inside the `blogPosts` array
3. Update these fields:
   - `slug`: unique id for the post
   - `date`: display date shown on the card
   - `title`: blog post title
   - `excerpt`: short preview text
   - `category`: small label on the card
   - `image`: cover image URL
   - `href`: optional link to the full article

If you do not add `href`, the card still appears on the portfolio as a preview card.

## Notes

- Right now the site shows blog cards on the homepage only.
- If you want, the next step can be creating actual `/blog/[slug]` pages so each card opens a full blog article.
