"use client";

import { postcad } from "@/entity/postcad";
import { usuariocad } from "@/entity/usuariocad";
import React, { CSSProperties } from "react";
import { HiX } from "react-icons/hi";

interface ModalCardProps {
  isOpen: boolean;
  onClose: () => void;
  post: postcad;
}

const styles: { [key: string]: CSSProperties } = {
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
    zIndex: 1000, // Garante que o modal fique sobreposto a outros elementos
  },
  modalContainer: {
    backgroundColor: "#ffffff",
    borderRadius: "10px",
    border: "3px solid #95bf47",
    boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.2)",
    padding: "20px",
    width: "500px",
    maxWidth: "90%",
    maxHeight: "80vh",
    overflowY: "auto",
    display: "flex",
    flexDirection: "column",
    gap: "8px", // Reduz o espaçamento geral entre os itens
  },
  closeButton: {
    cursor: "pointer",
    alignSelf: "flex-end",
    color: "#95bf47",
    fontSize: "24px",
  },
  modalCardTitle: {
    fontSize: "22px",
    fontWeight: "bold",
    color: "#4F4F4F",
    textAlign: "center",
    marginBottom: "2px", // Reduz o espaço entre título e e-mail
  },
  modalTextEmail: {
    color: "#6D6D6D",
    fontSize: "14px",
    textAlign: "center",
    fontStyle: "italic",
    marginBottom: "8px", // Ajuste fino no espaçamento abaixo do e-mail
  },
  modalImage: {
    maxWidth: "100%",
    maxHeight: "200px",
    borderRadius: "10px",
    border: "2px solid #95bf47",
    objectFit: "cover",
    alignSelf: "center",
  },
  modalText: {
    color: "#4F4F4F",
    fontSize: "16px",
    lineHeight: "1.5",
    margin: "0", // Remove espaçamento extra entre parágrafos
  },
  modalPixInfo: {
    color: "#95bf47",
    fontWeight: "bold",
  },
};

const ModalCard: React.FC<ModalCardProps> = ({ isOpen, onClose, post }) => {
  if (!isOpen) return null;

  return (
    <div style={styles.overlay} onClick={onClose}>
      <div
        style={styles.modalContainer}
        onClick={(e) => e.stopPropagation()}
      >
        <HiX style={styles.closeButton} onClick={onClose} />
        <h3 style={styles.modalCardTitle}>{post.titulo}</h3>
        <p style={styles.modalTextEmail}>{post.usuario.email}</p>
        {post.imagem && (
          <img
            style={styles.modalImage}
            src={`data:image/jpeg;base64,${post.imagem}`}
            alt="Imagem do post"
          />
        )}
        <p style={styles.modalText}>
          <strong>Causa:</strong> {post.nome_causa}
        </p>
        <p style={styles.modalText}>{post.descricao}</p>
        <p style={styles.modalText}>
          <span style={styles.modalPixInfo}>Chave Pix:</span>{" "}
          {post.chavepix ? post.chavepix : "Sem chave informada"}
        </p>
        <p style={styles.modalText}>
          <strong>Contato:</strong> {post.contato}
        </p>
      </div>
    </div>
  );
};

export default ModalCard;
