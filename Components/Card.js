import React from 'react';
import { View, Text, StyleSheet, Button, useState } from 'react-native'
import Icon from 'react-native-vector-icons/Feather'





export default function Card({nota}){
return(
    <View style={styles.card}>
    <Text 
    style={styles.title}>
    {nota}
    </Text>
    <Icon name="trash-2" size={20} color='#fff' onPress={() => {alert('Este item foi excluído')}} style={styles.Icon}/>
    </View>
)
console.log(nota)
}


const styles = StyleSheet.create({
    
    title:{
      color: '#fff'
    },
  
    card: {
      justifyContent: 'space-between',
      alignItems: 'left',
      backgroundColor: '#8519CE',
      padding: 10,
      marginTop: 20,
      width: '90%',
      height: 'auto',
      borderRadius: 5,
      flexDirection: 'row',
    },

    Icon:{
  
    }

})