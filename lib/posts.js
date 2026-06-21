import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

const postsDirectory = path.join(process.cwd(), 'content/posts');

function formatDate(date) {
  if (date instanceof Date) {
    return date.toISOString().split('T')[0]; // "2025-07-14"
  }
  return date || '';
}

function estimateReadTime(content) {
  const words = content.trim().split(/\s+/).filter(Boolean).length;
  return Math.max(1, Math.round(words / 200)); // ~200 wpm
}

export function getAllPosts() {
  const files = fs.readdirSync(postsDirectory).filter((f) => f.endsWith('.mdx'));

  const posts = files.map((filename) => {
    const slug = filename.replace(/\.mdx$/, '');
    const filePath = path.join(postsDirectory, filename);
    const fileContents = fs.readFileSync(filePath, 'utf8');
    const { data, content } = matter(fileContents);

    return {
      slug,
      title: data.title || slug,
      date: formatDate(data.date),
      summary: data.summary || '',
      readTime: estimateReadTime(content),
    };
  });

  return posts.sort((a, b) => (a.date < b.date ? 1 : -1));
}

export function getAllSlugs() {
  const files = fs.readdirSync(postsDirectory).filter((f) => f.endsWith('.mdx'));
  return files.map((filename) => filename.replace(/\.mdx$/, ''));
}

export function getPostBySlug(slug) {
  const filePath = path.join(postsDirectory, `${slug}.mdx`);
  const fileContents = fs.readFileSync(filePath, 'utf8');
  const { data, content } = matter(fileContents);

  return {
    slug,
    title: data.title || slug,
    date: formatDate(data.date),
    summary: data.summary || '',
    readTime: estimateReadTime(content),
    content,
  };
}