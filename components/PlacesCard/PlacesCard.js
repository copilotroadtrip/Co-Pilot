import React, { Component } from "react";
import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  ScrollView
} from "react-native";
import { Icon } from "react-native-elements";
import PlacesCardWithLeg from "../PlaceCardWithLeg/PlaceCardWithLeg";
import PlaceCardWithoutLeg from "../PlaceCardWithoutLeg/PlaceCardWithoutLeg";

export default class PlacesCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      checked: true
    };
  }

  hoursToNextPlace = hours => {
    var sign = hours < 0 ? "-" : "";
    var hour = Math.floor(Math.abs(hours));
    var min = Math.floor((Math.abs(hours) * 60) % 60);
    return sign + (hour === 0 ? "" : hour + "hr :") + min + "min";
  };

  static navigationOptions = {
    title: "Current Trip",
    headerStyle: {
      backgroundColor: "#278DC3",
      borderBottomColor: "transparent",
      borderBottomWidth: 0
    },
    headerTintColor: "#fff",
    headerTitleStyle: {
      fontWeight: "bold",
      fontFamily: "Marker Felt",
      fontSize: 20
    }
  };

  render() {
    const { navigation } = this.props;
    const trip = navigation.getParam("trip", "loading");
    return (
      <ImageBackground
        style={styles.backGround}
        source={require("../../assets/roadtrip1.jpeg")}
      >
        <View style={styles.legend}>
          <Icon name="stop" size={30} color="green" />
          <Text style={styles.legendText}>Good</Text>
          <Icon name="stop" size={30} color="yellow" />
          <Text style={styles.legendText}>Fair</Text>
          <Icon name="stop" size={30} color="red" />
          <Text style={styles.legendText}>Danger</Text>
        </View>
        <ScrollView>
          {trip.places.map((place, index) => {
            let weather = place.weather.icon;
            if (
              trip.legs[index] &&
              (place.weather === "tornado" ||
                place.weather === "hail" ||
                place.weather === "sleet")
            ) {
              return (
                <PlacesCardWithLeg
                  place={place}
                  index={index}
                  color={"red"}
                  hoursToNextPlace={this.hoursToNextPlace}
                  weather={weather}
                  trip={trip}
                  navigation={navigation}
                />
              );
            }
            if (
              trip.legs[index] &&
              (place.weather === "snow" || place.weather === "thunderstorm")
            ) {
              return (
                <PlacesCardWithLeg
                  place={place}
                  index={index}
                  color={"yellow"}
                  hoursToNextPlace={this.hoursToNextPlace}
                  weather={weather}
                  trip={trip}
                  navigation={navigation}
                />
              );
            } else if (trip.legs[index]) {
              return (
                <PlacesCardWithLeg
                  place={place}
                  index={index}
                  color={"green"}
                  hoursToNextPlace={this.hoursToNextPlace}
                  weather={weather}
                  trip={trip}
                  navigation={navigation}
                />
              );
            } else {
              if (
                place.weather === "tornado" ||
                place.weather === "hail" ||
                place.weather === "sleet"
              ) {
                return (
                  <PlaceCardWithoutLeg
                    place={place}
                    color={"red"}
                    weather={weather}
                    navigation={navigation}
                  />
                );
              }
              if (
                place.weather === "snow" ||
                place.weather === "thunderstorm"
              ) {
                return (
                  <PlaceCardWithoutLeg
                    place={place}
                    color={"yellow"}
                    weather={weather}
                    navigation={navigation}
                  />
                );
              } else {
                return (
                  <PlaceCardWithoutLeg
                    place={place}
                    color={"green"}
                    weather={weather}
                    navigation={navigation}
                  />
                );
              }
            }
          })}
        </ScrollView>
      </ImageBackground>
    );
  }
}

const styles = StyleSheet.create({
  name: {
    color: "white",
    shadowColor: "#000",
    shadowOffset: { width: -1, height: 1 },
    shadowOpacity: 0.9,
    shadowRadius: 10,
    fontSize: 37,
    fontFamily: "Optima",
    fontWeight: "bold",
    opacity: 5
  },
  cardContent: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",
    borderColor: "white",
    borderWidth: 1,
    borderRadius: 10
  },
  summary: {
    height: 55,
    width: 55
  },
  image: {
    width: "99.5%",
    height: 100,
    marginTop: 10,
    marginRight: "auto",
    marginBottom: 0,
    marginLeft: "auto",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 2
  },
  legs: {
    flexDirection: "row",
    width: "100%",
    justifyContent: "space-around"
  },
  arrow: {
    fontSize: 40
  },
  distance: {
    fontSize: 40
  },
  hours: {
    fontSize: 40
  },
  view: {
    alignItems: "center"
  },
  legend: {
    flex: 0,
    flexDirection: "row",
    justifyContent: "space-around",
    paddingLeft: 60,
    backgroundColor: "#278DC3"
  },
  legendText: {
    paddingRight: 25,
    fontSize: 20,
    paddingTop: 2,
    color: "white"
  },
  backGround: {
    height: "100%",
    width: "100%"
  }
});
