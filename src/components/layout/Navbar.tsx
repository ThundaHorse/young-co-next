'use client';

import * as React from 'react';
import Link from 'next/link';
import { Menu } from 'lucide-react';

import { Button } from '@/components/ui/button';
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from '@/components/ui/navigation-menu';
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet';
import { cn } from '@/lib/utils';

interface Product {
  name: string;
  description: string;
  href: string;
}

interface SolutionOption {
  name: string;
  id: string;
  tab: number;
}

const products: Product[] = [
  {
    name: 'About',
    description: 'About',
    href: '/about',
  },
  // {
  //   name: 'Guides',
  //   description: 'Guides Page',
  //   href: '/guides',
  // },
  {
    name: 'Contact',
    description: 'Contact Page',
    href: '/contact-us',
  },
];

const solutionOptions: SolutionOption[] = [
  {
    name: 'Accounting',
    id: 'accounting',
    tab: 0,
  },
  {
    name: 'Bookkeeping',
    id: 'bookkeeping',
    tab: 1,
  },
  {
    name: 'Taxes',
    id: 'taxes',
    tab: 2,
  },
  {
    name: 'Formation',
    id: 'formation',
    tab: 3,
  },
  {
    name: 'Payroll',
    id: 'payroll',
    tab: 4,
  },
  {
    name: 'Strategic Planning',
    id: 'strategic-planning',
    tab: 5,
  },
];

export function Navbar() {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <header className='sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60'>
      <div className='container flex h-16 items-center'>
        <div className='mr-4 hidden md:flex'>
          <Link
            href='/'
            className='mr-6 flex items-center space-x-2'>
            <span className='hidden font-bold sm:inline-block'>Your Brand</span>
          </Link>
          <NavigationMenu>
            <NavigationMenuList>
              <NavigationMenuItem>
                {products.map((product) => (
                  <NavigationMenuLink
                    key={product.name}
                    className={navigationMenuTriggerStyle()}>
                    {product.name}
                  </NavigationMenuLink>
                ))}
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuTrigger>Solutions</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className='grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]'>
                    {solutionOptions.map((solution) => (
                      <ListItem
                        key={solution.id}
                        title={solution.name}
                        href={solution.id}></ListItem>
                    ))}
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
        </div>

        {/* Mobile menu */}
        <Sheet
          open={isOpen}
          onOpenChange={setIsOpen}>
          <SheetTrigger asChild>
            <Button
              variant='ghost'
              className='mr-2 px-0 text-base hover:bg-transparent focus-visible:bg-transparent focus-visible:ring-0 focus-visible:ring-offset-0 md:hidden'>
              <Menu className='h-6 w-6' />
              <span className='sr-only'>Toggle Menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent
            side='left'
            className='pr-0'>
            <SheetHeader>
              <SheetTitle>
                <Link
                  href='/'
                  className='flex items-center'
                  onClick={() => setIsOpen(false)}>
                  <span className='font-bold'>Your Brand</span>
                </Link>
              </SheetTitle>
            </SheetHeader>
            <div className='my-4 h-[calc(100vh-8rem)] pb-10 pl-6'>
              <div className='flex flex-col space-y-3'>
                {products.map((product) => (
                  <MobileNavItem
                    href={product.href}
                    key={product.name}
                    onOpenChange={setIsOpen}>
                    {product.name}
                  </MobileNavItem>
                ))}
                <hr />
                <span
                  className={cn(
                    'block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground'
                  )}>
                  Solutions
                </span>
                {solutionOptions.map((solution) => (
                  <MobileNavItem
                    href={solution.id}
                    key={solution.name}
                    onOpenChange={setIsOpen}>
                    {solution.name}
                  </MobileNavItem>
                ))}
              </div>
            </div>
          </SheetContent>
        </Sheet>

        <div className='flex flex-1 items-center justify-between space-x-2 md:justify-end'>
          <div className='w-full flex-1 md:w-auto md:flex-none'>
            <Link
              href='/'
              className='flex items-center space-x-2 md:hidden'>
              <span className='font-bold'>Your Brand</span>
            </Link>
          </div>
          <nav className='flex items-center space-x-2'>
            <Button
              variant='ghost'
              size='sm'>
              <a
                href='http://youngcotax.clientportal.com/'
                target='_blank'>
                Client Portal
              </a>
            </Button>
          </nav>
        </div>
      </div>
    </header>
  );
}

const ListItem = React.forwardRef<
  React.ComponentRef<'a'>,
  React.ComponentPropsWithoutRef<'a'>
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            'block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground',
            className
          )}
          {...props}>
          <div className='text-sm font-medium leading-none'>{title}</div>
          <p className='line-clamp-2 text-sm leading-snug text-muted-foreground'>
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  );
});
ListItem.displayName = 'ListItem';

interface MobileNavItemProps {
  href: string;
  onOpenChange: (open: boolean) => void;
  children: React.ReactNode;
}

function MobileNavItem({ href, onOpenChange, children }: MobileNavItemProps) {
  return (
    <Link
      href={href}
      onClick={() => onOpenChange(false)}
      className='text-foreground/70 transition-colors hover:text-foreground'>
      {children}
    </Link>
  );
}
