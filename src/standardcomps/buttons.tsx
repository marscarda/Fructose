import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { Platform, View, TouchableOpacity, Text, Image } from 'react-native';
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
export const LeftIconButton = (props) => {
  //========================================================
  var icon;
  switch(props.icon){
    case 1: icon = require('../../assets/iconpositive.png'); break;
    case 2: icon = require('../../assets/iconneutral.png'); break;
    case 3: icon = require('../../assets/iconnegative.png'); break;
    case 4: icon = require('../../assets/iconunknown.png'); break;
  }
  //========================================================
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
        <Image
          style={{ width: 35, height: 35 }}
          source={icon} />
        <Text style={{
          marginLeft: Platform.OS === 'ios' ? 25 : 20,
          fontSize: 15,
          fontWeight: 'bold',
          color: '#555'
        }}>{props.label}</Text>
      </View>
    </TouchableOpacity>
  );
  //========================================================  
}
//=========================================================================
//width: props.width,
//alignSelf: props.alignSelf,
