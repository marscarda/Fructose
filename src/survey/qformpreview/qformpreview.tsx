import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { View, ScrollView, Text, TouchableOpacity } from 'react-native';
import { SampleData } from '../sampledata.tsx';
import { FormReviewNav } from './formreviewnav.tsx';
import { ReviewPubViewCandidate } from './itemcomps1'
import { WaitingBar } from '../../standardcomps/waitingbar.tsx';
//****************************************************************************
export const QFormPreview = (props) => {
  //=================================================================
  const [sampleform, setSampleForm] = useState(null);
  //=================================================================
  SampleData.getSampleForm(props.sampleid)
    .then( (sform) => {
      if (sampleform !== sform) {
        setSampleForm(sform);
      }
    })
    .catch( () => {
      alert ('Something went wrong')
    } );
  //=================================================================
  let pages = [];
  //=================================================================
  if (sampleform === null) return(
    <View style={{ height: '100%', alignItems: 'center', justifyContent: 'center' }} >
      <View style={{
        height: 80,
        flexDirection: 'column-reverse',
        paddingHorizontal: 15,
        paddingVertical: 5,
      }}>
        <TouchableOpacity onPress={ () => props.donePress() }>
          <Text style={{ color: '#05f'}}>Go back</Text>
        </TouchableOpacity>
      </View>
      <WaitingBar label="Getting your samples" timeout={10000} />
    </View>
  );
  //=================================================================
  pages.push(
    <View key={0}>
      <FirstPage title={sampleform.title} brief={sampleform.brief} />
    </View>
  );
  var n;
  for (n = 0; n < sampleform.count; n++) {
    item = sampleform.items[n];
    //===============================================================
    if (item.itemtype === 1) {
      pages.push(<ReviewPubViewCandidate key={n + 1} label={item.label}/>);
    }
    //===============================================================
  }
  //=================================================================
  pages.push(
    <View key={1000}><LastPage /></View>
  );
  //=================================================================
  return (
    <View>
      <View style={{
        height: 80,
        flexDirection: 'column-reverse',
        paddingHorizontal: 15,
        paddingVertical: 5,
        borderBottomWidth: 1,
        borderBottomColor: '#777'
      }}>
        <TouchableOpacity onPress={ () => props.donePress() }>
          <Text style={{ color: '#05f'}}>Done</Text>
        </TouchableOpacity>
      </View>
      <View>
        <FormReviewNav>
          {pages}
        </FormReviewNav>
      </View>
    </View>
  );
  //=================================================================
}
//****************************************************************************
const FirstPage = (props) => {
  return (
    <View>
      <Text style={{
        fontSize: 20,
        fontWeight: 'bold',
        color: '#353'
      }}
      >{props.title}</Text>
      <Text style={{
        fontSize: 15,
        fontWeight: 'normal',
        color: '#454',
        marginTop: 30
      }}
      >{props.brief}</Text>
      <Text style={{
        fontSize: 12,
        fontWeight: 'bold',
        color: '#454',
        marginTop: 30,
      }}>
      Tap 'Next' below to preview the questions</Text>
    </View>
  );
}
//****************************************************************************
const LastPage = (props) => {
  return (
    <View>
      <Text style={{
        marginTop: 50,
        fontSize: 20,
        fontWeight: 'bold',
        color: '#353',
        textAlign: 'center'
      }}
      >That are all the items</Text>
    </View>
  );
}
//****************************************************************************
