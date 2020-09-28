import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { View, ScrollView, Text, TouchableOpacity } from 'react-native';
//****************************************************************************
export const ActiveSampleList = (props) => {
  //=================================================================
  let itemarr = [];
  let samples = props.samples;
  //=================================================================
  const sampleReviewSelected = (sampleid) => {
    props.onSurveyReviewSelect(sampleid);
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
      <View style={{ height: 100 }} />
    </ScrollView>
  );
  //=================================================================
}
//****************************************************************************
const SampleItem = (props) => {
    return(
      <View>
        <View style={{ paddingVertical: 25, paddingHorizontal: 15 }}>
          <View
            style={{
              marginTop: 5,
              padding: 10,
              borderRadius: 10,
              backgroundColor: '#e9e9ea'
            }}
          >
            <Text style={{ fontSize: 18, fontWeight: 'bold', color: '#353' }}>{props.title}</Text>
            <Text style={{ fontSize: 14, color: '#353', marginTop: 3 }}>{props.text}</Text>
          </View>
          <Text style={{ fontSize: 15, fontWeight: 'bold', color: '#555', marginTop: 15 }}>Task to do</Text>
          <Text style={{ fontSize: 15, color: '#353', marginTop: 2 }}>{props.brief}</Text>
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
