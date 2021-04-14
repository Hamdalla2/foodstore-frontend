import React, { useState, Component } from "react";
import { StyleSheet, Text, View, Image, TouchableOpacity, Button } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";

class Reports extends Component {
  constructor(props) {
    super(props);
    this.state = {
      stores:[],
    };
  }
  componentDidMount(){
    fetch("http://foodstores.herokuapp.com/get/stores")
    .then((res)=>res.json())
    .then((res)=>{this.setState({stores:res})})
    .catch((error)=>console.error(error))
  }
  items=(item)=>{
    this.props.navigation.navigate("Items",{items:item.items})
  }
  render() {
    return(
    <View style={styles.container}>
      <TouchableOpacity onPress={()=>{}}>
          <Text style={styles.button}>
            List of Stores
          </Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={()=>{}}>
          <Text style={styles.button}>
            Inventory
          </Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={()=>{}}>
          <Text style={styles.button}>
            Reports
          </Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={()=>{AsyncStorage.removeItem("token"); this.props.navigation.navigate("Landing")}}>
            <Text style={styles.button}>
              Sign Out
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
  display: {
    display:"flex",
    alignContent:'center',
    justifyContent:'flex-start',
    flexDirection:"column",
    flexWrap:'wrap',
    width:300,
    height:800,
    margin:10,
    textAlign:'center',
  },
  img: {
    borderRadius:12,
    width: 100,
    height: 100,
    margin: 5,
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

export default Reports;