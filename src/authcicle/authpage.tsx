import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, View, Text, TextInput } from 'react-native';
import { WideWhiteButtonFontS } from '../standardcomps/buttons.tsx';
import { TouchableTextBlueL } from '../standardcomps/touchables.tsx';
import { AuthCenter } from '../appstoring/auth.tsx';
import { ServerConst } from '../appstoring/serverconst.tsx';
import { HttpRequest } from '../internal/httprequest.tsx';
//***************************************************************************
export const SignUp = (props) => {
  //==========================================================
  const [user, setUser] = useState('');
  const [email, setEmail] = useState('');
  const [pass, setPass] = useState('');
  const [repass, setRePass] = useState('');
  //==========================================================
  const OnSignIn = () => {
    let http = new HttpRequest();
    http.apiurl = ServerConst.apiSignUp;
    http.addParam(ServerConst.USER, user);
    http.addParam(ServerConst.EMAIL, email);
    http.addParam(ServerConst.PASSWORD, pass);
    http.addParam(ServerConst.PASSWORDRETYPE, repass);
    http.callback = (status, objresp) => {
      //---------------------------------------------------------------
      if (status === 0) {
        alert('Unable to connect to the server');
        return;
      }
      if (status !== 200) {
        alert('Invalid response status. Probably due to server maintenance. Status: ' + status);
        return;
      }
      //---------------------------------------------------------------
      if (objresp.[ServerConst.RESULT] !== ServerConst.RESULTOK) {
        alert (objresp.[ServerConst.RESULTDESCRIPTION]);
        return;
      }
      //---------------------------------------------------------------
      //Success
      AuthCenter.storeAuthData(objresp.[ServerConst.CREDENTIALTOKEN]);
      props.onSessionSuccess();
      return;
      //---------------------------------------------------------------
    };
    http.executePost();
  }
  //==========================================================
  return (
    <View style={{ flex: 1, width: '100%', alignSelf: 'center' }}>
      <View style={{
        height: 60,
        width: '100%',
        paddingHorizontal: 15,
        paddingVertical: 7,
        flexDirection: 'column-reverse',
        textAlign: 'left',
        borderBottom: 'solid',
        borderBottomWidth: 1,
        borderBottomColor: '#aaaaaa', }}>
        <TouchableTextBlueL
          label="Back"
          onPress={() => { props.onBackPress() }
        }/>
      </View>
      <View style={{
        flex: 1,
        paddingHorizontal: 15,
        justifyContent: 'center',
      }}>
        <View style={styles.divfield}>
          <Text style={styles.fieldtitle}>User Name</Text>
          <TextInput style={styles.inputs} onChangeText={ (v) => setUser(v) }
          />
        </View>
        <View style={styles.divfield}>
          <Text style={styles.fieldtitle}>Email</Text>
          <TextInput style={styles.inputs} onChangeText={ (v) => setEmail(v) }
          />
        </View>
        <View style={styles.divfield}>
          <Text style={styles.fieldtitle }>Password</Text>
          <TextInput style={styles.inputs} secureTextEntry={true} onChangeText={ (v) => setPass(v) } />
        </View>
        <View style={styles.divfield}>
          <Text style={styles.fieldtitle }>Retype Password</Text>
          <TextInput style={styles.inputs} secureTextEntry={true} onChangeText={ (v) => setRePass(v) } />
        </View>
        <View style={{ height: 50 }}></View>
        <WideWhiteButtonFontS label="Sign up"
          onPress={ () => OnSignIn() }
        />
      </View>
    </View>
  );
}
//***************************************************************************
export const SignIn = (props) => {
  //==========================================================
  const [user, setUser] = useState('');
  const [pass, setPass] = useState('');
  //==========================================================
  const OnSignIn = () => {
      let http = new HttpRequest();
      http.apiurl = ServerConst.apiCreateSession;
      http.addParam(ServerConst.USER, user);
      http.addParam(ServerConst.PASSWORD, pass);
      http.addParam(ServerConst.APPLICATION, 'Iphone App');
      http.callback = (status, objresp) => {
        //---------------------------------------------------------------
        if (status === 0) {
          alert('Unable to connect to the server');
          return;
        }
  			if (status !== 200) {
  				alert('Invalid response status. Probably due to server maintenance. Status: ' + status);
  				return;
  			}
        //---------------------------------------------------------------
        if (objresp.[ServerConst.RESULT] !== ServerConst.RESULTOK) {
          alert (objresp.[ServerConst.RESULTDESCRIPTION]);
          return;
        }
        //---------------------------------------------------------------
        //Success
        AuthCenter.storeAuthData(objresp.[ServerConst.CREDENTIALTOKEN]);
        props.onSessionSuccess();
        return;
        //---------------------------------------------------------------
      };
      http.executePost();
  }
  //==========================================================
  return (
    <View style={{ flex: 1, width: '100%', alignSelf: 'center' }}>
      <View style={{
        height: 60,
        width: '100%',
        paddingHorizontal: 15,
        paddingVertical: 7,
        flexDirection: 'column-reverse',
        textAlign: 'left',
        borderBottom: 'solid',
        borderBottomWidth: 1,
        borderBottomColor: '#aaaaaa', }}>
        <TouchableTextBlueL
          label="Back"
          onPress={() => { props.onBackPress() }
        }/>
      </View>
      <View style={{
        flex: 1,
        paddingHorizontal: 15,
        justifyContent: 'center',
      }}>
        <View style={styles.divfield}>
          <Text style={styles.fieldtitle}>User Name</Text>
          <TextInput style={styles.inputs} onChangeText={ (v) => setUser(v) }
          />
        </View>
        <View style={{ height: 30 }}></View>
        <View style={styles.divfield}>
          <Text style={styles.fieldtitle }>Password</Text>
          <TextInput style={styles.inputs} secureTextEntry={true} onChangeText={ (v) => setPass(v) } />
        </View>
        <View style={{ height: 50 }}></View>
        <WideWhiteButtonFontS label="Sign in"
          onPress={ () => OnSignIn() }
        />
      </View>
    </View>
  );
}
//***************************************************************************
const styles = StyleSheet.create({
  divfield: {
    width: '100%',
    paddingVertical: 20,
  },
  fieldtitle: {
    fontSize: 11,
    color: '#777',
    marginBottom: 10
  },
  inputs: {
    borderBottomWidth: 1,
    borderBottomColor: '#DDD',
    padding: 5,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#555555'

  }
});
//***************************************************************************
