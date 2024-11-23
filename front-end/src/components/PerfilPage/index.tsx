"use client";

import React, { useState, useEffect, CSSProperties } from "react";
import axios from "axios";
import { FaPaw } from "react-icons/fa";
import { postcad } from "@/entity/postcad";
import ModalCard from "../HomePage/modalCard"; // Certifique-se de que o caminho está correto

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
  profileCard: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    width: "80%",
    maxWidth: "600px",
    backgroundColor: "#fff",
    border: "2px solid #95bf47",
    borderRadius: "12px",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
    padding: "20px",
    marginBottom: "40px",
  },
  profileIconContainer: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#f2f2f2",
    borderRadius: "50%",
    width: "100px",
    height: "100px",
    border: "2px solid #95bf47",
  },
  profileIcon: {
    fontSize: "50px",
    color: "#95bf47",
  },
  profileInfo: {
    flex: 1,
    marginLeft: "20px",
    display: "flex",
    flexDirection: "column",
    gap: "8px",
  },
  profileName: {
    fontSize: "24px",
    fontWeight: "bold",
    color: "#333",
    margin: 0,
  },
  profileEmail: {
    fontSize: "14px",
    color: "#666",
    margin: 0,
  },
  profileDescription: {
    fontSize: "16px",
    color: "#333",
    lineHeight: "1.5",
  },
};

const styles: { [key: string]: CSSProperties } = {
  container: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    padding: "20px",
    minWidth: "100%",
  },
  cardList: {
    display: "flex",
    flexWrap: "wrap",
    gap: "16px",
    justifyContent: "center",
    marginTop: "20px",
    maxWidth: "45%",
    minWidth: "100%",
  },
  card: {
    display: "flex",
    borderRadius: "8px",
    overflow: "hidden",
    width: "45%",
    minWidth: "45%",
    minHeight: "300px",
    height: "auto",
    boxShadow: "0 2px 5px rgba(0,0,0,0.1)",
    border: "3px solid #95bf47",
  },
  image: {
    margin: "5%",
    width: "230px",
    height: "230px",
    objectFit: "cover",
    borderRadius: "8px",
    border: "2px solid #95bf47",
  },
  cardContent: {
    padding: "16px",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "flex-start",
    flexGrow: 1,
  },
  title: {
    textAlign: "left",
    fontSize: "20px",
    fontWeight: "bold",
    color: "#95bf47",
  },
  description: {
    textAlign: "left",
    fontSize: "14px",
    marginTop: "8px",
    color: "black",
    minHeight: "20px",
  },
  noItemsMessage: {
    marginTop: "20px",
    fontSize: "18px",
    color: "#95bf47",
    textAlign: "center",
  },
  imageContainer: {
    marginRight: "20px",
  },
  removeButton: {
    marginTop: "12px",
    padding: "8px 16px",
    backgroundColor: "#e74c3c",
    color: "#fff",
    border: "none",
    borderRadius: "4px",
    cursor: "pointer",
    fontSize: "14px",
    alignSelf: "flex-start",
  },
};

const Perfil = () => {
  const [postCad, setPostCad] = useState<postcad[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [titulo, setTitulo] = useState<string>("");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedPost, setSelectedPost] = useState<postcad | null>(null);

  const token = typeof window !== "undefined" ? localStorage.getItem("authToken") : null;

  const fetchPostData = async () => {
    if (typeof window === "undefined") return;
    setLoading(true);
    try {
      const userId = localStorage.getItem("usuarioId");
      if (!userId) throw new Error("Usuário não autenticado.");
      const response = await axios.get<postcad[]>(
        `https://projeto-integrador-web-production.up.railway.app/api/postcad/list/iduser/${userId}`,
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );
      setPostCad(response.data);
    } catch (error) {
      setError("Erro ao carregar os dados.");
    } finally {
      setLoading(false);
    }
  };
  

  const removePost = async (id: number) => {
    try {
      setLoading(true);
      const response = await axios.delete(
        `https://projeto-integrador-web-production.up.railway.app/api/postcad/deletepost/${id}`,
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );
      if (response.status === 200) {
        setPostCad((prevPosts) => prevPosts.filter((post) => post.idpost !== id));
      }
    } catch {
      setError("Erro ao remover o post.");
    } finally {
      setLoading(false);
    }
  };

  const openModal = (post: postcad) => {
    setSelectedPost(post);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setSelectedPost(null);
    setIsModalOpen(false);
  };

  useEffect(() => {
    if (typeof window !== "undefined") {
      fetchPostData();
    }
  }, []);
  

  return (
    <div style={styless.container}>
      <div style={styless.profileCard}>
        <div style={styless.profileIconContainer}>
          <FaPaw style={styless.profileIcon} />
        </div>
        <div style={styless.profileInfo}>
          <h2 style={styless.profileName}>{localStorage.getItem("usuarioName")}</h2>
          <p style={styless.profileEmail}>{localStorage.getItem("usuarioEmail")}</p>
          <p style={styless.profileDescription}>
            Bem-vindo(a) à nossa plataforma! Aqui você pode criar e gerenciar causas em prol dos animais.
          </p>
        </div>
      </div>
      <div style={styles.container}>
        {postCad.length === 0 ? (
          <div style={styles.noItemsMessage}>Nenhum post encontrado.</div>
        ) : (
          <div style={styles.cardList}>
            {postCad.map((post) => (
              <div key={post.idpost} style={styles.card}>
                <div style={styles.imageContainer}>
                  <img
                    src={post.imagem ? `data:image/jpeg;base64,${post.imagem}` : "/assets/images/post-ong/dog.png"}
                    alt="Imagem do post"
                    style={styles.image}
                  />
                </div>
                <div style={styles.cardContent}>
                  <h3 style={styles.title}>{post.titulo}</h3>
                  <p style={styles.description}>{post.descricao}</p>
                  <button
                    style={styles.removeButton}
                    onClick={() => removePost(post.idpost)}
                  >
                    Remover
                  </button>
                  <button onClick={() => openModal(post)}>Ver mais</button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
      {isModalOpen && selectedPost && (
        <ModalCard isOpen={!!selectedPost} onClose={() => setSelectedPost(null)} post={selectedPost} />
      )}
    </div>
  );
};

export default Perfil;
