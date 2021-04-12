import React, { useState, Component } from "react";
import { StyleSheet, Text, View, Image, FlatList, Button } from "react-native";

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      stores:[],
    };
  }
  componentDidMount(){
    fetch("http://127.0.0.1:8080/get/stores")
    .then((res)=>res.json())
    .then((res)=>{console.log(res);this.setState({stores:res})})
    .catch((error)=>console.error(error))
  }
  render() {
    return(
    <View style={styles.container}>
      <View style={styles.display}>
      {this.state.stores?.map((item,i)=>(<Image key={i} style={styles.img}
            source={{uri:item?.image}} />))}
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
  display: {
    display:"flex",
    justifyContent:"center",
    alignItems:"center",
    width:300,
    height:600,
    margin:20,
  },
  img: {
    borderRadius:12,
    width: 50,
    height: 50,
    margin: 5,
  },
});

export default Home;
