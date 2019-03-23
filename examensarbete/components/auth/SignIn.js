import React from "react";
import { StyleSheet, Image, Text, View, TextInput,  Button, TouchableOpacity } from "react-native";
import { LinearGradient } from 'expo'
import firebase from '../../firebase'
import { firestore } from 'firebase';
import 'firebase/auth'
import Navbar from "../layout/Navbar";

import SignUp from "../auth/SignUp";

export default class SignIn extends React.Component {
  state = {
    email: "",
    password: ""
  };

  handleSignIn = () => {
    firebase
      .auth()
      .signInWithEmailAndPassword(this.state.email, this.state.password)
      .then(this.props.navigation.navigate("Dashboard"));
    console.log("LOGGED IN");
  };

  handleNavigation = value => {
    this.props.navigation.navigate(`${value}`);
  };


  render() {
    return (
      <LinearGradient
        colors={['#ffdf47', '#f37335']}
        style={{flex: 1}}
      >

        <View style={styles.container}>
          
          <Navbar />

            <View style={styles.signInFields}>

            <Image
            style={styles.icons}
            source={require("./profile.png")}
          />

            <TextInput 
              style={styles.signInInput}
              placeholderTextColor="white"    
              placeholder="Email"
              onChangeText={(value) => {
                this.setState({
                  email: value
                })
              }}
             />

             </View>
            
             <View style={styles.signInFields}>

            <TextInput 
              style={styles.signInInput} 
              placeholderTextColor="white"  
              secureTextEntry="true"  
              placeholder="Password"
              onChangeText={(value) => {
                this.setState({
                  password: value
                })
              }}
            />

            </View> 
            
             <TouchableOpacity
             style={styles.buttons}
              onPress={() => {
                this.handleSignIn()
              }}
            >
              <Text style={styles.buttonText}>Sign in</Text>
            </TouchableOpacity>

            <TouchableOpacity 
            style= {styles.signUp}
            onPress={() => {
              this.handleSignUp
            }}
            >
              <Text style={styles.signUpText}> No account? Sign up here </Text>
            </TouchableOpacity>

        </View>    
        </LinearGradient> 
      );
    }
  }

const styles = StyleSheet.create({


    container: {
      flex: 1,
      alignItems: "center",
      marginBottom: 100
    },
    buttons: {
      borderWidth: 1, 
      padding: 20,
      width: 280,
      marginTop: 30,
      borderColor: "white"
    },
    signInFields: {
      flexDirection: 'row',
      justifyContent: "center",
      alignItems: 'center',
    },
    icons: {
      left: 30,
      width: 20,
      height: 20, 
      tintColor: "white",
    },
    buttonText: {
      color: "white",
      fontSize: 15,
      alignSelf: "center"
    },
    signInFields: {
      paddingTop: 10,
      paddingLeft: 40,
      margin: 10,
      height: 80,
      width: 280,
      fontSize: 17,
      color: "white",
      borderColor: "white",
      borderBottomWidth: 1,
      marginBottom: 20
    },
    signUp : {
      marginTop: 30
    },
    signUpText : {
      color: "white"      
    }
  });
  
