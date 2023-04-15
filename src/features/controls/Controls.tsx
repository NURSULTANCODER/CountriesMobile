import * as React from 'react';
import { View } from 'react-native';
import styled from 'styled-components/native';
import { Region } from '../../types';
import { Search } from './Search';
// import { CustomSelect } from './CustomSelect';
import { useRegion } from './use-region';
import { CustomSelect } from './CustomSelect';

const options = ['All regions', 'Africa', 'America', 'Asia', 'Europe', 'Oceania',]

const Wrapper = styled(View)`
  padding: 10px;
  display: flex;
  align-items: flex-start;
  jastify-content: space-between;
`;

export const Controls = () => {
  const [region, handleSelect] = useRegion();


  return (
    <Wrapper style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
      <Search />
      <CustomSelect options={options} onSelect={handleSelect}  /> 
    </Wrapper>
  );
};
