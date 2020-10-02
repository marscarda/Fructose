import React from 'react';
import { AsyncStorage } from "react-native";
import { HttpRequest } from '../internal/httprequest.tsx';
//************************************************************************
export class CollectedResponses {
  //***************************************************************
  static responses = [];
  //===============================================================
  static addResponse (response) {
    CollectedResponses.responses.push(response);
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
