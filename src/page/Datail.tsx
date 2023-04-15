import React from 'react';
import {Text, View, Button, SafeAreaView, ScrollView} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { ContryDetails } from '../features/details/CountryDetails';

export const Details = ({ navigation, route }: {navigation: any, route: any}) => {
  return (
    <SafeAreaView>
      <ScrollView>
        <View style={{ flex: 1, marginLeft: 5, marginRight: 5 }} >
          <ContryDetails navigation={navigation} route={route} />
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}