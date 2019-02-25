import React from "react";
import { StyleSheet, Text, View } from "react-native";
//import { VAR1, VAR2 } from "react-native-dotenv";
import Navbar from "../examensarbete/components/layout/Navbar";

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
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  }
});
