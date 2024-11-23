"use client";

import React, { CSSProperties, useState, useEffect } from "react";
import { FaPaw } from "react-icons/fa";
import axios from "axios";
import { postcad } from "@/entity/postcad";
import { usuariocad } from "@/entity/usuariocad";
import ModalCard from "../HomePage/modalCard";

const styless: { [key: string]: CSSProperties } = {
  container: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "flex-start",
    backgroundColor: "#fefaf6",
    minHeight: "100vh",
    padding: "20px",
  },
  profile: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    gap: "10px",
    marginBottom: "40px",
  },
  icon: {
    fontSize: "80px",
    color: "black",
  },
  name: {
    width: "200px",
    fontSize: "26px",
    textAlign: "center",
    color: "#000",
  },
  email: {
    width: "200px",
    fontSize: "12px",
    textAlign: "center",
    color: "#000",
  },
  description: {
    fontSize: "16px",
    textAlign: "center",
    color: "#000",
    lineHeight: "1.5",
    maxWidth: "300px",
    wordBreak: "break-word",
  },
  details: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    gap: "20px",
    border: "2px solid #8ec63f", 
    borderRadius: "10px",
    padding: "20px",
    width: "80%",
    maxWidth: "600px",
    backgroundColor: "#eee",
  },
  box: {
    flex: 1,
    textAlign: "center",
    fontSize: "18px",
    fontWeight: "bold",
    color: "#333",
    backgroundColor: "#ddd",
    padding: "30px",
    borderRadius: "8px",
  },
};

const styles: { [key: string]: CSSProperties } = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: '20px',
    minWidth: '100%',
  },
  cardList: {
    display: 'flex',
    flexWrap: 'wrap',
    gap: '16px',
    justifyContent: 'center',
    marginTop: '20px',
    maxWidth: '45%',
    minWidth: '100%',
  },
  card: {
    display: 'flex',
    borderRadius: '8px',
    overflow: 'hidden',
    width: '45%',
    minWidth: '45%',
    minHeight: '300px',
    height: 'auto',
    boxShadow: '0 2px 5px rgba(0,0,0,0.1)',
    border: '3px solid #95bf47',
  },
  image: {
    margin: '5%',
    width: '230px',
    height: '230px',
    objectFit: 'cover',
    borderRadius: '8px',
    border: '2px solid #95bf47',
  },
  cardContent: {
    padding: '16px',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'flex-start',
    flexGrow: 1,
  },
  title: {
    textAlign: 'left',
    fontSize: '20px',
    fontWeight: 'bold',
    color: '#95bf47',
  },
  description: {
    textAlign: 'left',
    fontSize: '14px',
    marginTop: '8px',
    color: 'black',
    minHeight: '80px',
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
};

const Perfil = () => {
  const [usuario, setUsuario] = useState<usuariocad>({
    idusuario: 0,
    nome: "",
    email: "",
  });

  const [postCad, setPostCad] = useState<postcad[]>([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedPost, setSelectedPost] = useState<postcad | null>(null); 

  const openModal = (post: postcad) => {
    setSelectedPost(post);
  };

  const closeModal = () => setSelectedPost(null);

  const usuarioName = typeof window !== 'undefined' ? localStorage.getItem('usuarioName') : null;
  const usuarioEmail = typeof window !== 'undefined' ? localStorage.getItem('usuarioEmail'): null;
  const token = typeof window !== 'undefined' ? localStorage.getItem("authToken") : null;

  const fetchPostData = async () => {
    try {
      const response = await axios.get<postcad[]>('http://localhost:8080/api/postcad/list/iduser/1', {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      setPostCad(response.data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchPostData();
  }, []);

  return (
    <div style={styless.container}>
      <div style={styless.profile}>
        <FaPaw style={styless.icon} />
        <p style={styless.name}>{usuarioName}</p>
        <p style={{ ...styless.email, marginTop: "-5px" }}>{usuarioEmail}</p>
      </div>
      <div style={styles.container}>
        {postCad.length === 0 ? (
          <div style={styles.noItemsMessage}>
            Nenhum post encontrado.
          </div>
        ) : (
          <div style={{
            ...styles.cardList,
            justifyContent: postCad.length === 1 ? 'flex-start' : 'center',
          }}>
            {postCad.map(postcad => (
              <div key={postcad.idpost} style={styles.card} onClick={() => openModal(postcad)}  >
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
                <div style={styles.cardContent}>
                  <h3 style={styles.title}>{postcad.titulo}</h3>
                  <p style={styles.description}>
                    Descrição: {postcad.descricao}
                  </p>
                  <p style={styles.description}>
                    Nome: {postcad.nome_causa}
                  </p>
                </div>
              </div>
            ))}
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
    </div>
  );
};

export default Perfil;
