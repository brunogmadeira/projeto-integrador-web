import React from 'react';
import CardList from '../../components/HomePage/cardlist';
import { HeaderNavigation } from '@/components/MenuGlobal/header-navigation';

const Page: React.FC = () => {
  return (
    <div className="Page">
    <HeaderNavigation />
      <CardList />
    </div>
  );
};

export default Page;
