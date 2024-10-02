"use client";

import React, { useState } from 'react';

const RacaDropdown = () => {
  const [selectedRaca, setSelectedRaca] = useState('');

  const handleSelectChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedRaca(event.target.value);
  };

  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'flex-start',
      alignItems: 'flex-start',
      padding: '0',
      marginTop: '-50px',
    }}>
      <form className="w-full max-w-md">
        <div className="mb-5" style={{ marginLeft: '455px', marginRight: '20px' }}>
          <select
            value={selectedRaca}
            onChange={handleSelectChange}
            className="focus:outline-none focus:ring-2 focus:ring-blue-500"
            style={{
              border: 'none',
              padding: '4px 10px',
              borderRadius: '0',
              width: '150px',
              height: '30px',
              backgroundColor: '#D9D9D9',
              color: '#4F4F4F',
              fontSize: '16px',
              textAlign: 'center',
            }}
          >
            <option value="" disabled>Raça</option>
            <option value="Vira-lata">Vira-lata</option>
            <option value="amarelo">Raça 2</option>
            <option value="roger">Raça 3</option>
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

export default RacaDropdown;
