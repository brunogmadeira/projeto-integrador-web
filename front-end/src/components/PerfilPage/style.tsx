"use client"

import { FaPaw } from "react-icons/fa";
import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  background-color: #fefaf6; /* Fundo claro */
  min-height: 100vh;
  padding: 20px;
`;

export const Profile = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  margin-bottom: 40px;
`;

export const Icon = styled.i`
  font-size: 80px;
  color: black;
`;

export const NameInput = styled.input`
  width: 200px;
  padding: 10px;
  font-size: 16px;
  border: 1px solid #ddd;
  border-radius: 5px;
  text-align: center;
  background-color: #f7f7f7;
  color: #999;
`;

export const EmailInput = styled(NameInput)`
  margin-top: -5px;
`;

export const Description = styled.p`
  font-size: 14px;
  text-align: center;
  color: #444;
  line-height: 1.5;
  max-width: 300px;
  word-break: break-word;
`;

export const Details = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;
  border: 2px solid #8ec63f; /* Verde claro */
  border-radius: 10px;
  padding: 20px;
  width: 80%;
  max-width: 600px;
  background-color: #eee;
`;

export const Box = styled.div`
  flex: 1;
  text-align: center;
  font-size: 18px;
  font-weight: bold;
  color: #333;
  background-color: #ddd;
  padding: 30px;
  border-radius: 8px;
`;
