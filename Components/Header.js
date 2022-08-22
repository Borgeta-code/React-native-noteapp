import React from 'react';
import { View, Text, StyleSheet } from 'react-native'

export default function Header(){
    return(
        <View style={styles.card}>
        <Text style={styles.title}>
       NOTES
        </Text>
        </View>
    )
    }
    
    
    const styles = StyleSheet.create({
        
        title:{
          color: '#fff',
          fontWeight: 'bold',
        },
      
        card: {
          
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: '#67159C',
          padding: 12,
          width: '100%',
          height: 'auto',
         
        }
    })

