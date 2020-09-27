import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { View, Text } from 'react-native';
//****************************************************************************
export const ActiveSampleList = (props) => {
  //=================================================================
  let itemarr = [];
  let samples = props.samples;
  console.log("ActiveList component");
  console.log(props.samples);
  //=================================================================
  //console.log ("Listing: " + samples);
  var items, item, n;
  for (n = 0; n < samples.count; n++) {
    item = samples.items[n];
    item = (
      <SampleItem
        key={n}
        title={item.title}
        text={item.text}
        brief={item.brief}
      />
    );
    itemarr.push(item);
  }
  //=================================================================
  return (
    <View>
      {itemarr}
    </View>
  );
  //=================================================================
}
//****************************************************************************
const SampleItem = (props) => {
    return(
      <View>
        <Text>Item</Text>
        <Text>{props.title}</Text>
        <Text>{props.text}</Text>
        <Text>{props.brief}</Text>
      </View>
    );
}
//****************************************************************************
