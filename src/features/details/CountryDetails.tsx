import React from 'react';
import {Text, View, Image, TouchableOpacity} from 'react-native';
import styled from 'styled-components/native';
import { useDetails } from './use-details';
import { useNeighbors } from './use-neighbors';

const Wrapper = styled(View)`
  border-radius: 8px;
  background-color: hsl(0, 0%, 100%);
  box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
  overflow: hidden;
  margin: 10px;
  wigth: 300px;
`;

const CardImage = styled(Image)`
  height: 200px;
  box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
`;

const CardBody = styled(View)`
  padding: 1px 20px 2px;
`;

const CardTitle = styled(Text)`
  margin: 10px 0 0;
  font-size: 16px;
  font-weight: 800;
`;

const CardList = styled(View)`
  margin: 0;
  padding: 16px 0 0;
`;

const CardListItem = styled(View)`
  display: flex;
  font-size: 14px;
  font-weight: 300;
  margin: 0 0 10px 0;
`;

const CardOptionName = styled(Text)`
  font-size: 14px;
  font-weight: 600;
`
const CardOptionValue = styled(Text)`
  font-size: 14px;
  font-weight: 300;
`

const BorderCountries = styled(View)`
  display: flex;
  padding: 1px 20px 20px;
`
const BorderCountriesItem = styled(Text)`
  font-size: 20px;
  padding: 3px 8px;
  margin: 2px 5px 0 0;
  border-radius: 5px;
  box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
  line-height: 24px;
  background-color: #0300F5;
  color: #fff;
`
const Loading = styled(Text)`
  font-size: 20px;
  text-align: center;
`

export const ContryDetails = ({ navigation, route }: {navigation: any, route: any}) => {
  const {name} = route.params

  const {status, error, currentCountry} = useDetails(name);
  const neighbors = useNeighbors(currentCountry?.borders);
 
  return (
    <>
    {error && <Loading>Can't fetch data</Loading>}
    {status === 'loading' && <Loading>Loading...</Loading>}
    {currentCountry &&  'received' && (
      <Wrapper>
        <CardImage resizeMode="cover" source={{uri: `${currentCountry?.flags.png}`}} />

        <CardBody>
          <CardTitle>{currentCountry?.name}</CardTitle>
          <CardList>
              <CardListItem >
                <Text>
                  <CardOptionName>Region: </CardOptionName> 
                  <CardOptionValue>{currentCountry?.region}</CardOptionValue> 
                </Text>
              </CardListItem>
              <CardListItem >
                <Text>
                  <CardOptionName>Sub region: </CardOptionName> 
                  <CardOptionValue>{currentCountry?.subregion}</CardOptionValue> 
                </Text>
              </CardListItem>
              <CardListItem >
                <Text>
                  <CardOptionName>Capital: </CardOptionName> 
                  <CardOptionValue>{currentCountry?.capital}</CardOptionValue> 
                </Text>
              </CardListItem>
              <CardListItem >
                <Text>
                  <CardOptionName>Population: </CardOptionName> 
                  <CardOptionValue>{currentCountry?.population.toLocaleString()}</CardOptionValue> 
                </Text>
              </CardListItem>
              <CardListItem >
                <Text>
                  <CardOptionName>Domain: </CardOptionName> 
                  {currentCountry?.topLevelDomain.map(d => (
                    <CardOptionValue key={d}>{d}, </CardOptionValue>
                  ))} 
                </Text>
              </CardListItem>
              <CardListItem >
                <Text>
                  <CardOptionName>Currencies: </CardOptionName> 
                  {currentCountry?.currencies.map(c => (
                    <CardOptionValue key={c.code}>{c.name}, </CardOptionValue>
                  ))} 
                </Text>
              </CardListItem>
              <CardListItem >
                <Text>
                  <CardOptionName>Languages: </CardOptionName> 
                  {currentCountry?.languages.map(l => (
                    <CardOptionValue key={l.name}>{l.name}, </CardOptionValue>
                  ))} 
                </Text>
              </CardListItem>
          </CardList>
        </CardBody>
        {!neighbors.length ? (<Text style={{marginLeft: 20,}}>There is no border countries</Text>) : (
          <BorderCountries>
            <Text>
              {neighbors.map(name => (
                <TouchableOpacity key={name} onPress={() => navigation.navigate('Details', {name: name})}>
                  <BorderCountriesItem>{name}</BorderCountriesItem>
                </TouchableOpacity>
              ))}
            </Text>
          </BorderCountries>
        )}
      </Wrapper>
    )}
    </>
 )
}