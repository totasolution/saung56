import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import ArticleCard from '@/components/ArticleCard';
import JsonLd from '@/components/JsonLd';
import { IconWhatsApp } from '@/components/Icons';
import { formatDate, getAllArticles, getArticle } from '@/lib/articles';
import { site, waLink } from '@/lib/site';

type Props = { params: Promise<{ slug: string }> };

export const dynamicParams = false;

export function generateStaticParams() {
  return getAllArticles().map((a) => ({ slug: a.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const a = await getArticle((await params).slug);
  const url = `/artikel/${a.slug}`;
  return {
    title: a.title,
    description: a.description,
    keywords: a.tags,
    alternates: { canonical: url },
    openGraph: {
      type: 'article',
      url: `${site.url}${url}`,
      title: a.title,
      description: a.description,
      publishedTime: a.date,
      modifiedTime: a.updated ?? a.date,
      authors: [a.author],
      tags: a.tags,
      images: [{ url: a.cover, alt: a.coverAlt }],
    },
    twitter: { card: 'summary_large_image', title: a.title, description: a.description, images: [a.cover] },
  };
}

export default async function ArticlePage({ params }: Props) {
  const a = await getArticle((await params).slug);
  const related = getAllArticles().filter((r) => r.slug !== a.slug).slice(0, 3);
  const url = `${site.url}/artikel/${a.slug}`;

  const ld = [
    {
      '@context': 'https://schema.org',
      '@type': 'BlogPosting',
      headline: a.title,
      description: a.description,
      image: a.cover,
      datePublished: a.date,
      dateModified: a.updated ?? a.date,
      author: { '@type': 'Organization', name: a.author, url: site.url },
      publisher: { '@type': 'Organization', name: site.legalName, logo: { '@type': 'ImageObject', url: `${site.url}/logo.svg` } },
      mainEntityOfPage: url,
      keywords: a.tags.join(', '),
      inLanguage: 'id-ID',
    },
    {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Beranda', item: `${site.url}/` },
        { '@type': 'ListItem', position: 2, name: 'Artikel', item: `${site.url}/artikel` },
        { '@type': 'ListItem', position: 3, name: a.title, item: url },
      ],
    },
  ];

  return (
    <>
      <article className="post">
        <div className="wrap post-wrap">
          <nav className="crumbs" aria-label="Breadcrumb">
            <Link href="/">Beranda</Link> / <Link href="/artikel">Artikel</Link> / <span aria-current="page">{a.title}</span>
          </nav>
          <header className="post-head">
            <div className="tags">{a.tags.map((t) => <span key={t} className="pill">{t}</span>)}</div>
            <h1>{a.title}</h1>
            <p className="lede">{a.description}</p>
            <div className="meta">
              {a.author} · <time dateTime={a.date}>{formatDate(a.date)}</time> · {a.readingMinutes} menit baca
            </div>
          </header>
        </div>
        <div className="wrap">
          <Image className="post-cover" src={a.cover} alt={a.coverAlt} width={1600} height={800} priority />
        </div>
        <div className="wrap post-wrap">
          <div className="prose" dangerouslySetInnerHTML={{ __html: a.html }} />
          <aside className="post-cta">
            <div>
              <b>Butuh bantuan untuk taman Anda?</b>
              <p>Konsultasi dan survei lokasi gratis untuk area Batam.</p>
            </div>
            <a href={waLink(`Halo Saung56, saya baca artikel "${a.title}" dan mau konsultasi.`)} className="btn btn-green" target="_blank" rel="noopener">
              <IconWhatsApp /> Chat WhatsApp
            </a>
          </aside>
        </div>
      </article>

      {related.length > 0 && (
        <section style={{ paddingTop: 0 }}>
          <div className="wrap">
            <h2 className="related-title">Artikel lainnya</h2>
            <div className="gallery">
              {related.map((r) => <ArticleCard key={r.slug} a={r} />)}
            </div>
          </div>
        </section>
      )}
      <JsonLd data={ld} />
    </>
  );
}
