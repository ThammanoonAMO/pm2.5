import React from "react";
import { createStackNavigator, createDrawerNavigator } from "react-navigation";

import HomeScreen from "../page/home";
import Connect from "../page/home/connect";
import Location from "../page/home/findLocation";
import Aqi from "../page/home/locatioAqi";
import About from "../page/home/about";
import Help from "../page/home/help";

const Drawer = createDrawerNavigator({
  Home: {
    screen: About
  },
  Notifications: {
    screen: Help
  }
});

const AppNavigator = createStackNavigator({
  Home: HomeScreen,
  Connect: Connect,
  Find: Location,
  Aqi: Aqi
});

export default AppNavigator;
