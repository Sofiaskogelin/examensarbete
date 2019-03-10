import React from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import 'firebase/auth'
import ChatRoom from './ChatRoom'

export default class ChatPreview extends React.Component {
    
    handleNavigation = () => {
        this.props.navigation.navigate('ChatRoom')
    }

  render() {
    return (
      <View style={styles.container}>
        <TouchableOpacity 
        onPress={() => {
            this.handleNavigation()
          }}>
            <Text> hEJHEJ </Text>
        </TouchableOpacity>
        
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "yellow",
    alignItems: "center",
    justifyContent: "center"
  }
});
