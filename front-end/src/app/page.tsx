
'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation'; 

const Home = () => {
  const router = useRouter();

  useEffect(() => {
    router.push('/login');
  }, [router]);

  return (
    <div>
      <h1>Redirecionando para a página de login...</h1>
    </div>
  );
};

export default Home;
