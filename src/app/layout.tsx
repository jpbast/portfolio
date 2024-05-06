import type { Metadata } from 'next';
import { Montserrat } from 'next/font/google';
import Header from '@/components/Header';
import './globals.css';
import Footer from '@/components/Footer';

const inter = Montserrat({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'João Bast | Software Engineer',
  description: 'Software Engineer highly experienced in building JavaScript web and mobile apps',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="overflow-x-hidden scroll-smooth">
      <head>
        <link rel="icon" href="/laptop-icon.png" sizes="any" />
      </head>
      <body className={inter.className}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
