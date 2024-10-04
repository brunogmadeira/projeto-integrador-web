"use client";

import React from 'react';
import { HeaderNavigation } from '@/components/header/header-navigation';
import Title from '@/app/sobre/components/title';
import InfoTela from './components/infos';
const Sobre = () => {
    return (
      <div>
        <HeaderNavigation />
        <Title />
        <InfoTela />
      </div>
    );
  };
  
export default Sobre;