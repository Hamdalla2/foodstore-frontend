import AsyncStorage from "@react-native-async-storage/async-storage";
import React, { useState, Component } from "react";
import { StyleSheet, Text, View, Image, FlatList, TouchableOpacity, Button } from "react-native";

class Store extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name:'',
    };
  }
  componentDidMount(){
    AsyncStorage.getItem('name').then((name)=>this.setState({name}))
  }
  render() {
    return <View style={styles.container}> 
        <TouchableOpacity onPress={()=>this.props.navigation.navigate('MyItems')}>
            <Text style={styles.button}>
              My Products
            </Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={()=>this.props.navigation.navigate('Orders',{name:this.state.name})}>
            <Text style={styles.button}>
              Orders
            </Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={()=>{AsyncStorage.multiRemove(["token","name"]); this.props.navigation.navigate("Landing")}}>
            <Text style={styles.button}>
                Sign Out
            </Text>
        </TouchableOpacity>
    </View>;
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:'yellow',
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
