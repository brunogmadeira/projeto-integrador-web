"use client";

import axios from 'axios';
import React, { useEffect, useState, CSSProperties } from 'react';
import { postcad } from '@/app/entity/postcad';

const CardList: React.FC = () => {
  const [items, setItems] = useState<postcad[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [titulo, setTitulo] = useState<string>('');
  
  useEffect(() => {
    listaInicial();
  }, []);

  function listaInicial() {
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
        console.log(response.data);
      } catch (err) {
        setError('Erro ao buscar os dados.');
      } finally {
        setLoading(false);
      }
    } else {
      listaInicial();
    }
  };

  if (loading) return <div>Carregando...</div>;
  if (error) return <div>{error}</div>;

  if (items.length === 0) {
    return <div>Nenhum post encontrado.</div>;
  }

  return (
    <div style={styles.container}>
      <Title titulo={titulo} setTitulo={setTitulo} onSearch={handleSearch} />
      <div style={styles.cardList}>
        {items.map(postcad => (
          <div key={postcad.idpost} style={styles.card}>
            <img
              src="/assets/images/post-ong/dog.png"
              alt="Logo"
              style={styles.image} // Estilo da imagem
            />
            <div style={styles.cardContent}>
              <h3 style={styles.title}>{postcad.titulo}</h3>
              <p style={styles.description}>{postcad.descricao}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

// Estilos com tipagem correta
const styles: { [key: string]: CSSProperties } = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: '20px',
  },
  cardList: {
    display: 'flex',
    flexWrap: 'wrap',
    gap: '16px', // Espaço entre os cards
    justifyContent: 'center', // Centraliza os cards
    marginTop: '20px',
    maxWidth: '1500px', // Limita a largura total do contêiner
  },
  card: {
    display: 'flex',
    borderRadius: '8px', // Mantém a borda arredondada do card
    overflow: 'hidden',
    width: '45%', // Ajuste a largura para caber apenas 2 cards por linha
    height: '300px', // Mantém a altura dos cards
    boxShadow: '0 2px 5px rgba(0,0,0,0.1)', // Sombra sutil
    border: '3px solid #A0D8A0', // Borda verde na imagem    
  },
  image: {
    marginTop: '30px',
    width: '230px', // Defina a largura da imagem
    height: '230px', // Defina a altura da imagem
    objectFit: 'cover', // Mantém a proporção da imagem
    borderRadius: '8px', // Arredonda os cantos da imagem
    border: '2px solid #A0D8A0', // Borda verde na imagem
  },
  cardContent: {
    padding: '16px', // Espaçamento interno do card
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'flex-start', // Alinha o conteúdo à esquerda
  },
  title: {
    paddingTop: '10%', // Padding no topo do título
    textAlign: 'left', // Alinhamento à esquerda
    fontSize: '20px', // Tamanho do título
    fontWeight: 'bold', // Negrito
    color: 'green',
  },
  description: {
    textAlign: 'left', // Alinhamento à esquerda
    fontSize: '14px', // Tamanho da descrição
    marginTop: '8px', // Margem superior para separação
    color: 'black',
  },
};

// Estilos responsivos
const mediaQueries = {
  '@media (min-width: 768px)': {
    card: {
      width: '45%', // Apenas 2 cards por linha em telas médias e grandes
    },
  },
  '@media (min-width: 1024px)': {
    card: {
      width: '30%', // Para telas grandes, ajuste para 3 cards por linha
    },
  },
};

Object.assign(styles, mediaQueries);

const Title = ({ titulo, setTitulo, onSearch }: { titulo: string; setTitulo: React.Dispatch<React.SetStateAction<string>>; onSearch: () => void }) => {
  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'flex-start',
      alignItems: 'center',
      padding: '0',
      marginBottom: '20px',
    }}>
      <form className="w-full max-w-md" onSubmit={(e) => { e.preventDefault(); onSearch(); }}>
        <div className="mb-20" style={{ display: 'flex', marginLeft: '-50px', marginRight: '-10px', alignItems: 'center' }}>
          <input
            type="text"
            placeholder="Título"
            value={titulo}
            onChange={(e) => setTitulo(e.target.value)}
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
          <button
            type="button"
            onClick={onSearch} // Chama a função de busca ao clicar
            style={{
              marginLeft: '8px',
              padding: '6px 12px',
              backgroundColor: '#4CAF50',
              color: 'white',
              border: 'none',
              borderRadius: '4px',
              cursor: 'pointer',
            }}
          >
            Buscar
          </button>
        </div>
      </form>
    </div>
  );
};

export default CardList;
