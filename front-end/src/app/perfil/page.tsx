"use client";

import React from 'react';
import Perfil from '@/components/PerfilPage';
import { HeaderNavigation } from '@/components/MenuGlobal';

const PerfilUsuario = () => {
  return (
    <div>
      <HeaderNavigation/>
        <Perfil/>
    </div>
  );
};

export default PerfilUsuario