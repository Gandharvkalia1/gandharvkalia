export type SanityImage = {
  asset?: {
    _ref?: string;
    _type?: string;
  };
};

export type SanityPostSummary = {
  _id: string;
  title: string;
  slug: string;
  excerpt?: string;
  category?: string;
  publishedAt?: string;
  readingTime?: string;
  mainImage?: SanityImage;
};

export type SanityPost = SanityPostSummary & {
  repoUrl?: string;
  body?: unknown[];
  takeaway?: string;
};
