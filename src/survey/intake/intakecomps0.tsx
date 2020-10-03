//****************************************************************************
/*
*/
//****************************************************************************
import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { Dimensions, View, Image, ScrollView, Text, TouchableOpacity } from 'react-native';
//****************************************************************************
export const InTakeFinalPage = (props) => {
  //=================================================================
  return (
    <View>
      <Text style={{ marginTop: 100}}>Final Page</Text>
        <View style={{ height: 50 }}>
        </View>
        <TouchableOpacity onPress={ () => props.onCastPress() }>
          <Text>Submit</Text>
        </TouchableOpacity>

    </View>
  );
  //=================================================================
}
//****************************************************************************
