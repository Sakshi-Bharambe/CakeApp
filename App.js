import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image } from 'react-native';
import {NavigationContainer} from "@react-navigation/native"
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Login from "./screens/login"
import product from "./screens/product";
import Register from './screens/register';
import Bill from "./screens/Bill";
const Stack = createNativeStackNavigator();
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
      
      
      <Stack.Screen name="Login" component={Login} options={{headerShown:false}}/>
      <Stack.Screen name="Register" component={Register} options={{headerShown:false}}/>
      <Stack.Screen name="Product" component={product} options={{headerShown:false}}/>
      <Stack.Screen name="Bill" component={Bill} options={{headerShown:false}}/>
        
       
      </Stack.Navigator>
    </NavigationContainer>
  );
}


