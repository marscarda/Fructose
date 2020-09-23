import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { View, Text } from 'react-native';
import { AuthCenter } from '../appstoring/auth.tsx';
import { HttpRequest } from '../internal/httprequest.tsx';
//***************************************************************************
export const Entry = (props) => {
  //============================================================
  //const [text, setText] = useState('intial state');
  //============================================================
  AuthCenter.fetchStoredAuthData()
    .then (
      


    );
    .catch( (err) => {
      alert ('could not access stored data');
    });








  //============================================================
  return (
    <View>
      <Text>Let's see what happens</Text>
    </View>
  );
  //============================================================
}
//***************************************************************************
