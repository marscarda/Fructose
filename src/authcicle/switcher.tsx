import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { View } from 'react-native';
//***************************************************************************
export const Switcher = (props) => {
  let index = props.page;
  index--;
  return (
    <View style={{ width: '100%', height: '100%' }}>
    { props.children[index] }
    </View>
  );

}
//***************************************************************************
