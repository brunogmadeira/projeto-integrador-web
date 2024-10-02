"use client";

import React from 'react';

const NamePet = () => {
  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'flex-start',
      alignItems: 'center',
      padding: '0',
      marginTop: '-90px', // Espaço entre Title e NamePet
    }}>
      <form className="w-full max-w-md">
        <div className="mb-5" style={{ marginLeft: '-50px', marginRight: '-10px' }}>
          <input
            type="text"
            placeholder="Nome do Pet"
            className="focus:outline-none focus:ring-2 focus:ring-blue-500"
            style={{
              border: 'none',
              padding: '4px 16px',
              borderRadius: '0',
              width: '120%',
              height: '30px',
              backgroundColor: '#D9D9D9',
              color: '#4F4F4F',
              fontSize: '16px',
              textAlign: 'center',
            }}
          />
          <style jsx>{`
            input::placeholder {
              color: #B0B0B0;
              opacity: 1;
              text-align: center;
            }
          `}</style>
        </div>
      </form>
    </div>
  );
};

export default NamePet;
