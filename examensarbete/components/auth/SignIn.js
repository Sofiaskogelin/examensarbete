import React from "react";
import { StyleSheet, Text, View, TextInput,  Image } from "react-native";
import LinearGradient from 'react-native-linear-gradient';

export default class SignIn extends React.Component {
    render() {
      return (

        <View style={styles.container}>


           <Text style={styles.text}>
            från SignIn
            </Text>

            <TextInput style={styles.signInFields} placeholder="Username" />
            <TextInput style={styles.signInFields} placeholder="Password" />
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
      fontSize: 20
    }
  });
  