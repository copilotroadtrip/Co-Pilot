import React, { Component } from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  ImageBackground
} from "react-native";
import { cityImages } from "../../assets/cityImages";

export default class Place extends Component {
  constructor(props) {
    super(props);
    this.state = { randomCity: "" };
  }

  componentDidMount = () => {
    this.randomCityGenerator();
  };

  randomCityGenerator = () => {
    const { navigation } = this.props;
    const place = navigation.getParam("placeData");
    const randomIndex = Math.floor(Math.random() * 3);
    if (place.population > 500000) {
      this.setState({ randomCity: cityImages.large[randomIndex] });
    }
    if (place.population < 500000) {
      this.setState({ randomCity: cityImages.medium[randomIndex] });
    }
    if (place.population < 2000) {
      this.setState({ andomCity: cityImages.small[randomIndex] });
    }
  };

  render() {
    return (
      <ImageBackground
        style={styles.backGround}
        source={{ uri: this.state.randomCity }}
      >
        <Text>stuff</Text>
      </ImageBackground>
    );
  }
}

const styles = StyleSheet.create({
  backGround: {
    width: "100%",
    height: "100%"
  }
});
