import React from 'react';
import { AsyncStorage } from "react-native";
import { AuthCenter } from '../../appstoring/auth.tsx';
import { ServerConst } from '../../appstoring/serverconst.tsx';
import { HttpRequest } from '../../internal/httprequest.tsx';
//========================================================================
export class SampleData {
  //===============================================================
  static activeusersamples = null;
  //===============================================================
  static async getUserActiveSamples () {
    //=============================================================
    return new Promise ((resolve, reject) => {
      //-----------------------------------------------------------
      if (SampleData.activeusersamples !== null) {
        resolve (SampleData.activeusersamples);
      }
      //-----------------------------------------------------------
      let http = new HttpRequest();
      http.addParam(ServerConst.CREDENTIALTOKEN, AuthCenter.authtoken);
      http.apiurl = ServerConst.apiGetUserActiveSamples;
      http.callback = (status, objresp) => {
        if (status === 0) {
          reject('Unable to connect to the server');
        }
        if (status !== 200) {
          reject('Invalid response status. Probably due to server maintenance. Status: ' + status);
        }
        //---------------------------------------------------------
        if (objresp.[ServerConst.RESULT] !== ServerConst.RESULTOK) {
          reject(objresp.[ServerConst.RESULTDESCRIPTION]);
          return;
        }
        //---------------------------------------------------------
        //Success
        SampleData.activeusersamples = objresp.samples;
        setTimeout(() => {SampleData.activeusersamples = null}, 20000);
        resolve(SampleData.activeusersamples);
        //---------------------------------------------------------
      }
      //-----------------------------------------------------------
      http.executePost();
    });
    //=============================================================



    /*
    let http = new HttpRequest();
    http.addParam(ServerConst.CREDENTIALTOKEN, token);
    http.apiurl = ServerConst.apiGetUserActiveSamples;
    http.callback = (status, objresp) => {

      console.log(objresp);

      //---------------------------------------------------------------
      if (status === 0) {
        alert('Unable to connect to the server');
        ready(false);
        return;
      }
      if (status !== 200) {
        alert('Invalid response status. Probably due to server maintenance. Status: ' + status);
        ready(false);
        return;
      }
      //---------------------------------------------------------------
      if (objresp.[ServerConst.RESULT] !== ServerConst.RESULTOK) {
        alert (objresp.[ServerConst.RESULTDESCRIPTION]);
        ready(false);
        return;
      }
      //---------------------------------------------------------------
      //Success
      ready(true);
      //---------------------------------------------------------------
    };
    http.executePost();
    */
  }
  //===============================================================
}
//========================================================================
