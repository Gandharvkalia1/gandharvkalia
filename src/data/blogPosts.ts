export type BlogPost = {
  slug: string;
  date: string;
  title: string;
  excerpt: string;
  category: string;
  image: string;
  readingTime: string;
  intro: string;
  repoUrl?: string;
  sections: {
    heading: string;
    body: string[];
  }[];
  takeaway: string;
  href?: string;
};

export const blogPosts: BlogPost[] = [
  {
    slug: 'react-reusable-data-table',
    date: 'Apr 23, 2026',
    title: 'Building a Reusable React Data Table with TanStack Table',
    excerpt:
      'A reusable React data table built with TypeScript and TanStack Table, designed for sorting, filtering, selection, pagination, and production-ready scalability.',
    category: 'React Component Design',
    image: '/assets/images/table.webp',
    readingTime: '5 min read',
    intro:
      'This project focuses on building a reusable and developer-friendly React data table that can fit into many different products without rewriting the same table logic every time. The goal was to create a production-ready component that feels flexible for teams while still being simple to integrate.',
    repoUrl: 'https://github.com/Gandharvkalia1/react-resusable-data-table.git',
    sections: [
      {
        heading: 'Why I built this component',
        body: [
          'Many admin panels and dashboards rely on tables, but each project tends to rebuild sorting, filtering, pagination, and row actions from scratch. That creates repeated effort and inconsistent user experiences across products.',
          'I wanted a single reusable table foundation that could support real application needs like column visibility, row selection, bulk actions, server-side integration, and clean TypeScript-based extensibility.',
        ],
      },
      {
        heading: 'Core features included in the table',
        body: [
          'The table supports global search, column-based sorting and filtering, row selection, pagination controls, loading skeletons, and dynamic column visibility. These are the features teams usually need first when moving from a static table to a more product-ready experience.',
          'It is built on TanStack Table, which gives the component a strong state-management foundation while still allowing custom UI patterns. TypeScript makes the data model and column definitions safer and easier to reuse across screens.',
        ],
      },
      {
        heading: 'What makes it reusable in real projects',
        body: [
          'The component is structured so developers can plug in their own columns, row actions, and data sources without changing the table internals. That makes it useful across admin dashboards, CRM screens, internal tools, and management platforms.',
          'I also designed it to support server-side pagination, sorting, and filtering, which is important once datasets grow beyond what should be handled entirely in the browser.',
        ],
      },
      {
        heading: 'GitHub repository and project reference',
        body: [
          'The full source code is available on GitHub so visitors can inspect the implementation, understand the component API, and reuse ideas in their own projects.',
          'You can check the repository here: https://github.com/Gandharvkalia1/react-resusable-data-table.git',
        ],
      },
    ],
    takeaway:
      'A reusable table component becomes much more valuable when it balances flexibility for developers with a polished experience for end users.',
    href: '/blog/react-reusable-data-table',
  },
  {
    slug: 'react-reusable-data-table',
    date: 'Apr 23, 2026',
    title: 'Building a Reusable React Data Table with TanStack Table',
    excerpt:
      'A reusable React data table built with TypeScript and TanStack Table, designed for sorting, filtering, selection, pagination, and production-ready scalability.',
    category: 'React Component Design',
    image: '/assets/images/table.webp',
    readingTime: '5 min read',
    intro:
      'This project focuses on building a reusable and developer-friendly React data table that can fit into many different products without rewriting the same table logic every time. The goal was to create a production-ready component that feels flexible for teams while still being simple to integrate.',
    repoUrl: 'https://github.com/Gandharvkalia1/react-resusable-data-table.git',
    sections: [
      {
        heading: 'Why I built this component',
        body: [
          'Many admin panels and dashboards rely on tables, but each project tends to rebuild sorting, filtering, pagination, and row actions from scratch. That creates repeated effort and inconsistent user experiences across products.',
          'I wanted a single reusable table foundation that could support real application needs like column visibility, row selection, bulk actions, server-side integration, and clean TypeScript-based extensibility.',
        ],
      },
      {
        heading: 'Core features included in the table',
        body: [
          'The table supports global search, column-based sorting and filtering, row selection, pagination controls, loading skeletons, and dynamic column visibility. These are the features teams usually need first when moving from a static table to a more product-ready experience.',
          'It is built on TanStack Table, which gives the component a strong state-management foundation while still allowing custom UI patterns. TypeScript makes the data model and column definitions safer and easier to reuse across screens.',
        ],
      },
      {
        heading: 'What makes it reusable in real projects',
        body: [
          'The component is structured so developers can plug in their own columns, row actions, and data sources without changing the table internals. That makes it useful across admin dashboards, CRM screens, internal tools, and management platforms.',
          'I also designed it to support server-side pagination, sorting, and filtering, which is important once datasets grow beyond what should be handled entirely in the browser.',
        ],
      },
      {
        heading: 'GitHub repository and project reference',
        body: [
          'The full source code is available on GitHub so visitors can inspect the implementation, understand the component API, and reuse ideas in their own projects.',
          'You can check the repository here: https://github.com/Gandharvkalia1/react-resusable-data-table.git',
        ],
      },
    ],
    takeaway:
      'A reusable table component becomes much more valuable when it balances flexibility for developers with a polished experience for end users.',
    href: '/blog/react-reusable-data-table',
  },
  {
    slug: 'react-reusable-data-table',
    date: 'Apr 23, 2026',
    title: 'Building a Reusable React Data Table with TanStack Table',
    excerpt:
      'A reusable React data table built with TypeScript and TanStack Table, designed for sorting, filtering, selection, pagination, and production-ready scalability.',
    category: 'React Component Design',
    image: '/assets/images/table.webp',
    readingTime: '5 min read',
    intro:
      'This project focuses on building a reusable and developer-friendly React data table that can fit into many different products without rewriting the same table logic every time. The goal was to create a production-ready component that feels flexible for teams while still being simple to integrate.',
    repoUrl: 'https://github.com/Gandharvkalia1/react-resusable-data-table.git',
    sections: [
      {
        heading: 'Why I built this component',
        body: [
          'Many admin panels and dashboards rely on tables, but each project tends to rebuild sorting, filtering, pagination, and row actions from scratch. That creates repeated effort and inconsistent user experiences across products.',
          'I wanted a single reusable table foundation that could support real application needs like column visibility, row selection, bulk actions, server-side integration, and clean TypeScript-based extensibility.',
        ],
      },
      {
        heading: 'Core features included in the table',
        body: [
          'The table supports global search, column-based sorting and filtering, row selection, pagination controls, loading skeletons, and dynamic column visibility. These are the features teams usually need first when moving from a static table to a more product-ready experience.',
          'It is built on TanStack Table, which gives the component a strong state-management foundation while still allowing custom UI patterns. TypeScript makes the data model and column definitions safer and easier to reuse across screens.',
        ],
      },
      {
        heading: 'What makes it reusable in real projects',
        body: [
          'The component is structured so developers can plug in their own columns, row actions, and data sources without changing the table internals. That makes it useful across admin dashboards, CRM screens, internal tools, and management platforms.',
          'I also designed it to support server-side pagination, sorting, and filtering, which is important once datasets grow beyond what should be handled entirely in the browser.',
        ],
      },
      {
        heading: 'GitHub repository and project reference',
        body: [
          'The full source code is available on GitHub so visitors can inspect the implementation, understand the component API, and reuse ideas in their own projects.',
          'You can check the repository here: https://github.com/Gandharvkalia1/react-resusable-data-table.git',
        ],
      },
    ],
    takeaway:
      'A reusable table component becomes much more valuable when it balances flexibility for developers with a polished experience for end users.',
    href: '/blog/react-reusable-data-table',
  },
];

export function getBlogPostBySlug(slug: string) {
  return blogPosts.find((post) => post.slug === slug);
}
