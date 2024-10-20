"use client";

import React from 'react';
import {Main, LogoContainer, StyledInput, StyledButton} from './style';
import Image from 'next/image';

const Input = () => {
  return (
    <Main>
      <LogoContainer>
        <Image 
          src="/assets/images/login-visitante/logo-login.png" 
          alt="Logo do Login onde mostra um gato e um cachorro junto ao nome da ONG Miados, Latidos e Cia" 
          layout="responsive" 
          width={200} 
          height={200} 
        />
        </LogoContainer>
          <StyledInput
            type="text"
            placeholder="Nome"
        />
        <StyledInput
          type="text"
          placeholder="Sobrenome"
        />
        <StyledInput
          type="text"
          placeholder="Email"
        />
        <StyledInput
          type="password"
          placeholder="Senha"
        />
        <StyledInput
          type="password"
          placeholder="Confirmar Senha"
        />
        <StyledButton>Cadastrar</StyledButton>
    </Main>
  );
};

export default Input;