import React from "react";
import { StyleSheet, Text, View } from "react-native";
import "firebase/auth";
import firebase from "firebase";

export default class UserList extends React.Component {
  constructor(props) {
    super(props);

    state = {
      users: []
    };
  }

  componentWillMount() {
    firebase
      .firestore()
      .collection("users")
      .get()
      .then(res => {
        console.log(res.data());
        const users = [];
        res.forEach(user => users.push(user.data()));
        this.setState({ ...this.state, users });
        console.log(this.state);
      })
      .catch(err => console.error(err));
  }

  render() {
    const { users } = this.state;

    return (
      <React.Fragment>
        {users.length > 0 ? (
          <View style={styles.container}>
            <Text>
              {" "}
              {
                (users.map = user => {
                  user.userName;
                })
              }{" "}
            </Text>
          </View>
        ) : (
          <View>Loading...</View>
        )}
      </React.Fragment>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "red"
  }
});
