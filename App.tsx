
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import MyCart from "./components/screens/MyCart.js";
import Home from "./components/screens/Home.js";
import ProductInfo from "./components/screens/ProductInfo.js";
import Login from "./components/screens/Login.js";
import { ProductProvider } from "./components/data/products.js";
import { useEffect } from "react";
import { NotificationListener, checkPermission } from "./components/firebase/myfirebase.js";
const Stack = createNativeStackNavigator();

export default function App() {
  useEffect(()=>{
    NotificationListener();
    checkPermission();
  },[])
  return (
    <ProductProvider>
      <NavigationContainer>
        <Stack.Navigator screenOptions={{ headerShown: false }}>
          <Stack.Screen name="Login" component={Login}></Stack.Screen>
          <Stack.Screen name="Home" component={Home}></Stack.Screen>
          <Stack.Screen name="MyCart" component={MyCart}></Stack.Screen>
          <Stack.Screen
            name="ProductInfo"
            component={ProductInfo}
          ></Stack.Screen>
        </Stack.Navigator>
      </NavigationContainer>
    </ProductProvider>
  );
}
