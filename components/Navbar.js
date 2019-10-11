import React, { Component } from "react";
import { Text, View, StyleSheet, Image, TouchableOpacity } from "react-native";
import Icon from "react-native-vector-icons/MaterialIcons";

export default class Navbar extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.navbar}>
          <TouchableOpacity>
            <Image
              style={styles.logo}
              source={require("../assets/youtube.png")}
            />
          </TouchableOpacity>

          <View style={styles.moveright}>
            <TouchableOpacity>
              <Icon name='search' size={25} style={styles.icons} />
            </TouchableOpacity>
            <TouchableOpacity>
              <Icon name='account-circle' size={25} style={styles.icons} />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff"
  },
  navbar: {
    marginTop: 35,
    height: 55,
    elevation: 3,
    paddingHorizontal: 15,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between"
  },
  logo: {
    width: 120,
    height: 23
  },
  moveright: {
    flexDirection: "row"
  },
  icons: {
    marginLeft: 15
  }
});
