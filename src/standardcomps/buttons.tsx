import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { View, TouchableOpacity, Text } from 'react-native';
//=========================================================================
export const WideGreenButton = (props) => {
  return(
    <TouchableOpacity onPress = { () => props.onPress () } >
      <View style={{
        borderStyle: 'solid',
        borderWidth: 1,
        borderColor: '#888',
        borderRadius: 10,
        padding: 10,
        backgroundColor: '#11d511'
      }}>
        <Text style={{
          textAlign: 'center',
          fontSize: 18,
          fontWeight: 'bold',
          color: '#fff',
        }}>{ props.label }</Text>
      </View>
    </TouchableOpacity>
  );
}
//=========================================================================
export const WideWhiteButton = (props) => {
  return(
    <TouchableOpacity onPress = { () => props.onPress () } >
      <View style={{
        borderStyle: 'solid',
        borderWidth: 1,
        borderColor: '#888',
        borderRadius: 10,
        padding: 10,
        backgroundColor: '#fff'
      }}>
        <Text style={{
          textAlign: 'center',
          fontSize: 18,
          fontWeight: 'bold',
          color: '#999'
        }}>{ props.label }</Text>
      </View>
    </TouchableOpacity>
  );
}
//=========================================================================
export const WideWhiteButtonFontS = (props) => {
  return(
    <TouchableOpacity onPress = { () => props.onPress () } >
      <View style={{
        borderStyle: 'solid',
        borderWidth: 1,
        borderColor: '#888',
        borderRadius: 10,
        padding: 10,
        backgroundColor: '#fff',
      }}>
        <Text style={{
          textAlign: 'center',
          fontSize: 12,
          fontWeight: 'bold',
          color: '#999'
        }}>{ props.label }</Text>
      </View>
    </TouchableOpacity>
  );
}
//=========================================================================
export const ParentButton = (props) => {
  return (
    <TouchableOpacity onPress = { () => props.onPress () } >
      <View style={{
        flexDirection: 'row',
        alignItems: 'center',
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderWidth: 1,
        borderRadius: 8,
        borderColor: '#aaa'
      }}>
      {props.children}
      </View>
    </TouchableOpacity>
  );
}
//=========================================================================
//width: props.width,
//alignSelf: props.alignSelf,
