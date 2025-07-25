import { createClient } from 'contentful';
import { transformEntry } from './transform-contentful-entries';
import { ContentDto } from '../types/contentful';
import { NavFields } from '../types/layoutTypes';

export const contentfulClient = createClient({
  space: process.env.CONTENTFUL_SPACE_ID!,
  accessToken: process.env.CONTENTFUL_ACCESS_TOKEN!,
  environment: process.env.CONTENTFUL_ENV || 'master'
});

export async function getImages() {
  const response = await contentfulClient.getEntries({
    content_type: 'images',
    include: 2
  });

  const images = response.items.map((item) =>
    transformEntry(item, 'en-US')
  ) as ContentDto[];

  return images.map((image) => image.fields.image);
}

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
    mainLinks: fields.mainLinks,
    solutionLinks: fields.solutionLinks,
    clientPortalUrl: fields.clientPortalUrl,
    url: logo.file.url,
    description: logo.description || 'Young & Company'
  };
}
