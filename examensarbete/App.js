import React from "react";
import { StyleSheet, Text, View } from "react-native";
//import { VAR1, VAR2 } from "react-native-dotenv";
import Navbar from "../examensarbete/components/layout/Navbar";
import SignIn from "../examensarbete/components/auth/SignIn";

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text> hejhej </Text>
        <Navbar />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "yellow",
    alignItems: "center",
    justifyContent: "center"
  }
});
