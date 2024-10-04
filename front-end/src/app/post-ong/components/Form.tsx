"use client";

import React, { useState } from 'react';
import Image from 'next/image';
import { postcad } from '@/app/entity/postcad';
import axios from 'axios';

const Form: React.FC = () => {
  const [title, setTitle] = useState('');
  const [petName, setPetName] = useState('');
  const [selectedAnimal, setSelectedAnimal] = useState('');
  const [selectedRaca, setSelectedRaca] = useState('');
  const [descricao, setDescricao] = useState('');
  const [chavePix, setChavePix] = useState('');
  const [contato, setContato] = useState('');

  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const input = e.target.value.replace(/\D/g, '');
    const formattedPhone = input
      .replace(/^(\d{2})(\d{5})(\d{4}).*/, '($1) $2-$3')
      .slice(0, 15);
    setContato(formattedPhone);
  };

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    const formData: postcad = {
      idpost: 0,
      usuario: {
        idusuario: 1,
      },
      titulo: title || 'Título Padrão',
      nome_causa: petName || 'Nome da Causa Padrão',
      filtro_animal: selectedAnimal || 'Cachorro',
      filtro_raca: selectedRaca || 'Vira-lata',
      filtro_porte: 'Médio',
      filtro_causa: 'Adoção',
      descricao: descricao || 'Descrição padrão',
      chavepix: chavePix || 'chave-pix-padrao',
      contato: contato || 'contato@exemplo.com',
      status: 1,
    };
    try {
      const response = await axios.put('http://localhost:8080/api/postcad/save', formData, {
        headers: {
          'Content-Type': 'application/json',
        },
      });
      console.log(response.data);
    } catch (error) {
      console.error('Erro ao enviar os dados:', error);
    }
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginBottom: '20px' }}>
      <div style={{
        border: '2px solid #95bf47 ',
        borderRadius: '20px',
        padding: '20px',
        width: '100%',
        maxWidth: '800px',
        backgroundColor: '#ededed',
      }}>
        <h2 style={{ textAlign: 'center', marginBottom: '20px', color: '#9e86d8', fontWeight: 'bold', fontSize: '25px' }}>Postagem de Animais</h2> {}
        <Image
          src='/assets/images/post-ong/dog.png'
          alt='Imagem de um cachorro'
          width={500}
          height={240}
          quality={100}
          style={{ marginBottom: '20px', display: 'block', margin: '0 auto' }} 
        />
        <form onSubmit={handleSubmit} className="w-full max-w-md" style={{ margin: '0 auto' }}>
          <div className="mt-5" style={{ display: 'flex', justifyContent: 'space-between' }}>
            <div className="mt-5" style={{ width: '48%' }}> {}
              <select
                value={selectedAnimal}
                onChange={(e) => setSelectedAnimal(e.target.value)}
                className="focus:outline-none focus:ring-2 focus:ring-blue-500"
                style={{
                  border: '1px solid #ccc',
                  padding: '4px 10px',
                  borderRadius: '4px',
                  width: '100%',
                  height: '40px',
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
            </div>
            <div className="mt-5" style={{ width: '48%' }}> {}
              <select
                value={selectedRaca}
                onChange={(e) => setSelectedRaca(e.target.value)}
                className="focus:outline-none focus:ring-2 focus:ring-blue-500"
                style={{
                  border: '1px solid #ccc',
                  padding: '4px 10px',
                  borderRadius: '4px',
                  width: '100%',
                  height: '40px', 
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
            </div>
          </div>
          <div className="mt-5">
            <input
              type="text"
              placeholder="Título"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="focus:outline-none focus:ring-2 focus:ring-blue-500"
              style={{
                border: 'none',
                padding: '4px 16px',
                borderRadius: '0',
                width: '100%',
                height: '40px',
                backgroundColor: '#D9D9D9',
                color: '#4F4F4F',
                fontSize: '16px',
                textAlign: 'center',
              }}
            />
          </div>
          <div className="mt-5">
            <input
              type="text"
              placeholder="Nome do Pet"
              value={petName}
              onChange={(e) => setPetName(e.target.value)}
              className="focus:outline-none focus:ring-2 focus:ring-blue-500"
              style={{
                border: 'none',
                padding: '4px 16px',
                borderRadius: '0',
                width: '100%',
                height: '40px',
                backgroundColor: '#D9D9D9',
                color: '#4F4F4F',
                fontSize: '16px',
                textAlign: 'center',
              }}
            />
          </div>
          <div className="mt-5">
            <input
              type="text"
              placeholder="Descrição"
              value={descricao}
              onChange={(e) => setDescricao(e.target.value)}
              className="focus:outline-none focus:ring-2 focus:ring-blue-500"
              style={{
                border: 'none',
                padding: '4px 16px',
                borderRadius: '0',
                width: '100%',
                height: '40px',
                backgroundColor: '#D9D9D9',
                color: '#4F4F4F',
                fontSize: '16px',
                textAlign: 'center',
              }}
            />
          </div>
          <div className="mt-5" style={{ display: 'flex', justifyContent: 'space-between' }}>
            <input
              type="text"
              placeholder="Chave Pix"
              value={chavePix}
              onChange={(e) => setChavePix(e.target.value)}
              className="focus:outline-none focus:ring-2 focus:ring-blue-500"
              style={{
                border: 'none',
                padding: '4px 16px',
                borderRadius: '0',
                width: '48%',
                height: '40px',
                backgroundColor: '#D9D9D9',
                color: '#4F4F4F',
                fontSize: '16px',
                textAlign: 'center',
              }}
            />
            <input
              type="text"
              placeholder="Contato"
              value={contato}
              onChange={handlePhoneChange} 
              className="focus:outline-none focus:ring-2 focus:ring-blue-500"
              style={{
                border: 'none',
                padding: '4px 16px',
                borderRadius: '0',
                width: '48%', 
                height: '40px',
                backgroundColor: '#D9D9D9',
                color: '#4F4F4F',
                fontSize: '16px',
                textAlign: 'center',
              }}
            />
          </div>
          <button
            type="submit"
            style={{
              backgroundColor: '#95bf47 ',
              color: 'white',
              border: 'none',
              borderRadius: '4px',
              padding: '10px 20px',
              cursor: 'pointer',
              fontSize: '16px',
              width: '100%',
              marginTop: '20px',

            }}
          >
            Salvar
          </button>
        </form>
      </div>
    </div>
  );
};

export default Form;
