import React from "react";
import { StyleSheet, Text, View, TextInput,  Image, TouchableOpacity } from "react-native";
import LinearGradient from 'react-native-linear-gradient';
import Backend from '../../firebase.js'

export default class SignIn extends React.Component {
    
    state = {
      userName: '',
      password: ''
    }

    render() {
      return (

        <View style={styles.container}>

           <Text style={styles.text}>
            från SignIn
            </Text>
            
            <TextInput 
              style={styles.signInFields} 
              placeholder="Username"
              onChangeText={(text) => {
                this.setState({
                  name: text
                })
                console.log(text)
              }}
             />

             <TouchableOpacity
             style={styles.buttons}
              onPress={() => {
                console.log(this.state.name)
              }}
            >
              </TouchableOpacity>

            <TextInput style={styles.signInFields} placeholder="Password" />
            <Text> Next </Text> 

        </View>    
      );
    }
  }

const styles = StyleSheet.create({

    text: {
      fontSize: 40,
    },
    container: {
      flex: 1,
      backgroundColor: "yellow",
      alignItems: "center",
      justifyContent: "center"
    },

    signInFields: {
      height: 80,
      fontSize: 20,
    }
  });
  