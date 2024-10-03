"use client";

import React from 'react';
import styled from 'styled-components';

const StyledButton = styled.button`
  background-color: rgb(149, 191, 71);
  color: black;
  padding: 6px 12px;
  border-radius: 0;
  width: 100%;
  max-width: 300px;
  margin-top: 10px;
  font-size: 16px;

  @media (max-width: 600px) {
    font-size: 14px;
    padding: 4px 8px;
  }

  &:hover {
    background-color: rgb(102, 137, 54);
    transition: background-color 0.2s ease-in-out;
  }
`;

const Button = ({ label }: { label: string }) => {
  return <StyledButton>{label}</StyledButton>;
};

export default Button;