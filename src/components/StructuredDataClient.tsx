'use client';

import React, { useEffect, useState } from 'react';

interface StructuredDataClientProps {
  type:
    | 'Organization'
    | 'LocalBusiness'
    | 'Article'
    | 'BreadcrumbList'
    | 'FAQPage';
  data: Record<string, unknown>;
}

export default function StructuredDataClient({
  type,
  data
}: StructuredDataClientProps) {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    // Only execute on the client
    setIsClient(true);
  }, []);

  if (!isClient) {
    // Don't render anything on the server
    return null;
  }

  let structuredData: Record<string, unknown>;

  switch (type) {
    case 'Organization':
      structuredData = {
        '@context': 'https://schema.org',
        '@type': 'Organization',
        name: data.name,
        url: data.url,
        logo: data.logo,
        sameAs: data.sameAs,
        contactPoint: data.contactPoint
      };
      break;
    case 'LocalBusiness':
      structuredData = {
        '@context': 'https://schema.org',
        '@type': 'LocalBusiness',
        name: data.name,
        image: data.image,
        address: data.address,
        geo: data.geo,
        url: data.url,
        telephone: data.telephone,
        priceRange: data.priceRange,
        openingHoursSpecification: data.openingHoursSpecification
      };
      break;
    case 'Article':
      structuredData = {
        '@context': 'https://schema.org',
        '@type': 'Article',
        headline: data.headline,
        image: data.image,
        datePublished: data.datePublished,
        dateModified: data.dateModified,
        author: data.author,
        publisher: data.publisher,
        description: data.description
      };
      break;
    case 'BreadcrumbList':
      structuredData = {
        '@context': 'https://schema.org',
        '@type': 'BreadcrumbList',
        itemListElement: data.itemListElement
      };
      break;
    case 'FAQPage':
      structuredData = {
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        mainEntity: data.mainEntity
      };
      break;
    default:
      structuredData = {};
  }

  const jsonLD = JSON.stringify(structuredData);
  const id = `structured-data-${type.toLowerCase()}`;

  return (
    <script
      id={id}
      type='application/ld+json'
      dangerouslySetInnerHTML={{ __html: jsonLD }}
    />
  );
}
