"use client";

import React, { CSSProperties } from "react";
import { FaPaw } from "react-icons/fa";

const styles: { [key: string]: CSSProperties } = {
  container: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "flex-start",
    backgroundColor: "#fefaf6", // Fundo claro
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
  input: {
    width: "200px",
    padding: "10px",
    fontSize: "16px",
    border: "1px solid #ddd",
    borderRadius: "5px",
    textAlign: "center",
    backgroundColor: "#f7f7f7",
    color: "#999",
  },
  description: {
    fontSize: "14px",
    textAlign: "center",
    color: "#444",
    lineHeight: "1.5",
    maxWidth: "300px",
    wordBreak: "break-word",
  },
  details: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    gap: "20px",
    border: "2px solid #8ec63f", // Verde claro
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

const Perfil = () => {
  return (
    <div style={styles.container}>
      <div style={styles.profile}>
        <FaPaw style={styles.icon} />
        <input style={styles.input} placeholder="Nome" disabled />
        <input style={{ ...styles.input, marginTop: "-5px" }} placeholder="Email" disabled />
        <p style={styles.description}>
          pipipipipopopopipipipopopipipipopopipipipopopipi<br />
          pipipipipopopopipipipopopipipipopopipipipopopipi
        </p>
      </div>
      <div style={styles.details}>
        <div style={styles.box}>fotos</div>
        <div style={styles.box}>descrição</div>
      </div>
    </div>
  );
};

export default Perfil;
