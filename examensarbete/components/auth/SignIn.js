import React from "react";
import { StyleSheet, Text, View, TextInput,  Button, TouchableOpacity } from "react-native";
import LinearGradient from 'react-native-linear-gradient';
import firebase from '../../firebase'
import { firestore } from 'firebase';
import 'firebase/auth'


export default class SignIn extends React.Component {
    
    state = {
      email: '',
      password: ''
    }

    handleSignIn = (user) => {
      
      firebase.auth().signInWithEmailAndPassword(
        this.state.email, 
        this.state.password
      )
      console.log('LOGGED IN')
    }

    render() {
      return (

        <View style={styles.container}>

           <Text style={styles.text}>
            från SignIn
            </Text>
            
            <TextInput 
              style={styles.signInFields} 
              placeholder="Email"
              onChangeText={(value) => {
                this.setState({
                  email: value
                })
              }}
             />


            <TextInput 
              style={styles.signInFields} 
              placeholder="Password"
              onChangeText={(value) => {
                this.setState({
                  password: value
                })
              }}
            />

             <Button title="Navigate to Chat"
            onPress = {()=>this.props.navigation.navigate('Chat')}
            />

             <TouchableOpacity
             style={styles.buttons}
              onPress={() => {
                this.handleSignIn()
              }}
            >
            <Text>LOGIN</Text>
            </TouchableOpacity>

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
  