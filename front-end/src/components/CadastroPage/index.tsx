"use client";

import React, { useState, useEffect } from 'react';
import { Main, LogoContainer, StyledInput, StyledButton } from './style';
import Image from 'next/image';

const Input = () => {
  const [nome, setNome] = useState('');
  const [sobrenome, setSobrenome] = useState('');
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [confirmarSenha, setConfirmarSenha] = useState('');
  const [isMounted, setIsMounted] = useState(false);


  useEffect(() => {
    setIsMounted(true);
  }, []);

  const handleCadastro = async () => {
    if (!isMounted) return; 

    if (senha !== confirmarSenha) {
      alert("As senhas não coincidem!");
      return;
    }

    const payload = {
      idusuario: null,
      nome: `${nome} ${sobrenome}`,
      telefone_celular: 48999999999,
      email: email,
      senha: senha,
      tipo_usuario: 1,
      token: "",
    };

    const response = await fetch('http://localhost:8080/user/novouser', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(payload),
    });

    if (response.ok) {
      window.location.href = '/login';
    } else {
      const msgErro = await response.text();
      alert(msgErro);    
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
        placeholder="Nome"
        value={nome}
        onChange={(e) => setNome(e.target.value)}
      />
      <StyledInput
        type="text"
        placeholder="Sobrenome"
        value={sobrenome}
        onChange={(e) => setSobrenome(e.target.value)}
      />
      <StyledInput
        type="text"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <StyledInput
        type="password"
        placeholder="Senha"
        value={senha}
        onChange={(e) => setSenha(e.target.value)}
      />
      <StyledInput
        type="password"
        placeholder="Confirmar Senha"
        value={confirmarSenha}
        onChange={(e) => setConfirmarSenha(e.target.value)}
      />
      
      <StyledButton onClick={handleCadastro}>Cadastrar</StyledButton>
    </Main>
  );
};

export default Input;
