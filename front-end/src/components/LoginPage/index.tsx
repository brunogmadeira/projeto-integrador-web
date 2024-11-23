"use client";

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { LogoContainer, StyledInput, LinkStyled, Main, StyledButton } from './style';
import Link from 'next/link';
import Image from 'next/image';

const Input = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const router = useRouter();

  const handleLogin = async () => {
    const payload = {
      username: email,
      password: password,
    };

    try {
      const response = await fetch('https://projeto-integrador-web-production.up.railway.app/auth/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload),
      });

      if (response.ok) {
        const data = await response.json();
        console.log('Login bem-sucedido:', data);
        localStorage.setItem('authToken', data.token);
        localStorage.setItem('usuarioName', data.nome);
        localStorage.setItem('usuarioEmail', data.user);
        localStorage.setItem('usuarioId', data.id);
        router.push('/sobre');
      } else {
        console.error('Erro no login:', response.status);
      }
    } catch (error) {
      console.error('Erro ao conectar ao servidor:', error);
    }
  };

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
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className="focus:outline-none focus:ring-2 focus:ring-blue-500"
      />

      <StyledInput
        type="password"
        placeholder="Senha"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        className="focus:outline-none focus:ring-2 focus:ring-blue-500"
      />

      <Link href="/cadastro">
        <LinkStyled> NÃO POSSUI LOGIN? CADASTRE-SE! </LinkStyled>
      </Link>

      <StyledButton onClick={handleLogin}>Entrar</StyledButton>
    </Main>
  );
};

export default Input;
