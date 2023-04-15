import {Text, View} from 'react-native';
import { Region } from "../../types";
import SelectDropdown from 'react-native-select-dropdown';
import styled from 'styled-components/native';

export type CountryOption = {
  label: Region,
  value: Region,
} | ''

export const CustomSelect =  ({options, onSelect}: {options: string[], onSelect: any}) => {
  return (
    <>
      <SelectDropdown  
      data={options} 
      onSelect={(item , i) => onSelect(item)} 
      defaultButtonText='All regions'
      buttonStyle={{backgroundColor: '#fff', borderRadius: 5, width: 150}}
      dropdownStyle={{backgroundColor: '#fff', }}
      />
    </>
  )
}

