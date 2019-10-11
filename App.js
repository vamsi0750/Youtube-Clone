import React from "react";
import { StyleSheet, Text, View, ScrollView } from "react-native";
import Navbar from "./components/Navbar";
import Tapbar from "./components/Tapbar";
import Body from "./components/Body";

import data from "./components/search.json";

export default function App() {
  return (
    <View style={styles.container}>
      <Navbar />
      <ScrollView>
        <Body video={data.items[0]} />
        <Body video={data.items[1]} />
        <Body video={data.items[2]} />
        <Body video={data.items[3]} />
        <Body video={data.items[4]} />
      </ScrollView>

      <Tapbar />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff"
  }
});