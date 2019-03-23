import React from "react";
import {
  TextInput,
  View,
  Button,
  TouchableOpacity,
  StyleSheet,
  onButtonPress,
  Text
} from "react-native";
import firebase from "../../firebase";
import { firestore } from "firebase";
import "firebase/auth";
import SignIn from "../auth/SignIn";

export default class SignUp extends React.Component {
  state = {
    email: "",
    password: "",
    userName: "",
    location: "",
    age: "",
    aboutMe: ""
  };

  handleSignUp = newUser => {
    firebase
      .auth()
      .createUserWithEmailAndPassword(this.state.email, this.state.password)
      .then(response => {
        return firestore
          .collection("users")
          .doc(response.user.uid)
          .set({
            userName: newUser.userName
          });
      });
  };

  handleNavigation = value => {
    this.props.navigation.navigate(`${value}`);
  };

  render() {
    return (
      <View style={styles.container}>
        <TextInput
          placeholder="email"
          keyboardType="email-address"
          onChangeText={value => {
            this.setState({
              email: value
            });
          }}
        />

        <TextInput
          placeholder="Password"
          secureTextEntry="true"  
          onChangeText={value => {
            this.setState({
              password: value
            });
          }}
        />

        <TextInput
          placeholder="Username"
          onChangeText={value => {
            this.setState({
              userName: value
            });
          }}
        />

        <TextInput
          placeholder="Location"
          onChangeText={value => {
            this.setState({
              location: value
            });
          }}
        />

        <TextInput
          placeholder="Age"
          onChangeText={value => {
            this.setState({
              age: value
            });
          }}
        />

        <TextInput
          placeholder="Tell us something about yourself"
          onChangeText={value => {
            this.setState({
              aboutMe: value
            });
          }}
        />

        <Button title="Sign Up" onPress={() => this.handleSignUp()} />

        <TouchableOpacity
          style={styles.buttonContainer}
          onPress={() => {
            this.handleNavigation("SignIn");
          }}
        >
          <Text>Already have an account? Sign in here</Text>
        </TouchableOpacity>
      </View>
    );
  }
}
 
const styles = StyleSheet.create({

  container: {
    flex: 1
  },

  buttonContainer: {
    backgroundColor: "#2980b6",
    paddingVertical: 15
  },

  buttonText: {
    color: "#fff",
    textAlign: "center",
    fontWeight: "700"
  }
});
