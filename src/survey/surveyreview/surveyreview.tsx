import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { View, ScrollView, Text, TouchableOpacity } from 'react-native';
import { SampleData } from '../sampling/sampledata.tsx';
//****************************************************************************
export const SurveyReview = (props) => {
  //=================================================================
  const [sampleform, setSampleForm] = useState(null);



  SampleData.getSampleForm(props.sampleid)
    .then( (sform) => {
      setSampleForm(sampleform);
    })
    .catch( () => {
      alert ('Something went wrong')
    } );





  //=================================================================
  return (
    <View>
      <Text> {props.sampleid} </Text>
    </View>
  );
  //=================================================================

}
//****************************************************************************
