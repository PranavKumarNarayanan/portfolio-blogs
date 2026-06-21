import { MDXRemote } from 'next-mdx-remote/rsc';
import { getPostBySlug, getAllSlugs } from '@/lib/posts';

export function generateStaticParams() {
  return getAllSlugs().map((slug) => ({ slug }));
}

export function generateMetadata({ params }) {
  const post = getPostBySlug(params.slug);
  return { title: `${post.title} — Pranav` };
}

export default function PostPage({ params }) {
  const post = getPostBySlug(params.slug);

  return (
    <article>
      <h1>{post.title}</h1>
      {post.date && <p className="post-date">{post.date}{post.date && ' · '}{post.readTime} min read</p>}
      <MDXRemote source={post.content} />
    </article>
  );
}
