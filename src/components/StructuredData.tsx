import React from 'react';
import dynamic from 'next/dynamic';

// Import the client-side component with no SSR
const StructuredDataClient = dynamic(() => import('./StructuredDataClient'));

interface StructuredDataProps {
  type:
    | 'Organization'
    | 'LocalBusiness'
    | 'Article'
    | 'BreadcrumbList'
    | 'FAQPage';
  data: Record<string, unknown>;
}

/**
 * A component for adding structured data to your pages
 * This implementation avoids hydration errors by rendering only on the client side
 */
export default function StructuredData(props: StructuredDataProps) {
  // Use the client-side only version to avoid hydration mismatches
  return <StructuredDataClient {...props} />;
}
