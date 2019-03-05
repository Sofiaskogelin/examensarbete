import React from "react";
import { StyleSheet, Text, View } from "react-native";
import ChatRoom from "../examensarbete/components/chat/ChatRoom";
//import { VAR1, VAR2 } from "react-native-dotenv";
import Navbar from "../examensarbete/components/layout/Navbar";
import SignIn from "../examensarbete/components/auth/SignIn";
import SignUp from "../examensarbete/components/auth/SignUp";

import { createStackNavigator } from "react-navigation";

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <SignUp />
        <Navbar />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  }
});
