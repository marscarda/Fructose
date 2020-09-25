import { StatusBar } from 'expo-status-bar';
import React, { useState, useRef } from 'react';
import { Animated, View, Text } from 'react-native';
import { AuthCenter } from '../appstoring/auth.tsx';
import { ServerConst } from '../appstoring/serverconst.tsx';
import { HttpRequest } from '../internal/httprequest.tsx';
//***************************************************************************
export const Entry = (props) => {
  //============================================================
  const elapsed = useRef(new Animated.Value(0)).current;
  const remain = useRef(new Animated.Value(100)).current;
  //============================================================
  AuthCenter.fetchStoredAuthData()
    .then( token => {
      let http = new HttpRequest();
      http.addParam(ServerConst.CREDENTIALTOKEN, token);
      http.apiurl = ServerConst.apiCheckSession;
      http.callback = (status, objresp) => {
        //---------------------------------------------------------------
        if (status === 0) {
          alert('Unable to connect to the server');
          return;
        }
  			if (status !== 200) {
  				alert('Invalid response status. Probably due to server maintenance. Status: ' + status);
  				return;
  			}
        //---------------------------------------------------------------
        //Success
        //console.log("authentry: " + objresp);
        if (objresp.sessionvalid) {
          props.onDecision(true);
        }
        else {
          props.onDecision (false);
        }
        //---------------------------------------------------------------
      };
      http.executePost();
    })
    .catch ( err => alert('Something went wrong' + err) )
  //============================================================
  Animated.parallel([
    Animated.timing(elapsed, {
      toValue: 100,
      duration: 3000,
      useNativeDriver: false
    }),
    Animated.timing(remain, {
      toValue: 0,
      duration: 3000,
      useNativeDriver: false
    })
  ]).start();
  //============================================================
  return (
    <View style={{flex: 1, width: 200, alignSelf: 'center' , alignItems: 'center', justifyContent: 'center'}}>
      <Text>Contacting server</Text>
      <View style={{ height: 10 }}></View>
      <View style={{ width: '100%', flexDirection: 'row'}}>
        <Animated.View style={{ flex: elapsed, height: 10, backgroundColor: '#0055ff'}}></Animated.View>
        <Animated.View style={{ flex: remain, height: 10, backgroundColor: '#bbbbbb'}}></Animated.View>
      </View>
    </View>
  );
  //============================================================
}
//***************************************************************************
