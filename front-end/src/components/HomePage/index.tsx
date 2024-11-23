"use client";

import axios from 'axios';
import React, { useEffect, useState, CSSProperties } from 'react';
import { postcad } from '@/entity/postcad';
import ModalCard from './modalCard';

const CardList: React.FC = () => {
  const [items, setItems] = useState<postcad[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [titulo, setTitulo] = useState<string>('');
  const token = typeof window !== 'undefined' ? localStorage.getItem("authToken") : null;
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedPost, setSelectedPost] = useState<postcad | null>(null); 


  useEffect(() => {
    initialList();
  }, []);

  const openModal = (post: postcad) => {
    setSelectedPost(post);
  };

  const closeModal = () => setSelectedPost(null);

  function initialList() {
    const fetchItems = async () => {
      try {
        const response = await axios.get<postcad[]>('https://projeto-integrador-web-production.up.railway.app/api/postcad/list', {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
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
        const response = await axios.get<postcad[]>(`https://projeto-integrador-web-production.up.railway.app/postcad/list/filtro/` + titulo,{
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
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
    <div style={styles.container}>
      <Title titulo={titulo} setTitulo={setTitulo} onSearch={handleSearch} />
      {items.length === 0 ? (
        <div style={styles.noItemsMessage}>
          Nenhum post encontrado.
        </div>
      ) : (
        <div style={{
          ...styles.cardList,
          justifyContent: items.length === 1 ? 'flex-start' : 'center'
        }} >
<div style={styles.gridContainer}>
  {items.map(postcad => (
    <div key={postcad.idpost} style={styles.card}>
      <div style={styles.imageContainer}>
        {postcad.imagem ? (
          <img
            src={`data:image/jpeg;base64,${postcad.imagem}`}
            alt="Imagem do post"
            style={styles.image}
          />
        ) : (
          <img
            src="/assets/images/post-ong/dog.png"
            alt="Imagem padrão"
            style={styles.image}
          />
        )}
      </div>
      <div style={styles.cardContent}>
        <h3 style={styles.title}>{postcad.titulo}</h3>
        <p style={styles.description}>
          <strong>Nome da Causa:</strong> {postcad.nome_causa}
        </p>
        <p style={styles.description}>
          <strong>Descrição:</strong> {postcad.descricao}
        </p>
        <p style={styles.description}>
          <strong>Chave PIX:</strong> {postcad.chavepix || 'Não informado'}
        </p>
        <p style={styles.description}>
          <strong>Contato:</strong> {postcad.contato || 'Não informado'}
        </p>
        <p style={styles.description}>
          <strong>Filtro Animal:</strong> {postcad.filtro_animal || 'Não informado'}
        </p>
        <p style={styles.description}>
          <strong>Filtro Raça:</strong> {postcad.filtro_raca || 'Não informado'}
        </p>
        <p style={styles.description}>
          <strong>Filtro Porte:</strong> {postcad.filtro_porte || 'Não informado'}
        </p>
        <p style={styles.description}>
          <strong>Filtro Causa:</strong> {postcad.filtro_causa || 'Não informado'}
        </p>
      </div>
    </div>
  ))}
</div>


        </div>
      )}
      {selectedPost && (
        <ModalCard
          isOpen={!!selectedPost}
          onClose={closeModal}
          post={selectedPost} // Passando o post específico
        />
      )}
    </div>
  );
};

const styles: { [key: string]: CSSProperties } = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: '20px',
    minWidth: '100%'
  },
  cardList: {
    display: 'flex',
    flexWrap: 'wrap',
    gap: '16px',
    justifyContent: 'center',
    marginTop: '20px',
    maxWidth: '45%',
    minWidth: '100%'
  },
  titleContainer: {
    width: '100%',
    border: '3px solid #95bf47',
    borderRadius: '8px',
    padding: '10px',
    boxShadow: '0 2px 5px rgba(0,0,0,0.1)',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  noItemsMessage: {
    marginTop: '20px',
    fontSize: '18px',
    color: '#95bf47',
    textAlign: 'center',
  },
  gridContainer: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(600px, 1fr))', 
    gap: '16px', 
    justifyContent: 'center',
    width: '100%',
    padding: '16px',
  },
  card: {
    display: 'flex',
    flexDirection: 'row', 
    alignItems: 'flex-start',
    borderRadius: '8px',
    overflow: 'hidden',
    minHeight: '230px',
    boxShadow: '0 2px 5px rgba(0,0,0,0.1)',
    border: '3px solid #95bf47',
    padding: '16px',
    background: '#fff',
  },
  imageContainer: {
    flexShrink: 0,
    marginRight: '16px',
  },
  image: {
    width: '230px',
    height: '230px',
    objectFit: 'cover',
    borderRadius: '8px',
    border: '2px solid #95bf47',
  },
  cardContent: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    flexGrow: 1,
  },
  title: {
    fontSize: '20px',
    fontWeight: 'bold',
    color: '#95bf47',
    marginBottom: '8px',
  },
  description: {
    fontSize: '14px',
    color: 'black',
    marginBottom: '8px',
  },
};

const mediaQueries = {
  '@media (min-width: 768px)': {
    card: {
      width: '45%',
    },
  },
  '@media (min-width: 1024px)': {
    card: {
      width: '30%',
    },
  },
};

Object.assign(styles, mediaQueries);

const Title = ({ titulo, setTitulo, onSearch }: { titulo: string; setTitulo: React.Dispatch<React.SetStateAction<string>>; onSearch: () => void }) => {
  return (
    <div style={{
      ...styles.titleContainer,
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'flex-start',
      alignItems: 'center',
      padding: '0',
      marginBottom: '20px',
    }}>
      <form className="w-full max-w-md" onSubmit={(e) => { e.preventDefault(); onSearch(); }}>
        <div className="mb-5 mt-5" style={{ display: 'flex', alignItems: 'center', width: '100%' }}>
          <input
            type="text"
            placeholder="Digite sua busca..."
            value={titulo}
            onChange={(e) => setTitulo(e.target.value)}
            className="focus:outline-none focus:ring-2 focus:ring-blue-500"
            style={{
              border: 'none',
              padding: '4px 16px',
              borderRadius: '0',
              width: '100%',
              height: '30px',
              backgroundColor: '#D9D9D9',
              color: '#4F4F4F',
              fontSize: '16px',
              textAlign: 'center',
            }}
          />
          <button
            type="button"
            onClick={onSearch}
            style={{
              marginLeft: '8px',
              padding: '6px 12px',
              backgroundColor: '#95bf47',
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
