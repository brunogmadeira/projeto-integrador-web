/* eslint-disable @typescript-eslint/no-unused-vars */
"use client";

import { postcad } from '@/entity/postcad';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import {Container, 
        Card, 
        CardListWrapper, 
        CardImage, 
        CardContent, 
        CardTitle, 
        CardDescription, 
        NoItemsMessage,
        TitleContainer, 
        SearchInput, 
        SearchForm, 
        SearchButton} from './style'

const CardList: React.FC = () => {
  const [items, setItems] = useState<postcad[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [titulo, setTitulo] = useState<string>('');

  useEffect(() => {
    initialList();
  }, []);

  function initialList() {
    const fetchItems = async () => {
      try {
        const response = await axios.get<postcad[]>('http://localhost:8080/api/postcad/list');
        setItems(response.data);
      } catch (err) {
        setError('Erro ao carregar os dados.');
      } finally {
        setLoading(false);
      }
    };
    fetchItems();
  }

  const handleSearch = async () => {
    if (titulo.length > 0) {
      setLoading(true);
      try {
        const response = await axios.get<postcad[]>(`http://localhost:8080/api/postcad/list/filtro/` + titulo);
        setItems(response.data);
      } catch (err) {
        setError('Erro ao buscar os dados.');
      } finally {
        setLoading(false);
      }
    } else {
      initialList();
    }
  };

  if (loading) return <div>Carregando...</div>;
  if (error) return <div>{error}</div>;

  return (
    <Container>
      <Title titulo={titulo} setTitulo={setTitulo} onSearch={handleSearch} />
      {items.length === 0 ? (
        <NoItemsMessage>
          Nenhum post encontrado.
        </NoItemsMessage>
      ) : (
        <CardListWrapper justifyContent={items.length === 1 ? 'flex-start' : 'center'}>
          {items.map(postcad => (
            <Card key={postcad.idpost}>
              {postcad.imagem ? (
                <CardImage src={`data:image/jpeg;base64,${postcad.imagem}`} alt="Imagem do post" />
              ) : (
                <CardImage src="/assets/images/post-ong/dog.png" alt="Imagem padrão" />
              )}
              <CardContent>
                <CardTitle>{postcad.titulo}</CardTitle>
                <CardDescription>Descrição: {postcad.descricao}</CardDescription>
                <CardDescription>Nome: {postcad.nome_causa}</CardDescription>
              </CardContent>
            </Card>
          ))}
        </CardListWrapper>
      )}
    </Container>
  );
};

const Title = ({ titulo, setTitulo, onSearch }: { titulo: string; setTitulo: React.Dispatch<React.SetStateAction<string>>; onSearch: () => void }) => {
  return (
    <TitleContainer>
      <SearchForm onSubmit={(e) => { e.preventDefault(); onSearch(); }}>
        <SearchInput
          type="text"
          placeholder="Digite sua busca..."
          value={titulo}
          onChange={(e) => setTitulo(e.target.value)}
        />
        <SearchButton type="button" onClick={onSearch}>
          Buscar
        </SearchButton>
      </SearchForm>
    </TitleContainer>
  );
};

export default CardList;
