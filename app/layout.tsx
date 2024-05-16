import { inter } from '@/styles/fonts';
import '@/styles/globals.css';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'JSONPlaceholder Blog',
  description: 'Implementation of a blog using JSONPlaceholder API',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <main className="max-w-2xl mx-auto">
          <div className="mx-6 pt-4 sm:pt-8 pb-10">{children}</div>
        </main>
      </body>
    </html>
  );
}
