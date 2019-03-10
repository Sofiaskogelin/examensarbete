import React from "react";
import { StyleSheet, Text, View } from "react-native";
import firebase from "../../firebase";
import { firestore } from "firebase";
import "firebase/auth";

export default class Users extends React.Component {
  state = {
    userName: "",
    location: "",
    age: "",
    aboutMe: ""
  };
  render() {
    return (
      <View>
        <Text>Hello from users</Text>
        <View className="user-list">
          {/*{users &&
            users.map(user => {
              return <Text>{console.log("It worked", user)}</Text>;
            })}*/}
        </View>
      </View>
    );
  }
}
