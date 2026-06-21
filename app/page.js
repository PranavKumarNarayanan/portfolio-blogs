import Link from 'next/link';
import { getAllPosts } from '@/lib/posts';

export default function HomePage() {
  const posts = getAllPosts();

  return (
    <div>
      <ul className="post-list">
        {posts.map((post) => (
          <li key={post.slug}>
            <Link href={`/blog/${post.slug}`} className="post-title">
              {post.title}
            </Link>
            {post.date && <span className="post-date">{post.date}· {post.readTime} min read</span>}
            {post.summary && <p className="post-summary">{post.summary}</p>}
          </li>
        ))}
      </ul>
    </div>
  );
}
