import React, { Component } from "react";

import { View, StyleSheet, TouchableOpacity, Text, StatusBar } from "react-native";
import { TextInput } from "react-native-gesture-handler";

// import { Container } from './styles';

export default class LoginForm extends Component {
  render() {
    return (
      <View style={styles.container}>
        <StatusBar
          barStyle="light-content"
        />
        <TextInput
          style={styles.input}
          placeholder="email"
          placeholderTextColor="rgba(255, 255, 255, 0.7)"
          returnKeyType="next"
          keyboardType="email-address"
          autoCapitalize="none"
          autoCorrect={false}
          onSubmitEditing={() => this.passwordInput.focus()}
        />
        <TextInput
          style={styles.input}
          placeholder="password"
          placeholderTextColor="rgba(255, 255, 255, 0.7)"
          secureTextEntry
          returnKeyType="go"
          ref={(input) => this.passwordInput = input}
        />
        <TouchableOpacity style={styles.buttonContainer}>
          <Text style={styles.buttonText}>Login</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    padding: 20
  },
  input: {
    height: 40,
    backgroundColor: "rgba(255, 255, 255, 0.2)",
    marginBottom: 10,
    color: "#fff",
    paddingHorizontal: 10,
    borderRadius: 4,
    borderWidth: 0.5,
    borderColor: "#d6d7da"
  },
  buttonContainer: {
    backgroundColor: '#2980b9',
    paddingVertical: 15
  },
  buttonText: {
    textAlign: 'center',
    color: '#fff',
    fontWeight: '700'
  }

});
