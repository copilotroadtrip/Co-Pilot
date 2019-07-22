import React, { Component } from "react";
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  ImageBackground
} from "react-native";

export default class Home extends Component {
  state = {
    origin: "",
    destination: "",
    error: "",
    trip: {},
    isLoading: false
  };

  componentDidMount = () => {
    this.getLocation();
  };

  getLocation = () => {
    navigator.geolocation.getCurrentPosition(
      position => {
        const location = position;
        this.setState({
          origin: `${location.coords.latitude}, ${location.coords.longitude}`
        });
      },
      error => console.log(error.message),
      { enableHighAccuracy: true, timeout: 2000 }
    );
  };

  makeTrip = async () => {
    try {
      const response = await fetch(
        "https://copilot-backend.herokuapp.com/api/v1/trips",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify({
            origin: this.state.origin,
            destination: this.state.destination
          })
        }
      );
      const newTrip = await response.json();
      this.setState({ trip: newTrip.data });
    } catch (error) {
      this.setState({ error: error.message });
    }
    this.props.navigation.navigate("PlacesCard", {
      trip: this.state.trip
    });
  };

  static navigationOptions = {
    title: "Co-Pilot",
    headerStyle: {
      backgroundColor: "#278DC3"
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
          autoCompleteType="street-address"
          returnKeyType="next"
          data-test="origin-input"
        />
        <TextInput
          style={styles.textInput}
          placeholder="Enter your destination..."
          onChangeText={text => this.setState({ destination: text })}
          autoCompleteType="street-address"
          returnKeyType="go"
          onSubmitEditing={() => {
            this.makeTrip();
          }}
          data-test="destination-input"
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
    resizeMode: "stretch"
  },
  button: {
    width: 250,
    height: 60,
    backgroundColor: "#278DC3",
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
