"use client";

import React from 'react';
import styled from 'styled-components';
import Button from './Button';
import Link from 'next/link';
import Image from 'next/image';

const StyledInput = styled.input`
  border: none;
  padding: 12px 16px;
  border-radius: 0;
  width: 100%;
  margin-top: 10px;
  background-color: #D9D9D9;
  color: #4F4F4F;
  font-size: 16px;

  &::placeholder {
    color: #4F4F4F;
    opacity: 1;
  }

  &:focus {
    outline: none;
    border: 1px solid rgb(149, 191, 71);
  }
`;

const ForgotPasswordLink = styled.a`
  font-size: 14px;
  color: black;
  &:hover {
    text-decoration: underline;
  }
`;

const LogoContainer = styled.div`
  margin-bottom: 20px;
  display: flex;
  justify-content: center;
  width: 100%;
  
  img {
    width: 80%;
    max-width: 300px;
    height: auto;
  }
`;

const Input = () => {
  return (
    <div className="w-full max-w-md flex flex-col items-center p-8">
      <form className="w-full">
        <LogoContainer>
          <Image 
            src="/assets/images/login-visitante/logo-login.png" 
            alt="Logo do Login onde mostra um gato e um cachorro junto ao nome da ONG Miados, Latidos e Cia" 
            layout="responsive" 
            width={200} 
            height={200} 
          />
        </LogoContainer>

        <div className="mb-5">
          <StyledInput
            type="text"
            placeholder="Email"
            className="focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <div className="mb-5">
          <StyledInput
            type="password"
            placeholder="Senha"
            className="focus:outline-none focus:ring-2 focus:ring-blue-500" 
          />
        </div>
        
        <div className="mb-5 text-center">
          <Link href="/esqueci-minha-senha" legacyBehavior>
            <ForgotPasswordLink>ESQUECI MINHA SENHA</ForgotPasswordLink>
          </Link>
        </div>

        <div className="mt-6 w-full flex justify-center">
          <Button label="Entrar" />
        </div>
      </form>
    </div>
  );
};

export default Input;