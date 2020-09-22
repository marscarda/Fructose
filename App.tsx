import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { Entry } from './src/topapp/entry.tsx'


export default function App() {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
        <Text>App Created</Text>
        <Text>First Commit</Text>

        <Entry></Entry>



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





const Componente = (props) => {
  return (
    <View>
    { props.children[1] }
    </View>
  );
}










const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
