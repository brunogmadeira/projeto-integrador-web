"use client";

import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { HeaderNavigation } from '@/components/header/header-navigation';
import Title from '@/app/sobre/components/title';

const InfoTela = () => {
  return (
    <div>
      <div className="flex justify-between items-center mx-4 my-8">
        <div className="w-1/2 p-20">
          <p className="text-left text-lg text-gray-700">
            A ONG Miados e Latidos resgata cães e gatos abandonados, promovendo adoções responsáveis para oferecer a eles uma nova chance.
            Além do resgate, a ONG conscientiza sobre a importância da adoção e do respeito aos animais. O trabalho é essencial para combater o 
            abandono e promover o bem-estar animal. Adotar salva vidas e transforma o futuro dos animais.
          </p>
        </div>
        <div className="w-1/2">
          <Carousel showThumbs={false} autoPlay infiniteLoop>
            <div>
              <img src="/assets/images/post-ong/dog1.jpg" alt="Animal resgatado 1" className="w-full h-auto rounded-lg" />
            </div>
            <div>
              <img src="/assets/images/post-ong/dog2.jpg" alt="Animal resgatado 2" className="w-full h-auto rounded-lg" />
            </div>
            <div>
              <img src="/assets/images/post-ong/dog3.jpg" alt="Animal resgatado 3" className="w-full h-auto rounded-lg" />
            </div>
          </Carousel>
        </div>
      </div>
    </div>
  );
};

export default InfoTela;
