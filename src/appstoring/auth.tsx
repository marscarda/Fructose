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
    await AsyncStorage.getItem('authtoken')//, (err, value) => AuthData.token = value)
      .then( (value) => {
        console.log("Promesa 1 " + value);
        //AuthData.authtoken = value;
      })
      .catch( (err) => {
        return Promise.reject('Could not access to storage a');
      });
      //------------------------------------------------------
  }
  //==========================================================
  static async storeAuthData () {
    AsyncStorage.setItem('authtoken', 'dfhfhfjdhgsdfklerjthkerjhtektjhre');
  }
  //==========================================================
}
//========================================================================
