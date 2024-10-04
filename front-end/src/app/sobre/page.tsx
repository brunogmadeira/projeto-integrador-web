"use client";

import React from 'react';
import { HeaderNavigation } from '@/components/header/header-navigation';
import Title from '@/components/sobre/title';
import InfoTela from '../../components/sobre/infos';
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