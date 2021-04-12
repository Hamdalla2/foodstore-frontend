import * as React from "react";
import 'react-native-gesture-handler';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { SafeAreaProvider } from "react-native-safe-area-context";
const Stack = createStackNavigator();
//pages
import Home from "./screens/Home"
import Item from "./screens/Item"
import Items from "./screens/Items"
import Store from "./screens/Store"
import Signin from "./screens/Signin"
import Signup from "./screens/Signup"
import Landing from "./screens/Landing"
import Restaurant from "./screens/Restaurant"

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <SafeAreaProvider>
        <NavigationContainer>
          <Stack.Navigator initialRouteName="Landing" >
            <Stack.Screen name="Home" component={Home} options={{title:'',headerStyle: {backgroundColor: 'orange'}}} />
            <Stack.Screen name="Item" component={Item} options={{title:'',headerStyle: {backgroundColor: 'orange'}}} />
            <Stack.Screen name="Items" component={Items} options={{title:'',headerStyle: {backgroundColor: 'orange'}}} />
            <Stack.Screen name="Store" component={Store} options={{title:'',headerStyle: {backgroundColor: 'orange'}}} />
            <Stack.Screen name="Signin" component={Signin} options={{title:'',headerStyle: {backgroundColor: 'orange'}}} />
            <Stack.Screen name="Signup" component={Signup} options={{title:'',headerStyle: {backgroundColor: 'orange'}}} />
            <Stack.Screen name="Landing" component={Landing} options={{title:'',headerStyle: {backgroundColor: 'orange'}}} />
            <Stack.Screen name="Restaurant" component={Restaurant} options={{title:'',headerStyle: {backgroundColor: 'orange'}}} />
          </Stack.Navigator>
        </NavigationContainer>
      </SafeAreaProvider>
    );
  }
}

export default App;
