import React from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import 'firebase/auth'

import SignIn from '../../components/auth/SignIn'
import ChatList from '../../components/chat/ChatList'
import UserList from '../../components/layout/UserList'
import Places from '../../components/layout/Places'

export default class Dashboard extends React.Component {

  handleNavigation = (value) => {
    console.log(`${value}`)
    this.props.navigation.navigate(`${value}`)
  }
    
  render() {
    return (

      <View style={styles.container}>
        
        <Text> Welcome, </Text>

        <View style={styles.dashboardContainer}>

          <TouchableOpacity 
          style={styles.dashboardNav}
          value={SignIn}
          onPress={() => {
            this.handleNavigation('SignIn')
          }}
          >
            <Text> MY PROFILE </Text>
          </TouchableOpacity>

          <TouchableOpacity 
          style={styles.dashboardNav}
          value={ChatList}
          onPress={() => {
            this.handleNavigation('ChatList')
          }}
          >
            <Text> MESSAGES </Text>
          </TouchableOpacity>

        </View>

        <View style={styles.dashboardContainer}>

          <TouchableOpacity 
          style={styles.dashboardNav}
          value={UserList}
          onPress={() => {
            this.handleNavigation('UserList')
          }}
          >
            <Text> USERS </Text>
          </TouchableOpacity>

          <TouchableOpacity 
          style={styles.dashboardNav}
          value={Places}
          onPress={() => {
            this.handleNavigation('Places')
          }}
          >
            <Text> PLACES </Text>
          </TouchableOpacity>

        </View>
        

      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  },  dashboardContainer: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center"
  },
 
  dashboardNav: {
    backgroundColor: "pink",
    width: 100,
    height: 100
  }
});
