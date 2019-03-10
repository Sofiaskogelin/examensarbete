import React from "react";
import { StyleSheet, Text, View } from "react-native";
import ChatRoom from './ChatRoom'
import 'firebase/auth'

export default class ChatLlist extends React.Component {
    
  render() {
    return (
      <View style={styles.container}>
      <ChatRoom />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "pink",
   
  }
});
