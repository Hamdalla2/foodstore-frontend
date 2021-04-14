import * as React from "react";
import 'react-native-gesture-handler';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { SafeAreaProvider } from "react-native-safe-area-context";
const Stack = createStackNavigator();
//pages
import Add from "./screens/Add"
import Item from "./screens/Item"
import Items from "./screens/Items"
import Store from "./screens/Store"
import Signin from "./screens/Signin"
import Signup from "./screens/Signup"
import Landing from "./screens/Landing"
import Restaurant from "./screens/Restaurant"
import Stores from "./screens/Stores";
import Inventory from "./screens/Inventory";
import Reports from "./screens/Reports";
import Categories from "./screens/Categories";
import Products from "./screens/Products";
import Filter from "./screens/Filter";
import Bought from "./screens/Bought";
import Orders from "./screens/Orders";
import Order from "./screens/Order";
import All from "./screens/All";
import { Dimensions } from "react-native";
import { color } from "react-native-reanimated";
import NativeUploady, {
  UploadyContext,
  useItemFinishListener,
  useItemStartListener,
  useItemErrorListener,
} from "@rpldy/native-uploady";
const win = Dimensions.get("window");
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <NativeUploady>
      <SafeAreaProvider>
        <NavigationContainer>
          <Stack.Navigator initialRouteName="Landing" screenOptions={{headerStyle: {backgroundColor: 'orange'},headerTitleAlign: 'center',headerTintColor:'white'}}>
            <Stack.Screen name="Add" component={Add} options={{title:this.name}} />
            <Stack.Screen name="Item" component={Item} options={{title:this.name}} />
            <Stack.Screen name="Items" component={Items} options={{title:this.name}} />
            <Stack.Screen name="Store" component={Store} options={{headerShown:false}} />
            <Stack.Screen name="Signin" component={Signin} options={{title:this.name}} />
            <Stack.Screen name="Signup" component={Signup} options={{title:this.name}} />
            <Stack.Screen name="Landing" component={Landing} options={{title:this.name}} />
            <Stack.Screen name="Restaurant" component={Restaurant} options={{headerShown:false}} />
            <Stack.Screen name="Inventory" component={Inventory} options={{title:this.name}} />
            <Stack.Screen name="Stores" component={Stores} options={{title:this.name}} />
            <Stack.Screen name="Reports" component={Reports} options={{title:this.name}} />
            <Stack.Screen name="Categories" component={Categories} options={{title:this.name}} />
            <Stack.Screen name="Products" component={Products} options={{title:this.name}} />
            <Stack.Screen name="Filter" component={Filter} options={{headerShown:false}} />
            <Stack.Screen name="All" component={All} options={{title:this.name}} />
            <Stack.Screen name="Bought" component={Bought} options={{title:this.name}} />
            <Stack.Screen name="Orders" component={Orders} options={{title:this.name}} />
            <Stack.Screen name="Order" component={Order} options={{title:this.name}} />
          </Stack.Navigator>
        </NavigationContainer>
      </SafeAreaProvider>
      </NativeUploady>
 
    );
  }
}

export default App;
