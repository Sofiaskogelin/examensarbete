import React from "react";
import { StyleSheet, Text, View, TouchableOpacity, Image } from "react-native";
import firebase from "../../firebase";
import "firebase/auth";

import SignIn from "../../components/auth/SignIn";
import ChatList from "../../components/chat/ChatList";
import UserList from "../../components/layout/UserList";
import Places from "../../components/layout/Places";
import Navbar from "../layout/Navbar";
import { yellow } from "ansi-colors";

export default class Dashboard extends React.Component {
  handleNavigation = value => {
    this.props.navigation.navigate(`${value}`);
  };

  render() {
    return (
      <View style={styles.container}>
        <View>
          <Text style={styles.text}> Welcome user </Text>
        </View>
        <View style={styles.dashboardContainer}>
          <TouchableOpacity
            style={styles.dashboardNav}
            value={SignIn}
            onPress={() => {
              this.handleNavigation(() => {});
            }}
          >
            <Image
              style={styles.icon}
              source={require("../layout/avatar.png")}
            />
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.dashboardNav}
            value={ChatList}
            onPress={() => {
              this.handleNavigation("ChatList");
            }}
          >
            <Image style={styles.icon} source={require("../layout/chat.png")} />
          </TouchableOpacity>
        </View>

        <View style={styles.dashboardContainer}>
          <TouchableOpacity
            style={styles.dashboardNav}
            value={UserList}
            onPress={() => {
              this.handleNavigation("UserList");
            }}
          >
            <Image
              style={styles.icon}
              source={require("../layout/friendship.png")}
            />
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.dashboardNav}
            value={Places}
            onPress={() => {
              this.handleNavigation("Places");
            }}
          >
            <Image
              style={styles.icon}
              source={require("../layout/paper-plane.png")}
            />
          </TouchableOpacity>
        </View>
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
  },
  dashboardContainer: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center"
  },
  dashboardNav: {
    // flex: 0,
    borderColor: "orange",
    borderWidth: 1,
    width: 100,
    height: 100
  },
  text: {
    fontSize: 32
  },
  icon: {
    width: 60,
    height: 60,
    alignItems: "center",
    justifyContent: "center"
  }
});
