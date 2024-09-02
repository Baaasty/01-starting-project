import { getAllNews } from '@/app/lib/news';

import NewsList from '@/app/components/news-list';

export default function NewsPage() {
  const news = getAllNews();

  return (
    <div>
      <h1>News Seite</h1>
      <NewsList news={news} />
    </div>
  );
}
