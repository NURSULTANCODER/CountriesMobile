import {View, Text, Button, SafeAreaView, ScrollView} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import React from 'react';
import { List } from '../components/List';
import { Card } from '../components/Card';
import { CountryInfo } from '../types';

export const Bookmarks = ({ navigation }: {navigation: any}) => {
  const [countries, setCountries] = React.useState<CountryInfo[] | []>([])

  React.useEffect(() => {
    const getCountries = async () => {
      const data = await AsyncStorage.getItem('bookmarks')
      const bookmarks: [] = data && JSON.parse(data)
      
      await setCountries(bookmarks)
    }

    getCountries()
  }, [])

  return (
    <SafeAreaView>
      <ScrollView>
        <View>
          {countries && countries.length !== 0 ? (
            <List>
              {countries.map(country => (<Card key={country.name} navigation={navigation} {...country} />))}
            </List>
          ) : (<Text>Not bookmarks!</Text>)}
        </View>
      </ScrollView>
    </SafeAreaView>

  )
}