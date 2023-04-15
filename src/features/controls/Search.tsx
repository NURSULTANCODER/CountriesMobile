import styled from 'styled-components/native';
import { View, TextInput } from 'react-native';
import { useSearch } from './use-search';
import React from 'react';

const InputContainer = styled(View)`
  background-color: hsl(0, 0%, 100%);;
  padding: 1px 2px
  display: flex;
  align-items: center;
  border-radius: 0.5px
  box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;;
  margin-bottom: 1px
`;

const MyInput = styled(TextInput).attrs({
  placeholder: 'Search for a country...',
})`
  margin-left: 20px;
  border-radius: 5px;
  padding: 10px;
  height: 40px;
  border: none;
  color: hsl(200, 15%, 8%);
  background-color: hsl(0, 0%, 100%);
`;

//todo добавить нормальный поиск 
export const Search = () => {

  const [search, handleSearch] = useSearch();

  return (
    <InputContainer>
      <MyInput  value={search} onChangeText={handleSearch}/>
    </InputContainer>
  );
};
