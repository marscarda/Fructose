import React from 'react';
import { AsyncStorage } from "react-native";
//========================================================================
export class AuthCenter {
  //==========================================================
  static authtoken = null;
  static userid = 0;
  //==========================================================
  static async fetchStoredAuthData () {
    //--------------------------------------------------------
    //let token = '';
    //--------------------------------------------------------
    await AsyncStorage.getItem('authtoken')//, (err, value) => AuthData.token = value)
      .then( (value) => {
        if (value !== null) AuthCenter.authtoken = value;
      })
      .catch( (err) => {
        return Promise.reject('Could not access to storage a');
      });
      //------------------------------------------------------
      return Promise.resolve(AuthCenter.authtoken);
  }
  //==========================================================
  static async storeAuthData (token) {
    AuthCenter.authtoken = token;
    AsyncStorage.setItem('authtoken', AuthCenter.authtoken);
  }
  //==========================================================
}
//========================================================================
