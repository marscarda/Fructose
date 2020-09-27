import { StatusBar } from 'expo-status-bar';
import React, { useState, useRef } from 'react';
import { Animated, View, Text } from 'react-native';
//***************************************************************************
export const WaitingBar = (props) => {
  //============================================================
  const elapsed = useRef(new Animated.Value(0)).current;
  const remain = useRef(new Animated.Value(100)).current;
  //============================================================
  Animated.parallel([
    Animated.timing(elapsed, {
      toValue: 100,
      duration: props.timeout,
      useNativeDriver: false
    }),
    Animated.timing(remain, {
      toValue: 0,
      duration: props.timeout,
      useNativeDriver: false
    })
  ]).start();
  //============================================================
  return (
    <View style={{width: 200, alignSelf: 'center', alignItems: 'center'}}>
      <Text styles={{ color: '#000', fontSize: 30 }}>{props.label}</Text>
      <View style={{ height: 10 }}></View>
      <View style={{ width: '100%', flexDirection: 'row'}}>
        <Animated.View style={{ flex: elapsed, height: 10, backgroundColor: '#0055ff'}}></Animated.View>
        <Animated.View style={{ flex: remain, height: 10, backgroundColor: '#bbbbbb'}}></Animated.View>
      </View>
    </View>
  );
  //============================================================
}
//***************************************************************************
