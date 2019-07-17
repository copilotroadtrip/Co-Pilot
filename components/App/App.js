import React, { Component } from "react";
import Home from '../Home/Home';
import PlacesCard from "../PlacesCard/PlacesCard";
import Place from '../Place/Place';
import { createStackNavigator, createAppContainer } from 'react-navigation';

const AppNavigator = createStackNavigator ({
  Home: Home,
  PlacesCard: PlacesCard,
  Place: Place
})

const AppContainer = createAppContainer(AppNavigator);


export default class App extends Component {

  render() {
    return(
      <AppContainer/>
    )

  }

}

