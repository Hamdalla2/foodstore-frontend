import React, { useState, Component } from "react";
import { StyleSheet, Text, View, Image, FlatList, TouchableOpacity, Button } from "react-native";

class Store extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return <View style={styles.container}> 
      <TouchableOpacity onPress={()=>this.props.navigation.navigate('Add')}>
            <Text style={styles.button}>
              Add Item
            </Text>
        </TouchableOpacity>
    </View>;
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  button: {
    backgroundColor: "orange",
    height: 30,
    marginHorizontal: 20,
    borderRadius: 35,
    alignItems: "center",
    justifyContent: "center",
    marginVertical: 5,
    shadowOffset: { width: 2, height: 2 },
    shadowColor: "black",
    shadowOpacity: 0.2,
    textAlign: "center",
    marginTop: 30,
    paddingTop: 5,
  },
});

export default Store;
