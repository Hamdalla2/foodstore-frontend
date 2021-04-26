import React, { useState, Component } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Button } from "react-native";

class Signin extends Component {
  constructor(props) {
    super(props);
    this.state = {
    name: "",
    image: "",
    price: "",
    amount: "",
    type: "",
    error: "",
    };
  }
  onchange = (name, value) => {
    this.setState({[name]: value});
  };
  add = () => {
    AsyncStorage.getItem("token")
        .then(token=> {
            var myHeaders = new Headers();
            myHeaders.append("Content-Type", "application/json");
            var data = {
                token: token.split(" ")[2],
                name: this.state.name,
                image: this.state.image,
                price: this.state.price,
                amount: this.state.amount,
            }
            console.log(data)
            var myHeaders = new Headers();
            myHeaders.append("Content-Type", "application/json");
            var options = {
                method: "POST",
                body: JSON.stringify(data),
                redirect: "follow",
                headers: myHeaders,
            }
            fetch("http://foodstores.herokuapp.com/add/item", options)
                .then((response) => response.text())
                .then((result) => {if(result==="added"){this.setState({error:"added"})}
                else{this.setState({error:'something went wrong'})}})
                .catch((error)=>this.setState({error:'something went wrong'}))
            })
    }
  render() {
    return (
      <View style={styles.container}>
        <TextInput
          value={this.state.name}
          onChangeText={(text) =>{ this.onchange("name", text) }}
          style={styles.textInput}
          placeholder="name"
          placeholderTextColor="black"
        ></TextInput>
        <TextInput
          value={this.state.image}
          onChangeText={(text) =>{ this.onchange("image", text) }}
          style={styles.textInput}
          placeholder="image"
          placeholderTextColor="black"
        ></TextInput>
        <TextInput
          value={this.state.price}
          onChangeText={(text) =>{ this.onchange("price", text) }}
          style={styles.textInput}
          placeholder="Price"
          placeholderTextColor="black"
        ></TextInput>
        <TextInput
          value={this.state.amount}
          onChangeText={(text) =>{ this.onchange("amount", text) }}
          style={styles.textInput}
          placeholder="Amount"
          placeholderTextColor="black"
        ></TextInput>
        <TouchableOpacity onPress={this.add}>
            <Text style={styles.button}>
              Add
            </Text>
        </TouchableOpacity>
        <Text style={styles.error}>
          {this.state.error}
        </Text>
      </View>
    );
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
    justifyContent: "center",
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

export default Signin;
