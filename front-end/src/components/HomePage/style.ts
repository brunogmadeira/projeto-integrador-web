
import styled from 'styled-components';

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