import React, { Component } from "react";
import { Text, View, StyleSheet, TouchableOpacity } from "react-native";
import Icon from "react-native-vector-icons/MaterialIcons";

export default class Tapbar extends Component {
  render() {
    return (
      <View style={styles.tapbar}>
        <TouchableOpacity style={styles.container}>
          <Icon name='home' size={25} />
          <Text style={styles.mytext}>Home</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.container}>
          <Icon name='whatshot' size={25} />
          <Text style={styles.mytext}>Whatshot</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.container}>
          <Icon name='subscriptions' size={25} />
          <Text style={styles.mytext}>Subscriptions</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.container}>
          <Icon name='add-alert' size={25} />
          <Text style={styles.mytext}>Activity</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.container}>
          <Icon name='folder' size={25} />
          <Text style={styles.mytext}>Account</Text>
        </TouchableOpacity>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  tapbar: {
    backgroundColor: "#fff",
    height: 60,
    borderColor: "#e5e5e5",
    borderTopWidth: 2,
    flexDirection: "row",
    justifyContent: "space-around"
  },
  container: {
    alignItems: "center",
    justifyContent: "center"
  },
  mytext: {
    fontSize: 14,
    paddingTop: 2,
    textAlign: "center"
  }
});
