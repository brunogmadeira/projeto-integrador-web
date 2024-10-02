"use client";

import React, { useState } from 'react';

const AnimalDropdown = () => {
  const [selectedAnimal, setSelectedAnimal] = useState('');

  const handleSelectChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedAnimal(event.target.value);
  };

  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'flex-start',
      alignItems: 'flex-start',
      padding: '0',
      marginTop: '-9px',
    }}>
      <form className="w-full max-w-md">
        <div className="mb-5" style={{ marginLeft: '290px', marginRight: '0px' }}>
          <select
            value={selectedAnimal}
            onChange={handleSelectChange}
            className="focus:outline-none focus:ring-2 focus:ring-blue-500"
            style={{
              border: '1px solid #ccc', 
              padding: '4px 10px',
              borderRadius: '4px',
              width: '100%',
              height: '30px',
              backgroundColor: '#D9D9D9',
              color: '#4F4F4F',
              fontSize: '16px',
              textAlign: 'center',
            }}
          >
            <option value="" disabled>Animal</option>
            <option value="cachorro">Cachorro</option>
            <option value="gato">Gato</option>
            <option value="coelho">Coelho</option>
          </select>
          <style jsx>{`
            select {
              text-align: center;
              appearance: none;
            }
          `}</style>
        </div>
      </form>
    </div>
  );
};

export default AnimalDropdown;
