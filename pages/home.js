import React, { Component } from "react";
import { Text, View, StyleSheet, Button } from "react-native";
import firebase from "../src/utils/firebase";
import UsrMail from "../src/components/RegisterForm";

export default function home({ email }) {
  return (
    <View>
      <Text style={styles.txt}> Pagina de inicio </Text>
      <Text style={styles.txt}>{`Hola usuario con el correo: ${email}`}</Text>
      <Logout />
    </View>
  );
}

function Logout() {
  const logout = () => {
    firebase.auth().signOut();
  };
  return (
    <View>
      <Button title="cerrar sesión" onPress={logout}></Button>
    </View>
  );
}

const styles = StyleSheet.create({
  txt: {
    color: "pruple",
    textAlign: "center",
    marginBottom: 10,
    fontSize: 28,
  },
});
