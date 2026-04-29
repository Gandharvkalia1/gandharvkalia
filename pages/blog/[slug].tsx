import Head from 'next/head';
import Link from 'next/link';
import type { GetStaticPaths, GetStaticProps, InferGetStaticPropsType } from 'next';
import { ArrowLeft, ArrowRight, Github } from 'lucide-react';
import { PortableText } from '@portabletext/react';
import Navbar from '../../src/components/Navbar';
import Contact from '../../src/components/Contact';
import Footer from '../../src/components/Footer';
import { blogPosts, getBlogPostBySlug } from '../../src/data/blogPosts';
import { client } from '../../src/sanity/client';
import { urlFor } from '../../src/sanity/image';
import { POST_QUERY, POSTS_QUERY } from '../../src/sanity/queries';
import type { SanityPost, SanityPostSummary } from '../../src/sanity/types';

function formatDate(date?: string) {
  if (!date) return '';

  return new Intl.DateTimeFormat('en', {
    month: 'short',
    day: 'numeric',
    year: 'numeric',
  }).format(new Date(date));
}

function uniqueSlugs(posts: { slug: string }[]) {
  return Array.from(new Set(posts.map((post) => post.slug)));
}

export const getStaticPaths: GetStaticPaths = async () => {
  let sanityPosts: SanityPostSummary[] = [];

  try {
    sanityPosts = await client.fetch<SanityPostSummary[]>(POSTS_QUERY);
  } catch {
    sanityPosts = [];
  }

  return {
    paths: uniqueSlugs([...sanityPosts, ...blogPosts]).map((slug) => ({
      params: { slug },
    })),
    fallback: 'blocking',
  };
};

export const getStaticProps: GetStaticProps<{
  post: SanityPost | (typeof blogPosts)[number];
  source: 'sanity' | 'static';
}> = async ({ params }) => {
  const slug = typeof params?.slug === 'string' ? params.slug : '';

  try {
    const sanityPost = await client.fetch<SanityPost>(POST_QUERY, { slug });

    if (sanityPost) {
      return {
        props: {
          post: sanityPost,
          source: 'sanity',
        },
        revalidate: 60,
      };
    }
  } catch {
    // Fall through to the local post so the page still works during setup.
  }

  const post = getBlogPostBySlug(slug);

  if (!post) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      post,
      source: 'static',
    },
  };
};

export default function BlogPostPage({
  post,
  source,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  const isSanityPost = source === 'sanity';
  const image = isSanityPost && 'mainImage' in post && post.mainImage
    ? urlFor(post.mainImage).width(1200).height(600).url()
    : 'image' in post
      ? post.image
      : '/assets/images/table.webp';
  const date =
    isSanityPost && 'publishedAt' in post ? formatDate(post.publishedAt) : 'date' in post ? post.date : '';
  const category = post.category || 'Blog';
  const readingTime = post.readingTime || '5 min read';
  const intro = post.excerpt || ('intro' in post ? post.intro : '');
  const takeaway = 'takeaway' in post ? post.takeaway : '';

  return (
    <>
      <Head>
        <title>{post.title} | Gandharv Kalia</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content={post.excerpt} />
      </Head>

      <div className="min-h-screen bg-surface text-on-surface">
        <Navbar />

        <main className="pt-28">
          <section className="px-8 pb-12 pt-10">
            <div className="mx-auto max-w-5xl">
              <Link
                href="/#blog"
                className="mb-8 inline-flex items-center gap-2 text-sm font-bold uppercase tracking-[0.18em] text-primary"
              >
                <ArrowLeft className="h-4 w-4" />
                Back to Blog
              </Link>

              <div className="overflow-hidden rounded-[2rem] border border-outline-variant/20 bg-white shadow-[0px_20px_50px_rgba(19,27,46,0.08)]">
                <div className="aspect-[16/8] overflow-hidden bg-surface-container">
                  <img
                    src={image}
                    alt={post.title}
                    className="h-full w-full object-cover"
                    referrerPolicy="no-referrer"
                  />
                </div>

                <div className="px-6 py-8 md:px-10 md:py-10">
                  <div className="mb-6 flex flex-wrap items-center gap-3 text-xs font-bold uppercase tracking-[0.18em]">
                    <span className="rounded-full bg-primary/10 px-3 py-1 text-primary">
                      {category}
                    </span>
                    <span className="text-outline">{date}</span>
                    <span className="text-outline">{readingTime}</span>
                  </div>

                  <h1 className="mb-6 max-w-4xl text-4xl font-bold leading-tight md:text-6xl">
                    {post.title}
                  </h1>

                  <p className="max-w-3xl text-lg leading-8 text-on-surface-variant md:text-xl">
                    {intro}
                  </p>

                  {'repoUrl' in post && post.repoUrl ? (
                    <div className="mt-8">
                      <a
                        href={post.repoUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-3 rounded-full bg-primary px-6 py-3 text-sm font-bold uppercase tracking-[0.16em] text-white transition-transform hover:-translate-y-0.5"
                      >
                        <Github className="h-4 w-4" />
                        View GitHub Repo
                      </a>
                    </div>
                  ) : null}
                </div>
              </div>
            </div>
          </section>

          <section className="px-8 py-8">
            <div className="mx-auto grid max-w-5xl gap-10 lg:grid-cols-[minmax(0,1fr)_280px]">
              <article className="space-y-10">
                {isSanityPost ? (
                  <section className="rounded-[2rem] bg-surface-container-low px-6 py-8 md:px-8">
                    <div className="space-y-5 text-lg leading-8 text-on-surface-variant">
                      {'body' in post && post.body ? <PortableText value={post.body as any} /> : null}
                    </div>
                  </section>
                ) : 'sections' in post ? (
                  post.sections.map((section) => (
                    <section
                      key={section.heading}
                      className="rounded-[2rem] bg-surface-container-low px-6 py-8 md:px-8"
                    >
                      <h2 className="mb-5 text-3xl font-bold">{section.heading}</h2>
                      <div className="space-y-5 text-lg leading-8 text-on-surface-variant">
                        {section.body.map((paragraph) => (
                          <p key={paragraph}>{paragraph}</p>
                        ))}
                      </div>
                    </section>
                  ))
                ) : null}
              </article>

              <aside className="h-fit rounded-[2rem] bg-inverse-surface px-6 py-8 text-white lg:sticky lg:top-28">
                <p className="mb-3 text-xs font-bold uppercase tracking-[0.2em] text-tertiary-fixed">
                  Article Snapshot
                </p>
                <h2 className="mb-4 text-2xl font-bold">Key takeaway</h2>
                <p className="mb-8 text-base leading-7 text-white/75">{takeaway}</p>

                <Link
                  href="/#contact"
                  className="inline-flex items-center gap-2 text-sm font-bold uppercase tracking-[0.18em] text-tertiary-fixed"
                >
                  Let&apos;s Talk
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </aside>
            </div>
          </section>
        </main>

        <Contact />
        <Footer />
      </div>
    </>
  );
}
