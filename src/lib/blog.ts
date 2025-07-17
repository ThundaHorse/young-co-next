import { BlogPost, BlogCategory, BlogTag } from '@/types/blog';

export const blogCategories: BlogCategory[] = [
  {
    id: '1',
    name: 'Tax Tips',
    description: 'Helpful tips and advice for tax preparation and planning',
    slug: 'tax-tips'
  },
  {
    id: '2',
    name: 'Business Finance',
    description: 'Financial guidance for small businesses and entrepreneurs',
    slug: 'business-finance'
  },
  {
    id: '3',
    name: 'Accounting',
    description: 'Accounting best practices and industry insights',
    slug: 'accounting'
  },
  {
    id: '4',
    name: 'Regulatory Updates',
    description: 'Latest changes in tax laws and regulations',
    slug: 'regulatory-updates'
  }
];

export const blogTags: BlogTag[] = [
  { id: '1', name: 'Small Business', slug: 'small-business' },
  { id: '2', name: 'Tax Deductions', slug: 'tax-deductions' },
  { id: '3', name: 'Bookkeeping', slug: 'bookkeeping' },
  { id: '4', name: 'IRS', slug: 'irs' },
  { id: '5', name: 'Quarterly Taxes', slug: 'quarterly-taxes' },
  { id: '6', name: 'Business Formation', slug: 'business-formation' },
  { id: '7', name: 'Payroll', slug: 'payroll' },
  { id: '8', name: 'Financial Planning', slug: 'financial-planning' }
];

export const blogPosts: BlogPost[] = [
  {
    id: '1',
    title: 'Top 10 Tax Deductions for Small Businesses in 2024',
    excerpt:
      'Discover the most valuable tax deductions that can help your small business save money this tax season.',
    content: `
# Top 10 Tax Deductions for Small Businesses in 2024

As a small business owner, maximizing your tax deductions is crucial for minimizing your tax liability and keeping more money in your business. Here are the top 10 tax deductions you should know about for 2024.

## 1. Home Office Deduction

If you use part of your home exclusively for business, you may be able to deduct expenses related to that space. You can choose between:

- **Simplified method**: Deduct $5 per square foot (up to 300 square feet)
- **Actual expense method**: Deduct the actual expenses based on the percentage of your home used for business

## 2. Vehicle Expenses

You can deduct vehicle expenses using one of two methods:

- **Standard mileage rate**: 65.5 cents per mile for business use in 2024
- **Actual expense method**: Deduct actual costs like gas, insurance, repairs, and depreciation

## 3. Equipment and Supplies

Business equipment and supplies are generally deductible, including:

- Office supplies
- Computer equipment
- Furniture
- Software subscriptions
- Tools and machinery

## 4. Professional Services

Fees paid to professionals for business purposes are deductible:

- Legal fees
- Accounting fees
- Consulting services
- Professional development and training

## 5. Marketing and Advertising

All legitimate marketing and advertising expenses are deductible:

- Website development and hosting
- Social media advertising
- Print materials
- Trade shows and networking events

## 6. Business Insurance

Most business insurance premiums are deductible:

- General liability insurance
- Professional liability insurance
- Business property insurance
- Workers' compensation insurance

## 7. Travel Expenses

Business travel expenses are deductible when traveling away from your tax home:

- Transportation costs
- Lodging
- Meals (50% deductible)
- Incidental expenses

## 8. Meals and Entertainment

Business meals are generally 50% deductible when:

- The expense is directly related to business
- You or an employee is present
- The meal is not lavish or extravagant

## 9. Rent and Utilities

If you rent office space, you can deduct:

- Rent payments
- Utilities (electricity, gas, water, internet)
- Maintenance and repairs
- Cleaning services

## 10. Employee Wages and Benefits

Compensation paid to employees is deductible:

- Salaries and wages
- Bonuses
- Health insurance premiums
- Retirement plan contributions

## Important Reminders

- Keep detailed records and receipts for all deductions
- Ensure expenses are ordinary and necessary for your business
- Consider working with a tax professional to maximize your deductions
- Stay updated on tax law changes that may affect your deductions

Remember, tax laws can be complex and change frequently. It's always best to consult with a qualified tax professional to ensure you're taking advantage of all available deductions while staying compliant with current regulations.
    `,
    author: 'Sarah Johnson, CPA',
    publishedAt: '2024-01-15T10:00:00Z',
    tags: ['small-business', 'tax-deductions', 'business-finance'],
    category: 'tax-tips',
    featuredImage: '/images/blog/tax-deductions-small-business.jpg',
    readingTime: 8,
    slug: 'top-10-tax-deductions-small-businesses-2024'
  },
  {
    id: '2',
    title: 'Understanding Quarterly Tax Payments: A Complete Guide',
    excerpt:
      'Learn when and how to make quarterly tax payments to avoid penalties and manage your cash flow effectively.',
    content: `
# Understanding Quarterly Tax Payments: A Complete Guide

Quarterly tax payments, also known as estimated tax payments, are prepaid taxes that certain taxpayers must make four times a year. This guide will help you understand when you need to make these payments and how to calculate them.

## Who Needs to Make Quarterly Payments?

You generally need to make quarterly tax payments if you expect to owe $1,000 or more in taxes for the current year and you didn't pay at least 90% of your tax liability through withholding or previous quarterly payments.

Common situations include:

- Self-employed individuals
- Business owners
- Freelancers and contractors
- Investors with significant capital gains
- Anyone with income not subject to withholding

## 2024 Quarterly Tax Due Dates

- **Q1 2024**: April 15, 2024
- **Q2 2024**: June 17, 2024
- **Q3 2024**: September 16, 2024
- **Q4 2024**: January 15, 2025

## How to Calculate Your Quarterly Payment

### Method 1: Pay 25% of Last Year's Tax

The simplest method is to pay 25% of your previous year's total tax liability each quarter. This ensures you won't face penalties, regardless of your current year's income.

### Method 2: Pay 25% of Current Year's Estimated Tax

If you expect to owe less this year, you can pay 25% of your estimated current year tax liability.

### Method 3: Pay 110% of Last Year's Tax (High Income)

If your adjusted gross income was more than $150,000, you need to pay 110% of last year's tax to avoid penalties.

## Safe Harbor Rules

The IRS provides "safe harbor" rules that protect you from penalties:

- Pay at least 90% of the current year's tax liability
- Pay at least 100% of last year's tax liability (110% if AGI > $150,000)

## How to Make Quarterly Payments

### Online Payment Options

- **IRS Direct Pay**: Free for bank transfers
- **Electronic Federal Tax Payment System (EFTPS)**: Free government system
- **IRS2Go Mobile App**: Make payments on your phone

### Traditional Methods

- Mail a check with Form 1040ES
- Phone payments (fees apply)
- Credit or debit card (fees apply)

## Record Keeping

Keep records of all quarterly payments:

- Payment dates
- Payment amounts
- Confirmation numbers
- Bank statements
- Form 1040ES vouchers

## Common Mistakes to Avoid

1. **Missing Payment Deadlines**: Late payments incur penalties and interest
2. **Underpaying**: Not paying enough can result in penalties
3. **Forgetting State Taxes**: Many states also require quarterly payments
4. **Not Adjusting for Income Changes**: Update estimates if income changes significantly

## Penalties for Underpayment

The IRS may impose penalties if you don't pay enough quarterly taxes:

- **Underpayment penalty**: Generally 8% annually (as of 2024)
- **Calculated quarterly**: Penalties are calculated for each quarter separately
- **Interest on penalties**: Penalties accrue interest if not paid promptly

## Tips for Success

1. **Set Up Automatic Payments**: Use EFTPS to schedule recurring payments
2. **Keep a Tax Savings Account**: Set aside money throughout the year
3. **Review and Adjust**: Reassess your payments if income changes
4. **Work with a Professional**: Consider hiring a tax professional for complex situations

## Conclusion

Quarterly tax payments are an important part of tax compliance for many taxpayers. By understanding the requirements and staying organized, you can avoid penalties and better manage your cash flow throughout the year.

Remember, tax situations can be complex, and it's always wise to consult with a qualified tax professional for personalized advice.
    `,
    author: 'Michael Chen, CPA',
    publishedAt: '2024-01-22T09:30:00Z',
    tags: ['quarterly-taxes', 'small-business', 'tax-planning'],
    category: 'tax-tips',
    featuredImage: '/images/blog/quarterly-tax-payments.jpg',
    readingTime: 10,
    slug: 'understanding-quarterly-tax-payments-complete-guide'
  },
  {
    id: '3',
    title: 'Essential Bookkeeping Practices for New Business Owners',
    excerpt:
      'Master the fundamentals of bookkeeping to keep your business finances organized and tax-ready.',
    content: `
# Essential Bookkeeping Practices for New Business Owners

Good bookkeeping is the foundation of any successful business. It helps you track income and expenses, make informed decisions, and prepare for tax season. Here are the essential practices every new business owner should implement.

## 1. Choose the Right Accounting Method

### Cash Basis Accounting
- Record transactions when money changes hands
- Simpler for small businesses
- Good for businesses with minimal inventory

### Accrual Basis Accounting
- Record transactions when they occur, regardless of payment
- Required for businesses with gross receipts over $29 million
- Provides more accurate financial picture

## 2. Set Up a Business Bank Account

**Benefits:**
- Separates personal and business finances
- Simplifies tax preparation
- Provides professional credibility
- Easier to track business expenses

**What You'll Need:**
- Business registration documents
- Federal Tax ID (EIN)
- Business license
- Initial deposit

## 3. Organize Your Financial Records

### Essential Documents to Keep:
- Bank statements
- Receipts for all business expenses
- Invoices and customer payments
- Tax returns and supporting documents
- Payroll records
- Business licenses and permits

### Digital Organization Tips:
- Use cloud storage for backup
- Create consistent naming conventions
- Organize by year and category
- Scan physical receipts

## 4. Track Income and Expenses

### Income Tracking:
- Record all sales and revenue
- Track accounts receivable
- Monitor payment terms
- Follow up on overdue invoices

### Expense Categories:
- Office supplies
- Travel and meals
- Professional services
- Marketing and advertising
- Insurance
- Rent and utilities
- Equipment and software

## 5. Reconcile Bank Statements Monthly

**Why It's Important:**
- Catches errors early
- Identifies unauthorized transactions
- Ensures accurate financial records
- Helps with cash flow management

**Steps to Reconcile:**
1. Compare bank statement to your records
2. Mark off matching transactions
3. Identify discrepancies
4. Make necessary adjustments
5. Balance your books

## 6. Use Accounting Software

### Popular Options:
- **QuickBooks**: Comprehensive features for small to medium businesses
- **Xero**: Cloud-based with strong automation features
- **FreshBooks**: Great for service-based businesses
- **Wave**: Free option for very small businesses

### Benefits:
- Automated calculations
- Easy report generation
- Integration with bank accounts
- Invoice management
- Tax preparation features

## 7. Generate Regular Financial Reports

### Income Statement (P&L)
- Shows revenue and expenses over a period
- Helps identify profitable areas
- Useful for budgeting and planning

### Balance Sheet
- Shows assets, liabilities, and equity
- Provides snapshot of financial position
- Required for loan applications

### Cash Flow Statement
- Tracks cash coming in and going out
- Helps predict cash shortages
- Essential for managing working capital

## 8. Prepare for Tax Season

### Throughout the Year:
- Keep receipts organized
- Track deductible expenses
- Set aside money for taxes
- Monitor quarterly payment requirements

### Year-End Tasks:
- Reconcile all accounts
- Review and categorize expenses
- Prepare tax documents
- Consider tax planning strategies

## 9. Establish Internal Controls

### Segregation of Duties:
- Separate authorization, recording, and custody
- Have different people handle cash and record transactions
- Implement approval processes for large expenses

### Regular Reviews:
- Monthly financial statement reviews
- Quarterly budget vs. actual comparisons
- Annual comprehensive audits

## 10. Plan for Growth

### Scalable Systems:
- Choose software that can grow with your business
- Establish procedures that can handle increased volume
- Consider when to hire bookkeeping help

### Key Performance Indicators:
- Track metrics relevant to your industry
- Monitor cash flow patterns
- Analyze profitability by product/service

## Common Bookkeeping Mistakes to Avoid

1. **Mixing Personal and Business Expenses**
2. **Not Keeping Receipts**
3. **Inconsistent Record Keeping**
4. **Forgetting to Reconcile Accounts**
5. **Not Backing Up Financial Data**
6. **Ignoring Small Transactions**
7. **Not Planning for Taxes**

## When to Hire a Professional

Consider hiring a bookkeeper or accountant when:
- Your business is growing rapidly
- You're spending too much time on books
- You're making frequent errors
- You need help with tax planning
- You want to focus on growing your business

## Conclusion

Good bookkeeping practices are essential for business success. Start with these fundamentals and gradually build more sophisticated systems as your business grows. Remember, the time you invest in proper bookkeeping will pay dividends in better decision-making and easier tax preparation.

If you're feeling overwhelmed, don't hesitate to seek help from a qualified bookkeeping professional who can set up systems and train you on best practices.
    `,
    author: 'Lisa Rodriguez, CPA',
    publishedAt: '2024-02-05T11:15:00Z',
    tags: ['bookkeeping', 'small-business', 'financial-planning'],
    category: 'accounting',
    featuredImage: '/images/blog/bookkeeping-practices.jpg',
    readingTime: 12,
    slug: 'essential-bookkeeping-practices-new-business-owners'
  }
];

// Helper functions
export function getBlogPostBySlug(slug: string): BlogPost | undefined {
  return blogPosts.find((post) => post.slug === slug);
}

export function getBlogPostsByCategory(categorySlug: string): BlogPost[] {
  return blogPosts.filter((post) => post.category === categorySlug);
}

export function getBlogPostsByTag(tagSlug: string): BlogPost[] {
  return blogPosts.filter((post) => post.tags.includes(tagSlug));
}

export function getCategoryBySlug(slug: string): BlogCategory | undefined {
  return blogCategories.find((category) => category.slug === slug);
}

export function getTagBySlug(slug: string): BlogTag | undefined {
  return blogTags.find((tag) => tag.slug === slug);
}

export function getRecentPosts(limit: number = 3): BlogPost[] {
  return blogPosts
    .sort(
      (a, b) =>
        new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime()
    )
    .slice(0, limit);
}

export function getRelatedPosts(
  currentPost: BlogPost,
  limit: number = 3
): BlogPost[] {
  return blogPosts
    .filter(
      (post) =>
        post.id !== currentPost.id &&
        (post.category === currentPost.category ||
          post.tags.some((tag) => currentPost.tags.includes(tag)))
    )
    .sort(
      (a, b) =>
        new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime()
    )
    .slice(0, limit);
}

export function formatDate(dateString: string): string {
  return new Date(dateString).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });
}

export function calculateReadingTime(content: string): number {
  const wordsPerMinute = 200;
  const words = content.split(/\s+/).length;
  return Math.ceil(words / wordsPerMinute);
}
