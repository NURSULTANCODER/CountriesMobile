import React from 'react';
import {Text, View, Button, SafeAreaView, ScrollView } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Card } from '../components/Card';
import { Search } from '../features/controls/Search';
import { CountryList } from '../features/countries/CountryList';
import { Controls } from '../features/controls/Controls';
import styled from 'styled-components/native';

const BookmarksButton = styled(Button)`
  position: absolute;
  bottom: 30px;
  rigth: 30px;
  padding: 15px;
  margin: 10px;
  border-radius: 5px;
  heigth: 40px;
`


export const HomePage = ({ navigation }: {navigation: any}) => {

  React.useEffect(() => {

  }, [])

  return (
    <SafeAreaView style={{ flex: 1}}>
      <ScrollView>
        <View style={{ flex: 1, marginLeft: 5, marginRight: 5 }}>
          <View>
            <Controls />
          </View>
          <View>
            <CountryList navigation={navigation} />
          </View>
        </View>
      </ScrollView>
      <View style={{borderWidth:1,position:'absolute',bottom:0,alignSelf:'flex-end'}}>
        <BookmarksButton title="bookmarks" onPress={() => navigation.navigate('Bookmarks')} />
      </View>
    </SafeAreaView>
  
  )
}