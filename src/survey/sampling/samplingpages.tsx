import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { WaitingBar } from '../../standardcomps/waitingbar.tsx';
import { SampleData } from '../sampledata.tsx';
import { ActiveSampleList } from './samplelist.tsx';
//****************************************************************************
export const ActiveSamples = (props) => {
  //=====================================================================
  const [samples, setSamples] = useState(null);
  //=====================================================================
  SampleData.getUserActiveSamples()
    .then( (rsamp) => {
      if (rsamp !== samples) { setSamples(rsamp); }
    })
    .catch( () => {
      alert ('Something went wrong')
    } );
  //=====================================================================
  if (samples === null) {
    return (
      <View style={{ height: '100%', alignItems: 'center', justifyContent: 'center' }} >
        <WaitingBar label="Getting your samples" timeout={10000} />
      </View>
    );
  }
  else return (
    <ActiveSampleList
      samples={samples}
      onSurveyReviewSelect={ (sampleid) => props.onSurveyReviewSelect(sampleid) }
      onTakeSampleSelect={ (sampleid) => props.onTakeSampleSelect(sampleid) }
    />
  );
  //=====================================================================
  //
}
//****************************************************************************
export const WaitingSamples = (props) => {
  //=====================================================================
  return (
    <View>
      <Text>Waiting </Text>
    </View>
  );
  //=====================================================================
}
//****************************************************************************
