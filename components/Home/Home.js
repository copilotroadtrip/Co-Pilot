import React, { Component } from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  ImageBackground
} from "react-native";
import Header from "../Header/Header";
import PlacesCard from "../PlacesCard/PlacesCard";

export default class Home extends Component {
  state = {
    origin: "",
    destination: "",
    error: "",
    trip: {
      places: [
        {
          id: 2188,
          name: "Denver",
          population: 716492,
          weather: {
            time: 1563393154,
            summary: "Mostly Cloudy",
            icon: "partly_cloudy_day",
            temperature: 92.47,
            precipProbability: 0,
            precipIntensity: 0,
            windSpeed: 5.9,
            windGust: 12.17,
            windBearing: 163
          }
        },
        {
          id: 2197,
          name: "Firestone",
          population: 14860,
          weather: {
            time: 1563393600,
            summary: "Clear",
            icon: "clear_day",
            temperature: 94.33,
            precipProbability: 0,
            precipIntensity: 0,
            windSpeed: 11.89,
            windGust: 17.26,
            windBearing: 240
          }
        },
        {
          id: 2167,
          name: "Loveland",
          population: 77446,
          weather: {
            time: 1563393600,
            summary: "Clear",
            icon: "clear_day",
            temperature: 92.76,
            precipProbability: 0,
            precipIntensity: 0,
            windSpeed: 9.41,
            windGust: 14.5,
            windBearing: 180
          }
        },
        {
          id: 2253,
          name: "Fort Collins",
          population: 167830,
          weather: {
            time: 1563393600,
            summary: "Possible Drizzle",
            icon: "rain",
            temperature: 91.84,
            precipProbability: 0.58,
            precipIntensity: 0.005,
            windSpeed: 8.56,
            windGust: 13.9,
            windBearing: 174
          }
        },
        {
          id: 19934,
          name: "Laramie",
          population: 32473,
          weather: {
            time: 1563397200,
            summary: "Clear",
            icon: "clear_day",
            temperature: 83.24,
            precipProbability: 0,
            precipIntensity: 0,
            windSpeed: 19.98,
            windGust: 28.4,
            windBearing: 252
          }
        },
        {
          id: 19937,
          name: "Sinclair",
          population: 397,
          weather: {
            time: 1563404400,
            summary: "Partly Cloudy",
            icon: "partly_cloudy_day",
            temperature: 86.99,
            precipProbability: 0,
            precipIntensity: 0,
            windSpeed: 18.93,
            windGust: 26.94,
            windBearing: 293
          }
        },
        {
          id: 19894,
          name: "Rawlins",
          population: 8658,
          weather: {
            time: 1563404400,
            summary: "Partly Cloudy",
            icon: "partly_cloudy_day",
            temperature: 86.74,
            precipProbability: 0,
            precipIntensity: 0,
            windSpeed: 19.36,
            windGust: 27.5,
            windBearing: 288
          }
        },
        {
          id: 19954,
          name: "Wamsutter",
          population: 478,
          weather: {
            time: 1563404400,
            summary: "Partly Cloudy",
            icon: "partly_cloudy_day",
            temperature: 80.9,
            precipProbability: 0,
            precipIntensity: 0,
            windSpeed: 18.95,
            windGust: 26.18,
            windBearing: 303
          }
        },
        {
          id: 19952,
          name: "Rock Springs",
          population: 23082,
          weather: {
            time: 1563408000,
            summary: "Partly Cloudy",
            icon: "partly_cloudy_day",
            temperature: 85.2,
            precipProbability: 0.02,
            precipIntensity: 0.002,
            windSpeed: 20.5,
            windGust: 28.58,
            windBearing: 276
          }
        },
        {
          id: 19951,
          name: "Green River",
          population: 11978,
          weather: {
            time: 1563408000,
            summary: "Partly Cloudy",
            icon: "partly_cloudy_day",
            temperature: 86.66,
            precipProbability: 0.01,
            precipIntensity: 0.002,
            windSpeed: 20.5,
            windGust: 28.15,
            windBearing: 275
          }
        },
        {
          id: 19904,
          name: "Evanston",
          population: 11704,
          weather: {
            time: 1563415200,
            summary: "Mostly Cloudy",
            icon: "partly_cloudy_day",
            temperature: 75.31,
            precipProbability: 0.01,
            precipIntensity: 0.002,
            windSpeed: 10.14,
            windGust: 17.18,
            windBearing: 270
          }
        },
        {
          id: 18469,
          name: "Henefer",
          population: 959,
          weather: {
            time: 1563415200,
            summary: "Mostly Cloudy",
            icon: "partly_cloudy_day",
            temperature: 84.63,
            precipProbability: 0.01,
            precipIntensity: 0.002,
            windSpeed: 5.73,
            windGust: 10.57,
            windBearing: 310
          }
        },
        {
          id: 18304,
          name: "Morgan",
          population: 4260,
          weather: {
            time: 1563415200,
            summary: "Partly Cloudy",
            icon: "partly_cloudy_day",
            temperature: 85.53,
            precipProbability: 0.01,
            precipIntensity: 0.002,
            windSpeed: 4.37,
            windGust: 8.77,
            windBearing: 327
          }
        },
        {
          id: 18445,
          name: "South Ogden",
          population: 17146,
          weather: {
            time: 1563418800,
            summary: "Mostly Cloudy",
            icon: "partly_cloudy_night",
            temperature: 84.76,
            precipProbability: 0.01,
            precipIntensity: 0.001,
            windSpeed: 3.91,
            windGust: 5.82,
            windBearing: 68
          }
        },
        {
          id: 18289,
          name: "Ogden",
          population: 87325,
          weather: {
            time: 1563418800,
            summary: "Mostly Cloudy",
            icon: "partly_cloudy_night",
            temperature: 84.36,
            precipProbability: 0.01,
            precipIntensity: 0.001,
            windSpeed: 3.98,
            windGust: 5.92,
            windBearing: 73
          }
        }
      ],
      legs: [
        {
          distance: "28 mi",
          duration_in_hours: 0.5070089275418956,
          id: 0
        },
        {
          distance: "17 mi",
          duration_in_hours: 0.246521809692159,
          id: 1
        },
        {
          distance: "9 mi",
          duration_in_hours: 0.12972714615576109,
          id: 2
        },
        {
          distance: "74 mi",
          duration_in_hours: 1.2503343240033096,
          id: 3
        },
        {
          distance: "94 mi",
          duration_in_hours: 1.3717709976450416,
          id: 4
        },
        {
          distance: "4 mi",
          duration_in_hours: 0.060934027799105644,
          id: 5
        },
        {
          distance: "43 mi",
          duration_in_hours: 0.6223239197733716,
          id: 6
        },
        {
          distance: "58 mi",
          duration_in_hours: 0.8428080246854477,
          id: 7
        },
        {
          distance: "23 mi",
          duration_in_hours: 0.3377426595051405,
          id: 8
        },
        {
          distance: "86 mi",
          duration_in_hours: 1.248145631309864,
          id: 9
        },
        {
          distance: "39 mi",
          duration_in_hours: 0.5697360882343391,
          id: 10
        },
        {
          distance: "13 mi",
          duration_in_hours: 0.18930906859542637,
          id: 11
        },
        {
          distance: "19 mi",
          duration_in_hours: 0.29733082874066524,
          id: 12
        },
        {
          distance: "2 mi",
          duration_in_hours: 0.024923094489668354,
          id: 13
        }
      ]
    }
  };

  componentDidMount = () => {
    navigator.geolocation.getCurrentPosition(
      position => {
        const location = position;
        this.setState({
          origin: `${location.coords.latitude} ${location.coords.longitude}`
        });
      },
      error => console.log(error.message),
      { enableHighAccuracy: true, timeout: 2000 }
    );
  };

  makeTrip = async () => {
    this.props.navigation.navigate("PlacesCard", {
      trip: this.state.trip
    });
    try {
      const response = await fetch("/api/v1/trips", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          origin: this.state.origin,
          destination: this.state.destination
        })
      });
      const newTrip = await response.json();
      this.setState({ trip: newTrip.data });
    } catch (error) {
      this.setState({ error: error.message });
    }
  };

  renderPlaces = () => {
    const { places, legs } = this.state.trip;
    return places.map((place, index) => {
      if (legs[index]) {
        return (
          <View key={place.name}>
            <PlacesCard place={place} leg={legs[index]} />
          </View>
        );
      } else {
        return (
          <View key={place.name}>
            <PlacesCard place={place} leg="trip Complete" />
          </View>
        );
      }
    });
  };

  static navigationOptions = {
    title: "Co-Pilot",
    headerStyle: {
      backgroundColor: "#296B6E"
    },
    headerTintColor: "#fff",
    headerTitleStyle: {
      fontWeight: "bold",
      fontFamily: "Marker Felt",
      fontSize: 20
    }
  };

  render() {
    return (
      <ImageBackground
        style={styles.backGround}
        source={require("../../assets/roadtrip1.jpeg")}
      >
        <TextInput
          style={styles.textInput}
          placeholder="Current Location"
          placeholderTextColor="blue"
          onChangeText={text => this.setState({ origin: text })}
          clearTextOnFocus
          autoCompleteType
          returnKeyType="next"
        />
        <TextInput
          style={styles.textInput}
          placeholder="Enter your destination..."
          onChangeText={text => this.setState({ destination: text })}
          autoCompleteType
          returnKeyLabel="enter"
        />
        <TouchableOpacity onPress={() => this.makeTrip()} style={styles.button}>
          <Text style={styles.buttonText}>Make Trip</Text>
        </TouchableOpacity>
      </ImageBackground>
    );
  }
}

const styles = StyleSheet.create({
  textInput: {
    width: 250,
    height: 60,
    borderColor: "black",
    color: "black",
    backgroundColor: "white",
    margin: 10,
    paddingLeft: 10,
    fontSize: 20,
    fontWeight: "bold"
  },
  backGround: {
    height: "100%",
    width: "100%",
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    resizeMode: "stretch",
    position: "absolute"
  },
  button: {
    width: 250,
    height: 60,
    backgroundColor: "#296B6E",
    marginTop: 10,
    borderRadius: 10
  },
  buttonText: {
    color: "white",
    textAlign: "center",
    padding: 10,
    fontFamily: "Marker Felt",
    fontSize: 25
  }
});
