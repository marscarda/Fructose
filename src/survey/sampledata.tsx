import React from 'react';
import { AsyncStorage } from "react-native";
import { AuthCenter } from '../appstoring/auth.tsx';
import { ServerConst } from '../appstoring/serverconst.tsx';
import { HttpRequest } from '../internal/httprequest.tsx';
//========================================================================
export class SampleData {
  //===============================================================
  static activeusersamples = null;
  static sampleform = null;
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
        setTimeout(() => {SampleData.activeusersamples = null}, 30000);
        resolve(SampleData.activeusersamples);
        //---------------------------------------------------------
      }
      //-----------------------------------------------------------
      http.executePost();
    });
    //=============================================================
  }
  //===============================================================
  static async getSampleForm (sampleid) {
    return new Promise ((resolve, reject) => {
      //-----------------------------------------------------------
      if (SampleData.sampleform !== null) {
        resolve (SampleData.sampleform);
      }
      //-----------------------------------------------------------
      let http = new HttpRequest();
      http.addParam(ServerConst.CREDENTIALTOKEN, AuthCenter.authtoken);
      http.addParam(ServerConst.SAMPLEID, sampleid);
      http.apiurl = ServerConst.apiGetSampleForm;
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
        SampleData.sampleform = objresp.['formitems'];
        setTimeout(() => {SampleData.sampleform = null}, 10000);
        resolve(SampleData.sampleform);
        //---------------------------------------------------------
      }
      //-----------------------------------------------------------
      http.executePost();
    });
  }
  //===============================================================
}
//========================================================================
