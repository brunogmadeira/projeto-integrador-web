"use client";

import React, { useState } from "react";
import { postcad } from "@/entity/postcad";
import axios from "axios";
import {Container, 
        FormContainer, 
        Title, 
        ImagePreview, 
        FormWrapper, 
        SelectWrapper, 
        InputFile, 
        Select, 
        InputText, 
        DuallInputText, 
        DualInputWrapper, 
        SubmitButton} from './style';

// Main Form Component
const Form: React.FC = () => {
  const [title, setTitle] = useState("");
  const [petName, setPetName] = useState("");
  const [selectedAnimal, setSelectedAnimal] = useState("");
  const [selectedRaca, setSelectedRaca] = useState("");
  const [descricao, setDescricao] = useState("");
  const [chavePix, setChavePix] = useState("");
  const [contato, setContato] = useState("");
  const [showModal, setShowModal] = useState(false);
  const [imageBase64, setImageBase64] = useState<string>("");

  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const input = e.target.value.replace(/\D/g, "");
    const formattedPhone = input
      .replace(/^(\d{2})(\d{5})(\d{4}).*/, "($1) $2-$3")
      .slice(0, 15);
    setContato(formattedPhone);
  };

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        const base64String = reader.result as string;
        setImageBase64(base64String.split(",")[1]);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    const formData: postcad = {
      idpost: 0,
      usuario: {
        idusuario: 1,
      },
      titulo: title || "Título Padrão",
      nome_causa: petName || "Nome da Causa Padrão",
      filtro_animal: selectedAnimal || "Cachorro",
      filtro_raca: selectedRaca || "Vira-lata",
      filtro_porte: "Médio",
      filtro_causa: "Adoção",
      descricao: descricao || "Descrição padrão",
      chavepix: chavePix || "chave-pix-padrao",
      contato: contato || "contato@exemplo.com",
      status: 1,
      imagem: imageBase64,
    };

    try {
      const response = await axios.put(
        "http://localhost:8080/api/postcad/save",
        formData,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      if (response.status === 200) {
        setShowModal(true);
        setTitle("");
        setPetName("");
        setSelectedAnimal("");
        setSelectedRaca("");
        setDescricao("");
        setChavePix("");
        setContato("");
        setImageBase64("");
      }
    } catch (error) {
      console.error("Erro ao enviar os dados:", error);
      window.alert("Erro ao salvar a postagem. Tente novamente.");
    }
  };

  return (
    <Container>
      <FormContainer>
        <Title>Postagem de Animais</Title>

        {imageBase64 && (
          <ImagePreview
            src={`data:image/jpeg;base64,${imageBase64}`}
            alt="Imagem do Pet"
            width={500}
            height={240}
            quality={100}
          />
        )}

        <FormWrapper onSubmit={handleSubmit}>
          <InputFile type="file" accept="image/*" onChange={handleImageChange} />

          <SelectWrapper>
            <Select value={selectedAnimal} onChange={(e) => setSelectedAnimal(e.target.value)}>
              <option value="" disabled>
                Animal
              </option>
              <option value="cachorro">Cachorro</option>
              <option value="gato">Gato</option>
              <option value="coelho">Coelho</option>
            </Select>

            <Select value={selectedRaca} onChange={(e) => setSelectedRaca(e.target.value)}>
              <option value="" disabled>
                Raça
              </option>
              <option value="Vira-lata">Vira-lata</option>
              <option value="amarelo">Raça 2</option>
              <option value="roger">Raça 3</option>
            </Select>
          </SelectWrapper>

          <InputText
            type="text"
            placeholder="Título"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />

          <InputText
            type="text"
            placeholder="Nome do Pet"
            value={petName}
            onChange={(e) => setPetName(e.target.value)}
          />

          <InputText
            type="text"
            placeholder="Descrição"
            value={descricao}
            onChange={(e) => setDescricao(e.target.value)}
          />

          <DualInputWrapper>
            <DuallInputText
              type="text"
              placeholder="Chave Pix"
              value={chavePix}
              onChange={(e) => setChavePix(e.target.value)}
            />
            <DuallInputText
              type="text"
              placeholder="Contato"
              value={contato}
              onChange={handlePhoneChange}
            />
          </DualInputWrapper>

          <SubmitButton type="submit">Enviar</SubmitButton>
        </FormWrapper>
      </FormContainer>

      {showModal && (
        <div className="modal">
          <div className="modal-content">
            <span className="close" onClick={() => setShowModal(false)}>
              &times;
            </span>
            <p>Postagem salva com sucesso!</p>
          </div>
        </div>
      )}
    </Container>
  );
};

export default Form;
