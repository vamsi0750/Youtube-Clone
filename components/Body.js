import React, { Component } from "react";
import { Text, View, StyleSheet, Image } from "react-native";

export default class Body extends Component {
  render() {
    let video = this.props.video;
    return (
      <View style={styles.container}>
        <Image
          source={{ uri: video.snippet.thumbnails.medium.url }}
          style={{ height: 200, borderRadius: 5 }}
        />
        <View style={styles.textcontainer}>
          <Image
            source={{ uri: video.snippet.thumbnails.default.url }}
            style={styles.profielpic}
          />
          <View style={styles.innercontainer}>
            <Text style={styles.videotitles}>{video.snippet.title}</Text>
            <Text style={styles.videostats}>
              {video.snippet.channelTitle} -150K views
            </Text>
          </View>
        </View>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 15,
    backgroundColor: "#000"
  },
  videotitles: {
    color: "#fff",
    fontSize: 14,
    marginRight: 14,
    fontWeight: "bold"
  },
  textcontainer: {
    marginLeft: 10,
    paddingTop: 15,
    flexDirection: "row",
    paddingRight: 5
  },
  profielpic: {
    width: 50,
    height: 50,
    borderRadius: 25,
    borderWidth: 2,
    borderColor: "#fff"
  },
  innercontainer: {
    marginLeft: 10,
    padding: 5
  },
  videostats: {
    fontSize: 12,
    color: "#fff",
    marginTop: 5
  }
});
