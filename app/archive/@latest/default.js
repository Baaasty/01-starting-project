import { getLatestNews } from '@/app/lib/news';

import NewsList from '@/app/components/news-list';

export default function LatestNewsPage() {
  const news = getLatestNews();

  return (
    <>
      <h2>Letzten News</h2>
      <NewsList news={news} />
    </>
  );
}
