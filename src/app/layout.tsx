import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';
import { NavBarProps } from '@/lib/constants';
import FooterComponent from '@/components/layout/Footer';
import dynamic from 'next/dynamic';
import { getNavigation } from '@/lib/contentful';

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

export default async function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  const navigationData = await getNavigation();
  const formattedNavData: NavBarProps['navigationData'] =
    navigationData as NavBarProps['navigationData'];

  return (
    <html lang='en'>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <HeaderComponent navigationData={formattedNavData} />
        <main>{children}</main>
        <FooterComponent />
      </body>
    </html>
  );
}
