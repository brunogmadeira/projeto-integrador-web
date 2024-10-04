import Link from 'next/link';
import Image from 'next/image';
import React from 'react';

export default function NotFoundPage() {
  const pageStyle: React.CSSProperties = {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh',
    textAlign: 'center',
    backgroundColor: '#f8f8f8',
    color: '#333',
  };

  const buttonStyle: React.CSSProperties = {
    padding: '10px 20px',
    fontSize: '18px',
    backgroundColor: '#6C44A4',
    color: 'white',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
    marginTop: '20px',
    textDecoration: 'none',
  };

  return (
    <div style={pageStyle}>
      <Image 
        src="/assets/images/post-ong/imagem404.jpg" 
        alt="Imagem de um cachorro"
        width={400} 
        height={300} 
        style={{ marginBottom: '20px' }} 
      />
      <h2 style={{ fontSize: '32px', marginBottom: '20px' }}>Página Não Encontrada</h2>
      <p style={{ fontSize: '18px', marginBottom: '40px' }}>
        A página que você está tentando acessar não existe.
      </p>
      <Link href="/sobre" style={buttonStyle}>
        Retornar para Sobre
      </Link>
    </div>
  );
}
