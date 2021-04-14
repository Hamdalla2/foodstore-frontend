import AsyncStorage from "@react-native-async-storage/async-storage";
import React, { useState, Component } from "react";
import { Dimensions } from "react-native";
import { StyleSheet, Text, TouchableOpacity, Image, View } from "react-native";
const win = Dimensions.get("window");

class Landing extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  componentDidMount(){
    AsyncStorage.getItem("token").then((token)=>{
      if(token?.slice(0,5)==="store"){
        
        this.props.navigation.navigate('Store')
      }
      if(token?.slice(0,4)==="rest"){
        this.props.navigation.navigate('Restaurant')
      }
    })
  }
  render() {
        return (
          <View style={styles.container}>
            <TouchableOpacity onPress={() => this.props.navigation.navigate('Signin',{user:'store'})}>
              <Image
                style={styles.img}
                source={require('../assets/landing1.png')}
              />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => this.props.navigation.navigate('Signin',{user:'restaurant'})}>
              <Image
                style={styles.img}
                source={require('../assets/landing2.png')}
              />
            </TouchableOpacity>
          </View>
        );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'yellow',
  },
  img: {
    width: win.width,
    height: win.width / 3,
    marginTop: win.width /4,
    borderColor: 'black',
    borderWidth: 3,
    borderRadius: 12,
  }
});

export default Landing;
