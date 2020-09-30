import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { View, ScrollView, Text, TouchableOpacity } from 'react-native';
import { SampleData } from '../sampling/sampledata.tsx';
import { FormReviewNav } from './formreviewnav.tsx';
//****************************************************************************
export const SurveyReview = (props) => {
  //=================================================================
  const [sampleform, setSampleForm] = useState(null);
  //=================================================================
  SampleData.getSampleForm(props.sampleid)
    .then( (sform) => {


      if (sampleform !== sform) {
        console.log(sform);
        setSampleForm(sform);
      }


    })
    .catch( () => {
      alert ('Something went wrong')
    } );
  //=================================================================
  let qq = [];
  qq.push(<Text key={1}>PAGINA 1</Text>);
  qq.push(<Text key={2}>PAGINA 2</Text>);
  qq.push(<Text key={3}>PAGINA 3</Text>);
  qq.push(<Text key={4}>PAGINA 4</Text>);
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
          {qq}
        </FormReviewNav>
      </View>
    </View>
  );
  //=================================================================

}
//****************************************************************************
