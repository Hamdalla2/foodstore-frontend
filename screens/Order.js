import React, { useState, Component } from "react";
import { StyleSheet, Text, View, Image, TouchableOpacity, Button } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";

class Order extends Component {
  constructor(props) {
    super(props);
    this.state = {
        id:"",
        orders:[],
    };
  }
  componentDidMount(){
    AsyncStorage.getItem("token").then((token)=>{
      let id=token.split(' ')[2]
      fetch(`http://foodstores.herokuapp.com/get/store/${id}`)
      .then((res)=>res.json())
      .then((res)=>{this.setState({id:id,orders:res.orders[this.props.route.params.filter]})})
      .catch((error)=>console.error(error))})
  }

  accept=(i)=>{
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    var raw = JSON.stringify({
      id:this.state.id,
      index:i,
    });
    var requestOptions = {
      method: "POST",
      body: raw,
      redirect: "follow",
      headers: myHeaders,
    };
     fetch(`http://foodstores.herokuapp.com/order/allow`,requestOptions)
    .then((res)=>res.text())
    .then((res)=>{if(res==="ok")this.props.navigation.navigate('Orders')})
    .catch((error)=>console.error(error))
  }

  reject=(i)=>{
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    var raw = JSON.stringify({
      id:this.state.id,
      index:i,
    });
    var requestOptions = {
      method: "POST",
      body: raw,
      redirect: "follow",
      headers: myHeaders,
    };
     fetch(`http://foodstores.herokuapp.com/order/reject`,requestOptions)
    .then((res)=>res.text())
    .then((res)=>{if(res==="ok")this.props.navigation.navigate('Orders')})
    .catch((error)=>console.error(error))
  }
  render() {
    return(
    <View style={styles.container}>
        <View style={styles.container}>
        {this.state.orders?.map((item,i)=>{item=item.split("@!?!@");return(<View style={styles.item}  key={i}><Text style={{textAlign:'center'}}>{item[0]}</Text><Text style={{textAlign:'center'}}>{item[1]}</Text><Text style={{textAlign:'center'}}>{item[2]}</Text><Text style={{color: "green",textAlign:'center'}}>{this.props.route.params.filter}</Text>
        {this.props.route.params.filter==="pending"?<><TouchableOpacity style={styles.button} onPress={()=>this.accept(i)}><Text>Accept</Text></TouchableOpacity><TouchableOpacity style={styles.button} onPress={()=>this.reject(i)}><Text>Reject</Text></TouchableOpacity></>:<></>}</View>)})}
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
    borderRadius: 35,
    alignItems: "center",
    justifyContent: "center",
    shadowOffset: { width: 2, height: 2 },
    shadowColor: "black",
    shadowOpacity: 0.2,
    textAlign: "center",
    width: 50,
    color:"white",
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

export default Order;