import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { Dimensions, View, Image, ScrollView, Text, TouchableOpacity } from 'react-native';
//****************************************************************************
export const ReviewPubViewCandidate = (props) => {
  //=================================================================
  const [sampleform, setSampleForm] = useState(null);
  let width = Dimensions.get('window').width -30
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

      <View style={{
        paddingHorizontal: 10,
        paddingVertical: 25,
        backgroundColor: '#f0f0f0',
        borderRadius: 5,
        marginTop: 30
      }}>
        <View>
          <Text style={{
            textAlign: 'left',
            fontSize: 15,
            fontWeight: 'normal',
            color: '#686',
          }}>Valoracion sobre:</Text>
        </View>
        <View style={{ marginTop: 15 }}>
          <Text style={{
            textAlign: 'left',
            fontSize: 18,
            fontWeight: 'bold',
            color: '#343'
          }}>{props.label}</Text>
        </View>
      </View>

      <View style={{ marginTop: 60 }}>
        <Text style={{
          textAlign: 'left',
          fontSize: 13,
          fontWeight: 'bold',
          color: '#343'
        }}>Las opciones son: Positiva, Negativa, Neutral o Desconocimiento del candidato</Text>
      </View>
    </View>
  );
  //=================================================================
}
//****************************************************************************
