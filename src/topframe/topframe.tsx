import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
//****************************************************************************
export const TopFrame = (props) => {
  return (
    <View style={styles.container}>
      <Text style={{marginTop: 100}}>Welcome. You are ready to survey</Text>
    </View>
  );
}
//****************************************************************************
export const MainMenu = (props) => {

}
//****************************************************************************
const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    backgroundColor: '#f0f0f0',
  },
});
//****************************************************************************
