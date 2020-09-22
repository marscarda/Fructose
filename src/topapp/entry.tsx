import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { View, Text } from 'react-native';
import { AuthCenter } from '../appstoring/auth.tsx';
//***************************************************************************
export const Entry = (props) => {
  //============================================================
  AuthCenter.fetchStoredAuthData()
    .catch( (err) => console.log(err) );

  console.log('to render');
  AuthCenter.storeAuthData();

  //console.log ('Happens');







  //============================================================
  return (
    <View>
      <Text>Put something nice here</Text>
    </View>
  );
  //============================================================
}
//***************************************************************************
