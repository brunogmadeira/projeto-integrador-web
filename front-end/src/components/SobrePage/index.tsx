"use client";

import React, { CSSProperties } from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

const styles: { [key: string]: CSSProperties } = {
  container: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    margin: "2rem 1rem",
  },
  textSection: {
    width: "50%",
    padding: "5rem",
  },
  title: {
    fontSize: "3rem",
    fontWeight: "bold",
    textAlign: "center",
    margin: "2rem 0",
    color: "#95BF47",
  },
  paragraph: {
    textAlign: "left",
    fontSize: "1.5rem",
    color: "#4a5568",
  },
  carouselContainer: {
    width: "50%",
  },
  image: {
    width: "100%",
    height: "auto",
    borderRadius: "0.5rem",
  },
};

const InfoTela = () => {
  return (
    <div style={styles.container}>
      <div style={styles.textSection}>
        <h1 style={styles.title}>Adoção que Transforma</h1>
        <p style={styles.paragraph}>
          A ONG Miados e Latidos resgata cães e gatos abandonados, promovendo adoções responsáveis para oferecer a eles uma nova chance.
          Além do resgate, a ONG conscientiza sobre a importância da adoção e do respeito aos animais. O trabalho é essencial para combater o
          abandono e promover o bem-estar animal. Adotar salva vidas e transforma o futuro dos animais.
        </p>
      </div>
      <div style={styles.carouselContainer}>
        <Carousel showThumbs={false} autoPlay infiniteLoop>
          <img style={styles.image} src="/assets/images/post-ong/dog1.jpg" alt="Animal resgatado 1" />
          <img style={styles.image} src="/assets/images/post-ong/dog2.jpg" alt="Animal resgatado 2" />
          <img style={styles.image} src="/assets/images/post-ong/dog3.jpg" alt="Animal resgatado 3" />
        </Carousel>
      </div>
    </div>
  );
};

export default InfoTela;
