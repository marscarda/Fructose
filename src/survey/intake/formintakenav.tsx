//****************************************************************************
/*
NAVIGATOR FOR TAKING SAMPLES.
Just a container with animations for QItems that are not here but received as
children.
*/
//****************************************************************************
import { StatusBar } from 'expo-status-bar';
import React, { useState, useRef } from 'react';
import { Dimensions, Animated, View, Text, TouchableOpacity } from 'react-native';
import { WideWhiteButtonFontS } from '../../standardcomps/buttons';
//****************************************************************************
export const FormIntakeNav = (props) => {
  //=================================================================
  const [currentitem, setCurrentItem] = useState(0);
  const [trstatus, setTransitionStat] = useState(0);
  const margin = useRef(new Animated.Value(0)).current;
  const opacity = useRef(new Animated.Value(0)).current;
  //=================================================================
  let winheight = Dimensions.get('screen').height;
  //=================================================================
  Messenger.setReceiver( () => { startChange() } );
  const startChange = () => {
    setTransitionStat(1);
    Animated.timing(margin, {
      toValue: -500,
      duration: Platform.OS === 'ios' ? 250 : 450,
      useNativeDriver: false
    }).start( () => {
      let newind = currentitem + 1;
      setCurrentItem(newind);
      setTransitionStat(2);
      Animated.sequence([
        Animated.delay(300),
        Animated.timing(opacity, {
          toValue: 1,
          duration: 500,
          useNativeDriver: false
        })
      ]).start( () => {
        setTransitionStat(0);
        margin.setValue(0);
        opacity.setValue(0);
      });
    });
  };
  //=================================================================
  let viewarr = [];
  if (trstatus == 0) {
    viewarr.push(
      <View key={1}>
        {props.children[currentitem]}
      </View>
    );
  }
  //------------------------------------------------------------------
  if (trstatus == 1) {
    viewarr.push(
      <Animated.View key={2} style={{
        marginLeft: margin,
      }}>
        {props.children[currentitem]}
      </Animated.View>
    );
  }
  //------------------------------------------------------------------
  if (trstatus == 2) {
    viewarr.push(
      <Animated.View key={3} style={{
        opacity: opacity,
      }}>
        {props.children[currentitem]}
      </Animated.View>
    );
  }
  //=================================================================
  return(
    <View>
    {viewarr}
    </View>
  );
  //=================================================================
}
//****************************************************************************
export class Messenger {
  //=================================================================
  static sendMessage() { Messenger.receivedfunction(); }
  //=================================================================
  static setReceiver (receiver) { Messenger.receivedfunction = receiver; }
  //=================================================================
  static receivedfunction = () => { return; };
  //=================================================================
}
//****************************************************************************
//<ScrollView onScroll={this.handleScroll} />
//handleScroll: function(event: Object) {
// console.log(event.nativeEvent.contentOffset.y);
//},
//****************************************************************************
