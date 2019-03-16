import React, { Component } from "react";
import { View, Image, StyleSheet, TouchableOpacity } from "react-native";
import firebase from "../../firebase";
import { firestore } from "firebase";

class Navbar extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Image
          style={{ width: 180, height: 180, tintColor: "white", borderWidth: 0, marginTop: 150}}
          source={require("../auth/earth.png")}
        />
        {/*<TouchableOpacity onPress={this.onPressButton} style={styles.button}>
           <Image style={styles.button} source={require()} /> 
    </TouchableOpacity>*/}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  button: {
    backgroundColor: "red",
    height: 100,
    width: 100
  }
});

export default Navbar;
