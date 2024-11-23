"use client";


import React from 'react';
import CardList from '@/components/HomePage';
import { HeaderNavigation } from '@/components/MenuGlobal';

const Page: React.FC = () => {
  return (
    <div className="Page">
    <HeaderNavigation />
      <CardList />
    </div>
  );
};

export default Page;
