import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { ColorPropType, StyleSheet, Text, View } from 'react-native';
import { Header } from 'react-native/Libraries/NewAppScreen';
import Card from './Components/Card';
import Head from './Components/Header';
import Add from './Components/Add';
import Newn from './Components/Newn';
import { createStackNavigator} from '@react-navigation/stack';


//https://www.youtube.com/watch?v=GZ_QSVDTQRw
//https://www.youtube.com/watch?v=kF-wKb_vU0Y&t=438s


export default function App() {
  return (

    <View style={styles.container}>
       <StatusBar hidden = {true} />

      <Head/>
      <Card/>
      <Newn/>
      <Add/>
    

    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#222',
    alignItems: 'center',
    justifyContent: 'start',
  },

 
});
