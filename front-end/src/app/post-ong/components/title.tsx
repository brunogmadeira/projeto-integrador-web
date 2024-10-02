"use client";

import React from 'react';

const Title = () => {
  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'flex-start',
      alignItems: 'center',
      padding: '0',
      marginBottom: '20px', 
    }}>
      <form className="w-full max-w-md">
        <div className="mb-20" style={{ marginLeft: '-50px', marginRight: '-10px' }}>
          <input
            type="text"
            placeholder="Título"
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

export default Title;
