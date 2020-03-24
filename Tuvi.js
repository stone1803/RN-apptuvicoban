import React from "react";
import { StyleSheet, Text, View } from "react-native";
import Home from "./screens/Home";
import { NavigationContainer } from "@react-navigation/native";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import { MaterialCommunityIcons } from "react-native-vector-icons";

import New from "./screens/News/New";
import About from "./screens/About/About";
import StackHome from "./screens/StackHome";
const Tab = createMaterialBottomTabNavigator();
export default function Tuvi() {
    return (
        <NavigationContainer>
          <Tab.Navigator>
            <Tab.Screen
              options={{
                tabBarLabel: "Tử Vi Cơ Bản",
                tabBarIcon: ({ color }) => (
                  <MaterialCommunityIcons name="home" color={color} size={26} />
                )
              }}
              initialRouteName="Home"
              activeColor="#f0edf6"
              inactiveColor="#3e2465"
              barStyle={{ backgroundColor: "#ac3cfa" }}
              name="Home"
              component={StackHome}
            />
            <Tab.Screen
              options={{
                tabBarLabel: "Lá Số Mẫu",
                tabBarIcon: ({ color }) => (
                  <MaterialCommunityIcons
                    name="newspaper"
                    color={color}
                    size={26}
                  />
                )
              }}
              name="News"
              component={New}
            />
            <Tab.Screen
              options={{
                tabBarLabel: "Thông Tin",
                tabBarIcon: ({ color }) => (
                  <MaterialCommunityIcons
                    name="information"
                    color={color}
                    size={26}
                  />
                )
              }}
              name="About"
              component={About}
            />
          </Tab.Navigator>
        </NavigationContainer>
      );
}

