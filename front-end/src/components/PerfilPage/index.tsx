"use client";

import React, { useState, useEffect, CSSProperties } from "react";
import axios from "axios";
import { FaPaw } from "react-icons/fa";
import { postcad } from "@/entity/postcad";
import ModalCard from "../HomePage/modalCard";

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
  const [selectedPost, setSelectedPost] = useState<postcad | null>(null);

  const token = typeof window !== "undefined" ? localStorage.getItem("authToken") : null;

  const fetchPostData = async () => {
    try {
      const response = await axios.get<postcad[]>(
        `https://projeto-integrador-web-production.up.railway.app/api/postcad/list/iduser/${localStorage.getItem("usuarioId")}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      setPostCad(response.data);
    } catch (err) {
      setError("Erro ao carregar os dados.");
    } finally {
      setLoading(false);
    }
  };

  const removePost = async (id: number) => {
    try {
      setLoading(true);
      setPostCad((prevPosts) => prevPosts.filter((post) => post.idpost !== id));
      await axios.delete(
        `https://projeto-integrador-web-production.up.railway.app/api/postcad/deletepost/${id}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      fetchPostData();
    } catch (err) {
      setError("Erro ao remover o post.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchPostData();
  }, []);

  if (loading) return <div>Carregando...</div>;
  if (error) return <div>{error}</div>;

  return (
    <div style={styles.container}>
      {postCad.length === 0 ? (
        <div>Nenhum post encontrado.</div>
      ) : (
        <div style={styles.cardList}>
          {postCad.map((post) => (
            <div key={post.idpost} style={styles.card}>
              <img
                src={`data:image/jpeg;base64,${post.imagem || ""}`}
                alt="Post"
                style={styles.image}
              />
              <div style={styles.cardContent}>
                <h3 style={styles.title}>{post.titulo}</h3>
                <p style={styles.description}>{post.descricao}</p>
                <button style={styles.removeButton} onClick={() => removePost(post.idpost)}>
                  Remover
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
      {selectedPost && (
        <ModalCard isOpen={!!selectedPost} onClose={() => setSelectedPost(null)} post={selectedPost} />
      )}
    </div>
  );
};

export default Perfil;
