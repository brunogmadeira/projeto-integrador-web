'use client'

// HeaderStyles.ts
import styled from 'styled-components';
import { NavigationMenuList } from '@/components/ui/navigation-menu';
import Image from 'next/image';

export const HeaderContainer = styled.div`
  width: 100%;
  background-color: #6C44A4;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 6rem;
`;

export const Logo = styled(Image)`
  width: 130px; 
  height: 130px;
`;

export const NavList = styled(NavigationMenuList)`
  display: flex;
  gap: 5rem;
`;

export const NavLink = styled.a`
  font-family: 'Poppins', sans-serif;
  font-size: 20px;
  font-weight: 900;
  color: white;
  background-color: #6C44A4;

  &:hover {
    background-color: #95BF47;
    color: black;
  }
`;
