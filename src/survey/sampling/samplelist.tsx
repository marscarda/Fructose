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
    props.onTakeSampleSelect(sampleid);
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
        respcount = {item.respcount}
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
          </View>
          <Text style={{ fontSize: 15, fontWeight: 'bold', color: '#555', marginTop: 25 }}>Task to do</Text>
          <Text style={{ fontSize: 15, color: '#353', marginTop: 5 }}>{props.brief}</Text>
          <View style={{ marginTop: 20, flexDirection: 'row' }}>
            <Text style={{ fontSize: 12, color: '#888' }} >Enviaste </Text>
            <Text style={{ fontSize: 12, fontWeight: 'bold', color: '#070' }} >{props.respcount}</Text>
            <Text style={{ fontSize: 12, color: '#888' }} > casos</Text>
          </View>
          <View style={{ flexDirection: 'row', marginTop: 25 }}>
            <View style={{ flex: 3 }}>
              <TouchableOpacity onPress = { () => props.onReviewPress(props.sampleid) }>
              <Text style={{ color: '#03f' }}>Preview</Text>
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
        <View style={{ height: 1, backgroundColor: '#ddd'}} />
      </View>
    );
}
//****************************************************************************
