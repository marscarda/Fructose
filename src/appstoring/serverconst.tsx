import React from 'react';
//====================================================================
export class ServerConst {
  //=============================================================
  //Server host
  static serverRoot = 'https://valine.geocoor.com';
  //=============================================================
  //Apis URLS
  static apiCheckSession = '/auth/checksession';
  static apiCreateSession = '/auth/createsession';
  //=============================================================
  //Parameters
  //-------------------------------------------------------------
  //standars.
  static RESULT = 'result';
  static CREDENTIALTOKEN = 'token';
  static RESULTDESCRIPTION = 'description';
  static RESULTOK = 'OK';
  static RESULTERROR = 'failure';
  static COUNT = 'count';
  static ITEMS = 'items';
  //-------------------------------------------------------------
  static USER = "user";
  static PASSWORD = "password";
  static APPLICATION = "application";
  //-------------------------------------------------------------
  //Errors.
  static INVALIDCREDENTIAL = 50000;
  //=============================================================
}
//====================================================================
