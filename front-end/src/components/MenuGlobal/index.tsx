import React from 'react';

import {Logo, HeaderContainer, NavList, NavLink } from './style'
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from '@/components/ui/navigation-menu';


export function HeaderNavigation() {
  const HEADER_NAVIGATION = [
    { title: 'Sobre', href: '/sobre' },
    { title: 'Home', href: '/home' },
    { title: 'Solicitações', href: '/solicitacoes' },
    { title: 'Post', href: '/post' },
    { title: 'Perfil', href: '/perfil' },
  ];

  return (
    <HeaderContainer>
        <Logo 
          src="/assets/images/header/logo-login.png"
          alt="Logo"
          width={130}
          height={130} 
          layout="intrinsic"
          className="rem"
        />
        <NavigationMenu>
          <NavList> 
            {HEADER_NAVIGATION.map((item) => (
              <NavigationMenuItem key={item.title}>
                <NavLink
                  id={`${item.title}-element`}
                  href={item.href}
                  className={navigationMenuTriggerStyle()}
                >
                  {item.title}
                </NavLink>
              </NavigationMenuItem>
            ))}
          </NavList>
        </NavigationMenu>
    </HeaderContainer>
  );
}
export { NavigationMenuList };
