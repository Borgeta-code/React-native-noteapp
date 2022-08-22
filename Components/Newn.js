import React from 'react';
import {useState} from 'react';
import { v4 as uuidv4 } from 'uuid';
import { View, Text, StyleSheet, TextInput, TouchableOpacity} from 'react-native';
//no add button eu preciso colocar uma função que dispare e apareça essa tela 
//https://www.youtube.com/watch?v=8PUOVVT9RGg
//https://www.youtube.com/watch?v=IUCw29WmPn8



 
export default function Newn(){
 
function newnote(){
const id = uuidv4();
const nota = {
   id,
   note
}

alert('Nota salva!'),
console.log(nota);
}   


const [note, setNote] = useState(""); 
    return(

        <View style={styles.container}>
       <TextInput 
       style={styles.input}
       onChangeText={setNote}
       value={note}
       />
       <TouchableOpacity style={styles.btn} onPress={newnote}>
       <Text style={styles.text}>
        Salvar
       </Text>
       </TouchableOpacity>
        </View>

    )
    }
    
   
    
    const styles = StyleSheet.create({
        
 container:{
     
  
    backgroundColor: '#8519CE',
    width: '85%',
    height: 140,
    top: 150,
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
 },
 
 input:{
    backgroundColor: 'white',
    width: '85%',
    height: 50,
    borderRadius: 5,
    padding: 10,
 },

 btn:{
    top: 20,
    width: '40%',
    height: 30,
    borderRadius: 5,
    backgroundColor: '#67159C',
    justifyContent: 'center',
    alignItems: 'center',

 },

 text:{
    color: '#fff',
  },

    })