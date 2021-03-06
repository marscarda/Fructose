import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { Dimensions, View, Text, StyleSheet } from 'react-native';
import { Sampling } from '../survey/sampling/topsampling.tsx';
import { QFormPreview } from '../survey/qformpreview/qformpreview.tsx';
import { QFormIntake } from '../survey/intake/qformintake';
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
  const takeSample = (sampleid) => {
    setEntityId(sampleid);
    setPage(3);
  }
  //==========================================================================
  return (
    <View style={styles.container}>
      <Switcher height={winheight} page={page}>
        <Sampling
          onSurveyReviewSelect={ (sampleid) => reviewSurvey(sampleid) }
          onTakeSampleSelect={ (sampleid) => takeSample(sampleid) }
        />
        <QFormPreview
          sampleid={entityid}
          donePress={ () => setPage(1) } />
        <QFormIntake
          sampleid={entityid}
          onExit={ () => setPage(1) }
          />
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
