import React, { Component } from "react";
import { StyleSheet, View, Image, Text } from "react-native";

export class Flexbox extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>Test</Text>
        {/* <View style={{ height: 20 }} />
        <View style={styles.row}>
          <Image
            style={{ height: 100 }}
            source={{
              uri: "https://facebook.github.io/react-native/img/header_logo.svg"
            }}
          />
        </View> */}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  row: {}
});
