import React, { Component } from "react";
import Home from "./components/Home/Home";
import PlacesCard from "./components/PlacesCard/PlacesCard";
import Place from "./components/Place/Place";
import { createStackNavigator, createAppContainer } from "react-navigation";

const AppNavigator = createStackNavigator({
  Home: Home,
  PlacesCard: PlacesCard,
  Place: Place
});

const AppContainer = createAppContainer(AppNavigator);

export default class App extends Component {
  render() {
    return <AppContainer />;
  }
}
