"use client";

import React from 'react';

interface InputProps {
  placeholder: string;
  marginBottom?: string;
  marginTop?: string;
}

const Input: React.FC<InputProps> = ({ placeholder, marginBottom, marginTop }) => {
  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'flex-start',
      alignItems: 'center',
      padding: '0',
      marginTop: marginTop || '0',
      marginBottom: marginBottom || '20px', 
      width: '100%', 
    }}>
      <form className="w-full max-w-md">
        <div className="mb-5" style={{ marginLeft: 'auto', marginRight: 'auto', width: '100%'}}>
          <input
            type="text"
            placeholder={placeholder}
            className="focus:outline-none focus:ring-2 focus:ring-blue-500"
            style={{
              border: 'none',
              padding: '4px 16px',
              borderRadius: '0',
              width: '100%', 
              maxWidth: '400px', 
              height: '40px',
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

            @media (max-width: 768px) {
              input {
                width: 90vw; 
                max-width: none;
                height: 35px;
              }
            }
          `}</style>
        </div>
      </form>
    </div>
  );
};

export default Input;