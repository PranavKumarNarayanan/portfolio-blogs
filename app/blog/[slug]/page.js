import { MDXRemote } from 'next-mdx-remote/rsc';
import { getPostBySlug, getAllSlugs } from '@/lib/posts';
import { rehypePikchr } from '@/lib/rehype-pikchr';
import remarkGfm from 'remark-gfm';

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
      {post.date && <p className="post-date">{post.date} · {post.readTime} min read</p>}
      <MDXRemote
        source={post.content}
        options={{
          mdxOptions: {
            remarkPlugins: [remarkGfm],
            rehypePlugins: [rehypePikchr],
          },
        }}
      />
    </article>
  );
}