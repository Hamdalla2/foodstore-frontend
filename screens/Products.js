import React, { useState, Component } from "react";
import { StyleSheet, Text, View, Image, TouchableOpacity, Button } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";

class Orders extends Component {
  constructor(props) {
    super(props);
    this.state = {
        items:[],
    };
  }
  componentDidMount(){
    AsyncStorage.getItem("token").then((token)=>{
    let id=token.split(' ')[2]
    fetch(`http://foodstores.herokuapp.com/get/store/${id}`)
    .then((res)=>res.json())
    .then((res)=>{this.setState({items:res.items})})
    .catch((error)=>console.error(error))})
  }
  render() {
    return(
    <View style={styles.container}>
        <TouchableOpacity onPress={()=>this.props.navigation.navigate('Add')}>
            <Text style={styles.button}>
                Add Product
            </Text>
        </TouchableOpacity>
        <View style={styles.container}>
        {this.state.items?.map((item,i)=>(<View style={styles.item}  key={i}><TouchableOpacity onPress={()=>this.items(item)}><Image style={styles.img}
            source={{uri:item[0]}} /></TouchableOpacity><Text style={{textAlign:'center'}}>{item[1]}</Text><Text style={{textAlign:'center'}}>{item[2]}</Text><Text style={{textAlign:'center'}}>${item[3]}</Text></View>))}
        </View>
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