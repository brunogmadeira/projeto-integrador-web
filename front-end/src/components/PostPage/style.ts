import styled from "styled-components";
import Image from "next/image";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 20px;
  margin-top: 20px;
`;

export const FormContainer = styled.div`
  border: 2px solid #95bf47;
  border-radius: 20px;
  padding: 20px;
  width: 100%;
  max-width: 800px;
  background-color: #ededed;
`;

export const Title = styled.h2`
  text-align: center;
  margin-bottom: 20px;
  color: #9e86d8;
  font-weight: bold;
  font-size: 25px;
`;

export const ImagePreview = styled(Image)`
  margin-bottom: 20px;
  max-height: 400px;
  max-width: 600px;
  display: block;
  margin: 0 auto;
`;

export const FormWrapper = styled.form`
  width: 100%;
  max-width: 500px;
  margin: 0 auto;
`;

export const InputFile = styled.input`
  border: none;
  height: 40px;
  background-color: #d9d9d9;
  color: #4f4f4f;
  width: 100%;
`;

export const SelectWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 20px;
`;

export const Select = styled.select`
  border: 1px solid #ccc;
  padding: 4px 10px;
  border-radius: 4px;
  width: 48%;
  height: 40px;
  background-color: #d9d9d9;
  color: #4f4f4f;
  font-size: 16px;
  text-align: center;
`;

export const InputText = styled.input`
  border: none;
  padding: 4px 16px;
  width: 100%;
  height: 40px;
  background-color: #d9d9d9;
  color: #4f4f4f;
  font-size: 16px;
  text-align: center;
  margin-top: 20px;
`;

export const DualInputWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 20px;
`;

export const DuallInputText = styled(InputText)`
  width: 48%;
`;

export const SubmitButton = styled.button`
  background-color: #48bb78;
  color: white;
  font-weight: bold;
  padding: 10px;
  width: 100%;
  height: 40px;
  margin-top: 20px;
  border: none;
  cursor: pointer;

  &:hover {
    background-color: #2f855a;
  }
`;
