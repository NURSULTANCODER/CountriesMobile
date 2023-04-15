import React from 'react';
import { ReactNode } from 'react';
import { View } from 'react-native';
import styled from 'styled-components/native';

const Wrapper = styled(View)`
  padding: 2px 0;
`;

interface ListProps {
  children: ReactNode,
}

export const List = ({ children }: ListProps) => {
  return <Wrapper>{children}</Wrapper>;
};
