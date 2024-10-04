import React from 'react';
import Link from 'next/link'; 
import Image from 'next/image';
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

  const fontStyle = {
    fontFamily: 'Poppins, sans-serif',
    fontWeight: '600',
  };

  return (
    <NavigationMenu className="flex items-center h-24 bg-[#6C44A4] w-full -mx-29">
      <div className="flex items-center justify-between w-full px-20 pr-80">
        <Image 
          src="/assets/images/header/logo-login.png"
          alt="Logo"
          width={130}
          height={130} 
          layout="intrinsic"
          className="mr-4"
          style={{ marginBottom: '0rem' }}
        />
        <NavigationMenuList className="flex space-x-8"> 
          {HEADER_NAVIGATION.map((item) => (
            <NavigationMenuItem key={item.title}>
              <Link
                id={item.title + '-element'}
                href={item.href}
                className={`${navigationMenuTriggerStyle()} text-black text-2xl transition-colors bg-transparent hover:bg-white hover:text-black`}
                style={fontStyle}
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