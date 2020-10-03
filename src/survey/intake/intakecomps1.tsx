//****************************************************************************
/*
DEFINED COMPONENTS HERE
IntkPubView
*/
//****************************************************************************
import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { Platform, Dimensions, View, Image, ScrollView, Text, TouchableOpacity } from 'react-native';
import { LeftIconButton } from '../../standardcomps/buttons';
import { ResponsesCollector } from '../takendata';
import { Messenger } from './formintakenav';
//****************************************************************************
export const IntkPubView = (props) => {
  //=================================================================
  let width = Dimensions.get('window').width;
  const sendMsg = () => {
    Messenger.sendMessage();
  }
  //=================================================================
  const optionSelected = (option) => {
    ResponsesCollector.addResponse({
      itemtype: props.item.itemtype,
      itemid: props.item.itemid,
      value: option
    });
    sendMsg()
  }
  //=================================================================
  return (
    <View>
      <View style={{
        width: width,
        paddingHorizontal: Platform.OS === 'ios' ? 15 : 10
      }}>
        <View style={{
          marginTop: 80,
          paddingVertical: 25,
          paddingHorizontal: Platform.OS === 'ios' ? 20 : 20,
          borderWidth: 1,
          borderColor: '#aaa',
          borderRadius: 5
        }}>
        <Text style={{
          fontSize: 12,
          fontWeight: 'bold',
          color: '#333'
        }}
        >Su valoracion sobre:</Text>
        <Text style={{
          fontSize: 18,
          fontWeight: 'bold',
          color: '#44a',
          marginTop: Platform.OS === 'ios' ? 10 : 5,
        }}>{props.item.label}</Text>
        </View>
      </View>
      <View style={{
        marginTop: 30,
        width: width,
        paddingHorizontal: Platform.OS === 'ios' ? 15 : 10
       }}>
        {/*Positive*/}
        <LeftIconButton
          label="Buena"
          icon={1}
          onPress={ () => optionSelected(1) }
        />
        <View style={{ height: 10}} />
        {/*Neutral*/}
        <LeftIconButton
          label="Regular"
          icon={2}
          onPress={ () => optionSelected(2) }
        />
        <View style={{ height: 10}} />
        {/*Negative*/}
        <LeftIconButton
          label="Mala"
          icon={3}
          onPress={ () => optionSelected(3) }
        />
        <View style={{ height: 10}} />
        {/*Unknown*/}
        <LeftIconButton
          label="No me es conocido/a"
          icon={4}
          onPress={ () => optionSelected(4) }
        />
      </View>
    </View>
  );
  //=================================================================
}
//****************************************************************************
