import styled from 'styled-components/native';
import { Button, TouchableOpacityProps } from 'react-native';
import React from 'react';

const ButtonElement = styled(Button)`
  padding: 0 1px
  background-color: hsl(0, 0%, 100%);;
  box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;;
  line-height: 2.5;
  border-radius: 0.5px

  border: none;
  display: flex;
  align-items: center;
  gap: 0.75px

  color: hsl(200, 15%, 8%);;
  cursor: pointer;
`;

type Props = TouchableOpacityProps & {
  title: string;
  onPress: () => void;
}

export const MyButton = ({ title, onPress, ...rest }: Props) => (
  <ButtonElement title={title} onPress={onPress} {...rest} />
);
