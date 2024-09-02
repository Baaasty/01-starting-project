import { notFound } from 'next/navigation';

import { getAllNews } from '@/app/lib/news';

export default function ImagePage({ params }) {
  const newsSlug = params.slug;
  const newsItem = getAllNews().find((newsItem) => newsItem.slug === newsSlug);

  if (!newsItem) notFound();

  return (
    <div className="fullscreen-image">
      <img src={`/images/news/${newsItem.image}`} alt={newsItem.title} />
    </div>
  );
}
