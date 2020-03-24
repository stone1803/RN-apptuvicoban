import React, { Component } from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Home from "./Home";
import TuviDetail from "./TuVi/TuviDetail";
const Stack = createStackNavigator();
import { BlurView } from "expo-blur";
import New from "./News/New";
import NewDetail from "./News/NewDetail";
import Reg from "./About/Reg";
import Auth from "./About/Auth";
export default class StackHome extends Component {
  render() {
    let { route } = this.props;
    return (
      <Stack.Navigator>
        <Stack.Screen
          options={{
            headerTransparent: true,
            headerBackground: () => <BlurView tint="light" intensity={100} />
          }}
          name="TV"
          component={Home}
        />
        <Stack.Screen name="Details" component={TuviDetail} />

              <Stack.Screen name="Lá Số" component={New} />
              <Stack.Screen name="Lá Số Chi Tiết" component={NewDetail} />
              <Stack.Screen name="Auth" component={Auth} />


              </Stack.Navigator>


    );
  }
}
