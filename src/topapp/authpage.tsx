import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, View, Text, TextInput } from 'react-native';
import { WideWhiteButtonFontS } from '../standardcomps/buttons.tsx';
import { TouchableTextBlueL } from '../standardcomps/touchables.tsx';
//***************************************************************************
export const SignUp = (props) => {
  return (
    <View style={{ flex: 1, width: '100%', alignSelf: 'center' }}>
      <Text>SignUp Page</Text>
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
    alert (user + " " + pass);
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
