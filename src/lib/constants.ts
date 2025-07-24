export interface Product {
  name: string;
  description: string;
  href: string;
}

export interface SolutionOption {
  name: string;
  id: string;
  tab: number;
}

export const products: Product[] = [
  {
    name: 'About',
    description: 'About',
    href: '/about'
  },
  {
    name: 'Blog',
    description: 'Tax Tips & Business Insights',
    href: '/blog'
  },
  {
    name: 'Contact',
    description: 'Contact Page',
    href: '/contact-us'
  }
];

export const solutionOptions: SolutionOption[] = [
  {
    name: 'Accounting',
    id: 'accounting',
    tab: 0
  },
  {
    name: 'Bookkeeping',
    id: 'bookkeeping',
    tab: 1
  },
  {
    name: 'Taxes',
    id: 'taxes',
    tab: 2
  },
  {
    name: 'Formation',
    id: 'formation',
    tab: 3
  },
  {
    name: 'Payroll',
    id: 'payroll',
    tab: 4
  },
  {
    name: 'Strategic Planning',
    id: 'strategic-planning',
    tab: 5
  }
];

export interface Solution {
  id: string;
  title: string;
  intro: string;
  desc: string;
  subDesc?: string;
  intro2: string;
  desc2: string[];
  image: string;
}

export const solutions: Solution[] = [
  {
    id: 'accounting',
    title: 'Accounting',
    intro: 'Turn Accounting into a Value-Added Process',
    desc: 'Managing your accounting can be a difficult and time-consuming task. We provide organized, reliable financial record support on a monthly, quarterly, or annual basis. Our experienced team can scale with your needs, offering everything from basic accounting services to guidance for managing growth.',
    intro2: 'How We Help',
    desc2: [
      'Year-round support to help guide you and answer any accounting questions you may have.',
      'Provide your financial statements on a monthly basis to give an accurate reflection of your income, expenses, and tax projections.',
      'Review on a regular basis to evaluate your business performance and stay proactive through a strategic tax plan that fits your situation.',
      'Review for any irregularities in spending to deter any fraud or identity theft.',
      'Help ensure that you stay compliant with all tax obligations.',
      'Streamline your accounting through integration of your technology platforms to reduce administrative and recurring tasks.'
    ],
    image: '/images/solutions/accounting.webp'
  },
  {
    id: 'bookkeeping',
    title: 'Bookkeeping',
    intro: 'Let Us Help You Make Informed Decisions',
    desc: 'Let us handle the organization and maintenance, so you can focus on growing your business. Our bookkeeping services will keep your finances organized, providing a clear view of your company’s health and profitability.',
    subDesc:
      "You didn't start your business to spend hours on bookkeeping. We keep your books up to date and error free. By keeping accurate records of you business’s financial transactions, bookkeeping can reveal the true health and profitability of your organization. It is essential to get a snapshot of your business, so you can make crucial decisions that will ensure future success.",
    intro2: 'How We Help',
    desc2: [
      'Financial statements provided on a monthly basis.',
      'Reconciliation of your bank and credit card statements.',
      'Categorization of all transactions.',
      'Data outlier detection and monitoring of expenses based off industry averages data.',
      'Maximize your deductions - Save more on taxes, without sacrificing your time with home office and other personal expense tracking.'
    ],
    image: '/images/solutions/bookkeeping.webp'
  },
  {
    id: 'taxes',
    title: 'Taxes',
    intro: 'Simplify Tax Preparation',
    desc: 'Tax season doesn’t have to be a hassle. We’ll ensure you’re prepared and, if necessary, help you file an extension and pay the right amount of estimated taxes to avoid penalties.',
    subDesc:
      "You know about how to grow your business, we know about small business taxes. Focus on what you love and we'll provide your quarterly tax estimates and annual business and personal tax solutions. Plus, as tax laws and regulations are always changing, it’s important to be up-to-date.",
    intro2: 'How We Help',
    desc2: [
      'Tax return filing for federal, state, and local (if applicable).',
      'Tax return extension filing if needed.',
      'Explain your tax return to make sure you understand your filing.',
      'Provide Schedule K1s for any business tax returns.',
      'Provide and make quarterly estimated taxes.',
      'Handle any international tax implications and appropriate filings.'
    ],
    image: '/images/solutions/taxes.webp'
  },
  {
    id: 'formation',
    title: 'Formation',
    intro: "We'll Help Get  You Started",
    desc: 'Starting a business? We’ll help you set up your LLC or Corporation, handle essentials like EINs, bank accounts, payroll, and more, so you can confidently move forward on this exciting journey!',
    subDesc:
      'Every business must be registered as a legal entity. This not only offers important legal protection for the owners but also provides potential tax benefits that should be taken into account. Furthermore, choosing the appropriate structure is crucial when launching any new venture.',
    intro2: 'How We Help',
    desc2: [
      'Consultation on the best entity for your business, trust, or investments.',
      'Formation of your LLC or Corporation.',
      'Analysis on applicable State for company registration and identification of any required foreign companies.',
      'Structuring a multiple layer company to protect assets.',
      'Registration with any relevant State, application for an EIN, creation of draft operating agreement, and application of S-Corp status (if needed).'
    ],
    image: '/images/solutions/formation.webp'
  },
  {
    id: 'payroll',
    title: 'Payroll',
    intro: "Let's Pay Yourself and Your Employees",
    desc: 'Managing payroll can be a time-intensive task, particularly for small businesses with a small team. Implementing a payroll system can help simplify and automate the process, saving you time and ensuring your employees are paid accurately and on schedule.',
    subDesc:
      "Get your payroll in order with our help. We've partnered up with Gusto, Paychex, and ADP to help you streamline your payroll process.",
    intro2: 'How We Help',
    desc2: [
      'Determination on whether an employee should be paid as W2 or as a 1099 contractor to comply with federal and state laws.',
      'Calculation and maintenance of reasonable salary for S-Corporations.',
      'Establishment of retirement plans, health insurance, and other fringe benefits for you and your team.',
      'Utilization of federal and state tax incentives and credits to ensure you get every dollar you are entitled to.'
    ],
    image: '/images/solutions/payroll.webp'
  },
  {
    id: 'strategic-planning',
    title: 'Strategic Planning',
    intro: 'Maximize Your Investments and Minimize Taxes',
    desc: 'Without an effective tax plan, you may be losing money each year without even realizing it. By strategically planning, you can take full advantage of available tax breaks, ensuring you don’t pay more than needed. Identifying ways to maximize your savings can significantly impact the amount of money that stays in your pocket.',
    subDesc: '',
    intro2: 'How We Help',
    desc2: [
      'Create a personalized tax plan to meet your financial, business, and personal goals.',
      'Analyze all income and investments to optimize your tax savings and establish a long-term plan.',
      'Analyze your business and investment situation(s) to ensure that all direct and indirect expenses are being captured.',
      'Utilization of federal and state tax incentives and credits to ensure you get every dollar you are entitled to.',
      'Establishment of Puerto Rico residency (if applicable).',
      'Quarterly review meetings to discuss your tax plan, estimate tax projections for the year, and implement new strategies as things change.',
      'Year-round support to help you understand your tax situation and answer any questions you may have.'
    ],
    image: '/images/solutions/strategic-planning.webp'
  }
];

export const offerings = [
  {
    icon: '/icons/offer/bank.png',
    title: 'Accounting',
    description: "You handle the business. We'll handle the numbers.",
    tab: 0
  },
  {
    icon: '/icons/offer/book.png',
    title: 'Bookkeeping',
    description:
      'Monthly bookkeeping to track your income and expenses to understand your financials.',
    tab: 1
  },
  {
    icon: '/icons/offer/tax-bag.png',
    title: 'Taxes',
    description:
      'Prepare your business tax returns, personal tax returns, and year-round tax guidance.',
    tab: 2
  },
  {
    icon: '/icons/offer/flow-chart.png',
    title: 'Formation',
    description:
      'Set up your new company, protect your assets, and make tax elections.',
    tab: 3
  },
  {
    icon: '/icons/offer/calendar.png',
    title: 'Payroll',
    description:
      'Streamline your payroll process to pay yourself and your employees.',
    tab: 4
  },
  {
    icon: '/icons/offer/king.png',
    title: 'Strategic Planning',
    description:
      'Meet with a specialist one-on-one every quarter to develop and implement a tailormade tax saving strategy.',
    tab: 5
  }
];

export interface NavBarProps {
  navigationData: {
    mainLinks: Array<{
      name: string;
      description: string;
      href: string;
    }>;
    solutionLinks?: Array<{
      name: string;
      id: string;
      tab: number;
    }>;
    clientPortalUrl: string;
    logo: {
      file: {
        url: string;
        description: string;
        fileName: string;
      };
    };
  };
}
