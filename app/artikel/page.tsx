import type { Metadata } from 'next';
import ArticleCard from '@/components/ArticleCard';
import JsonLd from '@/components/JsonLd';
import { getAllArticles } from '@/lib/articles';
import { site } from '@/lib/site';

export const metadata: Metadata = {
  title: 'Artikel Taman & Landscaping',
  description: 'Tips merawat taman, inspirasi desain, dan panduan memilih tanaman untuk iklim tropis Batam dari tim Saung56.',
  alternates: { canonical: '/artikel' },
  openGraph: { url: `${site.url}/artikel`, title: `Artikel Taman & Landscaping | ${site.name}` },
};

export default function ArticlesPage() {
  const articles = getAllArticles();

  const breadcrumb = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Beranda', item: `${site.url}/` },
      { '@type': 'ListItem', position: 2, name: 'Artikel', item: `${site.url}/artikel` },
    ],
  };

  return (
    <section className="page-head">
      <div className="wrap">
        <div className="center-head">
          <span className="pill">Artikel</span>
          <h1>Tips & inspirasi taman.</h1>
          <p>Panduan praktis merawat dan merancang taman di iklim tropis Batam.</p>
        </div>
        <div className="gallery">
          {articles.map((a) => <ArticleCard key={a.slug} a={a} />)}
        </div>
      </div>
      <JsonLd data={breadcrumb} />
    </section>
  );
}
