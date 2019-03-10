import React from "react";
import { StyleSheet, Text, View } from "react-native";
import ChatRoom from "../examensarbete/components/chat/ChatRoom";
//import { VAR1, VAR2 } from "react-native-dotenv";
import Navbar from "../examensarbete/components/layout/Navbar";
import SignIn from "../examensarbete/components/auth/SignIn";
import SignUp from "../examensarbete/components/auth/SignUp";
import ChatList from "../examensarbete/components/chat/ChatList";
import Dashboard from "../examensarbete/components/layout/Dashboard";
import UserList from "../examensarbete/components/layout/UserList";
import Places from "../examensarbete/components/layout/Places";
import { createStackNavigator, createAppContainer } from "react-navigation";
import 'firebase/auth'

class App extends React.Component {
  render() {

    return (
      <AppNavigator /> 
    );
  }
}

const AppNavigator = createStackNavigator({

  SignIn: {
    screen: SignIn,
  },
  Dashboard: {
    screen: Dashboard
  },
  ChatList: {
    screen: ChatList
  },
  ChatRoom: {
    screen: ChatRoom
  },
  UserList: {
    screen: UserList
  },
  Places: {
    screen: Places
  }
});

export default createAppContainer(AppNavigator)



const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  }
});
