import React from "react";
import { StyleSheet, Text, View, TouchableOpacity, Image } from "react-native";
import { LinearGradient } from 'expo'
import firebase from "../../firebase";
import "firebase/auth";

import SignIn from "../../components/auth/SignIn";
import ChatList from "../../components/chat/ChatList";
import UserList from "../../components/layout/UserList";
import Places from "../../components/layout/Places";

export default class Dashboard extends React.Component {
  
  handleNavigation = value => {
    this.props.navigation.navigate(`${value}`);
  };

  render() {

    var user = firebase.auth().currentUser;
    console.log(user)

    if(!user){
      this.props.navigation.navigate('SignIn');
    } else {
      this.props.navigation.navigate('Dashboard')
    }

    return (
      <LinearGradient
      colors={['#ffdf47', '#f37335']}
      style={{flex: 1}}
    >
      <View style={styles.container}>
        <View style={styles.upperDashboardContainer}>
          <Text style={styles.text}> Welcome user </Text>
        </View>

        <View style={styles.lowerDashboardContainer}>
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
      </View>
      </LinearGradient>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  upperDashboardContainer: {
    height: "50%"
  },

  lowerDashboardContainer: {
    height: "50%",
    flexDirection: "row",
    flexWrap: "wrap",
    padding: 5
  },


  // dashboardContainer: {
  //   flex: 1,
  //   flexDirection: "row",
  //   alignItems: "center"
  // },
  dashboardNav: {
    // flex: 0,
    borderColor: "orange",
    backgroundColor: "white",
    borderWidth: 1,
    width: "50%", 
    height: "50%",
    padding: 5,
    justifyContent: "center",
  },
  text: {
    fontSize: 32
  },
  icon: {
    tintColor: "#ffdf47",
    width: 60,
    height: 60,
    alignSelf: "center"
  }
});
