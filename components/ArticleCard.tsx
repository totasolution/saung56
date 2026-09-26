import Link from 'next/link';
import Image from 'next/image';
import { formatDate, type ArticleMeta } from '@/lib/articles';

export default function ArticleCard({ a }: { a: ArticleMeta }) {
  return (
    <article className="card article-card">
      <Link href={`/artikel/${a.slug}`}>
        <div className="img">
          <Image src={a.cover} alt={a.coverAlt} width={800} height={600} />
        </div>
        <div className="body">
          <div className="meta">
            <time dateTime={a.date}>{formatDate(a.date)}</time> · {a.readingMinutes} menit baca
          </div>
          <h3>{a.title}</h3>
          <p>{a.description}</p>
        </div>
      </Link>
    </article>
  );
}
