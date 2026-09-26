import fs from 'node:fs';
import path from 'node:path';
import matter from 'gray-matter';
import { marked } from 'marked';

const DIR = path.join(process.cwd(), 'content/artikel');

export type ArticleMeta = {
  slug: string;
  title: string;
  description: string;
  date: string;
  updated?: string;
  cover: string;
  coverAlt: string;
  tags: string[];
  author: string;
  readingMinutes: number;
};

export type Article = ArticleMeta & { html: string };

function readFile(slug: string) {
  const raw = fs.readFileSync(path.join(DIR, `${slug}.md`), 'utf8');
  const { data, content } = matter(raw);
  const words = content.trim().split(/\s+/).length;
  const meta: ArticleMeta = {
    slug,
    title: data.title,
    description: data.description,
    date: new Date(data.date).toISOString(),
    updated: data.updated ? new Date(data.updated).toISOString() : undefined,
    cover: data.cover,
    coverAlt: data.coverAlt ?? data.title,
    tags: data.tags ?? [],
    author: data.author ?? 'Tim Saung56',
    readingMinutes: Math.max(1, Math.round(words / 200)),
  };
  return { meta, content };
}

export function getAllArticles(): ArticleMeta[] {
  return fs
    .readdirSync(DIR)
    .filter((f) => f.endsWith('.md'))
    .map((f) => readFile(f.replace(/\.md$/, '')).meta)
    .sort((a, b) => b.date.localeCompare(a.date));
}

export async function getArticle(slug: string): Promise<Article> {
  const { meta, content } = readFile(slug);
  return { ...meta, html: await marked.parse(content) };
}

export const formatDate = (iso: string) =>
  new Date(iso).toLocaleDateString('id-ID', { day: 'numeric', month: 'long', year: 'numeric' });
