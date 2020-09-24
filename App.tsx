import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { TopApp } from './src/topapp/topcomp.tsx';
//=========================================================================
export default function App() {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <TopApp />
    </View>
  );
/*
Keep it withou deleting it until you remember what it is and how to use it.
var clearText = () => {
   _textInput.setNativeProps({text: ''});
}
return (
  <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
    <Text>App Created</Text>
    <Text>First Commit</Text>
    <TextInput
      ref={component => _textInput = component}
      style={{height: 50, width: 200, marginHorizontal: 20, borderWidth: 1, borderColor: '#ccc'}}
    />
    <TouchableOpacity onPress={clearText}>
      <Text>Clear text</Text>
    </TouchableOpacity>
  </View>
);
*/
}

const styles = StyleSheet.create({
  container: {
    height: '100%',
    width: '100%',
    backgroundColor: '#fff',
  },
});
