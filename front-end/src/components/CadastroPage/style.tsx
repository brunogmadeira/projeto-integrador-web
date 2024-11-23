'use client'

import styled from 'styled-components';

export const Main = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 30%;
  height: 100vh;
  margin: 0 auto;
`;

export const StyledInput = styled.input`
  padding: 12px 16px;
  width: 100%;
  margin-top: 10px;
  background-color: #D9D9D9;
  color: #4F4F4F;
  font-size: 16px;

  &::placeholder {
    color: #4F4F4F;
  }

  &:focus {
    border: 1px solid rgb(149, 191, 71);
  }
`;

export const LogoContainer = styled.div`
  margin-bottom: 20px;
  display: flex;
  justify-content: center;
  width: 100%;

  img {
    width: 80%;
    max-width: 300px;
  }
`;

export const StyledButton = styled.button`
  background-color: rgb(149, 191, 71);
  color: black;
  padding: 6px 12px;
  width: 100%;
  max-width: 300px;
  margin-top: 10px;
  font-size: 16px;

  &:hover {
    background-color: rgb(102, 137, 54);
  }
`;
