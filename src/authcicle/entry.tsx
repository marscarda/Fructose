import { StatusBar } from 'expo-status-bar';
import React, { useState, useRef } from 'react';
import { Animated, View, Text } from 'react-native';
import { AuthCenter } from '../appstoring/auth.tsx';
import { ServerConst } from '../appstoring/serverconst.tsx';
import { HttpRequest } from '../internal/httprequest.tsx';
import { WaitingBar } from '../standardcomps/waitingbar.tsx';
//***************************************************************************
export const Entry = (props) => {
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
  return (
    <View style={{flex: 1, width: 200, alignSelf: 'center' , alignItems: 'center', justifyContent: 'center'}}>
      <WaitingBar label="Contacting Server" timeout={3000} />
    </View>
  );
  //============================================================
}
//***************************************************************************
