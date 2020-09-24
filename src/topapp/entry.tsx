import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { View, Text } from 'react-native';
import { AuthCenter } from '../appstoring/auth.tsx';
import { ServerConst } from '../appstoring/serverconst.tsx';
import { HttpRequest } from '../internal/httprequest.tsx';
//***************************************************************************
export const Entry = (props) => {
  console.log("Entry");
  //============================================================
  //const [text, setText] = useState('intial state');
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
        console.log("authentry: " + objresp);
        if (objresp.sessionvalid) {

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
    <View>
      <Text>Decision</Text>
    </View>
  );
  //============================================================
}
//***************************************************************************
