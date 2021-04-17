import React, { useState, Component } from "react";
import { StyleSheet, Text, View, Image, TouchableOpacity, Button } from "react-native";

class Filter extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }
  render() {
    return(
    <View style={styles.container}>
      <TouchableOpacity>
          <Text style={styles.button}>
            Comming Soon!
          </Text>
      </TouchableOpacity>
      <TouchableOpacity>
          <Text style={styles.button} onPress={()=>this.props.navigation.navigate("Categories")}>
            Back
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

export default Filter;