import React, { useState, Component } from "react";
import { StyleSheet, Text, View, Image, FlatList, Button } from "react-native";

class Item extends Component {
  constructor(props) {
    super(props);
    this.state = {
      error: "",
      holder:"",
      number:"",
      amount:"",
      expiry:"",
      cv:"",
    };
  }
  onchange = (name, value) => {
    this.setState({[name]: value});
  };
  purchase = ()=>{
    if(this.state.cv.length<2||this.state.cv>5){this.setState({error:'wrong cv length'});return}
    if(this.state.expiry.length<4){this.setState({error:'wrong expiry date value'});return}
    if(this.state.holder.length<7){this.setState({error:'holder name too short'});return}
    if(this.state.holder.length<15){this.setState({error:'number too short'});return}
    if(this.state.amount<1){this.setState({error:'wrong amount value'});return}
    this.props.navigation.navigate("Restaurant")
  }
  render() {
    let item=this.props.route.params.item.split("@!?!@")
    return (
    <View style={styles.container}>
        <TextInput
          value={this.state.amount}
          onChangeText={(text) =>{this.onchange("amount", text)}}
          style={styles.textInput}
          placeholder="amount"
          placeholderTextColor="black"
        ></TextInput>
        <TextInput
          value={this.state.number}
          onChangeText={(text) =>{this.onchange("number", text)}}
          style={styles.textInput}
          placeholder="Credit Card Number"
          placeholderTextColor="black"
          maxLength={30}
        ></TextInput>
        <TextInput
          value={this.state.holder}
          onChangeText={(text) =>{this.onchange("holder", text)}}
          style={styles.textInput}
          placeholder="Credit Card Holder"
          placeholderTextColor="black"
          maxLength={30}
        ></TextInput>
        <TextInput
          value={this.state.expiry}
          onChangeText={(text) =>{this.onchange("expiry", text)}}
          style={styles.textInput}
          placeholder="Expiray Date"
          placeholderTextColor="black"
          maxLength={4}
        ></TextInput>
        <TextInput
          value={this.state.cv}
          onChangeText={(text) =>{this.onchange("cv", text)}}
          style={styles.textInput}
          secureTextEntry={true}
          placeholder="CV"
          placeholderTextColor="black"
          maxLength={4}
        ></TextInput>
        <TouchableOpacity onPress={this.purchase}>
            <Text style={styles.button}>
              Purchase
            </Text>
        </TouchableOpacity>
        <Text style={styles.error}>
          {this.state.error}
        </Text>
    </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'yellow',
  },
  textInput: {
    height: 50,
    borderRadius: 25,
    borderWidth: 0.5,
    marginHorizontal: 20,
    paddingLeft: 10,
    marginVertical: 5,
    borderColor: "rgba(0,0,0,0.2)",
    textAlign: "center",
    marginTop: 10,
  },
  button: {
    backgroundColor: "orange",
    height: 30,
    marginHorizontal: 20,
    borderRadius: 35,
    alignItems: "center",
    justifyContent: "space-around",
    marginVertical: 5,
    shadowOffset: { width: 2, height: 2 },
    shadowColor: "black",
    shadowOpacity: 0.2,
    textAlign: "center",
    marginTop: 30,
    paddingTop: 5,
  },
  error: {
    color: 'red',
    height: 50,
    marginHorizontal: 20,
    paddingLeft: 10,
    marginVertical: 5,
    textAlign: "center",
    marginTop: 30,
  }
});

export default Item;
