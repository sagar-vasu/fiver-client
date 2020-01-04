import React from 'react';
import { ExpoConfigView } from '@expo/samples';
import {Text,StyleSheet,View,TouchableOpacity,Dimensions } from 'react-native'
const Width = Dimensions.get('window').width;

  // setting screen 
 export default class SettingsScreen extends React.Component{
    render(){
      return(
       <View style={Styles.container}>
         <TouchableOpacity activeOpacity={0.7} style={Styles.btn} onPress={()=>this.props.navigation.navigate("Login")} >
           <Text style={Styles.text}>
             Logout
           </Text>
         </TouchableOpacity>
       </View>
      )
    }
  }


  const Styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: 90,
        alignItems: "center"
    },
    btn:{
      width: Width - 160,
      backgroundColor: '#00B7F7',
      textAlign: 'center',
      padding: 10,
      borderRadius: 50
    },
    text:{
      textAlign:"center",
      color:"white"
    }
  })




