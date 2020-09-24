import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { View, Text } from 'react-native';
import { Switcher } from './switcher';
import { Entry } from './entry.tsx';
import { AuthEntry } from './authentry.tsx';
//=========================================================================
export const TopApp = (props) => {
  //=========================================================
  const [page, setPage] = useState(1);

  //=========================================================
  const onDecision = (result) => {
    if (!result) {
      setPage(2);
    }
  }
  //=========================================================
  return(
    <View>
      <Switcher page={page}>
        <Entry onDecision={ (result) => onDecision(result) }/>
        <AuthEntry />
      </Switcher>
    </View>
    );
  //=========================================================
}
//=========================================================================
