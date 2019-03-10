import React from "react";
import { StyleSheet, Text, View } from "react-native";
import 'firebase/auth'

export default class Places extends React.Component {
    
  render() {
    return (
      <View style={styles.container}>
        <Text> !!!!!! PLACESSSSSSSS !!!!! </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "blue",
    alignItems: "center",
    justifyContent: "center"
  }
});
