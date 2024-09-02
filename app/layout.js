import MainHeader from './components/main-header';
import './globals.css';

export const metadata = {
  title: 'NextNews',
  description: 'Besser als die Bild Zeitung',
};

export default function RootLayout({ children }) {
  return (
    <html lang="de">
      <body>
        <div id="page">
          <MainHeader />
          {children}
        </div>
      </body>
    </html>
  );
}
