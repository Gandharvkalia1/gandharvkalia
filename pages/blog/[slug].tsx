import Head from 'next/head';
import Link from 'next/link';
import type { GetStaticPaths, GetStaticProps, InferGetStaticPropsType } from 'next';
import { ArrowLeft, ArrowRight, Github } from 'lucide-react';
import Navbar from '../../src/components/Navbar';
import Contact from '../../src/components/Contact';
import Footer from '../../src/components/Footer';
import { blogPosts, getBlogPostBySlug } from '../../src/data/blogPosts';

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: blogPosts.map((post) => ({
      params: { slug: post.slug },
    })),
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps<{
  post: (typeof blogPosts)[number];
}> = async ({ params }) => {
  const slug = typeof params?.slug === 'string' ? params.slug : '';
  const post = getBlogPostBySlug(slug);

  if (!post) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      post,
    },
  };
};

export default function BlogPostPage({
  post,
}: InferGetStaticPropsType<typeof getStaticProps>) {
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
                    src={post.image}
                    alt={post.title}
                    className="h-full w-full object-cover"
                    referrerPolicy="no-referrer"
                  />
                </div>

                <div className="px-6 py-8 md:px-10 md:py-10">
                  <div className="mb-6 flex flex-wrap items-center gap-3 text-xs font-bold uppercase tracking-[0.18em]">
                    <span className="rounded-full bg-primary/10 px-3 py-1 text-primary">
                      {post.category}
                    </span>
                    <span className="text-outline">{post.date}</span>
                    <span className="text-outline">{post.readingTime}</span>
                  </div>

                  <h1 className="mb-6 max-w-4xl text-4xl font-bold leading-tight md:text-6xl">
                    {post.title}
                  </h1>

                  <p className="max-w-3xl text-lg leading-8 text-on-surface-variant md:text-xl">
                    {post.intro}
                  </p>

                  {post.repoUrl ? (
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
                {post.sections.map((section) => (
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
                ))}
              </article>

              <aside className="h-fit rounded-[2rem] bg-inverse-surface px-6 py-8 text-white lg:sticky lg:top-28">
                <p className="mb-3 text-xs font-bold uppercase tracking-[0.2em] text-tertiary-fixed">
                  Article Snapshot
                </p>
                <h2 className="mb-4 text-2xl font-bold">Key takeaway</h2>
                <p className="mb-8 text-base leading-7 text-white/75">{post.takeaway}</p>

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
