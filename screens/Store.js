import React, { useState, Component } from "react";
import { StyleSheet, Text, View, Image, FlatList, Button } from "react-native";

class Store extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return <View style={styles.container}></View>;
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default Store;
