import React from 'react';
//====================================================================
export class ServerConst {
  //=============================================================
  //Server host
  static serverRoot = 'https://valine.geocoor.com';
  //=============================================================
  //Apis URLS
  static apiCheckSession = '/auth/checksession';
  static apiSignUp = '/auth/signup';
  static apiCreateSession = '/auth/createsession';
  //-------------------------------------------------------------
  static apiGetUserActiveSamples = '/sampling/getuseractivesamples';
  static apiGetSampleForm = '/sampling/getsampleform';
  static apiCastFieldResponse = '/response/castfieldresponse';
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
  static USERID = "userid";
  static PASSWORD = "password";
  static PASSWORDRETYPE = "passwordretype";
  static EMAIL = 'email';
  static APPLICATION = "application";
  //-------------------------------------------------------------
  static SAMPLEID = "sampleid";
  static SURVEYID = "surveyid";
  static TITLE = "title";
  static RESPONSESTABLE = 'responsestable';
  //-------------------------------------------------------------
  //Errors.
  static INVALIDCREDENTIAL = 50000;
  //=============================================================
}
//====================================================================
