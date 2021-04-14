import React, { useState, Component } from "react";
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Button } from "react-native";
import UploadButton from "@rpldy/upload-button";
class Signup extends Component {
  constructor(props) {
    super(props);
    this.state = {
      error: "",
      username:"",
      password:'',
      address:"",
      name:"",
      image:''
    };
  }
  onchange = (name, value) => {
    this.setState({[name]: value});
  };
//   uploadImage = (e) => {
//     const formData = new FormData()
//     formData.append('file', e.target.files[0])
//     formData.append('upload_preset', 'pqcz20rh')

//     const requestOptions = {
//         method: 'POST',
//         body: formData
//     };
//     fetch('	https://api.cloudinary.com/v1_1/dzjchtsxn/image/upload', requestOptions)
//         .then(response => response.json())
//         .then(data => {
//             console.log(data)
//             setImage(data.secure_url)

//         });

// }
  signupstore=()=>{
    if(this.state.username.length<2){this.setState({error:'username too short'});return;}
    if(this.state.password.length<2){this.setState({error:'password too short'});return;}
    if(this.state.name.length<2){this.setState({error:'name too short'});return;}
    if(this.state.address.length<2){this.setState({error:'address too short'});return;}
    if(this.state.image.length<9){this.setState({error:'imagelink too short'});return;}
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    var raw = JSON.stringify({
      username: this.state.username,
      password: this.state.password,
      name: this.state.name,
      address: this.state.address,
      image: this.state.image,
      items: []
    });
    var requestOptions = {
      method: "POST",
      body: raw,
      redirect: "follow",
      headers: myHeaders,
    };
    fetch("http://foodstores.herokuapp.com/add/store", requestOptions)
      .then((response) => response.text())
      .then((result) => {if(result==="added store"){this.props.navigation.navigate('Signin')}
      else{this.setState({error:'username is already taken!'})}})
      .catch((error)=>console.error(error))
    }
  signuprestaurant=()=>{
    if(this.state.username.length<2){this.setState({error:'username too short'});return;}
    if(this.state.password.length<2){this.setState({error:'password too short'});return;}
    if(this.state.name.length<2){this.setState({error:'name too short'});return;}
    if(this.state.address.length<2){this.setState({error:'address too short'});return;}
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    var raw = JSON.stringify({
      username: this.state.username,
      password: this.state.password,
      name: this.state.name,
      address: this.state.address,
      items: []
    });
    var requestOptions = {
      method: "POST",
      body: raw,
      redirect: "follow",
      headers: myHeaders,
    };
    fetch("http://foodstores.herokuapp.com/add/restaurant", requestOptions)
      .then((response) => response.text())
      .then((result) => {if(result==="added restaurant"){this.props.navigation.navigate('Signin')}
      else{this.setState({error:'username is already taken!'})}})
      .catch((error)=>console.error(error))
  }
  render() {
    if(this.props.route.params.user==='restaurant'){
    return (
      <View style={styles.container}>
        <TextInput
          value={this.state.username}
          onChangeText={(text) =>{this.onchange("username", text)}}
          style={styles.textInput}
          placeholder="Username"
          placeholderTextColor="black"
          maxLength={30}
        ></TextInput>
        <TextInput
          value={this.state.password}
          onChangeText={(text) =>{this.onchange("password", text)}}
          style={styles.textInput}
          secureTextEntry={true}
          placeholder="Password"
          placeholderTextColor="black"
          maxLength={30}
        ></TextInput>

        <TextInput
            value={this.state.name}
            onChangeText={(text) =>{this.onchange("name", text)}}
            style={styles.textInput}
            placeholder="Restaurant Name"
            placeholderTextColor="black"
          ></TextInput>
        <TextInput
          value={this.state.address}
          onChangeText={(text) =>{this.onchange("address", text)}}
          style={styles.textInput}
          placeholder="Address"
          placeholderTextColor="black"
          maxLength={50}
        ></TextInput>
        <TouchableOpacity onPress={this.signuprestaurant}>
            <Text style={styles.button}>
              Sign Up
            </Text>
        </TouchableOpacity>
        <Text style={styles.error}>
          {this.state.error}
        </Text>
        
      </View>
    )}else{
      return(      
        <View style={styles.container}>
          {/* <UploadButton>Upload Files</UploadButton> */}
          <TextInput
            value={this.state.username}
            onChangeText={(text) =>{this.onchange("username", text)}}
            style={styles.textInput}
            placeholder="Username"
            placeholderTextColor="black"
            maxLength={30}
          ></TextInput>
          <TextInput
            value={this.state.password}
            onChangeText={(text) =>{this.onchange("password", text)}}
            style={styles.textInput}
            placeholder="Password"
            secureTextEntry={true}
            placeholderTextColor="black"
            maxLength={30}
          ></TextInput>
          <TextInput
            value={this.state.name}
            onChangeText={(text) =>{this.onchange("name", text)}}
            style={styles.textInput}
            placeholder="Store Name"
            placeholderTextColor="black"
            maxLength={30}
          ></TextInput>
          <TextInput
            value={this.state.address}
            onChangeText={(text) =>{this.onchange("address", text)}}
            style={styles.textInput}
            placeholder="Address"
            placeholderTextColor="black"
            maxLength={50}
          ></TextInput>
          <TextInput
            value={this.state.image}
            onChangeText={(text) =>{this.onchange("image", text)}}
            style={styles.textInput}
            placeholder="Image"
            placeholderTextColor="black"
          ></TextInput>
        <TouchableOpacity onPress={this.signupstore}>
            <Text style={styles.button}>
              Sign Up
            </Text>
        </TouchableOpacity>
        <Text style={styles.error}>
          {this.state.error}
        </Text>
        </View>
      )
    }
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

export default Signup;
