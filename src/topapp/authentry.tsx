import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { View, Text } from 'react-native';
import { WideGreenButton, WideWhiteButton } from '../standardcomps/buttons.tsx';
//***************************************************************************
export const AuthEntry = (props) => {
  //============================================================
  return (
    <View style={{ flex: 1, width: '100%', alignSelf: 'center' }}>
      <View style={{flex: 2, width: '100%', backgroundColor: '#888'}}>
      </View>
      <View style={{flex: 3, width: '94%', alignSelf: 'center', justifyContent: 'center'}}>
        <WideGreenButton
          label="Signup"
          onPress = {() => props.onSignupPress() }
        />
        <Text style={{
          marginTop: 40,
          marginBottom: 10,
          fontSize: 15,
          color: '#888888',
          textAlign: 'center',
        }}>Already have a user?</Text>
        <WideWhiteButton
          label="Signin"
          onPress = { () => props.onSigninPress() }
        />
      </View>
    </View>
  );
  //============================================================
}
//***************************************************************************
