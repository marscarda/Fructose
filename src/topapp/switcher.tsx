import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { View } from 'react-native';
//***************************************************************************
export const Switcher = (props) => {


  console.log(props.page);

  let index = props.page;
  index--;

  console.log(props.page);
  console.log(index);


  return (
    <View>
    { props.children[index] }
    </View>
  );

}
//***************************************************************************
