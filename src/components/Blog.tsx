import Link from 'next/link';
import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';
import { blogPosts } from '../data/blogPosts';
import { urlFor } from '../sanity/image';
import type { SanityPostSummary } from '../sanity/types';

type BlogProps = {
  posts?: SanityPostSummary[];
};

type VisiblePost = {
  slug: string;
  href?: string;
  title: string;
  excerpt: string;
  category: string;
  date: string;
  image: string;
};

function formatDate(date?: string) {
  if (!date) return '';

  return new Intl.DateTimeFormat('en', {
    month: 'short',
    day: 'numeric',
    year: 'numeric',
  }).format(new Date(date));
}

function dedupePosts(posts: VisiblePost[]) {
  const seen = new Set<string>();

  return posts.filter((post) => {
    if (seen.has(post.slug)) return false;

    seen.add(post.slug);
    return true;
  });
}

export default function Blog({ posts = [] }: BlogProps) {
  const localPosts = dedupePosts(blogPosts);
  const sanityPosts = posts.map((post) => ({
    slug: post.slug,
    href: `/blog/${post.slug}`,
    title: post.title,
    excerpt: post.excerpt || '',
    category: post.category || 'Blog',
    date: formatDate(post.publishedAt),
    image: post.mainImage
      ? urlFor(post.mainImage).width(900).height(560).url()
      : '/assets/images/table.webp',
  }));
  const sanityAndFirstLocalPost = localPosts[0] ? [localPosts[0], ...sanityPosts] : sanityPosts;
  const visiblePosts =
    sanityPosts.length > 0
      ? dedupePosts(sanityAndFirstLocalPost)
      : localPosts;

  return (
    <section className="py-32 bg-surface" id="blog">
      <div className="max-w-7xl mx-auto px-8">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-primary font-bold uppercase tracking-[0.24em] text-xs mb-4 block">
            Knowledge Base
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Insights & Learnings</h2>
          <p className="text-lg text-on-surface-variant">
            Short technical breakdowns on frontend systems, performance, and product thinking.
          </p>
        </div>

        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8">
          {visiblePosts.map((post, index) => (
            <motion.article
              key={post.slug}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.08 }}
              viewport={{ once: true }}
              className="overflow-hidden rounded-[1.75rem] border border-outline-variant/20 bg-white shadow-[0px_18px_40px_rgba(19,27,46,0.06)]"
            >
              <Link href={post.href || `/blog/${post.slug}`} className="group block">
                <div className="aspect-[16/10] overflow-hidden bg-surface-container">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                    referrerPolicy="no-referrer"
                  />
                </div>

                <div className="p-7">
                  <p className="mb-4 text-xs font-bold uppercase tracking-[0.18em] text-outline">
                    {post.date}
                  </p>
                  <h3 className="mb-4 text-2xl font-bold leading-tight text-on-surface transition-colors group-hover:text-primary">
                    {post.title}
                  </h3>
                  <p className="mb-6 text-base leading-7 text-on-surface-variant">{post.excerpt}</p>
                  <div className="flex items-center justify-between gap-4">
                    <span className="text-sm font-semibold text-primary">{post.category}</span>
                    <span className="inline-flex items-center gap-2 text-sm font-bold text-primary">
                      Read Insight
                      <ArrowRight className="h-4 w-4" />
                    </span>
                  </div>
                </div>
              </Link>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
