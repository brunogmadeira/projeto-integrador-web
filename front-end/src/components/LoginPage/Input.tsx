"use client";

import React from 'react';
import { LogoContainer, StyledInput, LinkStyled, Main,StyledButton } from './style';
import Link from 'next/link';
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
        placeholder="Email"
        className="focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
      
      <StyledInput
        type="password"
        placeholder="Senha"
        className="focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
      
      <Link href="/cadastro">
        <LinkStyled> NÃO POSSUI LOGIN? CADASTRE-SE! </LinkStyled>
      </Link>
      <Link href="/sobre">
        <StyledButton>Entrar</StyledButton>
      </Link>
    </Main>
  );
};

export default Input;
