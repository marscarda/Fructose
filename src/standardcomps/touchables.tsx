import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { View, TouchableOpacity, Text } from 'react-native';
//=========================================================================
export const TouchableTextBlueL = (props) => {
  return(
    <TouchableOpacity onPress = { () => props.onPress () } >
      <Text
        style={{ color: '#0055ff',
        textAlign: 'left' }}
      >{props.label}</Text>
    </TouchableOpacity>
  );
}
//=========================================================================
