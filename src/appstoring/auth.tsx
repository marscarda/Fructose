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
    let token = '';
    //--------------------------------------------------------
    await AsyncStorage.getItem('authtoken')//, (err, value) => AuthData.token = value)
      .then( (value) => {
        if (value !== null) token = value;
      })
      .catch( (err) => {
        return Promise.reject('Could not access to storage a');
      });
      //------------------------------------------------------
      return Promise.resolve(token);
  }
  //==========================================================
  static async storeAuthData () {
    AsyncStorage.setItem('authtoken', 'dfhfhfjdhgsdfklerjthkerjhtektjhre');
  }
  //==========================================================
}
//========================================================================
