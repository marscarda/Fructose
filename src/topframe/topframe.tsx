import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Sampling } from '../survey/sampling/topsampling.tsx';
//****************************************************************************
export const TopFrame = (props) => {
  return (
    <View style={styles.container}>
      <Sampling />

    </View>
  );
}
//****************************************************************************
export const BotomBar = (props) => {
  return(
    <View style={styles.bottombar}>
    </View>
  );
}
//****************************************************************************
const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    backgroundColor: '#fff',
  },
  bottombar: {
    height: 100,
    backgroundColor: '#aaa',
    alignSelf: 'center'
  }
});
//****************************************************************************
