import React, { useState, Component } from "react";
import { StyleSheet, Text, View, Image, TouchableOpacity, Button } from "react-native";

class Items extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
    <View style={styles.container}>
        {this.props.route.params.items?.map((item)=>(<View style={styles.item}><TouchableOpacity key={i} onPress={(item)=>this.items(item)}><Image style={styles.img}
            source={{uri:item[3]}} /></TouchableOpacity><Text style={{textAlign:'center'}}>{item.name}</Text><Text style={{textAlign:'center'}}>{item.amount}</Text><Text style={{textAlign:'center'}}>${item.price}</Text></View>))}
    </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'yellow',
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

export default Items;
