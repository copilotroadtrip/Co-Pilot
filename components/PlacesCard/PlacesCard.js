import React, { Component } from "react";
import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  ScrollView,
  Image
} from "react-native";
import { Icon } from "react-native-elements";
import PlacesCardWithLeg from "../PlaceCardWithLeg/PlaceCardWithLeg";
import PlaceCardWithoutLeg from "../PlaceCardWithoutLeg/PlaceCardWithoutLeg";
import { data } from "../../utilities/GjMock";

export default class PlacesCard extends Component {
  state = {
    trip: this.props.navigation.getParam("trip", "loading"),
    isLoading: true
  };

  componentDidMount = () => {
    setTimeout(() => {
      this.setState({ trip: data, isLoading: false });
    }, 3000);
  };

  hoursToNextPlace = hours => {
    var sign = hours < 0 ? "-" : "";
    var hour = Math.floor(Math.abs(hours));
    var min = Math.floor((Math.abs(hours) * 60) % 60);
    return sign + (hour === 0 ? "" : hour + "hr:") + min + "min";
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
    const { trip } = this.state;
    const { navigation } = this.props;
    return (
      <ImageBackground
        style={styles.backGround}
        source={require("../../assets/roadtrip1.jpeg")}
        imageStyle={{ opacity: 0.5 }}
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
              (weather === "tornado" ||
                weather === "hail" ||
                weather === "sleet")
            ) {
              return (
                <View key={place.id}>
                  <PlacesCardWithLeg
                    place={place}
                    index={index}
                    color={"red"}
                    hoursToNextPlace={this.hoursToNextPlace}
                    weather={weather}
                    trip={trip}
                    navigation={navigation}
                    key={place.id}
                  />
                  {this.state.isLoading && (
                    <View key="loadingkey">
                      <Image
                        source={require("../../assets/loading.gif")}
                        style={{ height: 100, width: 100 }}
                      />
                    </View>
                  )}
                </View>
              );
            }
            if (
              trip.legs[index] &&
              (weather === "snow" || weather === "thunderstorm")
            ) {
              return (
                <View key={place.id}>
                  <PlacesCardWithLeg
                    place={place}
                    index={index}
                    color={"yellow"}
                    hoursToNextPlace={this.hoursToNextPlace}
                    weather={weather}
                    trip={trip}
                    navigation={navigation}
                    key={place.id}
                  />
                  {this.state.isLoading && (
                    <View key="loading">
                      <Image
                        source={require("../../assets/loading.gif")}
                        style={{ height: 100, width: 100 }}
                      />
                    </View>
                  )}
                </View>
              );
            } else if (trip.legs[index]) {
              return (
                <View key={place.id}>
                  <PlacesCardWithLeg
                    place={place}
                    index={index}
                    color={"green"}
                    hoursToNextPlace={this.hoursToNextPlace}
                    weather={weather}
                    trip={trip}
                    navigation={navigation}
                    key={place.id}
                  />
                  {this.state.isLoading && (
                    <View key="loading">
                      <Image
                        source={require("../../assets/loading.gif")}
                        style={{
                          height: 100,
                          width: 100,
                          marginLeft: "37%"
                        }}
                      />
                    </View>
                  )}
                </View>
              );
            } else {
              if (
                weather === "tornado" ||
                weather === "hail" ||
                weather === "sleet"
              ) {
                return (
                  <PlaceCardWithoutLeg
                    place={place}
                    color={"red"}
                    weather={weather}
                    navigation={navigation}
                    key={place.id}
                  />
                );
              }
              if (weather === "snow" || weather === "thunderstorm") {
                return (
                  <PlaceCardWithoutLeg
                    place={place}
                    color={"yellow"}
                    weather={weather}
                    navigation={navigation}
                    key={place.id}
                  />
                );
              } else {
                return (
                  <PlaceCardWithoutLeg
                    place={place}
                    color={"green"}
                    weather={weather}
                    navigation={navigation}
                    key={place.id}
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
