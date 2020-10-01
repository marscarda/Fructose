import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { Dimensions, View, Image, ScrollView, Text, TouchableOpacity } from 'react-native';
import { ParentButton } from '../../standardcomps/buttons';
import { Messenger } from './formintakenav';
//****************************************************************************
export const IntkPubView = (props) => {
  //=================================================================
  let width = Dimensions.get('window').width -40;
  const sendMsg = () => {
    Messenger.sendMessage();
  }
  //=================================================================
  const optionSelected = (option) => {
    sendMsg()
  }
  //=================================================================
  return(
    <View style={{ width: width }}>
      <View style={{
        marginTop: 20,
        paddingVertical: 25,
        paddingHorizontal: 20,
        borderWidth: 1,
        borderColor: '#aaa',
        borderRadius: 5
      }}>
        <View>
          <Text style={{
            fontSize: 12,
            fontWeight: 'bold',
            color: '#333'
          }}
          >Su valoracion de:</Text>
        </View>
        <View style={{ marginTop: 10 }}>
          <Text style={{
            fontSize: 18,
            fontWeight: 'bold',
            color: '#44a'
          }}>{props.item.label}</Text>
        </View>
      </View>
      {/*Positive*/}
      <View style={{ marginTop: 30 }}>
        <ParentButton onPress={ () => optionSelected(1) }>
          <View style={{
            width: 70,
            justifyContent: 'left'
          }}>
            <Image
              style={{ width: 35, height: 35 }}
              source={require('../../../assets/iconpositive.png')} />
          </View>
          <Text style={{ fontSize: 14, fontWeight: 'bold', color: '#555' }}>Buena</Text>
        </ParentButton>
        {/*Neutral*/}
        <View style={{ height: 10 }}></View>
        <ParentButton onPress={ () => optionSelected(1) }>
          <View style={{
            width: 70,
            justifyContent: 'left'
          }}>
            <Image
              style={{ width: 35, height: 35 }}
              source={require('../../../assets/iconneutral.png')} />
          </View>
          <Text style={{ fontSize: 14, fontWeight: 'bold', color: '#555' }}>Regular</Text>
        </ParentButton>
        {/*Negative*/}
        <View style={{ height: 10 }}></View>
        <ParentButton onPress={ () => optionSelected(1) }>
          <View style={{
            width: 70,
            justifyContent: 'left'
          }}>
            <Image
              style={{ width: 35, height: 35 }}
              source={require('../../../assets/iconnegative.png')} />
          </View>
          <Text style={{ fontSize: 14, fontWeight: 'bold', color: '#555' }}>Mala</Text>
        </ParentButton>
        {/*Unknown*/}
        <View style={{ height: 10 }}></View>
        <ParentButton onPress={ () => optionSelected(1) }>
          <View style={{
            width: 70,
            justifyContent: 'left'
          }}>
            <Image
              style={{ width: 35, height: 35 }}
              source={require('../../../assets/iconunknown.png')} />
          </View>
          <Text style={{ fontSize: 14, fontWeight: 'bold', color: '#555' }}>No lo/la conozco</Text>
        </ParentButton>
      </View>
    </View>
  );
  //=================================================================
}
//****************************************************************************
