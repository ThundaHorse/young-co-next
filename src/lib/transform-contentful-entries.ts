/* eslint-disable @typescript-eslint/no-explicit-any */
import { Entry } from 'contentful';

export interface ContentDto {
  id: string;
  contentType: string;
  fields: Record<string, unknown>;
}

export const transformEntry = (
  entry: Entry<any>,
  locale: string
): ContentDto => {
  return {
    id: entry.sys?.id,
    contentType: entry.sys.contentType?.sys?.id || 'unknown',
    fields: extractFields(entry.fields, locale)
  };
};

const extractFields = (
  fields: Record<string, any>,
  locale: string
): Record<string, any> => {
  const result: Record<string, any> = {};
  for (const [key, value] of Object.entries(fields)) {
    const localized = value?.[locale];

    if (Array.isArray(value)) {
      result[key] = value.map((item) => resolveValue(item, locale));
    } else if (localized == undefined) {
      result[key] = resolveValue(value, locale);
    } else {
      result[key] = value;
    }
  }

  return result;
};

const resolveValue = (value: any, locale: string): any => {
  if (
    value?.sys?.type === 'Entry' ||
    value?.sys?.type === 'Asset' ||
    value?.sys?.type === 'Link'
  ) {
    return value.fields ? extractFields(value.fields, locale) : undefined;
  }

  return value;
};
