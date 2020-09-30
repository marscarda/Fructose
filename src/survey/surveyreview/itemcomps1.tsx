import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { Dimensions, View, Image, ScrollView, Text, TouchableOpacity } from 'react-native';
//****************************************************************************
export const ReviewPubViewCandidate = (props) => {
  //=================================================================
  const [sampleform, setSampleForm] = useState(null);
  let width = Dimensions.get('window').width;
  //=================================================================
  return (
    <View style={{ width: width }}>
      <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 10 }}>
        <Image
          style={{ width: 30, height: 30 }}
          source={require('../../../assets/pubimageicon.png')} />
        <Text style={{
          marginLeft: 20,
          fontSize: 15,
          fontWeight: 'bold',
          textAlign: 'center'
        }}>Public View Candidate</Text>
      </View>
      <View style={{
        marginTop: 15,
        marginBottom: 5,
        backgroundColor: '#eee',
        height: 1
      }}>
      </View>
      <View style={{ marginTop: 30 }}>
        <Text style={{
          textAlign: 'left',
          fontSize: 18,
          fontWeight: 'bold',
          color: '#343'
        }}>{props.label}</Text>
      </View>
    </View>
  );
  //=================================================================
}
//****************************************************************************
