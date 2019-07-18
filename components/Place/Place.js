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
    this.state = {
      randomCity:
        "https://livability.com/sites/default/files/Charlotte-NC-Skyline.jpg"
    };
  }

  componentDidMount = () => {
    this.randomCityGenerator();
  };

  randomCityGenerator = () => {
    const { navigation } = this.props;
    const place = navigation.getParam("placeData");
    let randomIndex = Math.floor(Math.random() * 3);
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
    const { navigation } = this.props;
    const place = navigation.getParam("placeData");
    return (
      <ImageBackground
        style={styles.backGround}
        source={{ uri: this.state.randomCity }}
        imageStyle={{ opacity: 0.2 }}
      >
        <Text style={styles.city}>{place.name}</Text>
        <Text style={styles.placeInfo}>Population: {place.population}</Text>
        <Text style={styles.placeInfo}>
          Forcasted Weather: {place.weather.summary}
        </Text>
        <Text style={styles.placeInfo}>{`Percipitation chance: ${Math.round(
          place.weather.precipProbability * 100
        )}%`}</Text>
      </ImageBackground>
    );
  }
}

const styles = StyleSheet.create({
  backGround: {
    width: "100%",
    height: "100%",
    backgroundColor: "#FFFFFF50"
  },
  city: {
    fontSize: 54
  },
  placeInfo: {
    fontSize: 25
  }
});
