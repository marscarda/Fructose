//****************************************************************************
/*
HERE WE WILL FIND THE QUESTIONS OF THE FORM
*/
//****************************************************************************
import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { View, ScrollView, Text, TouchableOpacity } from 'react-native';
import { SampleData } from '../sampledata.tsx';
import { FormIntakeNav } from './formintakenav';
import { IntkPubView } from './intakecomps1';
import { WaitingBar } from '../../standardcomps/waitingbar.tsx';
//****************************************************************************
export const QFormIntake = (props) => {
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
      <WaitingBar label="Loading form" timeout={10000} />
    </View>
  );
  //=================================================================
  let pages = [];
  //=================================================================
  var n;
  for (n = 0; n < sampleform.count; n++) {
    item = sampleform.items[n];
    //===============================================================
    if (item.itemtype === 1) {
      pages.push(<IntkPubView key={n + 1} item={item} />);
    }
    //===============================================================
  }
  //=================================================================
  return (
    <View>
      <View>
        <FormIntakeNav onExit={ () => props.donePress() }>
          {pages}
        </FormIntakeNav>
      </View>
    </View>
  );
  //=================================================================
}
//****************************************************************************
