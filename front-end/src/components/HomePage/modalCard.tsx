"use client";

import React, { CSSProperties } from "react";
import { HiX } from "react-icons/hi";

interface Postcad {
  idpost: number;
  titulo: string;
  descricao: string;
  nome_causa: string;
  imagem?: string;
}

interface ModalCardProps {
  isOpen: boolean;
  onClose: () => void;
  post: Postcad;
}

const styles: { [key: string]: CSSProperties } = {
  container: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    padding: "20px",
    minWidth: "100%",
  },
  cardListWrapper: {
    display: "flex",
    flexWrap: "wrap",
    gap: "16px",
    justifyContent: "center", // Pode ser alterado dinamicamente
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
    boxShadow: "0 2px 5px rgba(0, 0, 0, 0.1)",
    border: "3px solid #95bf47",
  },
  cardImage: {
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
  cardTitle: {
    textAlign: "left",
    fontSize: "20px",
    fontWeight: "bold",
    color: "#95bf47",
  },
  cardDescription: {
    textAlign: "left",
    fontSize: "14px",
    marginTop: "8px",
    color: "black",
    minHeight: "80px",
  },
  noItemsMessage: {
    marginTop: "20px",
    fontSize: "18px",
    color: "#95bf47",
    textAlign: "center",
  },
  titleContainer: {
    width: "100%",
    border: "3px solid #95bf47",
    borderRadius: "8px",
    padding: "10px",
    boxShadow: "0 2px 5px rgba(0, 0, 0, 0.1)",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: "20px",
  },
  searchForm: {
    display: "flex",
    alignItems: "center",
    width: "100%",
  },
  searchInput: {
    border: "none",
    padding: "4px 16px",
    width: "100%",
    height: "30px",
    backgroundColor: "#D9D9D9",
    color: "#4F4F4F",
    fontSize: "16px",
    textAlign: "center",
  },
  searchButton: {
    marginLeft: "8px",
    padding: "6px 12px",
    backgroundColor: "#95bf47",
    color: "white",
    border: "none",
    borderRadius: "4px",
    cursor: "pointer",
  },
  overlay: {
    position: "fixed",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  modalContainer: {
    background: "white",
    borderRadius: "8px",
    border: "1px solid #95bf47",
    padding: "20px",
    width: "600px",
    maxHeight: "80vh",
    overflowY: "auto",
    color: "black",
  },
  modalImage: {
    maxWidth: "100%",
    height: "auto",
    marginBottom: "15px",
  },
  closeButton: {
    cursor: "pointer",
    float: "right",
    color: "#95bf47",
    fontSize: "23px",
    marginBottom: "15px",
  },
  modalCardTitle: {
    textAlign: "center",
    fontSize: "25px",
    fontWeight: "bold",
    color: "#95bf47",
  },
  modalText: {
    whiteSpace: "pre-wrap",
    wordWrap: "break-word",
  },
};

const ModalCard: React.FC<ModalCardProps> = ({ isOpen, onClose, post }) => {
  if (!isOpen) return null;

  return (
    <div style={styles.overlay} onClick={onClose}>
      <div style={styles.modalContainer} onClick={(e) => e.stopPropagation()}>
        <HiX style={styles.closeButton} onClick={onClose} />
        <h3 style={styles.modalCardTitle}>{post.titulo}</h3>
        {post.imagem && (
          <img
            style={styles.modalImage}
            src={`data:image/jpeg;base64,${post.imagem}`}
            alt="Imagem do post"
          />
        )}
        <p style={styles.modalText}>{post.nome_causa}</p>
        <p style={styles.modalText}>{post.descricao}</p>
      </div>
    </div>
  );
};

export default ModalCard;
