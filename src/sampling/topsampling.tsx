import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { AssignedSamples, WaitingSamples } from './sammplelist'
//****************************************************************************
export const Sampling = (props) => {
  //=====================================================================
  const [page, setPage] = useState(1);
  //=====================================================================
  return (
    <View>
      <TopBar onSelectPage={ (v) => setPage(v) }  />
      <Switcher page={page} >
        <AssignedSamples />
        <WaitingSamples />
      </Switcher>
    </View>
  );
  //=====================================================================
}
//****************************************************************************
export const Switcher = (props) => {
  let index = props.page;
  index--;
  return (
    <View style={{ width: '100%', height: '100%' }}>
    { props.children[index] }
    </View>
  );
}
//****************************************************************************
const TopBar = (props) => {
  //==========================================================================
  const [page, setPage] = useState(1);
  //==========================================================================
  let selpage1 = styles.unselectedpg;
  let selpage2 = styles.unselectedpg;
  if (page === 1) selpage1 = styles.selectedpg;
  if (page === 2) selpage2 = styles.selectedpg;
  //==========================================================================
  return (
    <View style={styles.topsection}>
      <View style={styles.topbar}>
        <View style={ styles.topoption }>
          <View style={ selpage1 }></View>
            <TouchableOpacity onPress={ () => { setPage(1); props.onSelectPage (1); }
            }>
              <View style={{ height: 'auto', marginBottom: 5 }}>
                <Text style={{ textAlign: 'center', color: '#444' }}>Assigned</Text>
              </View>
            </TouchableOpacity>
        </View>
        <View style={ styles.topoption }>
          <View style={ selpage2 }></View>
          <TouchableOpacity onPress={ () => { setPage(2); props.onSelectPage (2); } }>
            <View style={{ height: 'auto', marginBottom: 5 }}>
              <Text style={{ textAlign: 'center', color: '#444' }}>Waiting</Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
      <View style={ styles.toptitle }>
        <Text style={{ fontSize: 18, fontWeight: 'bold', textAlign: 'center', color: '#666' }}>Sampling</Text>
      </View>
    </View>
  );
  //==========================================================================
}
//****************************************************************************
const styles = StyleSheet.create ({
  topsection: {
    backgroundColor: '#f0f0f0',
    height: 100,
    flexDirection: 'column-reverse'
  },
  toptitle:{
    height: 30,
    marginBottom: 10
  },
  topbar: {
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderBottomColor: '#999',
    height: 30
  },
  topoption: {
    flex: 1,
    flexDirection: 'column-reverse'
  },
  selectedpg: {
    height: 3,
    backgroundColor: '#050'
  },
  unselectedpg: {
    height: 3,
  },
});
//****************************************************************************
