import React from 'react';
import { Overlay, ModalContainer, ModalCardTittle, CloseButton, ModalImage, ModalText } from './style';

interface Postcad {
  idpost: number;
  titulo: string;
  descricao: string;
  nome_causa: string;
  imagem?: string;
}

interface ModalCardProps {
  isOpen: boolean;
  onClose: () => void;
  post: Postcad;
}

const ModalCard: React.FC<ModalCardProps> = ({ isOpen, onClose, post }) => {
  if (!isOpen) return null;

  return (
    <Overlay onClick={onClose}>
      <ModalContainer onClick={(e) => e.stopPropagation()}>
        <CloseButton onClick={onClose} />
        <ModalCardTittle>{post.titulo}</ModalCardTittle>
        {post.imagem && <ModalImage src={`data:image/jpeg;base64,${post.imagem}`} alt="Imagem do post" />}
        <ModalText>{post.nome_causa}</ModalText>
        <ModalText>{post.descricao}</ModalText>
      </ModalContainer>
    </Overlay>
  );
};

export default ModalCard;
