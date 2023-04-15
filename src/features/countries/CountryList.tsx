import { Text } from 'react-native'
import * as React from 'react';
import { List } from '../../components/List';
import { Card } from '../../components/Card';
import { useCountries } from './use-countries';
import styled from 'styled-components/native';

const Loading = styled(Text)`
  font-size: 20px;
  text-align: center;
`

const CountryList = ({ navigation }: {navigation: any}) => {
  const [countries, {error, status}] = useCountries();

  return (
    <>
      {error && <Loading>Can't fetch data</Loading>}
      {status === 'loading' && <Loading>Loading...</Loading>}

      {status === 'received' && (
      <List>
        {countries.map((c) => {
          const CountryInfo = {
            img: c.flags.png,
            name: c.name,
            info: [
              {
                title: 'Population',
                description: c.population.toLocaleString(),
              },
              {
                title: 'Region',
                description: c.region,
              },
              {
                title: 'Capital',
                description: c.capital,
              },
            ],
          };

          return (
            <Card
              navigation={navigation} key={c.name}
              {...CountryInfo}            />
          );
        })}
      </List>
      )}
    </>
  )
}

export {CountryList};
