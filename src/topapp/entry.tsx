import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { View, Text } from 'react-native';
import { AuthCenter } from '../appstoring/auth.tsx';
import { ServerConst } from '../appstoring/serverconst.tsx';
import { HttpRequest } from '../internal/httprequest.tsx';
//***************************************************************************
export const Entry = (props) => {
  //============================================================
  //const [text, setText] = useState('intial state');
  //============================================================
  AuthCenter.fetchStoredAuthData()
    .then( token => {
      let http = new HttpRequest();
      http.addParam(ServerConst.CREDENTIALTOKEN, token);
      http.apiurl = ServerConst.apiCheckSession;
      http.callback = (status, objresp) => {
        if (status === 0) {
          alert('Unable to connect to the server');
          return;
        }
  			if (status !== 200) {
  				alert('Invalid response status. Probably due to server maintenance. Status: ' + status);
  				return;
  			}

        alert ('making a decition');



      };
      http.executePost();
    })
    .catch ( err => alert('AAA: ' + err) )




  //============================================================
  return (
    <View>
      <Text>Let's see what happens</Text>
    </View>
  );
  //============================================================
}
//***************************************************************************
