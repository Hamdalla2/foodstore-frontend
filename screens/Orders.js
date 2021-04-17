import React, { useState, Component } from "react";
import { StyleSheet, Text, View, Image, TouchableOpacity, Button } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";

class Orders extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }
  render() {
    return(
      <View style={styles.container}>
      <TouchableOpacity onPress={()=>{this.props.navigation.navigate("Order",{filter:"pending"})}}>
          <Text style={styles.button}>
            Pending
          </Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={()=>{this.props.navigation.navigate("Order",{filter:"allowed"})}}>
          <Text style={styles.button}>
            Accepted
          </Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={()=>{this.props.navigation.navigate("Order",{filter:"rejected"})}}>
            <Text style={styles.button}>
            Rejected
            </Text>
        </TouchableOpacity>
    </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'yellow',
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
  item: {
    flex: 1,
    display:"flex",
    justifyContent:"flex-start",
    alignItems:"flex-start",
    flexDirection:'row',
    width:300,
    height:600,
    margin:20,
  },
  img: {
    borderRadius:12,
    width: 70,
    height: 70,
    margin: 5,
  },
});

export default Orders;