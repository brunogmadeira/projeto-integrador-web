import React from 'react';
import CardList from '../../components/home/cardlist';
import { HeaderNavigation } from '@/components/header/header-navigation';

const Page: React.FC = () => {
  return (
    <div className="Page">
    <HeaderNavigation />
      <CardList />
    </div>
  );
};

export default Page;
