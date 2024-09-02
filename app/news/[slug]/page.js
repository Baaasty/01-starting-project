import Link from 'next/link';
import { notFound } from 'next/navigation';

import { getAllNews } from '@/app/lib/news';

export default function NewsDetailsPage({ params }) {
  const newsSlug = params.slug;
  const newsItem = getAllNews().find((newsItem) => newsItem.slug === newsSlug);

  if (!newsItem) notFound();

  return (
    <article className="news-article">
      <header>
        <Link href={`/news/${newsItem.slug}/image`}>
          <img src={`/images/news/${newsItem.image}`} alt={newsItem.title} />
        </Link>
        <h1>{newsItem.title}</h1>
        <time datetime={newsItem.date}>{newsItem.date}</time>
      </header>
      <p>{newsItem.content}</p>
    </article>
  );
}
