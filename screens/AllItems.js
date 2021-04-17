import React, { useState, Component } from "react";
import { StyleSheet, Text, View, Image, TouchableOpacity, Button } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";

class AllItems extends Component {
  constructor(props) {
    super(props);
    this.state = {
        items:[],
    };
  }
  componentDidMount(){
    fetch(`http://foodstores.herokuapp.com/get/stores`)
    .then((res)=>res.json())
    .then((res)=>{console.log(res);this.setState({items:res})})
    .catch((error)=>console.error(error))
  }
  items=(store)=>{
    this.props.navigation.navigate("Item",{item:store.items.join("@!?!@"),store:store.id})
  }
  render() {
    return(
    <View style={styles.container}>
        <View style={styles.container}>
        {this.state.items?.map((store,i)=>store.items.map((item,e)=>(<View style={styles.item}  key={i+''+e}><TouchableOpacity onPress={()=>this.items(store)}><Image style={styles.img}
            source={{uri:item[0]}} /></TouchableOpacity><Text style={{textAlign:'center'}}>{item[1]}</Text><Text style={{textAlign:'center'}}>{item[2]}</Text><Text style={{textAlign:'center'}}>${item[3]}</Text></View>)))}
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
    justifyContent:"space-between",
    alignItems:"flex-start",
    flexDirection:'row',
    width:300,
    height:100,
    margin:20,
  },
  img: {
    borderRadius:12,
    width: 70,
    height: 70,
    margin: 5,
  },
});

export default AllItems;