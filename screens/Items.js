import React, { useState, Component } from "react";
import { StyleSheet, Text, View, Image, TouchableOpacity, Button } from "react-native";

class Items extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  items=(item)=>{
    this.props.navigation.navigate("Item",{item:item.join("@!?!@"),store:this.props.route.params.store})
  }
  render() {
    return (
    <View style={styles.container}>
        {this.props.route.params.items?.map((item,i)=>(<View style={styles.item}  key={i}><TouchableOpacity onPress={()=>this.items(item)}><Image style={styles.img}
            source={{uri:item[0]}} /></TouchableOpacity><Text style={{textAlign:'center'}}>{item[1]}</Text><Text style={{textAlign:'center'}}>{item[2]}</Text><Text style={{textAlign:'center'}}>${item[3]}</Text></View>))}
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

export default Items;
