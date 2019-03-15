import React from 'react';
import { StyleSheet, Text, View } from "react-native";
import { GiftedChat } from 'react-native-gifted-chat';
import firebase from "firebase";

 
export default class ChatRoom extends React.Component {
  constructor(props) {
    super(props);
    // this.onPressButton = this.onPressButton.bind(this);
    firebase
      .firestore()
      .collection("messages")
      .get()
      .then(res =>
        res.forEach(message => {
        })
      )
      .catch(err => console.error(err));
  }

  state = {
    messages: [],
  }

  componentDidMount() {
    firebase.firestore().collection('messages')
    .onSnapshot(snapshot => {
      const messages = []
      snapshot.forEach(doc => {
        messages.push(doc.data())
      })
      this.setState({
        ...this.state, messages
      })
    })
  }

  sendMessage(message) {
    console.log(message)
    firebase.firestore().collection('messages').doc(message[0]._id).set({
       ...message[0] 
    })
    }
  
 
  render() {
    return (
      <GiftedChat style={styles.container}
        messages={this.state.messages}
        onSend={(message) => this.sendMessage(message)}
        user={{
          _id: 1,
        }}
      />
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,

  }
});
