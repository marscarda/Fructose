import React from 'react';
import { AsyncStorage } from "react-native";
import { AuthCenter } from '../appstoring/auth.tsx';
import { ServerConst } from '../appstoring/serverconst.tsx';
import { HttpRequest } from '../internal/httprequest.tsx';
//************************************************************************
export class ResponsesCollector {
  //***************************************************************
  static sampleid = 0;
  static responses = [];
  //===============================================================
  static addResponse (response) {
    ResponsesCollector.responses.push(response);
  }
  //***************************************************************
  static async castCase () {
    let table = ResponsesCollector.makeResponsesTable ();
    //-----------------------------------------------------------
    return new Promise ((resolve, reject) => {
      let http = new HttpRequest();
      http.addParam(ServerConst.CREDENTIALTOKEN, AuthCenter.authtoken);
      http.addParam('sampleid', ResponsesCollector.sampleid);
      http.addParam('responsestable', table);
      http.apiurl = '/response/castfieldresponse';
      http.callback = (status, objresp) => {
        console.log(status);
        //---------------------------------------------------------
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
        resolve();
        //---------------------------------------------------------
      }
      //-----------------------------------------------------------
      http.executePost();
    });
    //-----------------------------------------------------------
  }
  //***************************************************************
  static makeResponsesTable () {
    var table = '';
    let count = ResponsesCollector.responses.length;
    var n, item;
    for (n = 0; n < count; n++) {
      item = ResponsesCollector.responses[n];
      table = table + item.itemtype + ',';
      table = table + item.itemid + ',';
      table = table + item.value + '\n';
    }
    return table;
  }
  //***************************************************************
  static async submitResponse (response) {
    return new Promise ((resolve, reject) => {
      let http = new HttpRequest();
      http.addParam(ServerConst.CREDENTIALTOKEN, AuthCenter.authtoken);
      http.addParam('candidateid', response.itemid);
      http.apiurl = '/castresponse/publicviewresponse';
      http.callback = (status, objresp) => {
        //---------------------------------------------------------
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
        resolve();
        //---------------------------------------------------------
      }
      http.executePost();
    });
    //=============================================================
  }
  //***************************************************************
}
//************************************************************************
