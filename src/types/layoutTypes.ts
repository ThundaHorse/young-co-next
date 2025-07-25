export interface NavFields {
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
    description: string;
    file: {
      url: string;
      fileName: string;
    };
  };
}
