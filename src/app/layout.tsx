import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';
import { NavBarProps } from '@/lib/constants';
import FooterComponent from '@/components/layout/Footer';
import dynamic from 'next/dynamic';
import { getNavigation } from '@/lib/contentful';
import StructuredData from '@/components/StructuredData';

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
  title: 'Young Co Tax | Professional Tax & Accounting Solutions',
  description:
    'Young Co Tax provides expert tax preparation, accounting services, and financial planning for individuals and businesses. Your trusted partner in tax solutions.',
  keywords:
    'tax services, accounting, bookkeeping, tax preparation, financial planning, tax solutions',
  metadataBase: new URL('https://www.youngcotax.com'),
  alternates: {
    canonical: '/'
  },
  openGraph: {
    title: 'Young Co Tax | Professional Tax & Accounting Solutions',
    description:
      'Young Co Tax provides expert tax preparation, accounting services, and financial planning for individuals and businesses.',
    url: 'https://www.youngcotax.com',
    siteName: 'Young Co Tax',
    images: [
      {
        url: 'https://www.youngcotax.com/images/logo.webp',
        width: 1200,
        height: 630,
        alt: 'Young Co Tax Logo'
      }
    ],
    locale: 'en_US',
    type: 'website'
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Young Co Tax | Professional Tax & Accounting Solutions',
    description:
      'Expert tax preparation, accounting services, and financial planning for individuals and businesses.',
    images: ['https://www.youngcotax.com/images/logo.webp']
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1
    }
  }
};

const organizationData = {
  name: 'Young Co Tax',
  url: 'https://www.youngcotax.com',
  logo: 'https://www.youngcotax.com/images/logo.webp'
  // sameAs: [
  //   'https://www.facebook.com/youngcotax',
  //   'https://www.linkedin.com/company/youngcotax',
  //   'https://twitter.com/youngcotax'
  // ],
  // contactPoint: {
  //   '@type': 'ContactPoint',
  //   telephone: '+1-555-123-4567',
  //   contactType: 'customer service',
  //   areaServed: 'US',
  //   availableLanguage: ['English']
  // }
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
      <head>
        <StructuredData
          type='Organization'
          data={organizationData}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <HeaderComponent navigationData={formattedNavData} />
        <main>{children}</main>
        <FooterComponent />
      </body>
    </html>
  );
}
