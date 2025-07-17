import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';
// import { Navbar } from '@/components/layout/Navbar';
import FooterComponent from '@/components/layout/Footer';
import dynamic from 'next/dynamic';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin']
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin']
});

const HeaderComponent = dynamic(() =>
  import('@/components/layout/Navbar').then((mod) => mod.Navbar)
);

export const metadata: Metadata = {
  title: 'Young Co Tax',
  description: 'Your trusted partner in tax solutions'
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <HeaderComponent />
        <main>{children}</main>
        <FooterComponent />
      </body>
    </html>
  );
}
