//****************************************************************************
/*
IN THIS FILE ARE DEFINED THE FIXED PAGES OF THE QUESTIONING PROCESS.
InTakeFinalPage
*/
//****************************************************************************
import { StatusBar } from 'expo-status-bar';
import React, { useState, useRef } from 'react';
import { Platform, Animated, View, Text, TouchableOpacity } from 'react-native';
import { WideWhiteButtonFontS } from '../../standardcomps/buttons';
//****************************************************************************
export const InTakeFinalPage = (props) => {
  //=================================================================
  const opacity = useRef(new Animated.Value(0)).current;
  //=================================================================
  Animated.sequence([
    Animated.delay(4500),
    Animated.timing(opacity, {
      toValue: 1,
      duration: 300,
      useNativeDriver: false
    })
  ]).start();
  //=================================================================
  return (
    <View>
      <View style={{ paddingHorizontal: 15 }}>
        <View style={{
          borderStyle: 'solid',
          borderWidth: 1,
          borderColor: '#aca',
          backgroundColor: '#0a0',
          borderRadius: 5,
          paddingVertical: Platform.OS === 'ios' ? 30 : 23,
          paddingHorizontal: 10,
          marginTop: Platform.OS === 'ios' ? 40 : 45,
        }}>
          <Text style={{
            textAlign: 'center',
            fontSize: 21,
            fontWeight: 'bold',
            color: '#fff'
          }}
          >Has llegado al final !</Text>
          <Text style={{
            marginTop: Platform.OS === 'ios' ? 18 : 10,
            textAlign: 'center',
            fontSize: 16,
            fontWeight: 'bold',
            color: '#fff'
          }}
          >Muchas gracias por tu tiempo.</Text>
        </View>
      </View>
      <View style={{
        marginTop: 60,
        alignItems: 'center',
        paddingHorizontal: 20
      }}>
        <Text style={{ textAlign: 'center' }}>Si eres la persona entrevistada</Text>
        <Text style={{ textAlign: 'center' }}>Por favor avisale a la persona que l@ esta encuestando</Text>
        <Text style={{ marginTop: 20 }}>No cierres la aplicacion</Text>
      </View>
      <Animated.View style={{
        opacity: opacity,
        marginTop: Platform.OS === 'ios' ? 90 : 100,
        paddingHorizontal: 20
      }}>
        <WideWhiteButtonFontS
          label="Agregar a la muestra"
          onPress={ () => props.onCastPress() }
         />
      </Animated.View>
    </View>
  );
  //=================================================================
}
//****************************************************************************
