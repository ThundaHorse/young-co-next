import { createClient } from 'contentful';
import { transformEntry } from './transform-contentful-entries';

interface NavFields {
  mainLinks: Array<{
    fields: {
      name: string;
      description: string;
      href: string;
    };
  }>;
  solutionLinks?: Array<{
    fields: {
      name: string;
      id: string;
      tab: number;
    };
  }>;
  clientPortalUrl: string;
  logo: {
    file: {
      url: string;
      description: string;
      fileName: string;
    };
  };
}

interface ContentDto {
  id: string;
  contentType: string;
  fields: Record<string, unknown>;
}

export const contentfulClient = createClient({
  space: process.env.CONTENTFUL_SPACE_ID!,
  accessToken: process.env.CONTENTFUL_ACCESS_TOKEN!,
  environment: process.env.CONTENTFUL_ENV || 'master'
});

export async function getNavigation() {
  const response = await contentfulClient.getEntries({
    content_type: 'nav',
    include: 2
  });

  const navEntries = response.items.map((item) =>
    transformEntry(item, 'en-US')
  ) as ContentDto[];

  const fields = navEntries[0].fields;
  const logo = fields.logo as NavFields['logo'];

  return {
    mainLinks: fields.mainLinks as NavFields['mainLinks'],
    solutionLinks: fields.solutionLinks as NavFields['solutionLinks'],
    clientPortalUrl: fields.clientPortalUrl as string,
    logo: logo.file.url
  };
}
