import React, { Component } from "react";
import { View, Image, StyleSheet } from "react-native";

class Navbar extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Image
          style={{ width: 200, height: 200 }}
          source={require("../auth/earth.png")}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    borderColor: "black",
    borderWidth: 1
  }
});

export default Navbar;
