import React from 'react';
import Link from 'next/link'; 
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from '@/components/ui/navigation-menu';

export function HeaderNavigation() {
  const HEADER_NAVIGATION = [
    {
      title: 'Sobre',
      href: '/',
    },
    {
      title: 'Home',
      href: '/home',
    },
    {
      title: 'Solicitações',
      href: '/solicitacoes',
    },
    {
      title: 'Post',
      href: '/post-ong',
    },
    {
      title: 'Perfil',
      href: '/perfil',
    },
  ];

  return (
    <NavigationMenu className="flex justify-center items-center h-16 p-4 flex justify-center">
      <div className="ml-80 p-4"> 
        <NavigationMenuList className="flex space-x-8"> 
          {HEADER_NAVIGATION.map((item) => (
            <NavigationMenuItem key={item.title}>
              <Link
                id={item.title + '-element'}
                href={item.href}
                className={`${navigationMenuTriggerStyle()} text-black text-xl font-bold transition-colors bg-transparent hover:bg-white hover:text-black`}
              >
                {item.title}
              </Link>
            </NavigationMenuItem>
          ))}
        </NavigationMenuList>
      </div>
    </NavigationMenu>
  );
}
