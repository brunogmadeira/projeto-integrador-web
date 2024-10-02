import React from 'react';
import Image from 'next/image';

export default function BannerPost() {
  return (
    <div style={{ backgroundColor: '#0000', padding: '30px', textAlign: 'center' }}>
      <div style={{ marginTop: '2px', position: 'relative', width: '500px', height: '240px', marginLeft: '350px', marginRight: '600px' }}>
        <Image
          src='/assets/images/post-ong/dog.png'
          alt='Imagem de um cachorro'
          layout="fill"
          objectFit="contain" 
          quality={100} 
        />
      </div>
    </div>
  );
}