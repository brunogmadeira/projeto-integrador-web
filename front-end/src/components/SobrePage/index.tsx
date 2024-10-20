"use client";

import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import  {Container, TextSection, CarouselContainer, Image, Paragraph, Title} from './style'

const InfoTela = () => {
  return (
    <Container>
      <TextSection>
        <Title>Adoção que Transforma</Title>
        <Paragraph>
          A ONG Miados e Latidos resgata cães e gatos abandonados, promovendo adoções responsáveis para oferecer a eles uma nova chance.
          Além do resgate, a ONG conscientiza sobre a importância da adoção e do respeito aos animais. O trabalho é essencial para combater o
          abandono e promover o bem-estar animal. Adotar salva vidas e transforma o futuro dos animais.
        </Paragraph>
      </TextSection>
      <CarouselContainer>
        <Carousel showThumbs={false} autoPlay infiniteLoop>
            <Image src="/assets/images/post-ong/dog1.jpg" alt="Animal resgatado 1" />
            <Image src="/assets/images/post-ong/dog2.jpg" alt="Animal resgatado 2" />
            <Image src="/assets/images/post-ong/dog3.jpg" alt="Animal resgatado 3" />
        </Carousel>
      </CarouselContainer>
    </Container>
  );
};

export default InfoTela;
