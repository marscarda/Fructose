import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { View, ScrollView, Text, TouchableOpacity } from 'react-native';
//****************************************************************************
export const ActiveSampleList = (props) => {
  //=================================================================
  let itemarr = [];
  let samples = props.samples;
  console.log("ActiveList component");
  console.log(props.samples);
  //=================================================================
  const sampleReviewSelected = (sampleid) => {
    alert ("Review desired for " + sampleid);
  }
  const sampleTakeCaseSelected = (sampleid) => {
    alert ("Take case desired for " + sampleid);
  }
  //=================================================================
  //console.log ("Listing: " + samples);
  var items, item, n;
  for (n = 0; n < samples.count; n++) {
    item = samples.items[n];
    item = (
      <SampleItem
        key={n}
        sampleid = {item.sampleid}
        title={item.title}
        text={item.text}
        brief={item.brief}
        onTakeCasePress = { (id) => sampleTakeCaseSelected(id) }
        onReviewPress = { (id) => sampleReviewSelected(id) }
      />
    );
    itemarr.push(item);
  }
  //=================================================================
  return (
    <ScrollView>
      {itemarr}
    </ScrollView>
  );
  //=================================================================
}
//****************************************************************************
const SampleItem = (props) => {
    return(
      <View>
        <View style={{ paddingVertical: 25, paddingHorizontal: 15 }}>
          <Text style={{ fontSize: 20, fontWeight: 'bold', color: '#555' }}>{props.title}</Text>
          <Text style={{ fontSize: 14, color: '#777', marginTop: 3 }}>{props.text}</Text>
          <Text style={{ fontSize: 15, fontWeight: 'bold', color: '#555', marginTop: 8 }}>Task to do</Text>
          <Text style={{ fontSize: 15, color: '#383', marginTop: 2 }}>{props.brief}</Text>
          <View style={{ flexDirection: 'row', marginTop: 18 }}>
            <View style={{ flex: 3 }}>
              <TouchableOpacity onPress = { () => props.onReviewPress(props.sampleid) }>
              <Text style={{ color: '#03f' }}>Review</Text>
              </TouchableOpacity>
            </View>
            <View style={{ flex: 3 }}>
              <TouchableOpacity onPress = { () => props.onTakeCasePress(props.sampleid) }>
              <Text style={{ color: '#03f' }}>Take case</Text>
              </TouchableOpacity>
            </View>
            <View style={{ flex: 1 }} />
          </View>
        </View>
        <View style={{ height: 3, backgroundColor: '#888'}} />
      </View>
    );
}
//****************************************************************************