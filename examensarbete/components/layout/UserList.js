import React from "react";
import { StyleSheet, Text, View } from "react-native";
import 'firebase/auth'

export default class UserList extends React.Component {
    
  render() {
    return (
      <View style={styles.container}>
        <Text> !!!!!! this is USERLISTTTTT !!!!! </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "green",
    alignItems: "center",
    justifyContent: "center"
  }
});
