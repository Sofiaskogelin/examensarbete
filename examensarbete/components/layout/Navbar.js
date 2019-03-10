import React, { Component } from "react";
import { View, Image, StyleSheet, TouchableOpacity } from "react-native";
import firebase from "../../firebase";
import { firestore } from "firebase";
import { red } from "ansi-colors";
//import { moveCursor } from "readline";

class Navbar extends Component {
  onPressButton = e => {
    const data = firebase
      .firestore()
      .collection("users")
      .doc();
    const db = firebase.database().ref("users");

    var countRef = firebase.database().ref("users/");
    countRef.on("value", function(snapshot) {
      updateStarCount(postElement, snapshot.val());
      console.log(countRef);
    });
    console.log(data);
    console.log(db);
    console.log(countRef);
  };

  render() {
    return (
      <View style={styles.container}>
        {/*<Image
          style={{ width: 200, height: 200 }}
          source={require("../auth/earth.png")}
    />*/}
        {/* First link-button for the Nav, Users */}
        <TouchableOpacity onPress={this.onPressButton} style={styles.button}>
          {/* <Image style={styles.button} source={require()} /> */}
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    borderColor: "black",
    borderWidth: 1
  },
  button: {
    backgroundColor: "red",
    height: 100,
    width: 100
  }
});

export default Navbar;
