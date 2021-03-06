import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { View, Text } from 'react-native';
import { Switcher } from './switcher';
import { Entry } from './entry.tsx';
import { AuthEntry } from './authentry.tsx';
import { SignUp, SignIn } from './authpage.tsx';
import { TopFrame } from '../topframe/topframe';
//=========================================================================
export const AppAlpha = (props) => {
  //=========================================================
  const [page, setPage] = useState(1);
  //=========================================================
  const onDecision = (result) => {
    if (!result) {
      setPage(2);
    } else {
      setPage(5);
    }
  }
  //=========================================================
  return(
    <View style={{ backgroundColor: '#fff', width: '100%', height: '100%' }}>
      <Switcher page={page}>
        <Entry onDecision={ (result) => onDecision(result) }/>
        <AuthEntry
          onSignupPress={ () => setPage(3) }
          onSigninPress={ () => setPage(4) }
        />
        <SignUp
          onBackPress={ () => setPage(2) }
          onSessionSuccess={ () => setPage(5)}
        />
        <SignIn
          onBackPress={ () => setPage(2) }
          onSessionSuccess={ () => setPage(5)}
        />
        <TopFrame />
      </Switcher>
    </View>
    );
  //=========================================================
}
//=========================================================================
