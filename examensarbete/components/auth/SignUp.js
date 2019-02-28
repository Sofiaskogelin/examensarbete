import React from 'react'
import { TextInput, View, StyleSheet } from 'react-native';
import Backend from '../../firebase'

 class SignUp extends React.Component {

    state = {
        email: '', 
        password: '',
        userName: '',
        place: '',
        age: '',
        aboutMe: ''
    }

    render(){
        return (
            <View> 
            <TextInput 
              placeholder="email"
              onChangeText={(text) => {
                this.setState({
                  name: text
                })
                console.log(text)
              }}
             />
            
            <TextInput
              placeholder="Password"
              onChangeText={(text) => {
                this.setState({
                  name: text
                })
                console.log(text)
              }}
             />

            </View>
        ) 
    } 
}export default SignUp;