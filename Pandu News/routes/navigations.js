import * as React from "react";
import { View, Text, Image, StyleSheet,  } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Login from "../screens/Login";
import About from "../screens/About";
import Home from "../screens/Home";
import Splash from "../screens/Splash";
import Register from "../screens/Register";
import Detail from "../screens/Detail";

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

export default Navigations= () => {

  return (
      <NavigationContainer>
        <Stack.Navigator >
              <Stack.Screen name="Splash"   component={Splash}    options={{headerShown:false}} />
              <Stack.Screen name="About"    component={About}     options={{headerShown: false}} />
              <Stack.Screen name="Login"    component={Login}     options={{headerShown:false}} />
              <Stack.Screen name="Register" component={Register}  options={{headerShown:false}} />
              <Stack.Screen name="News"     component={BottomTab} options={{headerShown:false}} />
              <Stack.Screen name="Articles" component={Detail}    optioptions={{headerShown:false}} />
        </Stack.Navigator>
      </NavigationContainer>
    );
}

function BottomTab() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="News" component={Home} options={{
          tabBarIcon: ({ color }) => (
            <Image
              style={styles.bottomTabIconHome}
              source={require("../assets/home.png")}
            />
          ),
          tabBarLabel:'Home'
        }} />
      <Tab.Screen name="About" component={About} options={{
          tabBarIcon: ({ color }) => (
            <Image
              style={styles.bottomTabIconAbout}
              source={require("../assets/user.png")}
            />
          ),
          headerShown:false,
        }}/>
    </Tab.Navigator>
  );
}

const styles = StyleSheet.create({
  bottomTabIconHome :{
    width : 25,
    height : 25
  },
  bottomTabIconAbout :{
    width : 25,
    height : 25
  },
})


