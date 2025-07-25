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
  navigationMenuTriggerStyle
} from '@/components/ui/navigation-menu';
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger
} from '@/components/ui/sheet';
import { cn } from '@/lib/utils';
import { solutionOptions, products } from '@/lib/constants';
import Image from 'next/image';
import { NavBarProps } from '@/lib/constants';

export function Navbar({ navigationData }: NavBarProps) {
  const [isOpen, setIsOpen] = React.useState(false);
  const { mainLinks, solutionLinks, clientPortalUrl, url, description } =
    navigationData;

  return (
    <header className='sticky top-0 z-50 w-full border-b bg-background'>
      <div className='container mx-auto flex h-16 items-center'>
        <div className='ml-6 hidden md:flex'>
          <Link
            href='/'
            className='mr-6 flex items-center space-x-2'>
            <span className='hidden font-bold sm:inline-block'>
              <Image
                width={360}
                height={36}
                loading='eager'
                alt={description || 'Young & Company'}
                src={`https:${url}`}
                className='mr-3 sm:h-9 md:w-auto md:h-6'
              />
            </span>
          </Link>
          <NavigationMenu viewport={false}>
            <NavigationMenuList>
              <NavigationMenuItem>
                {mainLinks.map((product) => (
                  <NavigationMenuLink
                    key={product.name}
                    href={product.href}
                    className={
                      navigationMenuTriggerStyle() +
                      ' text-muted-foreground font-normal'
                    }>
                    {product.name}
                  </NavigationMenuLink>
                ))}
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuTrigger className='text-muted-foreground font-normal'>
                  Solutions
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className='grid w-[200px] gap-4'>
                    {solutionLinks?.map((solution) => (
                      <NavigationMenuLink
                        asChild
                        key={solution.id}
                        title={solution.name}>
                        <Link
                          className='text-muted-foreground font-normal'
                          href={`/solutions/${solution.id}`}>
                          {solution.name}
                        </Link>
                      </NavigationMenuLink>
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
              <SheetDescription className='hidden'>
                Mobile Navigation Menu
              </SheetDescription>
              <SheetTitle>
                <Link
                  href='/'
                  className='flex items-center'
                  onClick={() => setIsOpen(false)}>
                  <span>
                    <Image
                      width={230}
                      height={36}
                      loading='eager'
                      alt='Young & Company'
                      src='/images/logo.webp'
                      className='mr-3 h-6 sm:h-9 w-auto'
                    />
                  </span>
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
                <hr className='w-11/12' />
                {solutionOptions.map((solution) => (
                  <MobileNavItem
                    href={`/solutions/${solution.id}`}
                    key={solution.name}
                    onOpenChange={setIsOpen}>
                    {solution.name}
                  </MobileNavItem>
                ))}
              </div>
            </div>

            <div className='mb-6 mx-auto w-full text-center'>
              <Button
                variant='outline'
                size='sm'>
                <Link
                  className='text-muted-foreground font-normal'
                  href={clientPortalUrl}
                  target='_blank'>
                  Client Portal
                </Link>
              </Button>
            </div>
          </SheetContent>
        </Sheet>

        <div className='flex flex-1 items-center justify-between space-x-2 md:justify-end p-4'>
          <div className='w-full flex-1 md:w-auto md:flex-none'>
            <Link
              href='/'
              className='flex items-center space-x-2 md:hidden'>
              <span>
                <Image
                  width={220}
                  priority={true}
                  height={36}
                  loading='eager'
                  alt='Young & Company'
                  src='/images/logo.webp'
                  className='mr-3 h-6 sm:h-9 sm:w-auto! w-auto'
                />
              </span>
            </Link>
          </div>
          <nav className='hidden md:flex items-center space-x-2'>
            <Button
              variant='outline'
              size='sm'>
              <Link
                className='text-muted-foreground font-normal'
                href='http://youngcotax.clientportal.com/'
                target='_blank'>
                Client Portal
              </Link>
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
