import styled from 'styled-components';
import { HiX } from "react-icons/hi";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  min-width: 100%;
`;

export const CardListWrapper = styled.div<{ justifyContent: string }>`
  display: flex;
  flex-wrap: wrap;
  gap: 16px;
  justify-content: ${props => props.justifyContent};
  margin-top: 20px;
  max-width: 45%;
  min-width: 100%;
`;

export const Card = styled.div`
  display: flex;
  border-radius: 8px;
  overflow: hidden;
  width: 45%;
  min-width: 45%;
  min-height: 300px;
  height: auto;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  border: 3px solid #95bf47;
`;

export const CardImage = styled.img`
  margin: 5%;
  width: 230px;
  height: 230px;
  object-fit: cover;
  border-radius: 8px;
  border: 2px solid #95bf47;
`;

export const CardContent = styled.div`
  padding: 16px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  flex-grow: 1;
`;

export const CardTitle = styled.h3`
  text-align: left;
  font-size: 20px;
  font-weight: bold;
  color: #95bf47;
`;

export const CardDescription = styled.p`
  text-align: left;
  font-size: 14px;
  margin-top: 8px;
  color: black;
  min-height: 80px;
`;

export const NoItemsMessage = styled.div`
  margin-top: 20px;
  font-size: 18px;
  color: #95bf47;
  text-align: center;
`;

export const TitleContainer = styled.div`
  width: 100%;
  border: 3px solid #95bf47;
  border-radius: 8px;
  padding: 10px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 20px;
`;

export const SearchForm = styled.form`
  display: flex;
  align-items: center;
  width: 100%;
`;

export const SearchInput = styled.input`
  border: none;
  padding: 4px 16px;
  width: 100%;
  height: 30px;
  background-color: #D9D9D9;
  color: #4F4F4F;
  font-size: 16px;
  text-align: center;
`;

export const SearchButton = styled.button`
  margin-left: 8px;
  padding: 6px 12px;
  background-color: #95bf47;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
`;

export const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const ModalContainer = styled.div`
  background: white;
  border-radius: 8px;
  border: 1px solid #95bf47;
  padding: 20px;
  width: 600px; /* Largura fixa mediana */
  max-height: 80vh; /* Altura máxima para 80% da viewport */
  overflow-y: auto; /* Ativa rolagem vertical se o conteúdo for maior que o modal */
  color: black;
`;


export const ModalImage = styled.img`
  max-width: 100%; /* Imagem ocupa no máximo 100% da largura do modal */
  height: auto;    /* Mantém a proporção da imagem */
  margin-bottom: 15px;
`;

export const CloseButton = styled(HiX)`
  cursor: pointer;
  float: right;
  color: #95bf47;
  font-size: 23px;
  margin-bottom: 15px;
`;

export const ModalCardTittle = styled.h3`
  text-align: center;
  font-size: 25px;
  font-weight: bold;
  color: #95bf47;
`;

export const ModalText = styled.p`
  white-space: pre-wrap; /* Mantém quebras de linha e espaços múltiplos */
  word-wrap: break-word; /* Permite quebra de linha automática se a palavra for muito longa */
`;