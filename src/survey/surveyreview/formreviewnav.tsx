import { StatusBar } from 'expo-status-bar';
import React, { useState, useRef } from 'react';
import { Dimensions, Animated, View, Text, TouchableOpacity } from 'react-native';
import { WideWhiteButtonFontS } from '../../standardcomps/buttons';
//****************************************************************************
export const FormReviewNav = (props) => {
  //=================================================================
  const [currentitem, setCurrentItem] = useState(props.children[0]);
  const [selitem, setSelectedItem] = useState(0);
  const [trstatus, setTransitionStat] = useState(0);
  const margin = useRef(new Animated.Value(0)).current;
  const opacity = useRef(new Animated.Value(0)).current;
  //=================================================================
  let winheight = Dimensions.get('screen').height;
  //=================================================================
  let viewarr = [];
  //=================================================================
  const startChange = () => {
    if (selitem == (props.children.length - 1)) return;
    setTransitionStat(1);
    Animated.timing(margin, {
      toValue: -300,
      duration: 300,
      useNativeDriver: false
    }).start(() => {
      let newind = selitem + 1;
      setSelectedItem(newind);
      setCurrentItem(props.children[newind]);
      setTransitionStat(2);
      Animated.timing(opacity, {
        toValue: 1,
        duration: 300,
        useNativeDriver: false
      }).start(() => {
        setTransitionStat(0);
        margin.setValue(0);
        opacity.setValue(0);
      });
    });
  }
  //=================================================================
  if (trstatus == 0) {
    viewarr.push(
      <View key={1} style={{
        paddingHorizontal: 20,
        paddingVertical: 30
      }}>
        {currentitem}
      </View>
    );
  }
  //=================================================================
  if (trstatus == 1) {
    viewarr.push(
      <Animated.View key={2} style={{
        marginLeft: margin,
        paddingHorizontal: 20,
        paddingVertical: 30
      }}>{currentitem}</Animated.View>
    );
  }
  //=================================================================
  if (trstatus == 2) {
    viewarr.push(
      <Animated.View key={3} style={{
        opacity: opacity,
        paddingHorizontal: 20,
        paddingVertical: 30
      }}>{currentitem}</Animated.View>
    );
  }
  //=================================================================
  return (
    <View>
      <View style={{ height: winheight - 200 }}>
        {viewarr}
      </View>
      <View style={{
        width: '90%',
        alignSelf: 'center',
        marginTop: 30
      }}>
        <WideWhiteButtonFontS
          label="Next"
          onPress={ () => startChange() }
         />
      </View>
    </View>
  );
  //=================================================================
}
//****************************************************************************


//****************************************************************************
//<ScrollView onScroll={this.handleScroll} />
//handleScroll: function(event: Object) {
// console.log(event.nativeEvent.contentOffset.y);
//},
//****************************************************************************
