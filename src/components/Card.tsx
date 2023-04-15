import React from 'react';
import {Text, View, Image, TouchableOpacity, Button} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import styled from 'styled-components/native';
import { CountryInfo } from '../types';

const Wrapper = styled(View)`
  border-radius: 8px;
  background-color: hsl(0, 0%, 100%);
  box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
  overflow: hidden;
  margin: 10px;
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

const AddBookmarks = styled(Button)`
  padding: 15px;
  margin: 10px;
`

interface CardProps extends CountryInfo {
  navigation: any
}


export const Card = ({ navigation, ...props }: CardProps) => {
  const [isCardBookmarks, setIsCardBookmarks] = React.useState(false)
  const {name, img, info} = props

  React.useEffect(() => {
    const getCountries = async () => {
      const data = await AsyncStorage.getItem('bookmarks')
      const bookmarks: CountryInfo[] | [] = data ? JSON.parse(data) : [];
      const index = bookmarks.findIndex((obj: CountryInfo) => obj.name === name);
      if(index === -1) {
        setIsCardBookmarks(true)
      }
    }

    getCountries()
  }, [])

  const onAddBookmarksClick = async () => {
    try {
      const data = await AsyncStorage.getItem('bookmarks');
      const bookmarks: CountryInfo[] | [] = data ? JSON.parse(data) : [];
      const index = bookmarks.findIndex((obj: CountryInfo) => obj.name === name);
      if(index === -1) {
        await AsyncStorage.setItem('bookmarks', JSON.stringify([...bookmarks, props]))
        setIsCardBookmarks(!isCardBookmarks)
      }
    } catch (error) {
      console.log(error);
    }
  }

  const onDeleteBookmarksClick = async () => {
    try {
      const data = await AsyncStorage.getItem('bookmarks');
      const bookmarks: CountryInfo[] | [] = data ? JSON.parse(data) : [];
      const index = bookmarks.findIndex((obj: CountryInfo) => obj.name === name);
      if (index !== -1) {
        bookmarks.splice(index, 1);
        await AsyncStorage.setItem('bookmarks', JSON.stringify(bookmarks));
        setIsCardBookmarks(!isCardBookmarks)
      }
    } catch (error) {
      console.log(error);
    }
  }
  


 return (
  <TouchableOpacity onPress={() => navigation.navigate('Details', {name})}>
    <Wrapper>
      <CardImage resizeMode="cover" source={{uri: `${img}`}} />
      <CardBody>
        <CardTitle>{name}</CardTitle>
        <CardList>
          {info.map(i => (
             <CardListItem key={i.title} >
              <Text>
                <CardOptionName>{i.title}: </CardOptionName> 
                <CardOptionValue>{i.description}</CardOptionValue> 
              </Text>
            </CardListItem>
          ))}
        </CardList>
        {!isCardBookmarks ? (<AddBookmarks title='Delete bookmarks' onPress={onDeleteBookmarksClick} />) 
        : (<AddBookmarks title='Add bookmarks' onPress={onAddBookmarksClick} />)}
        
      </CardBody>
    </Wrapper>
  </TouchableOpacity>
 )
}