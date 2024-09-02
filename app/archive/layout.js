export default function ArchiveLayout({ archive, latest }) {
  return (
    <div>
      <h1>News Archiv</h1>
      <section id="archive-filter">{archive}</section>
      <section id="archive-latest">{latest}</section>
    </div>
  );
}
