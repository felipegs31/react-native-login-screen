import React from "react";

import { StyleSheet, View, Image, Text, KeyboardAvoidingView } from "react-native";
import LoginForm from "./LoginForm";

const Main = () => (
  <KeyboardAvoidingView behavior="padding" style={styles.container}>
    <View style={styles.logoContainer}>
      <Image
        style={styles.logo}
        source={require("../../assets/images/adlon.png")} />
        <Text style={styles.title}>An test login Screen</Text>
    </View>
    <View style={styles.formContainer}>
      <LoginForm />
    </View>
  </KeyboardAvoidingView>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#3498db"
  },
  logo : {
    width: 200,
    height: 150
  },
  logoContainer: {
    alignItems: 'center',
    flexGrow: 1,
    justifyContent: 'center'
  },
  title: {
    color: '#FFF',
    marginTop: 10,
    textAlign: 'center'
  }
});

export default Main;
