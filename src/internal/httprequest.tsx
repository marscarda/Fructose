import React from 'react';
//************************************************************************
class HttpRequest {
  //*********************************************************************
  rooturl = '';
  apiuri = '';
  data = '';
  callback = null;
  timeout = 5000;
  //=====================================================================
  addParam (name, value) {
		if (this.data.length !== 0) this.data += '&';
		this.data += name + '=' + value;
	}
  //=====================================================================
  getTimeOut

  //*********************************************************************
  executePost () {
    let request = new XMLHttpRequest();
		let fullurl = this.props.rooturl + this.props.apiurl;
    request.timeout = this.timeout;
    request.onreadystatechange = () => {
      if (request.readyState !== 4) return;
      //------------------------------------------------------------
      if (request.status !== 0) {
        this.callback(request.status, {});
        return;
			}
      //------------------------------------------------------------
      let objresp = {};
      try { objresp = eval ('(' + request.responseText + ')'); } catch {}
      this.props.callback(request.status, objresp);
      //------------------------------------------------------------
    }
    //--------------------------------------------------------------
    request.open('POST',fullurl,true);
		request.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
		request.setRequestHeader("Content-length", this.data.length);
    request.send(this.data);
    //--------------------------------------------------------------
  }
  //*********************************************************************
}
//************************************************************************
export default HttpRequest;
//************************************************************************
