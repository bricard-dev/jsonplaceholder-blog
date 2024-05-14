import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

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
          <div className="mx-6">{children}</div>
        </main>
      </body>
    </html>
  );
}
