import React from "react";
import { StyleSheet, Text, View, TextInput,  Button, TouchableOpacity } from "react-native";
import { LinearGradient } from 'expo'
import firebase from '../../firebase'
import { firestore } from 'firebase';
import 'firebase/auth'

export default class SignIn extends React.Component {
    
    state = {
      email: '',
      password: ''
    }

    handleSignIn = () => {
     
      firebase.auth().signInWithEmailAndPassword(
        this.state.email, 
        this.state.password
      ).then(this.props.navigation.navigate('Dashboard'))
      console.log('LOGGED IN')
    }

    render() {     
      return (

        <LinearGradient
        colors={['#ffdf47', '#f37335']}
        style={{flex: 1}}
      >

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

             <TouchableOpacity
             style={styles.buttons}
              onPress={() => {
                this.handleSignIn()
              }}
            >
            <Text>LOGIN</Text>
            </TouchableOpacity>

        </View>    
        </LinearGradient> 
      );
    }
  }

const styles = StyleSheet.create({

    text: {
      fontSize: 40,
    },
    container: {
      flex: 1,
      alignItems: "center",
      justifyContent: "center"
    },

    signInFields: {
      height: 80,
      fontSize: 20,
    }
  });
  