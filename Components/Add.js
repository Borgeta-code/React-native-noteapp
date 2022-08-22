import React from 'react';
import { View, Text, StyleSheet, Button, TouchableHighlight, } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome5'



export default function Add(){

function show(){
  
}

return(
<TouchableHighlight 
style={styles.touch} 
onPress={show}
>
 <View style={styles.add}>
    
   <Icon name="pencil-alt" size={25} color='#fff' padding={12}/>
 </View>
  </TouchableHighlight>
)
}

const styles = StyleSheet.create({
    
   add:{
    backgroundColor: '#67159C',
    borderRadius: '50%',
    justifyContent: 'center',
    alignItems: 'center',
    height: 'auto',
    width: 'auto',
    padding: 12,
   
   },
   
   touch:{
    borderRadius: '50%',
    position: 'absolute',
    bottom: 30,
    right: '5%',
   }
})
