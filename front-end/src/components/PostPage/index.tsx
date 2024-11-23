"use client";

import React, { useState } from 'react';
import Image from 'next/image';
import { postcad } from '@/entity/postcad';
import axios from 'axios';

const Form: React.FC = () => {
  const [title, setTitle] = useState('');
  const [petName, setPetName] = useState('');
  const [selectedAnimal, setSelectedAnimal] = useState('');
  const [selectedRaca, setSelectedRaca] = useState('');
  const [descricao, setDescricao] = useState('');
  const [chavePix, setChavePix] = useState('');
  const [contato, setContato] = useState('');
  const [showModal, setShowModal] = useState(false);
  const [imageBase64, setImageBase64] = useState<string>('');
  const token = typeof window !== 'undefined' ? localStorage.getItem("authToken") : null;
  
  const id = typeof window !== 'undefined' ? localStorage.getItem("usuarioId") : null;
  const usuarioId = id ? parseInt(id, 10) : undefined;
  
  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const input = e.target.value.replace(/\D/g, '');
    const formattedPhone = input
      .replace(/^(\d{2})(\d{5})(\d{4}).*/, '($1) $2-$3')
      .slice(0, 15);
      setContato(formattedPhone);
  };
  
  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        const base64String = reader.result as string;
        setImageBase64(base64String.split(',')[1]); 
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    if (!usuarioId) {
      console.error("ID do usuário não encontrado ou inválido!");
      return;
    }
    const formData: postcad = {
      idpost: 0,
      usuario: {
        idusuario: usuarioId,
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
      imagem: imageBase64, 
    };

    try {
      const response = await axios.put('http://localhost:8080/api/postcad/save', formData, {
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
      });

      if (response.status === 200) {
        setShowModal(true);
        setTitle('');
        setPetName('');
        setSelectedAnimal('');
        setSelectedRaca('');
        setDescricao('');
        setChavePix('');
        setContato('');
        setImageBase64(''); // Limpa a imagem após o envio
      }
    } catch (error) {
      console.error('Erro ao enviar os dados:', error);
      window.alert('Erro ao salvar a postagem. Tente novamente.');
    }
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginBottom: '20px', marginTop: '20px' }}>
      <div style={{
        border: '2px solid #95bf47 ',
        borderRadius: '20px',
        padding: '20px',
        width: '100%',
        maxWidth: '800px',
        backgroundColor: '#ededed',
      }}>
        <h2 style={{ textAlign: 'center', marginBottom: '20px', color: '#9e86d8', fontWeight: 'bold', fontSize: '25px' }}>Postagem de Animais</h2>
        
        {}
        {imageBase64 && (
          <Image
            src={`data:image/jpeg;base64,${imageBase64}`}
            alt='Imagem do Pet'
            width={500}
            height={240}
            quality={100}
            style={{ marginBottom: '20px',maxHeight: '400px', maxWidth : '600px', display: 'block', margin: '0 auto' }} 
          />
        )}

        <form onSubmit={handleSubmit} className="w-full max-w-md" style={{ margin: '0 auto' }}>
        <div className="mt-5">
            <input
              type="file"
              accept="image/*"
              onChange={handleImageChange}
              className="focus:outline-none focus:ring-2 focus:ring-blue-500"
              style={{
                border: 'none',
                height: '40px',
                backgroundColor: '#D9D9D9',
                color: '#4F4F4F',
              }}
            />
          </div>
          <div className="mt-5" style={{ display: 'flex', justifyContent: 'space-between' }}>
            <div className="mt-5" style={{ width: '48%' }}>
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
            <div className="mt-5" style={{ width: '48%' }}>
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

          <div className="mt-5">
            <button
              type="submit"
              className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              style={{ width: '100%', height: '40px' }}
            >
              Enviar
            </button>
          </div>
        </form>
      </div>

      {showModal && (
        <div className="modal">
          <div className="modal-content">
            <span className="close" onClick={() => setShowModal(false)}>&times;</span>
            <p>Postagem salva com sucesso!</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default Form;
