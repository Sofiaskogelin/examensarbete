import React from "react";
import { StyleSheet, Text, View } from "react-native";
import "firebase/auth";
import firebase from "firebase";

export default class UserList extends React.Component {
  constructor(props) {
    super(props);
    // this.onPressButton = this.onPressButton.bind(this);
    firebase
      .firestore()
      .collection("users")
      .get()
      .then(res =>
        res.forEach(user => {
          console.log(user.data());
        })
      )
      .catch(err => console.error(err));
  }

  render() {
    return (
      <View style={styles.container}>
        <Text> {} </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "red"
  }
});
