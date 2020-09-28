import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { Dimensions, View, Text, StyleSheet } from 'react-native';
import { Sampling } from '../survey/sampling/topsampling.tsx';
import { SurveyReview } from '../survey/surveyreview/surveyreview.tsx';
//****************************************************************************
const Switcher = (props) => {
  let index = props.page;
  index--;
  return (
    <View style={{ width: '100%', height: props.height }}>
    { props.children[index] }
    </View>
  );
}
//****************************************************************************
export const TopFrame = (props) => {
  //==========================================================================
  const [page, setPage] = useState(1);
  const [entityid, setEntityId] = useState(0);
  //==========================================================================
  const winheight = Dimensions.get('screen').height;
  //==========================================================================
  const reviewSurvey = (sampleid) => {
    setEntityId(sampleid);
    setPage(2);
  }
  //==========================================================================
  return (
    <View style={styles.container}>
      <Switcher height={winheight} page={page}>
        <Sampling
          onSurveyReviewSelect={ (sampleid) => reviewSurvey(sampleid) }
        />
        <SurveyReview sampleid={entityid} />
      </Switcher>
    </View>
  );
  //==========================================================================
}
//****************************************************************************
const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    backgroundColor: '#fff',
  },
  bottombar: {
    height: 100,
    backgroundColor: '#aaa',
    alignSelf: 'center'
  }
});
//****************************************************************************
