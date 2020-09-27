import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { SampleData } from './sampledata.tsx'
//****************************************************************************
export const AssignedSamples = (props) => {
  //=====================================================================
  SampleData.getUserActiveSamples()
    .then( (samples) => {
      console.log(samples);
    })
    .catch( (samples) => {
      console.log(samples);
    } );
    //=====================================================================


















  //=====================================================================
  return (
    <View>
      <Text>Assigned list</Text>
    </View>
  );
  //=====================================================================
}
//****************************************************************************
export const WaitingSamples = (props) => {
  //=====================================================================
  return (
    <View>
      <Text>Waiting </Text>
    </View>
  );
  //=====================================================================
}
//****************************************************************************
